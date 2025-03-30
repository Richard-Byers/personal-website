'use client'
import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion'

const ProfileCard = ({
  name = "Your Name",
  title = "Your Title",
  shortBio = "Write a short bio about yourself here. This can include your background, interests, and skills.",
  skills = ["Skill 1", "Skill 2", "Skill 3"],
  imageUrl = "/profile-placeholder.jpg",
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
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Short Bio</h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-600 dark:text-gray-300"
            transition={{ delay: 0.5 }}
          >
            {shortBio}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
