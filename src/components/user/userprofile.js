import React from "react";
import axios from "axios";
import { useAuthenticator } from '@aws-amplify/ui-react';

export default function UserProfile(){
    const { user, signOut } = useAuthenticator((context) => [context.user]);

    const [isLoading, setLoadingState] = React.useState(false);
    const [homeConstituency, setHomeConstituency] = React.useState([]);
  
    React.useEffect(() => {
        setLoadingState(true);
        
        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency/` + user.attributes['custom:constituency'])
        .then(res => {
            const data = res.data.data;
            setHomeConstituency(data[0]);
            setLoadingState(false);
        })
    },[user]);
    
    if(isLoading)
    {
        return (<progress className="progress is-primary" max="100"></progress>) 
    }
    return (
        <div className="content">
            <h2>{user.attributes.name}</h2>
            <hr/>
            <p>Email: {user.attributes.email} </p>
            <p>Home: {homeConstituency.name}</p>
        </div>
    );
}