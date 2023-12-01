'use client'; // this is a client component
import Image from 'next/image';
import React from 'react';
import { HiArrowDown } from 'react-icons/hi';
import { Link } from 'react-scroll/modules';

export default function HeroSection() {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-8 sm:py-16 md:py-24 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <img
            src="https://res.cloudinary.com/dc2znemzw/image/upload/v1701432314/atzuibptfgozdt00dxx4.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Betty!
          </h1>

          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{' '}
            <span className="font-semibold text-violet-600">
              Web Developer{' '}
            </span>
            based in Vienna, Austria.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-violet-600 rounded shadow hover:bg-violet-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
