import React from "react";

export default class ConstituencyDemography extends React.Component {
    
    render() {
        if (this.props.data)
        {
            return (
                <div className="tabcontent is-hidden" id="tabDemography">
                { this.props.data && (
                    <div className='columns'>
                        <div className='column'>
                        <table className="table">
                            <thead>
                                <tr><th>Ethnicity</th></tr>
                            </thead>
                            <tbody>
                                {this.props.data.ethnicity.map(data =>
                                    <tr key={`eth${data.name}`}><td>{data.name}</td><td>{data.percent.substring(0,4)}%</td></tr>
                                )}
                            </tbody>
                        </table>
                        <table className="table">
                            <thead>
                                <tr><th>Religion</th></tr>
                            </thead>
                            <tbody>
                            {this.props.data.religion.map(data =>
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
                            {this.props.data.industry.map(data =>
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
                            {this.props.data.sex.map(data =>
                                    <tr key={`sex${data.name}`}><td>{data.name}</td><td>{data.percent.substring(0,4)}%</td></tr>
                                
                            )}
                            </tbody>
                        </table>
                        <table className="table">
                            <thead>
                                <tr><th>Sexuality</th></tr>
                            </thead>
                            <tbody>
                            {this.props.data.sexuality.map(data =>
                                    <tr key={`sey${data.name}`}><td>{data.name}</td><td>{data.percent.substring(0,4)}%</td></tr>
                                
                            )}
                            </tbody>
                        </table>
                        <table className="table">
                            <thead>
                                <tr><th>Age</th></tr>
                            </thead>
                            <tbody>
                            {this.props.data.age.map(data =>
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
}
