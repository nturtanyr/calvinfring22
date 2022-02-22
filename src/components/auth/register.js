import React from "react";
import axios from "axios";
import { Auth } from "aws-amplify";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const [conList, setConstituencies] = React.useState([]);

  const nameEntry = React.createRef();
  const emailEntry = React.createRef();
  const passwordEntry = React.createRef();
  const passwordConfirmEntry = React.createRef();
  const constituencyEntry = React.createRef();

  const [passwordInvalidMissingUppercase, setPasswordInvalidMissingUppercase] = React.useState(false);
  const [passwordInvalidMissingLowercase, setPasswordInvalidMissingLowercase] = React.useState(false);
  const [passwordInvalidMissingSpecialCharacter, setPasswordInvalidMissingSpecialCharacter] = React.useState(false);
  const [passwordInvalidMissingNumber, setPasswordInvalidMissingNumber] = React.useState(false);
  const [passwordInvalidLength, setPasswordInvalidLength] = React.useState(false);
  const [passwordInvalid, setPasswordInvalid] = React.useState(false);
  const [confirmPasswordInvalid, setConfirmPasswordInvalid] = React.useState(false);
  const [emailInvalid, setEmailInvalid] = React.useState(false);
  const [accountExistsInvalid, setAccountExistsInvalid] = React.useState(false);
  const [nameInvalid, setNameInvalid] = React.useState(false);
  const [errorInvalid, setErrorInvalid] = React.useState(false);

  function checkName()
  {
    setNameInvalid(false);
    if(nameEntry.current.value === '')
    {
      setNameInvalid(true);
    }
  }

  function checkEmail()
  {
    setEmailInvalid(false);
    setAccountExistsInvalid(false);
    if(emailEntry.current.value === '')
    {
      setEmailInvalid(true);
    }
  }

  function checkPasswordParameters()
  {
    setPasswordInvalid(false);
    setPasswordInvalidMissingLowercase(false)
    setPasswordInvalidMissingUppercase(false)
    setPasswordInvalidMissingSpecialCharacter(false)
    setPasswordInvalidMissingNumber(false)
    setPasswordInvalidLength(false)

    if(!passwordEntry.current.value.match('[a-z]'))
    {
      setPasswordInvalidMissingLowercase(true);
      setPasswordInvalid(true);
    }

    if(!passwordEntry.current.value.match('[A-Z]'))
    {
      setPasswordInvalidMissingUppercase(true);
      setPasswordInvalid(true);
    }

    if(!passwordEntry.current.value.match('[\\^$*.[\\]{}()?\\-"!@#%&/\\\\,><\\\':;|_~`+=]'))
    {
      setPasswordInvalidMissingSpecialCharacter(true);
      setPasswordInvalid(true);
    }

    if(!passwordEntry.current.value.match('[0-9]'))
    {
      setPasswordInvalidMissingNumber(true);
      setPasswordInvalid(true);
    }

    if(passwordEntry.current.value.length < 8)
    {
      setPasswordInvalidLength(true);
      setPasswordInvalid(true);
    }
  }

  function checkConfirmPassword()
  {
    if(passwordEntry.current.value !== passwordConfirmEntry.current.value)
    {
      setConfirmPasswordInvalid(true);
    }else{setConfirmPasswordInvalid(false);};
  }


  React.useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_ROOT}/constituency`)
      .then(res => {
          const constituencies = res.data.data;
          setConstituencies(constituencies);
      })
  },[]);

  const handleSignUp = async function (e) {
    e.preventDefault();
    setLoading(true);

    if(confirmPasswordInvalid || emailInvalid || nameInvalid || passwordInvalid)
    {
      setLoading(false);
      return;
    }

    try {
      await Auth.signUp({
        username: emailEntry.current.value,
        password: passwordConfirmEntry.current.value,
        attributes: {
          "email" : emailEntry.current.value,
          "name" : nameEntry.current.value,
          "custom:constituency": constituencyEntry.current.value,
        },
      });
      navigate("/confirmation");
    } catch (error) {
      if(error.message.match("Username cannot be empty"))
      {
        setEmailInvalid(true);
      }
      else if(error.message.match("An account with the given email already exists."))
      {
        setAccountExistsInvalid(true);
      }
      else
      {
        setErrorInvalid(true);
      }
      setLoading(false);
    }
  };

  return (
    <>
    <div className="block"/>
    <div className="columns is-centered">
      <div className="column is-one-third">
        <p className="title">Citizen Registration</p>
        <hr/>
        
    <form onSubmit={handleSignUp} >
      <div className="field">
          <label className="label">Citizen Name</label>
          <div className="control">
              <input ref={nameEntry} className={`input ${(nameInvalid) && "is-danger"}`} type="text" placeholder="Name" onChange={checkName}/>
          </div>
          <p className={`help is-danger ${!nameInvalid && "is-hidden"}`}>You must register a name as an individual.</p>
      </div>
      <div className="field">
          <label className="label">Citizen Email</label>
          <div className="control has-icons-left">
              <input ref={emailEntry} className={`input ${(emailInvalid || accountExistsInvalid) && "is-danger"}`} type="email" placeholder="Email" onChange={checkEmail}/>
              <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
              </span>
          </div>
          <p className={`help is-danger ${!emailInvalid && "is-hidden"}`}>You must attach an email as a username and to retrieve a forgotten password.</p>
          <p className={`help is-danger ${!accountExistsInvalid && "is-hidden"}`}>An account already exists with this email.</p>
      </div>
      <div className="field">
          <label className="label">Citizen Password</label>
          <div className="control has-icons-left">
              <input ref={passwordEntry} className={`input ${
                (passwordInvalid) && "is-danger"}`} type="password" placeholder="********" onChange={checkPasswordParameters}/>
              <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
              </span>
          </div>
          <p className={`help is-danger ${!passwordInvalidLength && "is-hidden"}`}>Password should be at least eight (8) characters long</p>
          <p className={`help is-danger ${!passwordInvalidMissingLowercase && "is-hidden"}`}>Password should contain a lowercase character</p>
          <p className={`help is-danger ${!passwordInvalidMissingUppercase && "is-hidden"}`}>Password should contain an uppercase character</p>
          <p className={`help is-danger ${!passwordInvalidMissingNumber && "is-hidden"}`}>Password should contain a number</p>
          <p className={`help is-danger ${!passwordInvalidMissingSpecialCharacter && "is-hidden"}`}>Password should contain a symbol</p>
      </div>
      <div className="field">
          <label className="label">Confirm Password</label>
          <div className="control has-icons-left">
              <input ref={passwordConfirmEntry} className={`input ${
                (confirmPasswordInvalid) && "is-danger"}`}  type="password" placeholder="********" onChange={checkConfirmPassword}/>
              <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
              </span>
          </div>
          <p className={`help is-danger ${!confirmPasswordInvalid && "is-hidden"}`}>Passwords do not match</p>
      </div>
      <div className="field">
          <label className="label">Constituency to register to</label>
          <div className="select">
              <select ref={constituencyEntry}>
              {
                  conList.map(con =>
                      <option key={`con-${con.id}`} value={con.id}>{con.name}</option>
                  )
              }
              </select>
          </div>
      </div>
      <p className={`help is-danger ${!errorInvalid && "is-hidden"}`}>Something went wrong - try again later</p>
      <p>
          <strong>If you are already registered as a citizen, you can login <Link to="/login">here</Link>.</strong>
      </p>
      <hr/>
      <button className={`button is-primary ${loading && "is-loading"}`} type="submit">Register</button>
    </form>
      </div>
    </div>
    <div className="block"/>
    </>
  );
};
