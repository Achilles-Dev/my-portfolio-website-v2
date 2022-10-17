import React from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/icons/sh_logo2.svg';
import menuIcon from '../assets/icons/square.svg';

const Header = () => (
  <header className="bg-navy px-5">
    <nav className="flex justify-between items-center">
      <div>
        <Link to="/">
          <img src={logoIcon} alt="SH" />
        </Link>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-5 items-center text-white">
          <li className="focus:text-green hover:text-green">
            <Link to="#about">About</Link>
          </li>
          <li className="focus:text-green hover:text-green">
            <Link to="#work">Work</Link>
          </li>
          <li className="focus:text-green hover:text-green">
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

export default Header;
