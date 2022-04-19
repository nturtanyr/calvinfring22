import React from "react";
import axios from "axios";
import { Amplify } from 'aws-amplify';
import {
  Outlet
} from "react-router-dom";
import { Authenticator, useAuthenticator, SelectField, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { I18n } from 'aws-amplify';

I18n.putVocabulariesForLanguage('en', {
    'Sign In': 'Returning Citizen',
    'Sign in': 'Log in',
    'Create Account': 'Register as a Citizen',
    'Create a new account': 'Citizen Registration',
});

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
                                <Text className="content has-text-warning is-size-7"><p>You are now registering to vote as a citizen of Kalmany, so as to use the voting mechanism<sup>*</sup> provided in the user area.</p><p>Currently, The Kalmany Electoral Commission has no means to verify you are a official citizen of Kalmany or if you are lying<sup>**</sup>. Therefore we ask you politely to input your information as accurately as you can possibly afford or wish to.</p><p>We will not/cannot use your information for nefarious<sup>***</sup> ends.</p></Text>
                            </>
                        );
                    },
                },
            }}
            services={{
                async validateConstituency(formData) {
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