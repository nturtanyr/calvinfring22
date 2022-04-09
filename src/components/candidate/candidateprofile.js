import React from "react";

function CandidateProfile({candidateData, candidateCitizenData}) {

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
                        <tr><td>Home: </td><td>{candidateCitizenData.homeConstituency.name}</td></tr>
                        <tr><td>Lives: </td><td>{candidateCitizenData.constituency.name}</td></tr>
                        <tr><td>Status: </td><td>{candidateData.running ? "Running for election" : "Retired from politics"}</td></tr>
                        <tr><td>Likes: </td><td>{candidateCitizenData.like}</td></tr>
                        <tr><td>Dislikes: </td><td>{candidateCitizenData.dislike}</td></tr>
                        <tr><td>Wears Socks: </td><td>{candidateCitizenData.wearsSocks ? "Yes" : "No"}</td></tr>
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
                        <tr><td>Age: </td><td>{candidateCitizenData.age}</td></tr>
                        <tr><td>Gender: </td><td>{candidateCitizenData.gender.name}</td></tr>
                        <tr><td>Sexuality: </td><td>{candidateCitizenData.sexuality.name}</td></tr>
                        <tr><td>Ethnicity: </td><td>{candidateCitizenData.ethnicity.name}</td></tr>
                        <tr><td>Industry: </td><td>{candidateCitizenData.industry.name}</td></tr>
                        <tr><td>Religion: </td><td>{candidateCitizenData.religion.name}</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CandidateProfile;