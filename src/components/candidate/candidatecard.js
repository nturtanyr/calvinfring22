import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import CandidateProfile from "./candidateprofile";
import CandidateStats from "./candidatestats";
import CandidatePolicies from "./candidatepolicies";
import CandidateVoteHistory from "./candidatehistory";

export default function CandidateCard({selectedConstituency}) {
    const params = useParams();
    const { selectedConstituencyID, setSelectedConstituencyID } = selectedConstituency

    const [pageLoading, setPageLoading] = React.useState(false);

    const [candidateData, setCandidateData] = React.useState(null);
    const [candidateCitizenData, setCandidateCitizenData] = React.useState(null);
    const [candidatePolicies, setPolicies] = React.useState(null);
    const [candidatePartyPolicies, setPartyPolicies] = React.useState(null);

    const [showCardOptions, setShowCardOptions] = React.useState('');
    const [shownOption, setShownOption] = React.useState('stats');
        
    React.useEffect(() => {
        if(params.candidate_id != 0)
        {
            setPageLoading(true)
            axios.get(`${process.env.REACT_APP_API_ROOT}/candidate/${params.candidate_id}`)
            .then(res => {
                const data = res.data.data;
                setCandidateData(data);
                setSelectedConstituencyID(data.constituency.id);
                return axios.get(`${process.env.REACT_APP_API_ROOT}/party/${data.party.id}/policy`);
            }).then(res => {
                const data = res.data.data;
                setPartyPolicies(data);
                return axios.get(`${process.env.REACT_APP_API_ROOT}/candidate/${params.candidate_id}/citizen`);
            })
            .then(res => {
                const data = res.data.data;
                setCandidateCitizenData(data);
                return axios.get(`${process.env.REACT_APP_API_ROOT}/candidate/${params.candidate_id}/policy`);
            })
            .then(res => {
                const data = res.data.data;
                setPolicies(data);
                
                setPageLoading(false);
            })
        }
        
    },[params.candidate_id]);

    if(params.candidate_id === '0')
    {
        return( <div className="block"/>);
    }

    return (    
        <div className='card'> 
            <header className="card-header">
                <p className={"card-header-title" + (pageLoading ? " has-text-grey-light" : "")}>
                 {
                     pageLoading && <span class="loader"></span>
                 }&nbsp;{candidateData && candidateData.citizen.firstName} {candidateData && candidateData.citizen.lastName} 
                </p>
                <div className={"dropdown is-right is-hidden-desktop " + showCardOptions}>
                    <div className="dropdown-trigger">
                        <button className="card-header-icon" onClick={() => showCardOptions === '' ? setShowCardOptions('is-active') : setShowCardOptions('')}>
                            <span className="icon">
                                <i className="fas fa-angle-down"  aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div className="dropdown-menu">
                        <div className="dropdown-content">
                            <a className="dropdown-item" onClick={() => {
                                showCardOptions === '' ? setShowCardOptions('is-active') : setShowCardOptions(''); 
                                setShownOption('stats')}
                            }>
                                Statistics
                            </a>
                            <a className="dropdown-item" onClick={() => {
                                showCardOptions === '' ? setShowCardOptions('is-active') : setShowCardOptions(''); 
                                setShownOption('info')}
                            }>
                                Info
                            </a>
                            <a className="dropdown-item" onClick={() => {
                                showCardOptions === '' ? setShowCardOptions('is-active') : setShowCardOptions(''); 
                                setShownOption('pol')}
                            }>
                                Policies
                            </a>
                            <a className="dropdown-item" onClick={() => {
                                showCardOptions === '' ? setShowCardOptions('is-active') : setShowCardOptions(''); 
                                setShownOption('hist')}
                            }>
                                History
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <div className="card-content">
                { !candidatePolicies ? <div/> : (
                    ((shownOption === 'info') && <CandidateProfile candidateData={candidateData} candidateCitizenData={candidateCitizenData}/>) || 
                    ((shownOption === 'pol') && <CandidatePolicies candidateData={candidateData} candidatePolicies={candidatePolicies} candidatePartyPolicies={candidatePartyPolicies}/>) ||
                    ((shownOption === 'stats') && <CandidateStats candidateData={candidateData} candidateCitizenData={candidateCitizenData}/>) ||
                    ((shownOption === 'hist') && <CandidateVoteHistory candidateData={candidateData}/>)
                )}
            </div>
            <footer className="card-footer is-hidden-mobile">
                <a className="card-footer-item" onClick={() => setShownOption('stats')}>Statistics</a>
                <a className="card-footer-item" onClick={() => setShownOption('info')}>Info</a>
                <a className="card-footer-item" onClick={() => setShownOption('pol')}>Policies</a>
                <a className="card-footer-item" onClick={() => setShownOption('hist')}>History</a>
            </footer>
        </div>
    )
}