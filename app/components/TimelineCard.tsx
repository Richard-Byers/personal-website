'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type TimelineProps = {
  title: string;
  subtitle: string;
  logo?: string;
  timeFrom: string;
  timeTo: string;
  grade?: string;
  link?: string;
};

type TimelineCardProps = {
  title: string;
  info: TimelineProps[];
};

const TimelineCard = ({ title, info }: TimelineCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-xl mx-auto"
      transition={{ duration: 0.6 }}
    >
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white text-left">{title}</h1>
        {info.map((prop, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center mb-6 justify-between"
            transition={{ delay: 0.2 }}
          >
            {prop.logo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative h-16 w-16 rounded-full overflow-hidden"
                transition={{ delay: 0.1 }}
              >
                <Image
                  src={prop.logo}
                  alt={prop.title}
                  width={64}
                  height={64}
                  className="rounded-full"
                  unoptimized
                />
              </motion.div>
            )}
            <div className="ml-3 flex-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-left"
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">{prop.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{prop.subtitle}</p>
                {prop.grade && (
                  <p className="text-gray-600 dark:text-gray-300 font-semibold">
                    Grade: {prop.grade}
                  </p>
                )}
                {prop.link && (
                  <a
                    href={prop.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-blue-400 hover:underline"
                  >
                    Link to Project
                  </a>
                )}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-right"
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                {prop.timeFrom} - {prop.timeTo}
              </h3>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TimelineCard;