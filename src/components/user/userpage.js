import React from "react";
import axios from "axios";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { isLoggedIn,  useAuthenticatedInfo } from "../auth/authutils";
import ConstituencyDemography from "../demography/constituencydemography";
import ConstituencyElectionChart from "../election/electionresults";
import UserVoting from "./uservoting";

export default function UserPage() {
  const navigate = useNavigate();
  const userDetails = useAuthenticatedInfo()
  const { setLoggedInState } = React.useContext(isLoggedIn)

  const [currentConstituency, setCurrentConstituency] = React.useState([])
  
  const [selected_index, setSelectedIndex] = React.useState(0)

  const handleLogout = async () => {
    Auth.signOut()
    .then(response => {
      setLoggedInState(false);
      navigate("/");
    });
  };
  
  React.useEffect(() => {
    if(userDetails)
    {
      axios.get(`${process.env.REACT_APP_API_ROOT}/constituency/` + userDetails['custom:constituency'])
          .then(res => {
              const data = res.data.data;
              setCurrentConstituency(data[0]);
          })
    }
  },[userDetails]);



  function determinePage(index) {
    if(!userDetails)
    {
      return (<progress className="progress is-primary" max="100"></progress>) 
    }
    else
    {
      switch(index){
        default:
          return (
            <>
              <div className="content">
                  <h2>{userDetails && userDetails.name}</h2>
                  <hr/>
                  <p>Email: {userDetails && userDetails.email} </p>
                  <p>Home: {currentConstituency && (currentConstituency.name)}</p>
              </div>
            </>
          )
        case 1:
          return (<div>
              <button className="button is-danger" onClick={handleLogout}>Logout</button>
            </div>)
        case 3:
            return (<UserVoting constituency_id={userDetails['custom:constituency']}/>)
        case 2:
          return (<ConstituencyDemography constituency_id={userDetails['custom:constituency']}/>)
        case 4:
          return (<ConstituencyElectionChart constituency_id={userDetails['custom:constituency']} election_id="latest"/>)
      }
    }
  }

    return (
      <section className="section">
          <div className="content has-text-centered">
              <h2>Your Account</h2>
              <p>You may access the user area from this page</p>
          </div>
          <div className="columns">
              <div className="column is-one-quarter">
                  <aside className="menu">
                      <p className="menu-label">
                          User Account
                      </p>
                      <ul className="menu-list">
                          <li><a onClick={() => setSelectedIndex(0)}>User Details</a></li>
                          <li><a onClick={() => setSelectedIndex(1)}>Logout</a></li>
                      </ul>
                      <p className="menu-label">
                          User Constituency
                      </p>
                      <ul className="menu-list">
                          <li><a onClick={() => setSelectedIndex(2)}>Constituency Demography</a></li>
                          <li><a onClick={() => setSelectedIndex(3)}>Constituency Candidates</a></li>
                          <li><a onClick={() => setSelectedIndex(4)}>Constituency Election</a></li>
                      </ul>
                  </aside>
              </div>
              <div className="column">
                {determinePage(selected_index)}
              </div>
          </div>
      </section>
    )
};
