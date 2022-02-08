import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn} from "../auth/authutils";


export default function ProtectedRoute({ component })
{
    const { loggedInState} = React.useContext(isLoggedIn)

    if(loggedInState)
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
