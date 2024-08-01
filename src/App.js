import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import BiteNYC from './pages/BiteNYC';
import Cogni from './pages/Cogni';
import PennyWise from './pages/PennyWise';
import Trove from './pages/Trove';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/bitenyc" element={<BiteNYC />} />
        <Route path="/cogni" element={<Cogni />} />
        <Route path="/pennywise" element={<PennyWise />} />
        <Route path="/trove" element={<Trove />} />
      </Routes>
    </div>
  );
}

export default App;
