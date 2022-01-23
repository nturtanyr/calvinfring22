import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";

export default function ConstituencyDemography() {
    let params = useParams();
    let [candidate_data, setCandidateData] = React.useState(null);
    
    React.useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency/` + params.id + `/candidates`)
        .then(res => {
            const data = res.data.data;
            setCandidateData(data);
        })
        
    },[params]);
    var rows = []
    if(candidate_data)
    {
        candidate_data.sort(function (a, b) {
            if (a.elected){
                return -2
            }
            else
            {
                return a.running - b.running;
            }
        })
        candidate_data.forEach(object => {
            var star = (<td></td>);
            var candidate_link = (<td><Link to={`/candidate/${object.candidate_id}`}>{object.first_name + " " + object.last_name}</Link></td>);
            var tagline = (<td><i>{object.quote}</i></td>)
            if(object.elected){
                star = (<td><i className="fas fa-star"></i></td>)
            }
            if(!object.running){
                candidate_link = (<td><Link className="has-text-grey-light" to={`/candidate/${object.candidate_id}`}><i>{object.first_name + " " + object.last_name}</i></Link></td>);
                tagline = (<td><i>This candidate is no longer standing for election</i></td>)
            }
            rows.push(
                <tr>
                    {star}
                    {candidate_link}
                    {tagline}
                </tr>
            )
        });
    }
    
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Candidate</th>
                        <th>Tagline</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
    
}
