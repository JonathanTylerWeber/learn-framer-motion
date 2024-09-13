import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './Navbar';
import Basics from './pages/learn/Basics';
import Gestures from './pages/learn/Gestures';
import { AnimatePresence } from 'framer-motion';
import Learn from './pages/learn/Learn';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setPageText } from './slices/pageSlice';


export default function App() {

  const location = useLocation()
  const dispatch = useDispatch();

  useEffect(() => {
    // Set page text based on the current path
    const pathTextMap: { [key: string]: string } = {
      '/': 'Home',
      '/about': 'About',
      '/learn': 'Basics',
      '/learn/basics': 'Basics',
      '/learn/gestures': 'Gestures',
    };

    dispatch(setPageText(pathTextMap[location.pathname] || ''));
  }, [location, dispatch]);

  return (
    <div className='App'>
      <Navbar />
      <AnimatePresence mode='wait' >
        <Routes location={location} key={location.pathname} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn" element={<Learn />}>
            <Route index element={<Basics />} />
            <Route path="basics" element={<Basics />} />
            <Route path="gestures" element={<Gestures />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div >
  );
}

