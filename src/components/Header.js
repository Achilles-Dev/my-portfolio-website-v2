import React, { useEffect, useState } from 'react';
import logoIcon from '../assets/icons/sh_logo2.svg';
import menuIcon from '../assets/icons/square.svg';
import closeIcon from '../assets/icons/close.svg';
import Resume from '../assets/files/Resume.pdf';

const Header = () => {
  const [menuTab, setMenuTab] = useState('hidden');

  const handleMenuDisplay = () => {
    setMenuTab('flex');
  };

  const handleClose = () => {
    setMenuTab('hidden');
  };

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
        if (menuTab !== 'hidden') {
          setMenuTab('hidden');
        }
      }
    });
  }, []);

  return (
    <div className="" id="home">
      <section className={`${menuTab} bg-navy fixed top-0 left-0 right-0 w-full z-50`}>
        <nav className="flex flex-col gap-12 w-full p-20">
          <div className="flex justify-end">
            <button type="button" onClick={handleClose}>
              <img src={closeIcon} alt="close" />
            </button>
          </div>
          <ul className="flex flex-col gap-5 items-center text-white text-2xl">
            <li className="p-2" id="nav-link">
              <a href="#home" className="focus:text-green hover:text-green">Home</a>
            </li>
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
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                download="test"
                className="text-green"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <header className="bg-navy px-5 fixed top-0 left-0 right-0 z-30">
        <nav className="flex justify-between items-center">
          <div>
            <a href="/" id="nav-link">
              <img className="animate-spin-slow" src={logoIcon} alt="SH" />
            </a>
          </div>
          <div className="hidden md:block animate-slidein">
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
                <a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="test"
                  className="text-green"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button type="button" onClick={handleMenuDisplay}>
              <img src={menuIcon} alt="Menu" />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
