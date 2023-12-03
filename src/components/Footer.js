import React from 'react';
import gitHubIcon from '../assets/icons/GitHub-footer.svg';
import twitterIcon from '../assets/icons/twitter.svg';
import linkedInIcon from '../assets/icons/Linkedin_icon.svg';
import angelListIcon from '../assets/icons/angellist.svg';

const Footer = () => (
  <div className="px-8 pb-5 pt-12 md:px-14 lg:px-24 md:pt-14 lg:pt-24 text-slate-500">
    <div className="flex justify-center my-5">
      <ul className="flex gap-4">
        <li className="wow fadeInDown">
          <a href="https://twitter.com/SoloAchilles/">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </li>
        <li className="wow fadeInUp">
          <a href="https://www.linkedin.com/in/solomon-hagan/">
            <img src={linkedInIcon} alt="LinkedIn" />
          </a>
        </li>
        <li className="wow fadeInDown">
          <a href="https://github.com/Achilles-Dev/">
            <img src={gitHubIcon} alt="Github" />
          </a>
        </li>
        <li className="wow fadeInUp">
          <a href="https://angel.co/u/solomon-hagan">
            <img src={angelListIcon} alt="Angellist" />
          </a>
        </li>
      </ul>
    </div>
    <div className="flex justify-center m-3">
      <ul className="flex flex-col gap-4 p-3 md:flex-row md:flex-wrap">
        <li className="wow fadeInRight">
          Email:
          <span> solohag92@gmail.com</span>
        </li>
        <li className="wow fadeInLeft">
          Phone:
          <span> +(233)501384153</span>
        </li>
      </ul>
    </div>
    <div className="wow fadeInDown flex justify-center">
      <span>Solomon Hagan &copy;Copyright 2022</span>
    </div>
  </div>
);

export default Footer;
