import React from 'react';
import projectDetails from '../data/details';
import githubIcon from '../assets/icons/Icon-GitHub.svg';
import liveIcon from '../assets/icons/See-Live.svg';

const Works = () => {
  const projects = projectDetails;
  return (
    <section className="m-5 pb-12 md:p-14 lg:p-24 text-slate-300">
      <div>
        <div className=" flex justify-center">
          <h1 className="text-4xl p-3 border-0 border-b-2 border-b-green">My Recent Works</h1>
        </div>
        <ul className="my-16">
          { projects.map((project) => (
            project.id <= 3
              ? (
                <li key={project.id} className="grid grid-cols-12 gap-2 mb-7 relative">
                  <div className="flex flex-col gap-4 relative col-[7_/_-1] row-[1_/_-1] text-right">
                    <h2 className="flex justify-end text-3xl">{project.name}</h2>
                    <div className="bg-ligth-navy py-5 px-4 z-20 min-h-fit text-slate-400">
                      <p>{project.description}</p>
                    </div>
                    <ul className="flex gap-2 flex-wrap justify-end text-slate-400">
                      {project.technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <div className="flex gap-2 justify-end">
                      <a href={project['source-link']['source-href']}>
                        <img src={githubIcon} alt="Github" />
                      </a>
                      <a href={project['live-version-link']['link-href']}>
                        <img src={liveIcon} alt="Live" />
                      </a>
                    </div>
                  </div>
                  <div className="h-52 border relative col-[1_/_8] row-[1_/_-1] z-10 bg-green">
                    <a className="work-image" href={project['live-version-link']['link-href']}>
                      <img className="work-image" src="" alt={project.name} />
                    </a>
                  </div>
                </li>
              ) : ''
          ))}
        </ul>
      </div>
      <div>
        <div className=" flex justify-center">
          <h1 className="text-4xl p-3 border-0 border-b-2 border-b-green">Other Works</h1>
        </div>
        <ul className="my-10">
          {
            projects.map((project) => (
              project.id > 3
                ? (
                  <li />
                ) : ''
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default Works;
