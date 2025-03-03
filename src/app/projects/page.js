// nns/src/app/projects/page.js
"use client";
import Footer from '../../components/Footer';

const Projects = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="max-w-2xl text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-4">{`Our Projects`}</h1>
          <p className="text-gray-600 dark:text-gray-300">
            {`We are dedicated to building projects that make a difference. Here are some of the projects we've been working on:`}
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-300">
            <li>{`Project 1 - A revolutionary app that changes the way you do X.`}</li>
            <li>{`Project 2 - An innovative solution for Y.`}</li>
            <li>{`Project 3 - A groundbreaking tool for Z.`}</li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;