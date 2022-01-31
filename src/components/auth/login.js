import React from "react";
import { Auth } from "aws-amplify";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const emailEntry = React.createRef()
  const passwordEntry = React.createRef()

  const handleSubmit = async function (e){
    e.preventDefault();
    setLoading(true);

    try {
      await Auth.signIn(emailEntry.current.value, passwordEntry.current.value);
      alert("Success!!", "Login Successfully", "success");
      setLoading(false);
      navigate("/");
    } catch (error) {
      alert("Error!!", error.message, "danger");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{ fontSize: "22px", fontWeight: 800 }}>
        {" "}
        Sign in to an existing account
      </h1>
      <div className="field">
        <label className="label">Citizen Email</label>
        <div className="control has-icons-left">
          <input ref={emailEntry} className="input" type="email" placeholder="Email"/>
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <label className="label">Citizen Password</label>
        <div className="control has-icons-left">
          <input ref={passwordEntry} className="input is-danger" type="password" placeholder="********" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
          <p className="help">If you have forgotten your password, you can reset it <a>here</a>.</p>
        </div>
      </div>
      <p>
          <strong>If you are a citizen of Kalmany and haven't registered to vote, please register <Link to="/register">here</Link>.</strong>
      </p>
      <button className={`button is-primary ${loading && "is-loading"}`} type="submit">Login</button>
    </form>
  );
};
