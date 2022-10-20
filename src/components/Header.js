import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/icons/sh_logo2.svg';
import menuIcon from '../assets/icons/square.svg';

const Header = () => {
  useEffect(() => {
    const navLinks = document.querySelector('#nav-links');
    document.addEventListener('click', (e) => {
      if (e.target.parentNode.id === 'nav-link') {
        navLinks.childNodes.forEach((ele) => {
          if (ele.classList.contains('bottom-border') && e.target.parentNode !== ele) {
            ele.classList.remove('bottom-border');
          } else {
            e.target.parentNode.classList.add('bottom-border');
          }
        });
      }
    });
  }, []);

  return (
    <header className="bg-navy px-5">
      <nav className="flex justify-between items-center">
        <div>
          <Link to="/" id="nav-link">
            <img className="animate-spin-slow" src={logoIcon} alt="SH" />
          </Link>
        </div>
        <div className="hidden md:block animate-fade-in-down">
          <ul className="flex gap-5 items-center text-white" id="nav-links">
            <li className="p-2" id="nav-link">
              <Link to="#about" className="focus:text-green hover:text-green">About</Link>
            </li>
            <li className="p-2" id="nav-link">
              <Link to="#work" className="focus:text-green hover:text-green">Work</Link>
            </li>
            <li className="p-2" id="nav-link">
              <Link to="#contact" className="focus:text-green hover:text-green">Contact</Link>
            </li>
            <li className="border p-2 border-green hover:bg-slate-700" id="nav-link">
              <Link to="#resume" className="text-green">Resume</Link>
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
