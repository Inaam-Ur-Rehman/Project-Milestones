import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jpg";

const PrivateNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "Inventry","Invoice", "About", "Services", "Contact"];

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 mr-3 rounded-full" />
          <span className="text-white text-xl font-bold">
            Project Milestone
          </span>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-white hover:text-gray-400"
            >
              {item}
            </Link>
          ))}
          <Link
            to="/login"
            className="text-white bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-full"
          >
            Profile
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block text-white hover:text-gray-400 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            to="/login"
            className="block text-white bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
};

export default PrivateNavbar;
