import React from "react";
import axios from 'axios';
import CandidateList from "./candidatelist";


export default function CandidateNav() {
    const [constituencyList, setConstituencyList] = React.useState([]);
    const [selectedConstituencyID, setSelectedConstituencyID] = React.useState(0)

    const selectedConstituency = {
        selectedConstituencyID,
        setSelectedConstituencyID
    }

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency`)
        .then(res => {
            const constituencyList = res.data.data;
            setConstituencyList(constituencyList);
        })
        
    },[]);

    return(
        <section className="section">
            <div className="content has-text-centered">
                <h2>Election Information</h2>
                <p>We provide this interface to easily access the profiles of all election races in each constituency, and the candidates involved.</p>
            </div>
            <div className="columns">
                <div className="column is-one-quarter is-hidden-mobile">
                    <aside className="menu">
                        <p className="menu-label">
                            Constituencies
                        </p>
                        <ul className="menu-list">
                        {
                            constituencyList.map(con =>
                                <li key={`link-${con.id}`}>
                                    <a 
                                    onClick={() => setSelectedConstituencyID(con.id)}
                                    className={(selectedConstituencyID === con.id) ? 'is-active' : undefined}>
                                        {con.name}
                                    </a>
                                </li>
                            )
                        }
                        </ul>
                    </aside>
                </div>
                <div className="column is-half is-hidden-tablet">
                
                    <label className="label">
                        Constituency:
                    </label>
                    <div className="select">
                        <select value={selectedConstituencyID} onChange={(event) => setSelectedConstituencyID(event.target.value)}>
                        {
                            constituencyList.map(con =>
                                <option key={`option-${con.id}`} value={con.id} >{con.name}</option>
                            )
                        }
                        </select>
                    </div>
                    <hr/>
                </div>
                <div className="column">
                    <CandidateList selectedConstituency={selectedConstituency} />
                </div>
            </div>
        </section>
    )
}