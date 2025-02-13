import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideNav: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav
      className="w-60 fixed top-0 h-full bg-slate-900 text-slate-400 p-4 space-y-4 
     flex-col  items-center flex "
    >
      <h2 className="text-lime-200 text-xl font-bold mt-24 mr-10">Learning</h2>
      <ul className="space-y-2">
        <li>
          <Link
            to="/learn/basics"
            className={`hover:underline hover:text-lime-100
        ${currentPath === "/learn" ? "text-white" : "text-slate-400"} 
        ${currentPath === "/learn/basics" ? "text-white" : "text-slate-400"} `}
          >
            Basic Animations
          </Link>
        </li>
        <li>
          <Link
            to="/learn/gestures"
            className={`hover:underline hover:text-lime-100
          ${
            currentPath === "/learn/gestures" ? "text-white" : "text-slate-400"
          } `}
          >
            Gestures
          </Link>
        </li>
        <li>
          <Link
            to="/learn/variants"
            className={`hover:underline hover:text-lime-100
          ${
            currentPath === "/learn/variants" ? "text-white" : "text-slate-400"
          } `}
          >
            Variants
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
