import React from 'react';
import { Link } from 'react-router-dom';

const Headline = () => (
  <section className="flex flex-col gap-10 flex-grow bg-navy text-slate-300 p-5">
    <div>
      <p>
        HELLO, MY NAME IS
        <span> SOLOMON HAGAN.</span>
      </p>
      <h2>I Develop Application Softwares.</h2>
      <p>
        I am a freelance Software Engineer who is passionate about building accessible,
        user-centered products for my customers. I am based in Kumasi - Ghana.
      </p>
    </div>
    <div>
      <Link
        to="#contact"
        className="border px-7 py-3 border-green text-green hover:bg-slate-700"
      >
        Contact me!
      </Link>
    </div>
  </section>
);

export default Headline;
