import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom"
import AssemblyFeed from "./assemblyfeed";
import AssemblyGrid from "./assemblygrid";

function Assembly() {
    let params = useParams();
    const [timer, setTime] = React.useState(null);
    const [gridData, setGridData] = React.useState(null);

    var utcStr = new Date().toISOString();
    var assembly_id = utcStr.replace('-', '').replace('-', '').substring(0, 8)

    React.useEffect(() => {
        if(params.assembly_id && (params.assembly_id != 'latest'))
        {
            assembly_id = params.assembly_id
        }

        axios.get(`${process.env.REACT_APP_API_ROOT}/assembly/` + assembly_id)
        .then(res => {
            const data = res.data.data;
            setGridData(data);
        })

        const interval = setInterval(() => {
            setTime(timer => timer + 1);
        }, 3000);
        
        return () => clearInterval(interval);
        
    },[timer, params.id]);

    return (
        <div>
            <section className="section">
                <div className="content has-text-centered">
                    <h2>The Kalmany Parliamentary Assembly</h2>
                    <p>The details of the latest assembly will show below</p>
                </div>
            </section>
            <div className='columns '> 
                <div className='column is-one-third'>
                    <AssemblyFeed/>    
                </div>
                <div className='column'>
                    <AssemblyGrid assemblyData={gridData}/> 
                </div>
            </div>
        </div>
    )
}

export default Assembly;