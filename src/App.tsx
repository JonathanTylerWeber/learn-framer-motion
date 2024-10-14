import Home from './pages/Home';
import About from './pages/About';
import Navbar from './Navbar';
import Basics from './pages/learn/Basics';
import Gestures from './pages/learn/Gestures';
import Learn from './pages/learn/Learn';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './pages/NotFound';
import Preloader from './components/Preloader';

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setPageText } from './slices/pageSlice';
import ScrollToTop from './components/ScrollToTop';


export default function App() {
  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

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
      {isPreloading && <Preloader />}
      <Navbar />
      <ErrorBoundary>
        <AnimatePresence mode='wait' >
          <ScrollToTop />
          <Routes location={location} key={location.pathname} >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/learn" element={<Learn />}>
              <Route index element={<Basics />} />
              <Route path="basics" element={<Basics />} />
              <Route path="gestures" element={<Gestures />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </ErrorBoundary>
    </div >
  );
}

