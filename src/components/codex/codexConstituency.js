
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CodexConstituencyMutableDescription from "./codexConstituencyMutableDescription";

function getIcon(id){
    switch(id){
        case 1 :
            return <i className="fas fa-place-of-worship"></i>
        case 2 :
            return <i className="fas fa-skull-cow"></i>
        case 3 :
            return <i className="fas fa-building"></i>
        case 4 :
            return <i className="fas fa-shield-alt"></i>
        default:
            return <i className="fas fa-question"></i>
    }
}

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
                        {getIcon(mon.id)}
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
            <h3>{constituencyData.name}</h3>
            <hr/>
            <CodexConstituencyMutableDescription name={constituencyData.name} description={constituencyData.description} attributes={constituencyData.attributes}/>
            <div className="content">
                <h4>Points of Interest</h4>
                <hr />
                {monumentList}
            </div>
        </div>
    )
}