import React from "react";
import axios from 'axios';


export default function CandidateVoteHistory({candidate_id, trust}) {
    let [votes_data, set_voteData] = React.useState(null);
    
    React.useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_ROOT}/candidates/${candidate_id}/assemblyvotes`)
        .then(res => {
            const data = res.data.data;
            set_voteData(data);
        })
        
    },[candidate_id]);

    var tables =[]
    if (votes_data && votes_data.length > 0)
    {
        votes_data.forEach(object => {
            tables.push(<tr ><th colSpan={3} onClick={(event) => showPolicies(event,object.assembly_id)}>{object.assembly_id} <i id={`icon-${object.assembly_id}`} className="fas fa-angle-down"></i></th></tr>)
            object.policies.sort((a,b) => a.category_id- b.category_id)
            object.policies.forEach(policy => {
                let vote_string = 'Abstained'
                if(policy.vote == 1){
                    vote_string = 'Voted for'
                }else if(policy.vote == -1){
                    vote_string = 'Voted against'
                }
                tables.push(<tr className={`is-hidden ${object.assembly_id}`}>
                    <td><img className="image is-24x24" src={`../images/categories/cat-${policy.category_id}.png`}/></td>
                    <td>{policy.policy_description}</td>
                    <td>{vote_string}</td>
                    </tr>
                )
            });
        });
    }
    else{
        tables.push(<tr><td className="has-text-centered" colSpan={3}>This candidate has never attended an assembly</td></tr>)
    }

    function showPolicies(event, assembly_id){
        var elements = document.getElementsByClassName(assembly_id)
        var icon = document.getElementById("icon-" + assembly_id)
        if(elements){
            Array.from(elements).forEach( row => {
                if(row.classList.contains('is-visible')){
                    icon.classList.replace("fa-angle-up", "fa-angle-down")
                    row.classList.add('is-hidden');
                    row.classList.remove('is-visible');
                }
                else{
                    icon.classList.replace("fa-angle-down", "fa-angle-up")
                    row.classList.add('is-visible');
                    row.classList.remove('is-hidden');
                }
    
            });
        }
    }

    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    Candidate's History of Voting in Assemblies
                </p>
            </header>
            <div className="card-content">
                <p className="title is-4">
                    Trustworthiness: {trust * 100 }%
                </p>
                <table className="table">
                    <thead>
                        <tr><th className="has-text-centered" colSpan={2}>Policy</th>
                        <th className="has-text-centered">Vote</th></tr>
                    </thead>
                    <tbody>
                        {tables}
                    </tbody>
                </table>
            </div>
        </div>
    )
   
}
