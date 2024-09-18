import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setActiveTab } from '../slices/tabSlice';

export const SlideTabs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const activeTab = useSelector((state: RootState) => state.tab.activeTab);

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 1,
  });

  const location = useLocation(); // Get the current path

  useEffect(() => {
    let activeTabPath = location.pathname;
    if (location.pathname.startsWith('/learn')) {
      activeTabPath = '/learn/basics'; // Set the active tab to "Learn" for any subroute
    }

    // Set the active tab state
    dispatch(setActiveTab(activeTabPath));

    // Update the cursor position based on the active tab
    const tabClassName = `tab-${sanitizeClassName(activeTabPath)}`;
    const activeTabElement = document.querySelector(`.${tabClassName}`);
    if (activeTabElement) {
      const { offsetLeft } = activeTabElement as HTMLElement;
      const { width } = activeTabElement.getBoundingClientRect();
      setPosition({ left: offsetLeft, width, opacity: 1 });
    }
  }, [location, dispatch]);
  return (
    <ul
      onMouseLeave={() => {
        // Move cursor to the currently active link on mouse leave
        const tabClassName = `tab-${sanitizeClassName(activeTab)}`;
        const activeTabElement = document.querySelector(`.${tabClassName}`);
        if (activeTabElement) {
          const { offsetLeft } = activeTabElement as HTMLElement;
          const { width } = activeTabElement.getBoundingClientRect();
          setPosition({ left: offsetLeft, width, opacity: 1 });
        }
      }}
      className="relative mx-auto flex w-fit rounded-full bg-gray-800 p-1"
    >
      <Tab setPosition={setPosition} to="/">
        Home
      </Tab>
      <Tab setPosition={setPosition} to="/about">
        About
      </Tab>
      <Tab setPosition={setPosition} to="/learn/basics">
        Learn
      </Tab>
      <Tab setPosition={setPosition} to="/projects">
        Projects
      </Tab>

      <Cursor position={position} to={activeTab} navigate={navigate} />
    </ul>
  );
};

const sanitizeClassName = (name: string) => {
  return name.replace(/[^a-zA-Z0-9-_]/g, '_');
};


type TabProps = {
  children: ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  to: string;
};


const Tab = ({ children, setPosition, to }: TabProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const ref = useRef<HTMLLIElement>(null);

  const tabClassName = `tab-${sanitizeClassName(to)}`;

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className={`relative z-10 block cursor-pointer text-white ${tabClassName}`}
    >
      <NavLink
        to={to}
        onClick={() => dispatch(setActiveTab(to))}
        className={({ isActive }) =>
          `block px-8 py-3 text-base ${isActive ? 'active-tab' : ''}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};

type CursorProps = {
  position: Position;
  to: string;
  navigate: (path: string) => void;
};

const Cursor = ({ position, to, navigate }: CursorProps) => {
  const handleClick = () => {
    navigate(to); // Navigate to the active tab
  };

  return (
    <motion.li
      onClick={handleClick}
      animate={position}
      className="absolute z-0 rounded-full bg-teal-600 h-12 cursor-pointer"
    />
  );
};
