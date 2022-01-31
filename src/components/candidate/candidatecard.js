import React from "react";
import { useParams } from "react-router-dom";
import styles from "./candidate.module.css"
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer
  } from "recharts";
// Gonna need party_name. sex, ethnicity, age, industry, religion, sexuality, attributes

function determineAvatar(sex_id, ethnicity_id, age){
    var image_path = "av-"
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
    var image_path = "sx-"
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

export default function CandidateCard(props) {
    var attribute_data = []
    attribute_data.push({
        "attribute" : "Charisma",
        "value" : props.data.attribute.charisma
    })
    attribute_data.push({
        "attribute" : "Tenacity",
        "value" : props.data.attribute.tenacity
    })
    attribute_data.push({
        "attribute" : "Loyalty",
        "value" : props.data.attribute.loyalty
    })
    attribute_data.push({
        "attribute" : "Baldness",
        "value" : props.data.attribute.baldness
    })
    attribute_data.push({
        "attribute" : "Fear of Bears",
        "value" : props.data.attribute.fear_of_bears
    })
    attribute_data.push({
        "attribute" : "Socks",
        "value" : props.data.attribute.socks
    })

    return(
        
        <div className='card'> 
            <header className="card-header">
                <p className="card-header-title">
                    Candidate Data
                </p>
            </header>
            <div className="card-content">
                <div className="columns">
                    <div className='column is-one-third'>
                        <h3 className="subtitle"><i>{props.data.profile.party_name}</i></h3>
                        <figure className="image is-fullwidth">
                            <img className="image is-fullwidth" src={`../images/${determineAvatar(
                                props.data.sex.id,
                                props.data.ethnicity.id,
                                props.data.profile.age
                                )}`} alt="candidate picture" />
                            <div className={`is-flex ${styles.avatarLowerIcon}`}>
                                <img className="image is-48x48 is-flex" src={`../images/${determineSexuality(
                                    props.data.sex.id,
                                    props.data.sexuality.id
                                )}`} title={props.data.sexuality.name}/>
                                <img className="image is-48x48 is-flex" src={`../images/ind-${props.data.industry.id}.png`} title={props.data.industry.name}/>
                                <img className="image is-48x48 is-flex" src={`../images/rel-${props.data.religion.id}.png`} title={props.data.religion.name}/>
                            </div>
                        </figure>
                    </div>
                    <div className='column'>
                        <ResponsiveContainer width="100%" height={500}>
                        <RadarChart data={attribute_data} >
                            <PolarGrid />
                            <PolarAngleAxis dataKey="attribute" />
                            <PolarRadiusAxis />
                            <Radar
                                name="Mike"
                                dataKey="value"
                                stroke="#8884d8"
                                fill="#8884d8"
                                fillOpacity={0.6}
                            />
                        </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}