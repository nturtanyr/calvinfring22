import React from "react";
    
function generateStars(value){
    var rating = []
    for (let i = 0; i < value; i++) {
        rating.push(<i class="far fa-star"></i>);
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
            <div className="tabcontent is-visible" id="tabProfile">
            { props.data && (
                <div>
                    <section className="content">
                        <h3>{props.data.profile.quote}</h3>
                    </section>
                    <div className='tile is-ancestor'>
                        <div class="tile is-4 is-parent">
                            <div className='tile is-child notification is-primary'>
                                <p class="subtitle">Personal</p>
                                <table className="table">
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
                        </div>
                        <div class="tile is-4 is-parent ">
                            <div className='tile is-child notification is-success'>
                                <p class="subtitle">Demography</p>
                                <table className="table">
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
                        <div class="tile is-4 is-parent">
                            <div className='tile is-child notification is-danger'>
                                <p class="subtitle">Attributes</p>
                                <table className="table">
                                    <tbody>
                                        <tr><td>Charisma: </td><td>{generateStars(props.data.attribute.charisma)}</td></tr>
                                        <tr><td>Tenacity: </td><td>{generateStars(props.data.attribute.tenacity)}</td></tr>
                                        <tr><td>Loyalty: </td><td>{generateStars(props.data.attribute.loyalty)}</td></tr>
                                        <tr><td>Baldness: </td><td>{generateStars(props.data.attribute.baldness)}</td></tr>
                                        <tr><td>Fear of Bears: </td><td>{generateStars(props.data.attribute.fear_of_bears)}</td></tr>
                                        <tr><td>Socks: </td><td>{generateStars(props.data.attribute.socks)}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
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

export default CandidateProfile;