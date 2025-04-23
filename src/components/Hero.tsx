import React, {useEffect, useRef, useState} from 'react';
import SectionWrapper from "./SectionWrapper";

const Hero = () => {
  const logoRef = useRef<HTMLImageElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = Math.min(window.scrollY, 100);
      const progress = currentScroll / 150;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
  <SectionWrapper background="bg-[url('/assets/backgrounds/forest-background-1280w.png')] bg-cover bg-center bg-pine" className="-mt-16  md:min-h-[70vh] lg:min-h-[80vh]">
    <img
        id="hero-logo"
        src="/assets/logos/pinecoded-green.png"
        alt="pine logo"
        style={{
          transform: `scale(${1 - scrollProgress * 0.5})`,
          opacity: 1 - scrollProgress,
          transformOrigin: 'top center',
          transition: 'all 0.3s ease-in-out',
        }}
        className="w-48 md:w-64 lg:w-80 mb-4"
    />
      <p className="text-sm md:text-base lg:text-xl tracking-wider drop-shadow-pine-shadow">Front End web developer</p>
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-mono drop-shadow-pine-shadow">
        <span>&lt;</span>
        FromBranchToBrowser
        <span>/&gt;</span>
      </h1>
      <a href="#contact"> <button className="bg-cream text-pine px-5 py-2 rounded-md shadow-md hover:bg-pine-light hover:text-cream transition mt-6">
        Plant the seed!</button></a>
  </SectionWrapper>
  )};

export default Hero;