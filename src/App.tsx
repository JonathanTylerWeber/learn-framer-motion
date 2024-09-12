import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './Navbar';
import Basics from './pages/learn/Basics';
import Gestures from './pages/learn/Gestures';
import Learn from './pages/learn/Learn';

const HeaderLayout = () => (
  <>
    <header>
      <Navbar />
    </header>
    <Outlet />
  </>
);


const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/learn',
        element: <Learn />,
        children: [
          {
            path: '/learn/basics',
            element: <Basics />
          },
          {
            path: '/learn/gestures',
            element: <Gestures />
          }
        ]
      },
    ],
  },
]);


export default function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}
