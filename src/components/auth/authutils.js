import React from "react";
import axios from 'axios';
import { Auth } from "aws-amplify";

export function useHasUserVoted() {
    const [userHasVoted, setUserHasVoted] = React.useState(false);
    
    Auth.currentSession()
    .then( response => {
        var options = {
            headers: {
                Authorization: response.getIdToken().jwtToken,
                "Content-Type" : "application/json"
            }
        }
    
        axios.get(`${process.env.REACT_APP_API_ROOT}/user/vote`,options)
        .then(res => {
            const data = res.data.data;
            if(data.length > 0)
            {
                setUserHasVoted(true);
            }
            else
            {
                setUserHasVoted(false);
            }
        })
        .catch(error => {
            setUserHasVoted(false);
        });
    })
    .catch(error => {
        setUserHasVoted(false);
    });

    return userHasVoted
}