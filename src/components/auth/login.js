import React from "react";
import { Auth } from "aws-amplify";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn } from "./authutils";

export default function Login() {
  const [loading, setLoading] = React.useState(false);
  const [passwordInvalid, setPasswordInvalid] = React.useState(false);
  const [emailInvalid, setEmailInvalid] = React.useState(false);
  const [detailsInvalid, setDetailsInvalid] = React.useState(false);
  const [errorInvalid, setErrorInvalid] = React.useState(false);

  const { setLoggedInState } = React.useContext(isLoggedIn)

  const navigate = useNavigate();

  const emailEntry = React.createRef()
  const passwordEntry = React.createRef()

  const handleSubmit = async function (e){
    e.preventDefault();
    setLoading(true);
    Auth.signIn(emailEntry.current.value, passwordEntry.current.value)
    .then(response => {
      setLoggedInState(true)
      setLoading(false);
      navigate("/");
    })
    .catch(error => {
      console.log(error.message)
      if(error.message.match("Username cannot be empty"))
      {
        setEmailInvalid(true)
        console.log("Username cannot be empty")
      }
      else if(error.message.match("Custom auth lambda trigger is not configured for the user pool."))
      {
        setPasswordInvalid(true)
        console.log("Password cannot be empty")
      }
      else if(error.message.match("Incorrect username or password."))
      {
        setDetailsInvalid(true)
        console.log("Incorrect username or password.")
      }
      else
      {
        setErrorInvalid(true)
        console.log("Something went wrong")
      }
      setLoading(false);
    })
  };

  const handleChange = function() {
    
    setEmailInvalid(false)
    setPasswordInvalid(false)
    setDetailsInvalid(false)
    setErrorInvalid(false)
  }
  return (
    <>
    <div className="block"/>
    <div className="columns is-centered">
      <div className="column is-one-third">
        <p className="title">Citizen Login</p>
        <hr/>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Citizen Email</label>
            <div className="control has-icons-left">
              <input ref={emailEntry} className={`input ${(emailInvalid || detailsInvalid ) && "is-danger"}`} type="email" placeholder="Email" onChange={handleChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <p class={`help is-danger ${!emailInvalid && "is-hidden"}`}>You must enter a valid email</p>
            </div>
          </div>
          <div className="field">
            <label className="label">Citizen Password</label>
            <div className="control has-icons-left">
              <input ref={passwordEntry} className={`input ${(passwordInvalid || detailsInvalid) && "is-danger"}`} type="password" placeholder="********" onChange={handleChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
              <p class={`help is-danger ${!passwordInvalid && "is-hidden"}`}>Password is incorrect</p>
            </div>
          </div>
          <p class={`help is-danger ${!detailsInvalid && "is-hidden"}`}>Username or password is incorrect</p>
          <p class={`help is-danger ${!errorInvalid && "is-hidden"}`}>Something went wrong - try again later</p>
          <p>
              <strong>If you are a citizen of Kalmany and haven't registered to vote, please register <Link to="/register">here</Link>.</strong>
          </p>
          <p><i>If you have forgotten your password, you can reset it <a>here</a>.</i></p>
          <hr/>
          <button className={`button is-primary ${loading && "is-loading"}`} type="submit">Login</button>
        </form>
      </div>
    </div>
    <div className="block"/>
    </>
  );
};
