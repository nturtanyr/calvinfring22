import './App.css';

import {
  Routes,
  Route
} from "react-router-dom";

import Layout from './components/layout';
import Home from './components/home';
import Constituency from './components/constituency';
import Assembly from './components/assembly';
import Rankings from './components/rankings';
import Candidate from './components/candidate';
import News from './components/news';
import Codex from './components/codex';
import Election from './components/election';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout color="blue"/>}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/constituency/:id" element={<Layout color="blue"/>}>
        <Route index element={<Constituency />} />
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
