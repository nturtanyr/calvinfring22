import React from "react";
import {
	CognitoUserPool,
	CognitoUserAttribute
} from 'amazon-cognito-identity-js';

export default function FormLogin() {

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
                        <input className="input" type="text" placeholder="Name"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Citizen Email</label>
                    <div className="control has-icons-left">
                        <input className="input" type="email" placeholder="Email"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Citizen Password</label>
                    <div className="control has-icons-left">
                        <input className="input is-danger" type="password" placeholder="********"/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </div>
                </div>
                <p>
                    <strong>If you are a citizen of Kalmany and haven't registered to vote, please register <a>here</a>.</strong>
                </p>
            </section>
            <footer className="modal-card-foot">
                <button className="button is-primary">Login</button>
                <button className="button">Cancel</button>
            </footer>
        </form>
    )
}
