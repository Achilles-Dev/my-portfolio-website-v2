import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/icons/sh_logo2.svg';
import menuIcon from '../assets/icons/square.svg';

const Header = () => {
  // const handleClick = (e) => {
  //   const test = e.target.parentNode;
  //   test.classList.add('bottom-border');
  // };

  useEffect(() => {
    const navLinks = document.querySelector('#nav-links');
    navLinks.addEventListener('click', (e) => {
      if (e.target.parentNode.nextElementSibling && e.target.parentNode.nextElementSibling.classList.contains('bottom-border')) {
        e.target.parentNode.nextElementSibling.classList.remove('bottom-border');
      } else if (e.target.parentNode.previousElementSibling && e.target.parentNode.previousElementSibling.classList.contains('bottom-border')) {
        e.target.parentNode.previousElementSibling.classList.remove('bottom-border');
      }
      e.target.parentNode.classList.add('bottom-border');
    });
  }, []);

  return (
    <header className="bg-navy px-5">
      <nav className="flex justify-between items-center">
        <div>
          <Link to="/">
            <img src={logoIcon} alt="SH" />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-5 items-center text-white" id="nav-links">
            <li className="p-2 focus:text-green hover:text-green">
              <Link to="#about">About</Link>
            </li>
            <li className="p-2 focus:text-green hover:text-green">
              <Link to="#work">Work</Link>
            </li>
            <li className="p-2 focus:text-green hover:text-green">
              <Link to="#contact">Contact</Link>
            </li>
            <li className="border p-2 border-green focus:text-green hover:text-green">
              <Link to="#resume">Resume</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button type="button">
            <img src={menuIcon} alt="Menu" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
