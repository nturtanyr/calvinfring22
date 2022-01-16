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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/rankings" element={<Layout />}>
        <Route index element={<Rankings />} />
      </Route>
      <Route path="/constituency/:id" element={<Layout />}>
        <Route index element={<Constituency />} />
      </Route>
      <Route path="/assembly/:id" element={<Layout />}>
        <Route index element={<Assembly />} />
      </Route>
    </Routes>
  );
}

export default App;
