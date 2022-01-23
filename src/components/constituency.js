import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import ConstituencyDemography from "./constituencydemography";
import ConstituencyCandidates from "./constituencycandidates";
import ConstituencyElectionChart from "./electionresults";

function Constituency() {
    let params = useParams();
    let [conData, setconData] = React.useState(null);
    const [tabStateInfo, setTabStateInfo] = React.useState("");
    const [tabStateCandidates, setTabStateCandidates] = React.useState("is-hidden");
    const [tabStateDemography, setTabStateDemography] = React.useState("is-hidden");
    const [tabStateElection, setTabStateElection] = React.useState("is-hidden");
    
    React.useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency/` + params.id)
        .then(res => {
            const data = res.data.data;
            setconData(data);
        })
        
    },[params]);

    function openInfo(event) {
        
    };

    function openDemography(event) {
        
    };
    
    function openCandidates(event) {
        
    };

    function openElection(event) {
        
    };
    return (
        <div className='columns'> 
                { conData && (
                    <div className='column is-one-fifth'>
                        <div className="content">
                            <h1 className="title">
                                { conData[0].name }
                            </h1>
                            <h3 className="subtitle"><i>{ conData[0].description }</i></h3>
                            <img className="image is-fullwidth" src={`../images/con-${conData[0].id}.svg`} alt={conData[0].name} />
                        </div>
                    </div>
                )}
            <div className='column'>
                <div className='tabs is-boxed is-justify-content-left'>
                    <li className="tab is-active" onClick={openInfo}><a><span>Info</span></a></li>
                    <li className="tab" onClick={openDemography}><a><span>Demography</span></a></li>
                    <li className="tab" onClick={openCandidates}><a><span>Candidates</span></a></li>
                    <li className="tab" onClick={openElection}><a><span>Current Election</span></a></li>

                </div>
                <div className='column'>
                    <div className={`tabcontent ${tabStateElection}`}>
                        <ConstituencyElectionChart constituency_id={params.id} election_id="latest"/>
                    </div>
                    <div className={`tabcontent ${tabStateDemography}`}>
                        <ConstituencyDemography constituency_id={params.id}/>
                    </div>
                    <div className={`tabcontent ${tabStateCandidates}`}>
                        <ConstituencyCandidates constituency_id={params.id}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Constituency;