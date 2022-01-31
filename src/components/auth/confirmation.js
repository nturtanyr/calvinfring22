import React from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

export default function Confirmation()
{
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const [emailEntry, setEmailEntry] = React.useState(null);
  const [codeEntry, setCodeEntry] = React.useState(null);

  const handleSubmit = async function (e){
    e.preventDefault();
    setLoading(true);

    try {
      await Auth.confirmSignUp(emailEntry, codeEntry);
      alert("Success!!", "Verified Successfully", "success");
      navigate("/signin");
    } catch (error) {
      alert("Error!!", error.message, "danger");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
    <h1>
      Confirm Account
    </h1>
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
      <label className="label">Verification Code</label>
      <div className="control has-icons-left">
        <input className="input is-danger" type="text" placeholder="Check your email"  value={codeEntry} onChange={e => setCodeEntry(e.target.value)}/>
        <span className="icon is-small is-left">
          <i className="fas fa-lock"></i>
        </span>
      </div>
    </div>
    <button className={`button is-primary ${loading && "is-loading"}`} type="submit">Verify</button>
  </form>
  );
};
