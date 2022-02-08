import React from "react";
import axios from 'axios';
import CandidateInfo from "./candidateinfo";
import { useParams } from "react-router-dom";


export default function Candidate() {
    var params = useParams();
    const [selectedCandidate, setSelectedCandidate] = React.useState(params.id)
    const [candidateList, setCandidateList] = React.useState([]);
    const [constituencyList, setConstituencyList] = React.useState([]);

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ROOT}/candidates`)
        .then(res => {
            const candidateList = res.data.data;
            setCandidateList(candidateList);
        })

        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency`)
        .then(res => {
            const constituencyList = res.data.data;
            setConstituencyList(constituencyList);
        })
        
    },[]);
    
    var menu = []
    if(constituencyList && candidateList){
        constituencyList.forEach(constituency => {
            var candidates = []
            candidateList.forEach(candidate => {
                if(candidate.constituency_id == constituency.id)
                {
                    var linkText = []
                    if(candidate.elected)
                    {
                        linkText = <a onClick={() => setSelectedCandidate(candidate.candidate_id)}><i className="fas fa-star"></i>{candidate.first_name} {candidate.last_name}</a>
                    }
                    else if(candidate.running)
                    {
                        linkText = <a onClick={() => setSelectedCandidate(candidate.candidate_id)}>{candidate.first_name} {candidate.last_name}</a>
                    }
                    else
                    {
                        linkText = <a onClick={() => setSelectedCandidate(candidate.candidate_id)} className="has-text-grey-light"><i>{candidate.first_name} {candidate.last_name}</i></a>
                    }
                    candidates.push(<li key={`canlink-${candidate.candidate_id}`}>{linkText}</li>)
                }
            })
            menu.push(
            <li>
                <a key={`conlink-${constituency.id}`} id={`constituency-${constituency.id}`} onClick={(event) => toggleMenu(event, constituency.id)}>{constituency.name}</a>
                <ul className={`is-hidden ${constituency.id}`}>
                    {candidates}
                </ul>
            </li>
            )
        })
    }

    function toggleMenu(event, constituency_id){
        var elements = document.getElementsByClassName(constituency_id)
        var link = document.getElementById("constituency-" + constituency_id)
        if(elements){
            if(link.classList.contains("is-active"))
            {
                link.classList.remove("is-active")
                Array.from(elements).forEach( row => {
                    row.classList.add('is-hidden');
                    row.classList.remove('is-visible');
                });
            }else{
                link.classList.add("is-active")
                Array.from(elements).forEach( row => {
                    row.classList.add('is-visible');
                    row.classList.remove('is-hidden');
                });
            }
        }
    }
    return(
        <section className="section">
            <div className="content has-text-centered">
                <h2>Candidate Information</h2>
                <p>We provide this interface to easily access the profiles of all candidates currently running in the election races in each constituency.</p>
            </div>
            <div className="columns">
                <div className="column is-one-quarter">
                    <aside className="menu">
                        <p className="menu-label">
                            Constituencies
                        </p>
                        <ul className="menu-list">
                        {menu}
                        </ul>
                    </aside>
                </div>
                <div className="column">
                    <CandidateInfo candidate_id={selectedCandidate}/>
                </div>
            </div>
        </section>
    )
}