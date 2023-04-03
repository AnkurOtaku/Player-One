import React from 'react';
import { useState, useRef, useEffect } from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Click event listener to the document object to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="z-50 bg-black text-xl text-white sticky top-0 w-full">
      <div className="container mx-auto flex items-center justify-between max-w-[1440px] py-2 px-5 md:px-10">
        <div className="relative inline-block text-left" ref={dropdownRef}>
          <div>
            <button
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2"
              id="menu-button"
              onClick={toggleDropdown}
              aria-expanded="true"
              aria-haspopup="true"
            >
              =
            </button>
          </div>

          {/* Add the dropdown menu */}
          {isOpen && (
            <div
              className="origin-top-left absolute left-0 mt-2 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <Link
                  to="/Cafeteria"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  Price Chart
                </Link>
                <Link
                  to="/Shop"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  Shop
                </Link>
                <a
                  href="#ContactUs"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
        <Link to="/" className='px-3 py-2 rounded-xl hover:bg-lime-500 hover:text-black'>Player One</Link>
        <img src='spidy.jpg' alt='' className="hidden md:block h-10 w-10 hover:bg-lime-500"/>
      </div>
    </nav>
  );
};

export default Navbar;