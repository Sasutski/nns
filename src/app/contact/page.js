"use client";
import Footer from '../../components/Footer';
import { Github, Twitter, Facebook, Linkedin, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const socialLinks = [
    { icon: <Twitter size={24} />, href: "https://twitter.com", color: "text-blue-500 hover:text-blue-600" },
    { icon: <Facebook size={24} />, href: "https://facebook.com", color: "text-blue-700 hover:text-blue-800" },
    { icon: <Linkedin size={24} />, href: "https://linkedin.com", color: "text-blue-600 hover:text-blue-700" },
    { icon: <Instagram size={24} />, href: "https://instagram.com", color: "text-pink-500 hover:text-pink-600" },
    { icon: <Github size={24} />, href: "https://github.com", color: "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" }
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50 dark:bg-gray-900">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-7xl">
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Contact Information */}
          <motion.div 
            className="flex-1"
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center lg:text-left">
              <motion.h1 
                className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100"
                {...fadeInUp}
              >
                Get in Touch
              </motion.h1>
              <motion.p 
                className="text-gray-600 dark:text-gray-300"
                {...fadeInUp}
                transition={{ delay: 0.1 }}
              >
                {`We'd love to hear from you! Whether you have a question about our projects, want to collaborate, or just want to say hi, feel free to reach out.`}
              </motion.p>
              
              <motion.div 
                className="mt-4 flex items-center justify-center lg:justify-start gap-2"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <Mail size={20} className="text-gray-600 dark:text-gray-300" />
                <a href="mailto:nns.development@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors">
                  {`nns.development@gmail.com`}
                </a>
              </motion.div>
            </div>

            {/* Social Media Links */}
            <motion.div 
              className="mt-8"
              {...fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Follow Us</h2>
              <div className="flex gap-6 justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} transition-colors duration-200`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="flex-1"
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Contact Form</h2>
            <form className="flex flex-col gap-4">
              <motion.input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
              <motion.textarea
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
                rows="5"
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
              <motion.button
                type="submit"
                className="p-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;