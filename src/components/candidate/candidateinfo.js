import React from "react";
import axios from 'axios';
import CandidatePolicies from "./candidatepolicies";
import CandidateVoteHistory from "./candidatehistory";
import CandidateProfile from "./candidateprofile";
import CandidateCard from "./candidatestats";

export default function CandidateInfo({candidate_id}) {
    const [page_loading, setPageLoading] = React.useState(false);
    const [candidate_data, set_CandidateData] = React.useState(null);
        
    React.useEffect(() => {
        setPageLoading(true)
        axios.get(`${process.env.REACT_APP_API_ROOT}/candidates/${candidate_id}/citizen`)
        .then(res => {
            const data = res.data.data[0];
            set_CandidateData(data);

            setPageLoading(false);
        })
        
    },[candidate_id]);

    if(candidate_data)
    {
        return (
            <div>
            <p className="title">
                {candidate_data.profile.first_name} {candidate_data.profile.last_name}
            </p>
            <p className="subtitle">
                {candidate_data.profile.quote}
            </p>
            <hr/>
            <section className="section"><CandidateCard data={candidate_data}/></section>
            <section className="section"><CandidateProfile data={candidate_data}/></section>
            <section className="section"><CandidatePolicies candidate_id={candidate_id}/></section>
            <section className="section"><CandidateVoteHistory candidate_id={candidate_id} trust={candidate_data.profile.trustworthiness}/></section>
            </div>
        )
    }
    else
    {
        if(page_loading)
        {
            return (
                (<progress className="progress is-primary" max="100"></progress>)
            )
        }
        else{
            return (
                <div>
                <p className="title">
                    Candidate Name
                </p>
                <p className="subtitle">
                    Candidate's Running Tagline
                </p>
                <hr/>
                </div>
            )
        }
    }
}