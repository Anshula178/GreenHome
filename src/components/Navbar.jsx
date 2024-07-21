import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navlink from './Navlink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes,faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-customColor py-4 px-6'>
      <div className='container mx-auto flex items-center justify-between max-w-screen-xl px-4'>
        {/* Menu items for larger screens */}
        <div className='hidden sm:flex  space-x-4'>
          <Link className='text-green-600 font-extrabold text-2xl'>GREEN<span className='text-blue-400 font-semibold'>HOME</span></Link>
          </div>
        <div className='hidden sm:flex items-center  space-x-6'>
          
          <Navlink link="/">Home</Navlink>
          <Navlink link="/">Listing</Navlink>
          <Navlink link="/">Gallary</Navlink>
          <Navlink link="/">Pages</Navlink>
          <Navlink link="/">Contact</Navlink>
          <div className='flex rounded-full '>
            <div className='bg-blue-300 px-3 py-3'><Navlink link="/">Sign In</Navlink></div>
            <div className='bg-white px-3 py-3 ' > <Navlink link="/">login</Navlink></div>
          
          </div>
          
            
          </div>

          {/* Sign In and Request Demo on the right side */}
          
        

        {/* Menu toggle button always visible */}
        <div className='flex items-center sm:hidden'>
          <button onClick={toggleMenu} className='text-gray-300'>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className='h-6 w-6' />
          </button>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div className='sm:hidden mt-4'>
          <div className='flex flex-col space-y-2'>
            <Navlink link="/">Pricing</Navlink>
            <Navlink link="/">About</Navlink>
            <Navlink link="/">Blog</Navlink>
            <Navlink link="/">Wall of love</Navlink>
            <Navlink link="/">Resources</Navlink>
            <div>
<Navlink link="/">Sign In</Navlink>
            <Link className="text-gray-300 hover:text-blue-700 transition px-3 text-lg">Request Demo</Link>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
