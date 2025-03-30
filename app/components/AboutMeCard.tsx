'use client'
import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion'

const AboutMeCard = ({
  name = "Your Name",
  title = "Your Title",
  bio = "Write a short bio about yourself here. This can include your background, interests, and skills.",
  skills = ["Skill 1", "Skill 2", "Skill 3"],
  imageUrl = "/profile-placeholder.jpg",
  contactLinks = [
    { name: "Email", url: "mailto:your.email@example.com", icon: "📧" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "🔗" },
    { name: "GitHub", url: "https://github.com/yourusername", icon: "💻" }
  ]
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-md mx-auto"
      transition={{ duration: 0.6 }}
    >
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center mb-6"
          transition={{ delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative h-24 w-24 rounded-full overflow-hidden"
            transition={{ delay: 0.1 }}
          >
            <Image
              src={imageUrl}
              alt={`${name}'s profile`}
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="ml-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{name}</h2>
              <p className="text-gray-600 dark:text-gray-300">{title}</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">About Me</h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-600 dark:text-gray-300"
            transition={{ delay: 0.5 }}
          >
            {bio}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Skills</h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-wrap gap-2"
            transition={{ delay: 0.7 }}
          >
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-3 py-1 rounded-full text-sm"
                transition={{ delay: index * 0.03 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex space-x-4"
          transition={{ delay: 0.8 }}
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
              transition={{ delay: index * 0.01 }}
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
