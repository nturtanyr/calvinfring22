import React from "react";
import { Link } from "react-router-dom"
import styles from "./assembly.module.css"

export default function AssemblyGrid({data}){

    var tiles = []
    
    if(data){
        data.forEach( (object) =>{
            tiles.push(<AssemblyTile key={`tile-${object.constituency_id}`} data={object}/>)
            
        });
    }

    return (
        <div className={"is-hidden-mobile " + styles.gridContainer}>
            {tiles}
        </div>
    )
}

function AssemblyTile({data}){

    var constituencyName
    if(data.constituency_name == 'Here\'s That City You Wanted'){
        constituencyName = 'HTCYW'
    }
    else
    {
        constituencyName = data.constituency_name
    }
    var policy_desc
    if(data.policy_result == 1)
    {
        policy_desc = <strong className="has-text-success">{data.policy_desc}
        <br/>
        {data.votes_for } / {data.votes_against}</strong>
    }
    else if(data.policy_result == 2)
    {
        policy_desc = <strong>{data.policy_desc}
        <br/>
        {data.votes_for } / {data.votes_against}</strong>

    }
    else if(data.policy_result == -1)
    {
        policy_desc = <strong className="has-text-danger">{data.policy_desc}
        <br/>
        {data.votes_for } / {data.votes_against}</strong>
    }
    else
    {
        policy_desc = <i>{data.policy_desc}
        <br/>
        {data.votes_for } / {data.votes_against}</i>

    }
    return (
            <div>
                <div className="has-text-centered">
                    {constituencyName}
                </div>
                <img src={`/images/constituency/con-${data.constituency_id}.svg`} loading="lazy" title="" style={{"background-color": ("#" + data.party_color)}} className={`image is-64x64 ${styles.constituencyIcon}`}/>
                
                <div className="is-size-6 has-text-centered">
                    <Link to={`/election/latest/candidate/${data.candidate_id}`}>{data.first_name} {data.last_name}</Link>
                </div>
                <div className="is-size-7 has-text-centered">
                    {policy_desc}
                </div>
            </div>
    )
}