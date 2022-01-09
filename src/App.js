import './App.css';

import {
  Routes,
  Route
} from "react-router-dom";

import Layout from './components/layout';
import Home from './components/home';
import Constituency from './components/constituency';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="constituency/:id" element={<Layout />}>
        <Route index element={<Constituency />} />
      </Route>
    </Routes>
  );
}

export default App;
