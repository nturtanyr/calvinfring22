import React from "react";
import axios from 'axios';
import {
	CognitoUserPool,
	CognitoUserAttribute
} from 'amazon-cognito-identity-js';

export default function FormRegister() {
    const [conList, setConstituencies] = React.useState([]);
    const [nameEntry, setNameEntry] = React.useState(null);
    const [emailEntry, setEmailEntry] = React.useState(null);
    const [passwordEntry, setPasswordEntry] = React.useState(null);
    const [constituencyEntry, setConstituencyEntry] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ROOT}/constituency`)
        .then(res => {
            const constituencies = res.data.data;
            setConstituencies(constituencies);
        })
    },[]);

    const UserLogin = (evt) => {
        evt.preventDefault();

        var poolData = {
            "UserPoolId": 'eu-west-2_9qwNvza2L',
            "ClientId" : '5p1s59hddne68gvq5lfuvth163'
        };
        console.log(poolData)
        var userPool = new CognitoUserPool(poolData);
        
        var attributeList = [];
        var dataName = {
            Name: 'name',
            Value: nameEntry,
        };
        var dataEmail = {
            Name: 'email',
            Value: emailEntry,
        };
    
        var dataConstituency = {
            Name: 'custom:constituency',
            Value: constituencyEntry,
        };
        
        var attributeEmail = new CognitoUserAttribute(dataEmail);
        var attributeName = new CognitoUserAttribute(dataName);
        var attributeConstituency = new CognitoUserAttribute(dataConstituency);
        
        
        attributeList.push(attributeEmail);
        attributeList.push(attributeName);
        attributeList.push(attributeConstituency);
        
        userPool.signUp(emailEntry, passwordEntry, attributeList, null, function(
            err,
            result
        ) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            var cognitoUser = result.user;
            console.log('user name is ' + cognitoUser.getUsername());
        });
    }

    return (
        <form className="modal-card">
            <header className="modal-card-head">
            <p className="modal-card-title">Login</p>
            <button className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
                <div className="field">
                    <label className="label">Citizen Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Name" value={nameEntry}  onChange={e => setNameEntry(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Citizen Email</label>
                    <div className="control has-icons-left">
                        <input className="input" type="email" placeholder="Email" value={emailEntry} onChange={e => setEmailEntry(e.target.value)}/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Citizen Password</label>
                    <div className="control has-icons-left">
                        <input className="input is-danger" type="password" placeholder="********"  value={passwordEntry} onChange={e => setPasswordEntry(e.target.value)}/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Constituency Register</label>
                    <div className="select">
                        <select value={constituencyEntry} onChange={e => setConstituencyEntry(e.target.value)}>
                        {
                            conList.map(con =>
                                <option value={con.id}>{con.name}</option>
                            )
                        }
                        </select>
                    </div>
                </div>
                <p>
                    <strong>If you are already registered as a citizen, you can login <a>here</a>.</strong>
                </p>
            </section>
            <footer className="modal-card-foot">
                <button className="button is-primary" onClick={UserLogin}>Register</button>
                <button className="button">Cancel</button>
            </footer>
        </form>
    )
}