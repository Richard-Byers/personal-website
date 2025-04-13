import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

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
          <Link
            to="top"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-800 dark:hover:text-white transition-colors"
          >
            Home
          </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}