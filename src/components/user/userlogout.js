import React from "react";
import axios from "axios";

export default function UserLogout({signOut}){
    
    return (
        <div className="content">
            
            <p className="has-text-centered has-text-danger">Are you sure you want to logout?</p>
            <div className="buttons is-centered">
                <button className="button is-primary" onClick={signOut}>Logout</button>
            </div>
        </div>
    );
}