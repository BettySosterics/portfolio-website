import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';

export const metadata = {
  title: { default: 'Betty | Full-Stack Developer' },
  description: 'Full-Stack Developer based in Vienna, Austria',
};

export default async function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      {/* <AboutSection /> */}
      <ProjectsSection />
    </main>
  );
}
