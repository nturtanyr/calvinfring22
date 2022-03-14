import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function CandidatePolicies() {
    const params = useParams();
    let [policies, setPolicies] = React.useState(null);
    let [party, setParty] = React.useState(null);
    
    React.useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_ROOT}/candidates/${params.candidate_id}/policies`)
        .then(res => {
            const data = res.data.data;
            setPolicies(data);
        })
        
    },[params.candidate_id]);

    React.useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_ROOT}/candidates/${params.candidate_id}/party`)
        .then(res => {
            const data = res.data.data;
            setParty(data);
        })
        
    },[params.candidate_id]);

    var personalRows =[]
    var partyRows =[]
    if (policies && policies.length > 0)
    {
        policies.forEach(object => {
            personalRows.push(
            <tr>
                <td>
                    <figure className="image is-24x24">
                        <img className="image" src={`/images/categories/cat-${object.category_id}.svg`} title={object.category_name}/>
                    </figure>
                </td>
                <td>
                    {object.description}
                </td>
            </tr>
            )
        });
    }
    else{
        personalRows.push(<tr><td><i>This candidate has retired and therefore has no policies in their platform.</i></td></tr>)
    }

    
    if (party && party.policies.length > 0)
    {
        party.policies.forEach(object => {
            partyRows.push(
            <tr>
                <td>
                    <figure className="image is-24x24">
                        <img className="image" src={`/images/categories/cat-${object.category_id}.svg`} title={object.category_name}/>
                    </figure>
                </td>
                <td>
                    {object.description}
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
