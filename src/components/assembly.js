import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom"
import AssemblyFeed from "./assemblyfeed";
import AssemblyGrid from "./assemblygrid";

function Assembly() {
    let params = useParams();
    let [timer, setTime] = React.useState(null);
    let [feedData, setFeedData] = React.useState(null);
    let [gridData, setGridData] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ROOT}/assembly/latest/members`)
        .then(res => {
            const data = res.data.data;
            setGridData(data);
        })

        axios.get(`${process.env.REACT_APP_API_ROOT}/assemblyfeed/latest`)
        .then(res => {
            const data = res.data.data;
            setFeedData(data);
        })

        const interval = setInterval(() => {
            setTime(timer => timer + 1);
        }, 3000);
        
        return () => clearInterval(interval);
        
    },[timer, params]);

    return (
        <div className='columns '> 
            <div className='column is-one-third'>
                <AssemblyFeed data={feedData}/>    
            </div>
            <div className='column'>
                <AssemblyGrid data={gridData}/> 
            </div>
        </div>
    )
}

export default Assembly;