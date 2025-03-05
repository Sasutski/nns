// nns/src/app/about/page.js
"use client";
import Footer from '../../components/Footer';
import Image from 'next/image';
import { Github, Twitter, Linkedin, Globe } from 'lucide-react';

const TeamMember = ({ name, role, image, bio, projects, social }) => {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      {/* Top section with fixed content */}
      <div className="flex flex-col items-center">  {/* Remove lg:items-start */}
        <div className="w-40 h-40 relative mb-4 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">{role}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-center min-h-[80px]"> {/* Remove lg:text-left */}
          {bio}
        </p>
      </div>

      {/* Bottom section with projects and social */}
      <div className="mt-auto">
        {/* Personal Projects */}
        <div className="mb-4 w-full">
          <h3 className="text-lg font-semibold mb-2">Some Personal Projects</h3>
          <ul className="space-y-2">
            {projects.map((project, index) => (
              <li key={index} className="flex items-start gap-2">
                <Globe className="w-4 h-4 flex-shrink-0 mt-1" />
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 underline-offset-4 hover:underline truncate"
                  title={project.name} // This will show the full text on hover
                >
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          {social.github && (
            <a 
              href={social.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {social.twitter && (
            <a 
              href={social.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:text-[#1DA1F2]"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {social.linkedin && (
            <a 
              href={social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:text-[#0A66C2]"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const teamMembers = [
    {
      name: "NoobGrinder420",
      role: "Tech Lead",
      image: "/noobgrinder.png", // Add your image path
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
      image: "/natalie.jpeg", // Add your image path
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
      image: "/sasutski.png", // Add your image path
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <h1 className="text-4xl font-bold mb-4">{`About Us`}</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {`We're a small team passionate about creating meaningful solutions through technology. 
            Our projects aim to make a positive impact in people's lives.`}
          </p>
        </div>

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