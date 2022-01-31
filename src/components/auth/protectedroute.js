import React from "react";
import { Navigate } from "react-router-dom";
import {userDetails} from "../auth/authutils";


export default function ProtectedRoute({ component })
{
    var loggedIn = React.useContext(userDetails).loggedIn

    if(loggedIn)
    {
        return (
            React.createElement(component)
        )
    }
    else
    {
        return (
          <Navigate to="/login" />
        )
    }
};
