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

    const [showCardOptions, setShowCardOptions] = React.useState('');
    const [shownOption, setShownOption] = React.useState('info');
        
    React.useEffect(() => {
        setPageLoading(true)
        axios.get(`${process.env.REACT_APP_API_ROOT}/candidates/${params.candidate_id}/citizen`)
        .then(res => {
            const data = res.data.data[0];
            setCandidateData(data);
            setSelectedConstituencyID(data.profile.constituency_id)
            setPageLoading(false);
        })
        
    },[params.candidate_id]);

    if(params.candidate_id === '0')
    {
        return( <div className="block"/>)
    }

    return (    
        <div className='card'> 
            <header className="card-header">
                <p className="card-header-title">
                 {candidateData && candidateData.profile.first_name} {candidateData && candidateData.profile.last_name} 
                </p>
                <div class={"dropdown is-right is-hidden-desktop " + showCardOptions}>
                    <div class="dropdown-trigger">
                        <button class="card-header-icon" onClick={() => showCardOptions === '' ? setShowCardOptions('is-active') : setShowCardOptions('')}>
                            <span class="icon">
                                <i class="fas fa-angle-down"  aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div class="dropdown-menu">
                        <div class="dropdown-content">
                            <a class="dropdown-item" onClick={() => {
                                showCardOptions === '' ? setShowCardOptions('is-active') : setShowCardOptions(''); 
                                setShownOption('info')}
                            }>
                                Info
                            </a>
                            <a class="dropdown-item" onClick={() => {
                                showCardOptions === '' ? setShowCardOptions('is-active') : setShowCardOptions(''); 
                                setShownOption('stats')}
                            }>
                                Statistics
                            </a>
                            <a class="dropdown-item" onClick={() => {
                                showCardOptions === '' ? setShowCardOptions('is-active') : setShowCardOptions(''); 
                                setShownOption('pol')}
                            }>
                                Policies
                            </a>
                            <a class="dropdown-item" onClick={() => {
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
                {(!candidateData && <div/>) ||
                ((shownOption === 'info') && <CandidateProfile data={candidateData}/>) || 
                ((shownOption === 'pol') && <CandidatePolicies/>) ||
                ((shownOption === 'stats') && <CandidateStats data={candidateData}/>) ||
                ((shownOption === 'hist') && <CandidateVoteHistory trust={candidateData.profile.trustworthiness}/>)}
            </div>
            <footer class="card-footer is-hidden-mobile">
                <a class="card-footer-item" onClick={() => setShownOption('info')}>Info</a>
                <a class="card-footer-item" onClick={() => setShownOption('stats')}>Statistics</a>
                <a class="card-footer-item" onClick={() => setShownOption('pol')}>Policies</a>
                <a class="card-footer-item" onClick={() => setShownOption('hist')}>History</a>
            </footer>
        </div>
    )
}