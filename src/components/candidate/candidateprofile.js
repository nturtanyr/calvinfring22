import React from "react";

function CandidateProfile({data}) {

    var runningState = (data.profile.running ? "Running for election" : "Retired from politics")
    var wearsSocks = (data.profile.wears_socks ? "Yes" : "No")

    return (
        <div className='columns'>
            <div className='column'>
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th className="has-text-centered" colSpan={2}>Personal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Home: </td><td>{data.profile.home_constituency_name}</td></tr>
                        <tr><td>Lives: </td><td>{data.profile.constituency_name}</td></tr>
                        <tr><td>Status: </td><td>{runningState}</td></tr>
                        <tr><td>Likes: </td><td>{data.profile.like}</td></tr>
                        <tr><td>Dislikes: </td><td>{data.profile.dislike}</td></tr>
                        <tr><td>Wears Socks: </td><td>{wearsSocks}</td></tr>
                    </tbody>
                </table>
            </div>
            <div className='column'>
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th className="has-text-centered" colSpan={2}>Demography</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Age: </td><td>{data.profile.age}</td></tr>
                        <tr><td>Sex: </td><td>{data.sex.name}</td></tr>
                        <tr><td>Sexuality: </td><td>{data.sexuality.name}</td></tr>
                        <tr><td>Ethnicity: </td><td>{data.ethnicity.name}</td></tr>
                        <tr><td>Industry: </td><td>{data.industry.name}</td></tr>
                        <tr><td>Religion: </td><td>{data.religion.name}</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CandidateProfile;