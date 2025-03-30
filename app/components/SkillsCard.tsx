'use client'
import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';

const SkillsCard = ({
  title = "Your Title",
  webDev = [{ name: "Skill 1", logo: "/path/to/logo1.png" }],
  backendDev = [{ name: "Skill 1", logo: "/path/to/logo1.png" }],
  frameworks = [{ name: "Skill 1", logo: "/path/to/logo1.png" }],
  devOps = [{ name: "Skill 1", logo: "/path/to/logo1.png" }],
  toolsAndEnv = [{ name: "Skill 1", logo: "/path/to/logo1.png" }],
}) => {
  const renderSkills = (skills) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-wrap gap-4"
      transition={{ delay: 0.7 }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-3 py-1 rounded-full text-sm"
          transition={{ delay: index * 0.03 }}
        >
          {skill.logo && (
            <Image
              src={skill.logo}
              alt={skill.name}
              width={20}
              height={20}
              className="rounded-full"
            />
          )}
          <span>{skill.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-md mx-auto"
      transition={{ duration: 0.6 }}
    >
      <div className="p-6">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold text-gray-800 dark:text-white mb-4"
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Web Development</h3>
          {renderSkills(webDev)}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Backend Development</h3>
          {renderSkills(backendDev)}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Frameworks</h3>
          {renderSkills(frameworks)}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">DevOps</h3>
          {renderSkills(devOps)}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Tools & Environment</h3>
          {renderSkills(toolsAndEnv)}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsCard;