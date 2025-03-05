"use client";
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import GameOfLife from '@/components/GameOfLife';
import { motion } from 'framer-motion';

const ExpandingName = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div 
      className="text-4xl font-bold cursor-pointer"
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-[1.5em] flex justify-center sm:justify-start">
        <motion.span 
          className={`transition-all duration-700 ease-in-out hover:text-gray-800 hover:underline hover:underline-offset-4 hover:cursor-pointer`}
          animate={{
            opacity: isExpanded ? 0 : 1,
            y: isExpanded ? -8 : 0
          }}
          transition={{ duration: 0.7 }}
        >
          {`NNS`}
        </motion.span>
      </div>
      <motion.div 
        className="flex flex-col gap-2"
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.7 }}
      >
        {['NoobGrinder420', 'Natalie', 'Sasutski'].map((name, index) => (
          <motion.div
            key={name}
            className="flex"
            initial={{ x: -20, opacity: 0 }}
            animate={{ 
              x: isExpanded ? 0 : -20, 
              opacity: isExpanded ? 1 : 0 
            }}
            transition={{ 
              duration: 0.7,
              delay: isExpanded ? index * 0.1 : 0 
            }}
          >
            <span>{name[0]}</span>
            <span>{name.slice(1)}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default function Home() {
  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <div className="relative min-h-screen">
      <GameOfLife />
      <div className="relative z-10 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <ExpandingName />
          
          <motion.div 
            className="max-w-2xl text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-2xl mb-4">Building Useful Projects for the World</h1>
            <p className="text-gray-600 dark:text-gray-300">
              {`We're a small team passionate about creating meaningful solutions 
              through technology. Our projects aim to make a positive impact 
              in people's lives.`}
            </p>
          </motion.div>

          <motion.div 
            className="flex gap-4 items-center flex-col sm:flex-row mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {[
              { href: "/about", text: "About Us", variant: "primary" },
              { href: "/projects", text: "View Our Projects", variant: "primary" },
              { href: "/contact", text: "Get in Touch", variant: "secondary" }
            ].map((button, index) => (
              <motion.div
                key={button.href}
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
                transition={{ 
                  duration: 0.2,
                  delay: index * 0.1 + 0.4
                }}
              >
                <Link 
                  href={button.href} 
                  className={`rounded-full border border-solid transition-all flex items-center justify-center gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${
                    button.variant === 'primary' 
                      ? 'border-transparent bg-foreground text-background hover:bg-[#383838] hover:text-white dark:hover:bg-[#ccc]' 
                      : 'border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent sm:min-w-44'
                  }`}
                >
                  {button.text}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </main>

        <Footer />
      </div>
    </div>
  );
}