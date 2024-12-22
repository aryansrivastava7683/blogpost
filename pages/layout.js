// components/Layout.js
import React, { useState, useEffect } from 'react';
// import { toggleForm } from './writeups';

const Layout = ({ children }) => {
  


  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuOpen && !e.target.closest('#menu') && !e.target.closest('.menuBtn')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [menuOpen]);

  return (
    <div>
      {/* Navbar */}
      <div className="navBar hidden mx-auto bg-black text-white justify-around p-4 md:flex">
        <a href="/">HOME</a>
        <a href="/news">NEWS</a>
        <a href="/writeups">WRITE-UPS</a>
        <a href="/about">ABOUT</a>
        <a href="/playlists">PLAYLISTS</a>
        {/* <button className="postBtn w-100 px-8 rounded-xl ml-[-30px] md:rounded-lg" onClick={toggleForm}>
            POST
          </button> */}
      </div>

      {/* Mobile Menu Button */}
      <div className="menuBtn md:hidden">
        <button
          onClick={toggleMenu}
          className="mt-4 ml-2 w-16 h-16 bg-[url('https://static.vecteezy.com/system/resources/previews/000/442/641/original/menu-vector-icon.jpg')] bg-cover bg-center border-none"
          aria-label="Toggle Menu"
          aria-expanded={menuOpen ? 'true' : 'false'}
        />
      </div>

      {/* Mobile Menu */}
      <div
        id="menu"
        className={`fixed top-0 left-0 h-full w-40 bg-white shadow-lg transform transition-transform duration-500  md:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="py-4 pl-4">
          <h2 className="text-lg font-bold">Menu</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/home" className="text-blue-500 hover:underline">
                HOME
              </a>
            </li>
            <li>
              <a href="/news" className="text-blue-500 hover:underline">
                NEWS
              </a>
            </li>
            <li>
              <a href="/writeups" className="text-blue-500 hover:underline">
                WRITE_UPS
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
