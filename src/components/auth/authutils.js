import React from "react";
import { Auth } from "aws-amplify";
import { useParams } from "react-router-dom";

export const userDetails = React.createContext({ "loggedIn" : false, "userAttributes" : []});

export function useAuthenticatedUser() {

    let params = useParams();

    const [userInfo, setUserInfo] = React.useState({"loggedIn" : false});

    React.useEffect(() => {
        (async () => {
            let dictionary = null;
            let user = null;
    
            try {
                user = await Auth.currentAuthenticatedUser();
                if (user) {
                    dictionary = {
                        "loggedIn" : true,
                        "email" :  user.attributes.email,
                        "constituency_id" :  user.attributes['custom:constituency'],
                        "name" :  user.attributes.name
                    };
                    setUserInfo(dictionary);
                } else {
                    dictionary = {
                        "loggedIn" : false
                    };
                    setUserInfo(dictionary);
                }
            } catch (e) {
                dictionary = {
                    "loggedIn" : false
                };
                setUserInfo(dictionary);
            };
        })();
    },[params]);

    return userInfo;
}