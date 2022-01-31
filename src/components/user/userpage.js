import React from "react";
import axios from "axios";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { userDetails } from "../auth/authutils";
import ConstituencyDemography from "../demography/constituencydemography";
import ConstituencyElectionChart from "../election/electionresults";

export default function UserPage() {
  const navigate = useNavigate();
  const userName = React.useContext(userDetails).name
  const userEmail = React.useContext(userDetails).email
  const userConstituencyID = React.useContext(userDetails).constituency_id
  const [currentConstituency, setCurrentConstituency] = React.useState([])
  
  const [selected_index, setSelectedIndex] = React.useState(0)

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      alert("Success!!", "Logged out successfully!", "success");
      navigate("/");
    } catch (error) {
      alert("Error!!", error.message, "danger");
    }
  };
  
  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_ROOT}/constituency/` + userConstituencyID)
        .then(res => {
            const data = res.data.data;
            setCurrentConstituency(data[0]);
            console.log(data)
        })
  },[]);

  function determinePage(index) {
    switch(index){
      default:
        return (
          <>
            <div className="content">
                <h2>{userName}</h2>
                <hr/>
                <p>Email: {userEmail}</p>
                <p>Home: {currentConstituency && (currentConstituency.name)}</p>
            </div>
            <div>
              <button className="button is-danger" onClick={handleLogout}>Logout</button>
            </div>
          </>
        )
      case 0:
        return (
            <div className="content">
                <h2>{userName}</h2>
                <hr/>
                <p>Email: {userEmail}</p>
                <p>Home: {currentConstituency && (currentConstituency.name)}</p>
            </div>
        )
      case 1:
        return (<div>
            <button className="button is-danger" onClick={handleLogout}>Logout</button>
          </div>)
      case 2:
        return (<ConstituencyDemography constituency_id={userConstituencyID}/>)
      case 4:
        return (<ConstituencyElectionChart constituency_id={userConstituencyID} election_id="latest"/>)
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
  );
};
