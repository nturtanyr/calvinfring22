import './App.css';

import {
  Routes,
  Route
} from "react-router-dom";

import Layout from './components/layout/layout';
import Home from './components/home/home';
import Assembly from './components/assembly/assembly';
import Rankings from './components/rankings/rankings';
import Candidate from './components/candidate/candidatecard';
import News from './components/news/news';
import Codex from './components/codex/codex';
import Election from './components/election/election';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout color="blue"/>}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/candidate/:id" element={<Layout color="blue"/>}>
        <Route index element={<Candidate />} />
      </Route>
      <Route path="/election/:id" element={<Layout color="blue"/>}>
        <Route index element={<Election />} />
      </Route>
      <Route path="/assembly/:id" element={<Layout color="blue"/>}>
        <Route index element={<Assembly />} />
      </Route>
      <Route path="/news" element={<Layout color="red"/>}>
        <Route index element={<News />} />
      </Route>
      <Route path="/rankings" element={<Layout color="blue"/>}>
        <Route index element={<Rankings />} />
      </Route>
      <Route path="/codex" element={<Layout color="cyan"/>}>
        <Route index element={<Codex />} />
      </Route>
    </Routes>
  );
}

export default App;
