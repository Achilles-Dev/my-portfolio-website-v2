import React from 'react';

const Headline = () => (
  <section className={`flex gap-10 flex-col justify-center flex-grow text-slate-300 px-8 md:p-14 text-xl ${window.innerHeight < 700 ? 'mt-24' : 'max-h-screen'}`}>
    <div className="">
      <p className="wow fadeInLeft flex flex-col text-xl tracking-widest">
        HELLO, MY NAME IS
        <span className="text-yellow-300 text-5xl md:text-7xl my-5"> SOLOMON HAGAN.</span>
      </p>
      <h2 className="wow fadeInRight text-3xl md:text-5xl mb-5 text-yellow-100">I Develop Application Softwares.</h2>
      <p className="wow fadeInUp lg:w-1/2 md:w-3/4 tracking-widest">
        I am a freelance Software Engineer who is passionate about building accessible,
        user-centered products for my customers. I am based in Kumasi - Ghana.
      </p>
    </div>
    <div className="wow rollIn mt-5 flex flex-wrap">
      <a href="#contact" className="border px-10 py-3 border-green text-green hover:bg-slate-700">Contact me!</a>
    </div>
  </section>
);

export default Headline;
