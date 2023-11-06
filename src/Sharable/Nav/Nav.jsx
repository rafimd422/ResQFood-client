import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import './nav.css'
import { Link } from 'react-router-dom';


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  const NavRoutes = <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
    <NavLink
      to="/"
      className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100"
    >
      Home
    </NavLink>
    <NavLink
      to="/availablefoods"
      className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100"
    >
      Available Foods
    </NavLink>
    <NavLink
      to="/addfoods"
      className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100"
    >
      Add Food
    </NavLink>
    <NavLink
      to="/managefoods"
      className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100"
    >
      Manage My foods
    </NavLink>
<NavLink
      to="/foodreqlist"
      className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100"
    >
      My Food Request
    </NavLink>
<Link
      to="/login"
      className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 bg-green-800 hover:bg-gray-100"
    >
      <button>Log In</button>
    </Link>
  </div>


  return (
    <nav className="relative bg-white shadow ">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <a href="#">
              <img className="w-auto h-12 shadow-sm" src={Logo} alt="" />
            </a>
            
            <div className="flex lg:hidden">
            <button
      onClick={toggleMenu}
      type="button"
      className="text-gray-500 hover:text-gray-600  focus:outline-none focus:text-gray-600"
      aria-label="toggle menu"
    >
      {!isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
    </button>

            </div>
          </div>
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
            }`}
          >
             <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center bg-slate-100 ${
    isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full '
  }`}
  >
   {NavRoutes}


            <div className="flex items-center mt-4 lg:mt-0">
              <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>
                <h3 className="mx-2 text-gray-700 lg:hidden">Khatab wedaa</h3>
              </button>


              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
