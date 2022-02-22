import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function CandidatePolicies({candidate_id}) {
    let [policies_data, set_policyData] = React.useState(null);
    
    React.useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_ROOT}/candidates/${candidate_id}/policies`)
        .then(res => {
            const data = res.data.data;
            set_policyData(data);
        })
        
    },[candidate_id]);

    var rows =[]
    if (policies_data && policies_data.length > 0)
    {
        policies_data.forEach(object => {
            rows.push(<tr><td><img className="image is-24x24" src={`../images/categories/cat-${object.category_id}.png`} title={object.category_name}/></td><td>{object.description}</td></tr>)
        });
    }
    else{
        rows.push(<tr><td><i>This candidate has retired and therefore has no policies in their platform.</i></td></tr>)
    }

    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    Policies in Platform
                </p>
            </header>
            <div className="card-content">
                <div className='columns'>
                    <div className='column'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="has-text-centered" colSpan={2}>Personal Platform</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
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
                                <tr>
                                    <td></td><td><i>As an independent candidate, there is no party whose policies need representing.</i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
   
}
