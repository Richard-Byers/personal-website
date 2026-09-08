import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { to: 'top', label: 'Home' },
  { to: 'skills', label: 'Skills' },
  { to: 'experience', label: 'Experience' },
  { to: 'education', label: 'Education' },
  { to: 'projects', label: 'Projects' },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClickingLink, setIsClickingLink] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickingLink) return;
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
  }, [lastScrollY, isClickingLink]);

  const handleLinkClick = () => {
    setIsClickingLink(true);
    setIsMenuOpen(false);
    setTimeout(() => setIsClickingLink(false), 1000); // Reset after scrolling finishes
  };

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
      <div className="container mx-auto px-4 py-3 grid grid-cols-2 md:grid-cols-3 items-center">
        <div className="text-2xl font-bold text-gray-800 dark:text-white justify-self-start">
          Richard Byers
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-600 dark:text-gray-300 justify-self-center">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                spy
                to={to}
                onClick={handleLinkClick}
                className="cursor-pointer hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block justify-self-end">
          <ThemeToggle />
        </div>
        <button
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          className="md:hidden justify-self-end cursor-pointer p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-gray-100 dark:border-gray-700"
          >
            <ul className="flex flex-col items-center gap-4 py-4 text-gray-600 dark:text-gray-300">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    spy
                    to={to}
                    onClick={handleLinkClick}
                    className="cursor-pointer hover:text-gray-800 dark:hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
