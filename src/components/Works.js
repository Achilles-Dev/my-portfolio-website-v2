import React, { useEffect, useState } from 'react';
import projectDetails from '../data/details';
import githubIcon from '../assets/icons/Icon-GitHub.svg';
import liveIcon from '../assets/icons/See-Live.svg';
import folderIcon from '../assets/icons/folder.svg';
import motorcycleImage from '../assets/images/motorcycle.png';
import moneyManager from '../assets/images/money-manager.png';
import bookstore from '../assets/images/bookstore.png';

const Works = () => {
  const projects = projectDetails;
  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages([...images, motorcycleImage, moneyManager, bookstore]);
  }, []);

  return (
    <section className="m-5 pb-12 md:p-14 lg:p-24 text-slate-300" id="work">
      <div>
        <div className=" flex justify-center">
          <h1 className="text-4xl p-3 border-0 border-b-2 border-b-green">My Recent Works</h1>
        </div>
        <ul className="my-16 flex flex-col gap-5">
          { projects.map((project) => (
            project.id <= 3
              ? (
                <li key={project.id} className="grid grid-cols-12 gap-2 mb-7 relative p-5 items-center">
                  <div className={`flex flex-col gap-4 p-7 md-p-0 relative col-[1_/_-1] ${project.id % 2 === 0 ? 'md:col-[1_/_9] lg:col-[1_/_7]' : 'md:col-[5_/_-1] lg:col-[7_/_-1]'} row-[1_/_-1] z-20`}>
                    <h2 className={`flex justify-start ${project.id % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} text-3xl`}>
                      <a href={project['live-version-link']['link-href']} className="hover:text-green focus:text-green " target="_blank" rel="noopener noreferrer">
                        {project.name}
                      </a>
                    </h2>
                    <div className="md:bg-ligth-navy py-5 md:px-4 min-h-fit text-slate-400">
                      <p>{project.description}</p>
                    </div>
                    <ul className={`flex gap-2 flex-wrap justify-start ${project.id % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} text-slate-400"`}>
                      {project.technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <div className={`flex gap-2 justify-start ${project.id % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                      <a href={project['source-link']['source-href']} target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="Github" />
                      </a>
                      <a href={project['live-version-link']['link-href']} target="_blank" rel="noopener noreferrer">
                        <img src={liveIcon} alt="Live" />
                      </a>
                    </div>
                  </div>
                  <div className={`opacity-25 h-full w-full md:opacity-100 bg-slate-200 relative col-[1_/_-1] ${project.id % 2 === 0 ? 'md:col-[6_/_-1]' : 'md:col-[1_/_8]'} row-[1_/_-1] z-10`}>
                    <a className="h-full" href={project['live-version-link']['link-href']} target="_blank" rel="noopener noreferrer">
                      <img
                        className="h-full"
                        src={images.filter((image) => (
                          image.includes(project.image) ? image : ''
                        ))}
                        alt={project.name}
                      />
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
        <ul className="my-10 gap-2 grid md:grid-cols-2 lg:grid-cols-3">
          {
            projects.map((project) => (
              project.id > 3
                ? (
                  <a href={project['live-version-link']['link-href']} target="_blank" rel="noopener noreferrer" className="flex">
                    <li className="flex flex-col justify-between gap-3 bg-ligth-navy p-5">
                      <header className="flex flex-col gap-3">
                        <div className="flex justify-between items-center pb-4">
                          <img src={folderIcon} className="" alt="folder" />
                          <div className="flex gap-2 justify-end">
                            <a href={project['source-link']['source-href']} target="_blank" rel="noopener noreferrer">
                              <img src={githubIcon} alt="Github" />
                            </a>
                            <a href={project['live-version-link']['link-href']} target="_blank" rel="noopener noreferrer">
                              <img src={liveIcon} alt="Live" />
                            </a>
                          </div>
                        </div>
                        <div className="flex justify-start text-2xl text-slate-300">
                          <h2>{project.name}</h2>
                        </div>
                        <div>
                          <p>{project.description}</p>
                        </div>
                      </header>
                      <ul className="flex gap-2 flex-wrap justify-start text-slate-400">
                        {project.technologies.map((tech) => (
                          <li key={tech}>{tech}</li>
                        ))}
                      </ul>
                    </li>
                  </a>
                ) : ''
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default Works;
