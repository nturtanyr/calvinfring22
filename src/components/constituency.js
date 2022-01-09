import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom"
import { ConstituencyDemography } from "./constituencycomponents"
import useScript from "./utility";
import ConstituencyElectionChart from "./electionresults";

function Constituency() {
    let params = useParams();
    let [timer, setTime] = React.useState(null);
    let [conData, setconData] = React.useState(null);
    let [demData, setdemData] = React.useState(null);
    let [chartData, setchartData] = React.useState(null);
    
    React.useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency/` + params.id)
        .then(res => {
            const data = res.data.data;
            setconData(data);
        })

        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency/` + params.id + `/demography`)
        .then(res => {
            const data = res.data.data;
            setdemData(data);
        })

        axios.get(`${process.env.REACT_APP_API_ROOT}/election/constituency/` + params.id)
        .then(res => {
            const data = res.data.format_data;
            setchartData(data);
        })
        console.log("queried for data again")
        if(chartData && chartData.active)
        {
            const interval = setInterval(() => {
                setTime(timer => timer + 1);
            }, 1000);
            
            return () => clearInterval(interval);
        }
        
    },[timer, params]);

    function handleClick(event) {
        // Get the target from the "data-target" attribute
        const $element = event.target.parentElement.parentElement
        const target = $element.dataset.target;
        const $target = document.getElementById(target);
        // Get all tabs and set to not active
        const $tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'), 0);
        $tabs.forEach( el => {
            el.classList.remove('is-active');
        });

        // Get all tab contents and hide them
        const $tabcontents = Array.prototype.slice.call(document.querySelectorAll('.tabcontent'), 0);
        $tabcontents.forEach( fl => {
        fl.classList.remove('is-visible');
        fl.classList.add('is-hidden');
        });
        
        if ($target){
            // Add the "is-active" class and switch between "hidden" and "visible" on active tab content
            $element.classList.toggle('is-active');
            $target.classList.remove('is-hidden');
            $target.classList.add('is-visible');
        }
    };

    return (
        <div className='columns'> 
                { conData && (
                    <div className='column is-one-fifth'>
                        <h1 className="title">
                            { conData[0].name }
                        </h1>
                        <h3 className="subtitle"><i>{ conData[0].description }</i></h3>
                        <img className="image is-fullwidth" src={`../images/con-${conData[0].id}.svg`} alt={conData[0].name} />
                    </div>
                )}
            <div className='column'>
                <div className='tabs is-boxed is-justify-content-left'>
                    <li className="tab is-active" data-target="tabInfo" onClick={handleClick}><a><span>Info</span></a></li>
                    <li className="tab" data-target="tabDemography" onClick={handleClick}><a><span>Demography</span></a></li>
                    <li className="tab" data-target="tabCandoidates" onClick={handleClick}><a><span>Candidates</span></a></li>
                    <li className="tab" data-target="tabVotes" onClick={handleClick}><a><span>Current Election</span></a></li>

                </div>
                { conData && demData && (
                    <div className='column'>
                        <ConstituencyDemography data={demData}/>
                        <ConstituencyElectionChart data={chartData}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Constituency;