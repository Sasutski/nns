"use client";
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      description: "A sophisticated platform leveraging artificial intelligence to transform complex data into actionable insights.",
      tech: ["React", "Python", "TensorFlow", "AWS"],
      status: "In Development",
      github: "https://github.com/yourusername/project1",
      live: null // Add live link if available
    },
    {
      title: "Sustainable Energy Monitor",
      description: "Real-time monitoring system for renewable energy sources, helping organizations optimize their energy consumption.",
      tech: ["Node.js", "IoT", "GraphQL", "MongoDB"],
      status: "Live",
      github: "https://github.com/yourusername/project2",
      live: "https://project-demo.com"
    },
    {
      title: "Smart City Infrastructure",
      description: "Urban planning and monitoring solution using IoT sensors to improve city services and quality of life.",
      tech: ["React Native", "TypeScript", "Azure", "PostgreSQL"],
      status: "Beta",
      github: "https://github.com/yourusername/project3",
      live: "https://beta.project-demo.com"
    }
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <main className="flex flex-col gap-12 row-start-2 max-w-6xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6 text-black dark:text-white">
            Our Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're passionate about creating innovative solutions that address real-world challenges. 
            Explore our latest projects that are shaping the future of technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 ${
                  project.status === 'Live' ? 'bg-green-100 text-green-800' :
                  project.status === 'Beta' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm text-gray-600 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;