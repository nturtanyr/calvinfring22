import React from "react";
    
function generateStars(value){
    var rating = []
    for (let i = 0; i < value; i++) {
        rating.push(<i className="far fa-star"></i>);
    }

    return rating
}

function CandidateProfile(props) {

    if (props.data)
    {
        var running_state
        var wears_socks
        if(props.data.profile.running)
        {
            running_state = "Running for election"
        }else{
            running_state = "Retired from politics"
        }
        if(props.data.profile.wears_socks)
        {
            wears_socks = "Yes"
        }else{
            wears_socks = "No"
        }
        return (
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Citizen Data
                    </p>
                </header>
                <div className="card-content">
                <div className='columns'>
                    <div className='column'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="has-text-centered" colSpan={2}>Personal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Home: </td><td>{props.data.profile.home_constituency_name}</td></tr>
                                <tr><td>Lives: </td><td>{props.data.profile.constituency_name}</td></tr>
                                <tr><td>Status: </td><td>{running_state}</td></tr>
                                <tr><td>Likes: </td><td>{props.data.profile.like}</td></tr>
                                <tr><td>Dislikes: </td><td>{props.data.profile.dislike}</td></tr>
                                <tr><td>Wears Socks: </td><td>{wears_socks}</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='column'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="has-text-centered" colSpan={2}>Demography</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Age: </td><td>{props.data.profile.age}</td></tr>
                                <tr><td>Sex: </td><td>{props.data.sex.name}</td></tr>
                                <tr><td>Sexuality: </td><td>{props.data.sexuality.name}</td></tr>
                                <tr><td>Ethnicity: </td><td>{props.data.ethnicity.name}</td></tr>
                                <tr><td>Industry: </td><td>{props.data.industry.name}</td></tr>
                                <tr><td>Religion: </td><td>{props.data.religion.name}</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </div>
        )
    }
    else
    {
        return ("?")
    }
}

export default CandidateProfile;