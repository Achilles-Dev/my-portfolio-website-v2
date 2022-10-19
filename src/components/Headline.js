import React from 'react';
import { Link } from 'react-router-dom';

const Headline = () => (
  <section className="flex flex-col gap-10 flex-grow bg-navy text-slate-300 px-8 py-12 md:p-14 lg:p-24 text-xl">
    <div className="">
      <p className="flex flex-col text-xl tracking-widest">
        HELLO, MY NAME IS
        <span className="text-yellow-300 text-5xl md:text-7xl my-5"> SOLOMON HAGAN.</span>
      </p>
      <h2 className="text-3xl md:text-5xl mb-5 text-yellow-100">I Develop Application Softwares.</h2>
      <p className="lg:w-1/2 md:w-3/4">
        I am a freelance Software Engineer who is passionate about building accessible,
        user-centered products for my customers. I am based in Kumasi - Ghana.
      </p>
    </div>
    <div className="mt-5">
      <Link
        to="#contact"
        className="border px-10 py-3 border-green text-green hover:bg-slate-700"
      >
        Contact me!
      </Link>
    </div>
  </section>
);

export default Headline;
