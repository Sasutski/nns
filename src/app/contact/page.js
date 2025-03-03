"use client";
import Footer from '../../components/Footer';
import { Github } from 'lucide-react';

const Contact = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50 dark:bg-gray-900">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="max-w-2xl text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">{`Get in Touch`}</h1>
          <p className="text-gray-600 dark:text-gray-300">
            {`We'd love to hear from you! Whether you have a question about our projects, want to collaborate, or just want to say hi, feel free to reach out.`}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            {`You can contact us at:`}
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-300">
            <strong>{`Email: nns.development@gmail.com`}</strong>
          </ul>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            {`You can also find us on:`}
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-300">
            <a href="https://github.com/nns-development" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400">
              <div className="inline-block border-4 border-black rounded-lg p-2 hover:opacity-50">
                <Github size={32} />
              </div>
            </a>
          </ul>
        </div>

        <div className="max-w-2xl w-full mt-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">{`Contact Form`}</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
            />
            <textarea
              placeholder="Your Message"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="p-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              {`Send Message`}
            </button>
          </form>
        </div>

        <div className="max-w-2xl w-full mt-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">{`Follow Us`}</h2>
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;