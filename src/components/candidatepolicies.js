import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function CandidatePolicies() {
    let params = useParams();
    let [policies_data, set_policyData] = React.useState(null);
    
    React.useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_ROOT}/candidates/${params.id}/policies`)
        .then(res => {
            const data = res.data.data;
            set_policyData(data);
        })
        
    },[params]);

    var rows =[]
    if (policies_data && policies_data.length > 0)
    {
        policies_data.forEach(object => {
            rows.push(<tr><td><img className="image is-24x24" src={`../images/cat-${object.category_id}.svg`} title={object.category_name}/></td><td>{object.description}</td></tr>)
        });
    }
    else{
        rows.push(<tr><td>This candidate is has no policies in their platform</td></tr>)
    }

    return (
        <div className="tabcontent is-hidden" id="tabPolicies">
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
    )
   
}
