import './App.css';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Amplify from "aws-amplify";

import Layout from './components/layout/layout';
import Home from './components/home/home';
import Assembly from './components/assembly/assembly';
import Rankings from './components/rankings/rankings';
import Candidate from './components/candidate/candidate';
import Demography from './components/demography/demography';
import News from './components/news/news';
import Codex from './components/codex/codex';
import Election from './components/election/election';
import UserPage from './components/user/userpage';
import Login from './components/auth/login';
import Register from './components/auth/register';
import ProtectedRoute from './components/auth/protectedroute';
import Confirmation from './components/auth/confirmation';
import {userDetails, useAuthenticatedUser} from './components/auth/authutils';

Amplify.configure({
  aws_cognito_region: "eu-west-2",
  aws_user_pools_id: "eu-west-2_9qwNvza2L",
  aws_user_pools_web_client_id: "5p1s59hddne68gvq5lfuvth163",
});

export default function App() {
  
  var userInfo = useAuthenticatedUser();

  return (
    <userDetails.Provider value={userInfo}>
      <Routes>
        <Route element={<Layout color="blue" />}>
          <Route path="/" element={<Home />} />
          <Route path="/candidate" element={<Candidate candidate_index={0}/>} />
          <Route path="/demographies" element={<Demography />} />
          <Route path="/election/:id"  element={<Election />} />
          <Route path="/assembly/:id" element={<Assembly />} />
          <Route path="/rankings" element={<Rankings />} />
        </Route>
        <Route path="/news" element={<Layout color="red" />}>
          <Route index element={<News />} />
        </Route>
        <Route  element={<Layout color="cyan" />}>
          <Route path="/codex" element={<Codex />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<ProtectedRoute component={UserPage}/>} />
        </Route>
      </Routes>
    </userDetails.Provider>
  );
};
