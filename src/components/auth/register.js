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

    if (passwordEntry.current.value !== passwordConfirmEntry.current.value) {
      alert(
        "Error!!",
        "Password and Confirm Password should be same",
        "danger"
      );
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
      alert("Success!!", "Signup was successful", "success");
      navigate("/confirmation");
    } catch (error) {
      console.error(error);
      alert("Error!!", error.message, "danger");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSignUp} >
      <div className="field">
          <label className="label">Citizen Name</label>
          <div className="control">
              <input ref={nameEntry} className="input" type="text" placeholder="Name"/>
          </div>
      </div>
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
          </div>
      </div>
      <div className="field">
          <label className="label">Confirm Password</label>
          <div className="control has-icons-left">
              <input ref={passwordConfirmEntry} className="input is-danger" type="password" placeholder="********"/>
              <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
              </span>
          </div>
      </div>
      <div className="field">
          <label className="label">Constituency Register</label>
          <div className="select">
              <select ref={constituencyEntry}>
              {
                  conList.map(con =>
                      <option keys={`con-${con.id}`} value={con.id}>{con.name}</option>
                  )
              }
              </select>
          </div>
      </div>
      <p>
          <strong>If you are already registered as a citizen, you can login <Link to="/login">here</Link>.</strong>
      </p>
      <button className={`button is-primary ${loading && "is-loading"}`} type="submit">Register</button>
    </form>
  );
};
