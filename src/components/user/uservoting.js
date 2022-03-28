import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHasUserVoted } from "../auth/authutils";
import { Auth } from "aws-amplify";

export default function UserVoting({constituency_id}) {
    const [currentConstituencyCandidates, setCurrentConstituencyCandidates] = React.useState([])
    const [electionInProgress, setElectionInProgress] = React.useState(false)
    const [voteLoader, setVoteLoader] = React.useState(false)
    const [modalIsActive, setModalIsActive] = React.useState('')
    const [modalErrorMessage, setModalErrorMessage] = React.useState(null)
    const [currentCandidateName, setCurrentCandidateName] = React.useState(null)
    const [currentCandidateId, setCurrentCandidateId] = React.useState(null)
    const userHasVoted = useHasUserVoted();

    var tableRows = []
  
    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency/` + constituency_id + "/candidates")
            .then(res => {
                const data = res.data.data;
                data.sort((a , b) => {
                    if(a.elected) { return -1 }
                    else if (b.elected) { return 1 }
                    else {
                        return a.last_name.localeCompare(b.last_name);
                    }
                })
                setCurrentConstituencyCandidates(data);
            })
    },[]);

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency/` + constituency_id + `/election/latest`)
        .then(res => {
            const data = res.data.data;
            setElectionInProgress(data.active)
        })
    },[]);
    
    function showVoteConfirmation(candidate)
    {
        if(modalIsActive == '')
        {
            setCurrentCandidateName(candidate.first_name + " " + candidate.last_name)
            setCurrentCandidateId(candidate.candidate_id)
            setModalIsActive('is-active')
        }
        else
        {
            setModalIsActive('')
        }
        
    }

    async function handleVote()
    {
        setVoteLoader(true);
        Auth.currentSession()
        .then( response => {
            var options = {
                headers: {
                    Authorization: response.getIdToken().jwtToken,
                    "Content-Type" : "application/json"
                }
            }

            let bodyContent = {
                candidate_id : currentCandidateId
            }
            return axios.post(`${process.env.REACT_APP_API_ROOT}/user/vote`, bodyContent, options)
        })
        .then(response => {
            return response.data.data;
        
        })
        .then(response => {
            if(response.status == "not_voted")
            {

                setVoteLoader(false);
                setModalErrorMessage(response.reason_description)
            }
            else
            {
                setVoteLoader(false);
                setModalIsActive('');
            }
        });
    }

    currentConstituencyCandidates.map(candidate => {
        let nameCell
        let buttonCell
        
        if(candidate.running)
        {
            if(candidate.elected)
            {
                nameCell = <>
                    <td>
                        <i className="fas fa-star"></i>
                    </td>
                    <td>
                        <p>
                            <Link to={"/election/latest/candidate/" + candidate.candidate_id}>{candidate.first_name} {candidate.last_name}</Link>
                        </p>
                        <p>
                            <i className="is-hidden-mobile">{candidate.quote}</i>
                        </p>
                    </td>
                </>
            }
            else
            {
                nameCell = <>
                    <td></td>
                    <td>
                        <p>
                            <Link to={"/candidate/" + candidate.candidate_id}>{candidate.first_name} {candidate.last_name}</Link>
                        </p>
                        <p>
                            <i className="is-hidden-mobile">{candidate.quote}</i>
                        </p>
                    </td>
                </>
            }

            if(!electionInProgress)
            {
                buttonCell = <td><button className="button is-disabled">No election</button></td>
                
            }
            else 
            if(userHasVoted)
            {
                buttonCell = <td><button className="button is-disabled">Vote cast</button></td>
            } 
            else
            {
                buttonCell = <td><button className="button is-warning" onClick={() => showVoteConfirmation(candidate)}>Vote!</button></td>
            }
            
            tableRows.push(<tr key={"can-" + candidate.candidate_id}>
                {nameCell}
                {buttonCell}
            </tr>)
        }
    })
    
    return (
        <>
            <table className="table">
                <thead>
                    <tr><th></th><th>Name</th><th></th></tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
            <div className={"modal " + modalIsActive}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Are you sure?</p>
                        <button className="delete" onClick={() => {setModalErrorMessage(null); setModalIsActive('')}}></button>
                    </header>
                    <section className="modal-card-body has-text-danger">
                        {!modalErrorMessage && (
                            <>
                                <h5 className="subtitle has-text-danger">You're about to vote for <b>{currentCandidateName}</b></h5>
                                <p>Are you certain? This will use your vote in this election.</p>
                            </>
                        )}
                        {modalErrorMessage && (
                            <>
                                <h5 className="subtitle has-text-danger">Inaccurate Vote Prevented</h5>
                                <p>{modalErrorMessage}</p>
                            </>
                        )}
                    </section>
                    <footer className="modal-card-foot">
                        <button className={"button is-danger " + (voteLoader && "is-loading")} onClick={handleVote}>Cast Vote</button>
                        <button className="button is-warning" onClick={() => {setModalErrorMessage(null); setModalIsActive('')}}>Let me think...</button>
                    </footer>
                </div>
            </div>
        </>
    )
}