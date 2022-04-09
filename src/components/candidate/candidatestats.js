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
// Gonna need party_name. sex, ethnicity, age, industry, religion, sexuality, attributes

function determineAvatar(sex_id, ethnicity_id, age){
    var image_path = "avatars/av-"
    switch(sex_id)
    {
        case 4:
            image_path += "n";
            break;
        case 1:
            image_path += "m";
            break;
        default:
            image_path += "f";
            break;
    }

    switch(ethnicity_id)
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

    if(sex_id != 4){
        if(age > 70){
            image_path += "o.png";
        }else if(age > 40){
            image_path += "m.png";
        }else{
            image_path += "y.png";
        }
    }
    else{
        image_path += ".png"
    }

    return image_path
}

function determineSexuality(sex_id, sexuality_id){
    var image_path = "identity/sx-"
    if(sexuality_id == 2){
        if(sex_id == 4){
            image_path += "4n"
        }else if(sex_id == 1){
            image_path += "2m"
        }else{
            image_path += "2f"
        }
    }else if(sexuality_id == 4){
        if(sex_id == 4){
            image_path += "4n"
        }else if(sex_id == 1){
            image_path += "4m"
        }else{
            image_path += "4f"
        }
    }else{
        image_path += sexuality_id
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
                        candidateCitizenData.age
                        )}`} alt="candidate picture" />
                    <div className={"is-flex " + styles.avatarLowerIcon}>
                        <figure className="image is-48x48 is-flex">
                            <img src={`/images/${determineSexuality(
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