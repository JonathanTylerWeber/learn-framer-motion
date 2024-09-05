import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './Navbar';
import Learn from './pages/Learn';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </Router>
  );
}


export default App
