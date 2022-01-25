import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom"
import ConstituencyElectionChart from "./electionresults";


export default function Candidate() {
    var params = useParams();
    const [selected_index, setSelectedIndex] = React.useState(1)
    const [candidateList, setCandidateList] = React.useState([]);

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ROOT}/candidate`)
        .then(res => {
            const candidateList = res.data.data;
            setCandidateList(candidateList);
        })
        
    },[]);

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
                        {
                            conList.map(con =>
                                <li key={`link-${con.id}`}><a onClick={() => setSelectedIndex(con.id)}>{con.name}</a></li>
                            )
                        }
                        </ul>
                    </aside>
                </div>
                <div className="column">
                    <div className="content">
                        { conList.length > 0 && (
                            <h3>{conList[selected_index-1].name}</h3>
                        )}
                        <hr/>
                    </div>
                    <ConstituencyElectionChart constituency_id={selected_index} election_id="latest"/>
                </div>
            </div>
        </section>
    )
}