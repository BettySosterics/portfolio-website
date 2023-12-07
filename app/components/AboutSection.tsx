import Link from 'next/link';
import { HiArrowDown } from 'react-icons/hi';

export const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  // { skill: 'Python' },
  { skill: 'React' },
  { skill: 'Next.js' },
  { skill: 'React Native' },
  { skill: 'Expo' },
  { skill: 'PostgreSQL' },
  { skill: 'Tailwind CSS' },
  { skill: 'Git' },
  { skill: 'GitHub' },
  { skill: 'Netlify' },
  { skill: 'Fly.io' },
  { skill: 'Docker' },
  // { skill: 'Jupyter Notebooks' },
];

export default function AboutSection() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">About Me</h1>
        <hr className="w-6 h-1 mx-auto my-4 bg-violet-500 border-0 rounded"></hr>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold mb-6">My story</h1>
            <p>
              Hi, my name is Betty a web developer based in Vienna, Austria.
            </p>
            <br />
            <p>
              {/* I have a degree in business and management which led me to work in
              a logistics team at a multinational company for several years. */}
              Coding is like therapy for me; I like to go deep to find the
              solution for the problems. And the more bugs, the more
              opportunities for me to learn.
            </p>
            <br />
            <p>
              As a drummer and percussionist, I have a rich background in music
              management and performance as well.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My tech stack</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-violet-800 px-4 py-2 mr-2 mb-2 text-white-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            {/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row items-center text-center justify-center ">
        <HiArrowDown size={35} className="animate-bounce" />
      </div> */}
    </section>
  );
}
