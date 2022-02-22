import axios from 'axios';
import { Auth } from 'aws-amplify';

export async function castUserVote(candidate_id)
{
    Auth.currentSession()
    .then( response => {
        var options = {
            headers: {
                Authorization: response.getIdToken().jwtToken,
                "Content-Type" : "application/json"
            }
        }

        let bodyContent = {
            candidate_id : candidate_id
        }
        return axios.post(`${process.env.REACT_APP_API_ROOT}/user/vote`, bodyContent, options)
    })
    .then(response => {
        return response.data.data;
    
    });
}