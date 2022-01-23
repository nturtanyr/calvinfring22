import React from "react";
import axios from 'axios';

export default function ConstituencyDemography(props) {
    let [demographyData, setDemographyData] = React.useState([]);
    
    React.useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency/` + props.constituency_id + `/candidates`)
        .then(res => {
            const data = res.data.data;
            setDemographyData(data);
        })
        
    },[props.constituency_id]);

    if (demographyData)
    {
        return (
            <div>
            { demographyData && (
                <div className='columns'>
                    <div className='column'>
                    <table className="table">
                        <thead>
                            <tr><th>Ethnicity</th></tr>
                        </thead>
                        <tbody>
                            {demographyData.ethnicity.map(data =>
                                <tr key={`eth${data.name}`}><td>{data.name}</td><td>{data.percent.substring(0,4)}%</td></tr>
                            )}
                        </tbody>
                    </table>
                    <table className="table">
                        <thead>
                            <tr><th>Religion</th></tr>
                        </thead>
                        <tbody>
                        {demographyData.religion.map(data =>
                                <tr key={`rel${data.name}`}><td>{data.name}</td><td>{data.percent.substring(0,4)}%</td></tr>
                            
                        )}
                        </tbody>
                    </table>
                </div>
                <div className="column">
                    <table className="table">
                        <thead>
                            <tr><th>Industry</th></tr>
                        </thead>
                        <tbody>
                        {demographyData.industry.map(data =>
                                <tr key={`ind${data.name}`}><td>{data.name}</td><td>{data.percent.substring(0,4)}%</td></tr>
                            
                        )}
                        </tbody>
                    </table>
                    </div>
                    <div className="column">
                    <table className="table">
                        <thead>
                            <tr><th>Sex</th></tr>
                        </thead>
                        <tbody>
                        {demographyData.sex.map(data =>
                                <tr key={`sex${data.name}`}><td>{data.name}</td><td>{data.percent.substring(0,4)}%</td></tr>
                            
                        )}
                        </tbody>
                    </table>
                    <table className="table">
                        <thead>
                            <tr><th>Sexuality</th></tr>
                        </thead>
                        <tbody>
                        {demographyData.sexuality.map(data =>
                                <tr key={`sey${data.name}`}><td>{data.name}</td><td>{data.percent.substring(0,4)}%</td></tr>
                            
                        )}
                        </tbody>
                    </table>
                    <table className="table">
                        <thead>
                            <tr><th>Age</th></tr>
                        </thead>
                        <tbody>
                        {demographyData.age.map(data =>
                                <tr key={`age${data.name}`}><td>{data.name}</td><td>{data.percent.substring(0,4)}%</td></tr>
                            
                        )}
                        </tbody>
                    </table>
                    </div>
                </div>
            )}
            </div>
        )
    }
    else
    {
        return ("?")
    }
}
