import React, { useEffect } from 'react';
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
          <a href="/" id="nav-link">
            <img className="animate-spin-slow" src={logoIcon} alt="SH" />
          </a>
        </div>
        <div className="hidden md:block animate-fade-in-down">
          <ul className="flex gap-5 items-center text-white" id="nav-links">
            <li className="p-2" id="nav-link">
              <a href="#about" className="focus:text-green hover:text-green">About</a>
            </li>
            <li className="p-2" id="nav-link">
              <a href="#work" className="focus:text-green hover:text-green">Work</a>
            </li>
            <li className="p-2" id="nav-link">
              <a href="#contact" className="focus:text-green hover:text-green">Contact</a>
            </li>
            <li className="border p-2 border-green hover:bg-slate-700" id="nav-link">
              <a href="#resume" className="text-green">Resume</a>
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
