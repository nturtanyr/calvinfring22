import React from "react";
import styles from "./candidate.module.css"
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip
  } from "recharts";
import { IconCancelScheduleSend } from "@aws-amplify/ui-react";
// Gonna need party_name. sex, ethnicity, age, industry, religion, sexuality, attributes

function determineAvatar(sexID, ethnicityID, ageGroupID){
    var image_path = "avatars/av-"
    if(sexID == 1)
    {
        image_path += "m";
    }
    else
    {
        image_path += "f";
    }

    switch(ethnicityID)
    {
        case 7:
            image_path +="a";
            break;
        case 2:
            image_path += "l";
            break;
        case 6:
            image_path += "v";
            break;
        case 3:
            image_path += "z";
            break;
        default:
            image_path += "h";
            break;
    }

    if(ageGroupID = 4){
        image_path += "o.png";
    }else if(ageGroupID = 3){
        image_path += "m.png";
    }else{
        image_path += "y.png";
    }

    return image_path
}

function determineSexuality(genderID, sexID, sexualityID){
    var image_path = "identity/id-"
    image_path += genderID
    image_path += sexualityID
    if([2,3,4].includes(sexualityID)){
        image_path += sexID
    }
    image_path += ".png"
    return image_path
}

export default function CandidateStats({candidateData, candidateCitizenData}) {

    function add(accumulator, a) {
      return accumulator.value + a;
    }
    const statsTotal = candidateData.stats.reduce(add, 0); // with initial value to avoid when the array is empty

    var fillColor = '#E85050'
    if(statsTotal > 28) {fillColor = '#E8E850'}
    if(statsTotal > 30) {fillColor = '#52E850'}

    return(
        <>
        <div className="columns">
            <div className='column is-half'>
                <h3 className="subtitle"><i>{candidateData.party.name}</i></h3>
                <figure className="image is-square">
                    <img src={`/images/${determineAvatar(
                        candidateCitizenData.sex.id,
                        candidateCitizenData.ethnicity.id,
                        candidateCitizenData.ageGroup.id
                        )}`} alt="candidate picture" />
                    <div className={"is-flex " + styles.avatarLowerIcon}>
                        <figure className="image is-48x48 is-flex">
                            <img src={`/images/${determineSexuality(
                                candidateCitizenData.gender.id,
                                candidateCitizenData.sex.id,
                                candidateCitizenData.sexuality.id
                            )}`} title={candidateCitizenData.sexuality.name}/>
                        </figure>
                        <figure className="image is-48x48 is-flex">
                            <img src={`/images/industry/ind-${candidateCitizenData.industry.id}.png`} title={candidateCitizenData.industry.name}/>
                        </figure>
                        <figure className="image is-48x48 is-flex">
                            <img src={`/images/religion/rel-${candidateCitizenData.religion.id}.png`} title={candidateCitizenData.religion.name}/>
                        </figure>
                    </div>
                </figure>
            </div>
            <div className='column'>
                <ResponsiveContainer width="100%" aspect={1}>
                <RadarChart data={candidateData.stats} cx="50%" cy="50%" outerRadius="75%" >
                    <PolarGrid outerRadius={10}/>
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis angle={30} domain={[0, 10]}/>
                    <Radar
                        dataKey="value"
                        stroke="#8884d8"
                        fill={fillColor}
                        fillOpacity={0.6}
                    />
                    <Tooltip/>
                </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
        <h3><i>"{candidateData.quote}" - {candidateData.citizen.lastName}</i></h3>
        </>
    )
}