import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { SlideTabs } from './components/SlideTabs';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close the menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className='bg-gray-800 fixed top-0 left-0 w-full z-40'>
      <div className="mx-auto max-w ">
        <div className="relative flex h-16 items-center ">

          {/* desktop menu */}
          <div className="flex items-center ml-20">
            <div className="hidden sm:flex">
              <SlideTabs />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-y-0 left-6 h-16 flex items-center sm:hidden">
        {/* Mobile menu button */}
        <button
          ref={buttonRef}
          type="button"
          onClick={toggleMobileMenu}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none "
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg
            className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div ref={menuRef} className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-6 pb-3 pt-2">
            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? "block bg-gray-900 text-white rounded-md px-3 py-2 text-base font-medium"
                  : "block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? "block bg-gray-900 text-white rounded-md px-3 py-2 text-base font-medium"
                  : "block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/learn"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? "block bg-gray-900 text-white rounded-md px-3 py-2 text-base font-medium"
                  : "block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
              }
            >
              Learn
            </NavLink>
            <NavLink
              to="/projects"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? "block bg-gray-900 text-white rounded-md px-3 py-2 text-base font-medium"
                  : "block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
              }
            >
              Projects
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;