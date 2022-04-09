import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import CandidateCard from "./candidatecard";
import ConstituencyElectionChart from "../election/electionresults";


export default function CandidateList({selectedConstituency}) {
    const [currentConstituencyCandidates, setCurrentConstituencyCandidates] = React.useState([])
    const { selectedConstituencyID, setSelectedConstituencyID } = selectedConstituency
    
    const [pageLoading, setPageLoading] = React.useState(false);
    
    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ROOT}/candidate?constituencyID=` + selectedConstituencyID)
            .then(res => {
                const data = res.data.data;
                data.sort((a , b) => {
                    if(a.elected) { return -1 }
                    else if (b.elected) { return 1 }
                    else if (a.running != b.running) {
                        return (b.running - a.running) 
                    } else {
                        return a.citizen.lastName.localeCompare(b.citizen.lastName);
                    }
                })
                setCurrentConstituencyCandidates(data);
            })
    },[selectedConstituencyID]);

    if(pageLoading)
    {
        return (
            <div></div>
        )
    }

    var tableRows = []
    currentConstituencyCandidates.map(candidate => {
        
        tableRows.push(<tr key={"can-" + candidate.id}>
            <td>{candidate.elected && <i className="fas fa-star"></i>}</td>
            <td>
                <Link to={"/election/latest/candidate/" + candidate.id}>
                    <span className={candidate.running ? "has-text-weight-medium" : "has-text-grey-light is-italic"}>{candidate.citizen.firstName} {candidate.citizen.lastName}</span>
                </Link>
                <span className="is-hidden-tablet"><br/><i>{candidate.party.shortName}</i></span>
            </td>
            <td className="is-hidden-mobile">
                {candidate.running ? <b>{candidate.party.name}</b> : "No affiliation"}
                
            </td>
            <td className="is-hidden-mobile">
                {candidate.running ? <i>{candidate.quote}</i> : "Retired from politics"}
                
            </td>
        </tr>)
    })

    return (
        <>
            <section>
            {selectedConstituencyID ?
                <ConstituencyElectionChart constituency_id={selectedConstituencyID} election_id={"latest"}/>
            :
            <i>Election details will show here when a constituency is selected.</i>
            }
            </section>
            {selectedConstituencyID ?
                <section>
                        <table className="table is-fullwidth">
                            <thead>
                                <tr><th colSpan={4}>Candidates</th></tr>
                            </thead>
                            <tbody>
                                {tableRows}
                            </tbody>
                        </table>
                </section>
                :
                <></>
            }
            <hr/>
            <section>
                <CandidateCard selectedConstituency={selectedConstituency}/>
            </section>
        </>
    )
}