import React from 'react';
import Profile from '../assets/images/profile_image.jpeg';

const About = () => (
  <section className="px-8 py-12 md:p-14 lg:p-24 text-slate-300" id="about">
    <div
      className="wow pulse flex justify-center mb-5 p-3"
      data-wow-delay="1s"
      data-wow-duration="2s"
    >
      <h2 className="text-4xl p-3 border-0 border-b-2 border-b-green">
        About me
      </h2>
    </div>
    <div className="grid grid-cols-12 gap-3">
      <div
        className="wow fadeInUp flex md:items-center opacity-5 md:opacity-100 col-[_1/_-1] md:col-[_1/_7] row-[_1/_-1] md:row-[_1/_5] w-full h-full"
        data-wow-delay="1s"
        data-wow-duration="2s"
      >
        <img src={Profile} alt="Solomon Hagan" />
      </div>
      <div className="col-[_1/_-1] md:col-[_7/_-1] row-[_1/_-1] p-3 h-full">
        <div className="flex flex-col gap-5 h-full justify-center md:justify-start">
          <div>
            <h2
              className="wow fadeInDown text-2xl text-center md:text-start"
              data-wow-delay="1s"
              data-wow-duration="2s"
            >
              Self-taught Full Stack Developer
            </h2>
          </div>
          <p
            className="wow fadeInDown text-md text-center md:text-start"
            data-wow-delay="1s"
            data-wow-duration="2s"
          >
            {/* I can help you build a product,
            feature or website. Look through some of my work and experience!
            If you like what you see and have a project you need coded,
            don’t hestiate to contact me. */}
            {`I'm a passionate freelance full-stack developer with a knack for
            crafting seamless, user-friendly web experiences. While I thrive on
            tackling both frontend and backend challenges, my heart leans toward
            the frontend—where I bring designs to life with clean code,
            intuitive interfaces, and a keen eye for detail. With expertise in
            modern JavaScript frameworks, responsive design, and a solid
            foundation in server-side technologies, I deliver end-to-end
            solutions tailored to my clients' needs. Whether it’s building
            dynamic applications or optimizing performance, I’m driven by a love
            for problem-solving and creating digital experiences that delight
            and inspire.`}
          </p>
          <div className="flex flex-col gap-3">
            <h3>Technologies I work with:</h3>
            <ul
              className="wow rollIn flex flex-wrap gap-2 justify-center md:justify-start"
              data-wow-delay="1s"
              data-wow-duration="2s"
            >
              <li className="border p-3 border-green">JavaScript</li>
              <li className="border p-3 border-green">TypeScript</li>
              <li className="border p-3 border-green">React</li>
              <li className="border p-3 border-green">Redux</li>
              <li className="border p-3 border-green">Next.js</li>
              <li className="border p-3 border-green">Ruby</li>
              <li className="border p-3 border-green">Ruby on Rails</li>
              <li className="border p-3 border-green">Bootstrap</li>
              <li className="border p-3 border-green">Tailwind CSS</li>
              <li className="border p-3 border-green">Postgresql</li>
              <li className="border p-3 border-green">Mysql</li>
              <li className="border p-3 border-green">MongoDB</li>
              <li className="border p-3 border-green">RSpec</li>
              <li className="border p-3 border-green">Jest</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
