import React, { useState, useEffect } from 'react';

import {motion} from 'framer-motion';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -50,
      }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 w-full z-50"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          Richard Byers
        </div>
        <ul className="flex space-x-6 text-gray-600 dark:text-gray-300">
          <li>
            <a
              href="#"
              className="hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
      </motion.div>
  );
}