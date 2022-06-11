
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CodexConstituencyMutableDescription from "./codexConstituencyMutableDescription";

export default function CodexConstituency() {
    const params = useParams();
    const [pageLoading, setPageLoading] = React.useState(false);
    const [constituencyData, setConstituencyData] = React.useState({});
    
    React.useEffect(() => {
        setPageLoading(true);
        if(params.constituency_id)
        {
            let constituency_id = params.constituency_id
            axios.get(`${process.env.REACT_APP_API_ROOT}/constituency/` + constituency_id)
            .then(res => {
                const data = res.data.data;
                setConstituencyData(data);
                setPageLoading(false);
            })
            .catch( error => {
                setPageLoading(false);
            })
        }
        
    },[params.constituency_id]);

    if( pageLoading )
    {
        return (<progress className="progress is-primary" max="100"></progress>)
    }

    if(! constituencyData.id)
    {
        return (<div className="content is-danger">There was an error retrieving information - please try again later.</div>)
    }

    var monumentList = []
    constituencyData.monuments.map(mon => {
        monumentList.push(
            <h5>
                <span className="icon-text">
                    <span className="icon">
                        <i className={"fas " + mon.icon}></i>
                    </span>
                    <span>{mon.name}</span>
                </span>
            </h5>
        )
        if(mon.description)
        {
            let paragraphs = mon.description.split('%p')
            paragraphs.forEach( par => {
                monumentList.push(
                    <p>{par}</p>
                )
            });
        }
        monumentList.push(<br/>)
    });

    return (
        <div className="content is-scrollable">
            <div className="columns">
                <div className="column is-narrow">
                    <figure className="image is-128x128 m-3">
                        <img src={`/images/constituency/shield_${constituencyData.id}.png`} alt={constituencyData.name} />
                    </figure>
                </div>
                <div className="column">
                    <span> 
                        <h1>{constituencyData.name}</h1>
                    </span>
                    <hr/>
                    <CodexConstituencyMutableDescription name={constituencyData.name} description={constituencyData.description} attributes={constituencyData.attributes}/>
                </div>
            </div>
            <div className="content">
                <h4>Points of Interest</h4>
                <hr />
                {monumentList}
            </div>
        </div>
    )
}