import React from "react";
import axios from "axios";
import { Amplify } from 'aws-amplify';
import {
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";
import { Authenticator, useAuthenticator, SelectField } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure({
    aws_cognito_region: "eu-west-2",
    aws_user_pools_id: "eu-west-2_9qwNvza2L",
    aws_user_pools_web_client_id: "5p1s59hddne68gvq5lfuvth163",
  });

export default function AuthenticatedRoute(){

    const [conList, setConstituencies] = React.useState([]);
  
    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency`)
        .then(res => {
            const constituencies = res.data.data;
            setConstituencies(constituencies.sort((a,b) => {return a.name.localeCompare(b.name)}));
        })
    },[]);

    return (
        
        <Authenticator 
            loginMechanisms={['email']} 
            signUpAttributes={['name', 'email','custom:constituency']} 
            components={{
                SignUp: {
                    FormFields() {
                        const { validationErrors } = useAuthenticator();

                        return (
                            <>
                                <Authenticator.SignUp.FormFields />
                                <SelectField 
                                    label="Constituency"
                                    errorMessage={validationErrors["custom:constituency"]}
                                    hasError={!!validationErrors["custom:constituency"]}
                                    name="custom:constituency"
                                >
                                    {conList.map(con =>
                                        <option key={`con-${con.id}`} value={con.id}>{con.name}</option>
                                    )}
                                </SelectField>
                            </>
                        );
                    },
                },
            }}
            services={{
                async validateConstituency(formData) {
                    console.log(formData["custom:constituency"]);
                    if (formData["custom:constituency"] === 0) {
                        return {
                        "custom:constituency": 'You must pick a home constituency.',
                        };
                    }
                },
            }}
        >
            {({ signOut, user }) => (<Outlet/>)}
        </Authenticator>
    )

}