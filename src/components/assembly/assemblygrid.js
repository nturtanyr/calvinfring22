import React from "react";
import { Link } from "react-router-dom"
import styles from "./assembly.module.css"

export default function AssemblyGrid({assemblyData}){

    var tiles = []
    
    if(assemblyData){
        assemblyData.members.forEach( (object) =>{
            tiles.push(<AssemblyTile key={`tile-${object.constituency.id}`} tileData={object}/>)
            
        });
    }

    return (
        <div className={"is-hidden-mobile " + styles.gridContainer}>
            {tiles}
        </div>
    )
}

function AssemblyTile({tileData}){

    var constituencyName
    if(tileData.constituency.name === 'Here\'s That City You Wanted'){
        constituencyName = 'HTCYW'
    }
    else
    {
        constituencyName = tileData.constituency.name
    }
    var policyDescription = <>
        {tileData.policy.foaValue > 0 ? tileData.policy.proDescription : tileData.policy.conDescription}
        <br/>
        {tileData.assemblyVotes.countVotesFor || 0} / {tileData.assemblyVotes.countVotesAgainst || 0}
    </>
    var policyDescriptionFormatted
    if(tileData.voteResult === 1)
    {
        policyDescriptionFormatted = <strong className="has-text-success">{policyDescription}</strong>
    }
    else if(tileData.voteResult === 2)
    {
        policyDescriptionFormatted = <strong>{policyDescription}</strong>

    }
    else if(tileData.voteResult === -1)
    {
        policyDescriptionFormatted = <strong className="has-text-danger">{policyDescription}</strong>
    }
    else
    {
        policyDescriptionFormatted = <i>{policyDescription}</i>

    }
    return (
            <div>
                <div className="has-text-centered">
                    {constituencyName}
                </div>
                <img src={`/images/constituency/con-${tileData.constituency.id}.svg`} alt={constituencyName} loading="lazy" title="" style={{"background-color": ("#" + tileData.candidate.party.color)}} className={`image is-64x64 ${styles.constituencyIcon}`}/>
                
                <div className="is-size-6 has-text-centered">
                    <Link to={`/election/latest/candidate/${tileData.candidate.id}`}>{tileData.candidate.citizen.firstName} {tileData.candidate.citizen.lastName}</Link>
                </div>
                <div className="is-size-7 has-text-centered">
                    {policyDescriptionFormatted}
                </div>
            </div>
    )
}