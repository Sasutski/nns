"use client";
import Footer from '../../components/Footer';
import Image from 'next/image';
import { Github, Twitter, Linkedin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const TeamMember = ({ name, role, image, bio, projects, social }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Top section with fixed content */}
      <motion.div 
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div 
          className="w-40 h-40 relative mb-4 rounded-full overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.h2 
          className="text-2xl font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {name}
        </motion.h2>
        <motion.p 
          className="text-gray-500 dark:text-gray-400 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {role}
        </motion.p>
        <motion.p 
          className="text-gray-600 dark:text-gray-300 mb-4 text-center min-h-[80px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {bio}
        </motion.p>
      </motion.div>

      {/* Bottom section with projects and social */}
      <div className="mt-auto">
        {/* Personal Projects */}
        <motion.div 
          className="mb-4 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-2">Some Personal Projects</h3>
          <ul className="space-y-2">
            {projects.map((project, idx) => (
              <motion.li 
                key={idx} 
                className="flex items-start gap-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Globe className="w-4 h-4 flex-shrink-0 mt-1" />
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 underline-offset-4 hover:underline truncate"
                  title={project.name}
                >
                  {project.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {social.github && (
            <motion.a 
              href={social.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:text-gray-900 dark:hover:text-gray-100"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
          {social.twitter && (
            <motion.a 
              href={social.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:text-[#1DA1F2]"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
          )}
          {social.linkedin && (
            <motion.a 
              href={social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:text-[#0A66C2]"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const teamMembers = [
    {
      name: "NoobGrinder420",
      role: "Tech Lead",
      image: "/noobgrinder.png",
      bio: "Tech wizard specializing in full-stack development with a passion for creating efficient and scalable solutions.",
      projects: [
        { name: "QR Code Gen - QR Code Gen from terminal", url: "https://github.com/NoobGrinder420/QR-code-gen" },
        { name: "PyGit - Own Git using Python", url: "https://github.com/NoobGrinder420/PyGit" },
      ],
      social: {
        github: "https://github.com/noobgrinder420",
        twitter: "",
        linkedin: "https://www.linkedin.com/in/dhanvin-rm/"
      }
    },
    {
      name: "Natalie",
      role: "Design Lead",
      image: "/natalie.jpeg",
      bio: "Creative designer with an eye for detail and a passion for creating beautiful, user-friendly interfaces.",
      projects: [
        { name: "Meower - A git wrapper made in python", url: "https://github.com/ellipticobj/meower" },
        { name: "Sigmalang - A language as close to natural language as possible ", url: "https://github.com/dimini171/sigma" },
      ],
      social: {
        github: "https://github.com/ellipticobj",
        twitter: "",
        linkedin: ""
      }
    },
    {
      name: "Sasutski",
      role: "Strategy Lead",
      image: "/sasutski.png",
      bio: "Strategic thinker focused on product development and team coordination.",
      projects: [
        { name: "SSTInc Stupidathon - Something stupid", url: "https://github.com/Sasutski/stupidathon" },
        { name: "Thank you website for my senior Isabelle", url: "https://github.com/Sasutski/isabelle" },
      ],
      social: {
        github: "https://github.com/sasutski",
        twitter: "https://twitter.com/sasutskitan",
        linkedin: "https://www.linkedin.com/in/james-tan-2aa7272a8/"
      }
    }
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-7xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {`We're a small team passionate about creating meaningful solutions through technology. 
              Our projects aim to make a positive impact in people's lives.`}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;