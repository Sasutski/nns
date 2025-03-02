"use client";
import Image from "next/image";
import { useState } from 'react';

const ExpandingName = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="text-4xl font-bold flex">
      {/* First N */}
      <div 
        className={`group cursor-pointer relative transition-opacity duration-500 ${activeIndex === 0 ? 'active' : ''}`}
        onClick={() => handleClick(0)}
      >
        <span>N</span>
        <span className="inline-flex overflow-hidden max-w-0 transition-all duration-500 ease-in-out group-[.active]:max-w-[300px] opacity-50 group-[.active]:opacity-100">
          oobgrinder420
        </span>
      </div>
      {/* Second N */}
      <div 
        className={`group cursor-pointer relative transition-opacity duration-500 ${activeIndex === 1 ? 'active' : ''}`}
        onClick={() => handleClick(1)}
      >
        <span>N</span>
        <span className="inline-flex overflow-hidden max-w-0 transition-all duration-500 ease-in-out group-[.active]:max-w-[300px] opacity-50 group-[.active]:opacity-100">
          atalie
        </span>
      </div>
      {/* S */}
      <div 
        className={`group cursor-pointer relative transition-opacity duration-500 ${activeIndex === 2 ? 'active' : ''}`}
        onClick={() => handleClick(2)}
      >
        <span>S</span>
        <span className="inline-flex overflow-hidden max-w-0 transition-all duration-500 ease-in-out group-[.active]:max-w-[300px] opacity-50 group-[.active]:opacity-100">
          asutski
        </span>
      </div>
    </div>
  );
};
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ExpandingName />
        
        <div className="max-w-2xl text-center sm:text-left">
          <h1 className="text-2xl mb-4">Building Useful Projects for the World</h1>
          <p className="text-gray-600 dark:text-gray-300">
            We're a small team passionate about creating meaningful solutions 
            through technology. Our projects aim to make a positive impact 
            in people's lives.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
          <a
            className="rounded-full border border-solid border-transparent transition-all flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] hover:text-white dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="#projects"
          >
            View Our Projects
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="#contact"
          >
            Get in Touch
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#about"
        >
          About Us
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/your-github-org"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub →
        </a>
      </footer>
    </div>
  );
}