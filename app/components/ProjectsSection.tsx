import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowUpRightSquare, BsGithub } from 'react-icons/bs';
import SlideUp from './SlideUp';

const projects = [
  {
    name: 'Bandify',
    description:
      'Bandify is an all-in-one music collaboration app for musicians.',
    image: '/bandify.png',
    github: 'https://github.com/bettysosterics/upleveled-final-project',
    link: 'https://bandify-project.fly.dev/',
  },
  // {
  //   name: 'PlatoIO',
  //   description: 'PlatoIO is a to do list app that built using the PERN stack.',
  //   image: '/platoio.png',
  //   github: 'https://github.com/hqasmei/platoio',
  //   link: 'https://platoio.com/register',
  // },
  // {
  //   name: 'Kator Family Photos',
  //   description:
  //     'Kator Family Photos is a photos and video digitization service in the LA area.',
  //   image: '/familyphotos.png',
  //   github: 'https://github.com/hqasmei/katorfamilyphotos',
  //   link: 'https://katorfamilyphotos.com/',
  // },
];

export default function ProjectsSection() {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-violet-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link
                      href="https://bandify-project.fly.dev/"
                      target="_blank"
                    >
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link
                        href="https://github.com/bettysosterics/upleveled-final-project"
                        target="_blank"
                      >
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link
                        href="https://bandify-project.fly.dev/"
                        target="_blank"
                      >
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
}
