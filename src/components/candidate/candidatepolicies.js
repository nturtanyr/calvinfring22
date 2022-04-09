import React from "react";

export default function CandidatePolicies({candidateData, candidatePolicies, candidatePartyPolicies}) {

    var personalRows =[]
    var partyRows =[]
    if (candidatePolicies && candidatePolicies.length > 0)
    {
        candidatePolicies.forEach(policy => {
            personalRows.push(
            <tr>
                <td>
                    <figure className="image is-24x24">
                        <img className="image" src={`/images/categories/cat-${policy.category.id}.svg`} title={policy.category.name}/>
                    </figure>
                </td>
                <td>
                    {policy.foaValue > 0 ? policy.proDescription : policy.conDescription}
                </td>
            </tr>
            )
        });
    }
    else{
        personalRows.push(<tr><td><i>This candidate has retired and therefore has no policies in their platform.</i></td></tr>)
    }

    
    if (candidatePartyPolicies && candidatePartyPolicies.length > 0)
    {
        candidatePartyPolicies.forEach(policy => {
            partyRows.push(
            <tr>
                <td>
                    <figure className="image is-24x24">
                        <img className="image" src={`/images/categories/cat-${policy.category.id}.svg`} title={policy.category.name}/>
                    </figure>
                </td>
                <td>
                    {policy.foaValue > 0 ? policy.proDescription : policy.conDescription}
                </td>
            </tr>
            )
        });
    }
    else{
        partyRows.push(
            <tr>
                <td></td><td><i>As an independent candidate, there is no party whose policies need representing.</i></td>
            </tr>
        )
    }

    return (
        <div className='columns'>
            <div className='column'>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="has-text-centered" colSpan={2}>Personal Platform</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personalRows}
                    </tbody>
                </table>
            </div>
            <div className='column'>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="has-text-centered" colSpan={2}>Party Platform</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partyRows}
                    </tbody>
                </table>
            </div>
        </div>
    )
   
}
