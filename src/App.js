import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import React from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';

import Layout from './components/layout/layout';
import Home from './components/home/home';
import Assembly from './components/assembly/assembly';
import Rankings from './components/rankings/rankings';
import News from './components/news/news';
import Codex from './components/codex/codex';
import UserPage from './components/user/userpage';
import ConstituencyDemography from "./components/demography/constituencydemography";
import ConstituencyElectionChart from "./components/election/electionresults";
import UserVoting from "./components/user/uservoting";
import UserProfile from "./components/user/userprofile";
import UserLogout from "./components/user/userlogout";
import AuthenticatedRoute from './components/user/authroute';
import NotFound from './components/util/notfound';
import ConstituencyNav from './components/layout/constituencynavigator';
import CandidateNav from './components/candidate/candidatenav';


export default function App() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  return (
      <Routes>
        <Route element={<Layout color="blue" />}>
          <Route path="/" element={<Home />} />
          <Route path="/election/:election_id/candidate/:candidate_id" element={<CandidateNav/>}>
          </Route>
          <Route path="/demography" element={<ConstituencyNav 
            title={"Demography Information"} 
            subtitle={"We provide this interface to easily observe the demography statistics of all constituencies."}
          />}>
            <Route path=":constituency_id" element={<ConstituencyDemography constituency_id={0}/>} />
          </Route>
          <Route path="/assembly/:id" element={<Assembly />} />
          <Route path="/rankings" element={<Rankings />} />
        </Route>
        <Route element={<Layout color="red" />}>
          <Route path="/news" element={<News />} />
        </Route>
        <Route  element={<Layout color="cyan" />}>
          <Route path="/codex" element={<Codex />} />
          <Route element={<AuthenticatedRoute/>}>
            <Route path="/user" element={<UserPage signOut={signOut}/>}>
              <Route index element={<UserProfile/>} />
              <Route path="logout" element={<UserLogout signOut={signOut}/>} />
              <Route path="voting" element={<UserVoting constituency_id={user ? user.attributes['custom:constituency'] : 0}/>} />
              <Route path="demography" element={<ConstituencyDemography constituency_id={user ? user.attributes['custom:constituency'] : 0}/>} />
              <Route path="election" element={<ConstituencyElectionChart constituency_id={user ? user.attributes['custom:constituency'] : 0} election_id="latest"/>} />
            </Route>
          </Route>
        </Route>
        <Route element={<Layout color="red" />}>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
  );
};