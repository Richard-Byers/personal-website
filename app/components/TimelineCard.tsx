'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type TimelineCardProps = {
  title: string;
  subtitle: string; 
  logo?: string; 
  timeFrom: string; 
  timeTo: string; 
};

const TimelineCard = ({
  title,
  subtitle,
  logo,
  timeFrom,
  timeTo,
}: TimelineCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-xl mx-auto"
      transition={{ duration: 0.6 }}
    >
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center mb-6 justify-between"
          transition={{ delay: 0.2 }}
        >
          {logo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative h-16 w-16 rounded-full overflow-hidden"
              transition={{ delay: 0.1 }}
            >
              <Image
                src={logo}
                alt={title}
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
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{subtitle}</p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-right"
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
              {timeFrom} - {timeTo}
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TimelineCard;