'use client'
import React from 'react';

import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import ProfileCard from "./components/ProfileCard";
import SkillsCard from './components/SkillsCard';
import TimelineCard from './components/TimelineCard';

import { motion } from 'framer-motion';

export default function Home() {
  const calculateTimeSpent = (startYear: number, startMonth: number) => {
    const startDate = new Date(startYear, startMonth - 1);
    const currentDate = new Date();
    const totalMonths =
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      (currentDate.getMonth() - startDate.getMonth());
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return `${years} year${years !== 1 ? 's' : ''} and ${months} month${months !== 1 ? 's' : ''}`;
  };

  const timeSpentAtCurrentEmployer = calculateTimeSpent(2022, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: (direction: string) => ({
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    }),
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <div id="top" className="relative z-50">
        <Navbar />
      </div>
      <main className="container mx-auto py-10 px-4 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            custom="left"
            variants={cardVariants}
            id="about"
            className="mb-4"
          >
            <ProfileCard
              name="Richard Byers"
              title="Software Engineer"
              bio={
                <>
                  Hi there, my name is Richard, welcome to my personal website. I
                  am a Software Engineer that has been working at Proofpoint for{" "}
                  {timeSpentAtCurrentEmployer} where I first started my career in
                  software development as an intern in June 2022. I have
                  experience in various different software languages which you
                  will see listed below.
                </>
              }
            />
          </motion.div>
          <motion.div
            custom="right"
            variants={cardVariants}
            id="skills"
            className="mb-4"
          >
            <SkillsCard
              title="Skills"
              webDev={[
                { name: "React", logo: "/logos/react.svg" },
                { name: "TypeScript", logo: "/logos/typescript.svg" },
                { name: "JavaScript", logo: "/logos/javascript.svg" },
                { name: "HTML5", logo: "/logos/html5.svg" },
                { name: "CSS", logo: "/logos/css.svg" },
              ]}
              backendDev={[
                { name: "Java", logo: "/logos/java.svg" },
                { name: "Python", logo: "/logos/python.svg" },
                { name: "PHP", logo: "/logos/php.svg" },
                { name: "Node.js", logo: "/logos/nodejs.svg" },
                { name: "PostgreSQL", logo: "/logos/postgres.svg" },
                { name: "SQL Server", logo: "/logos/sqlserver.svg" },
                { name: "Perl", logo: "/logos/perl.svg" },
              ]}
              frameworks={[
                { name: "Spring Boot", logo: "/logos/springboot.svg" },
                { name: "Laravel", logo: "/logos/laravel.svg" },
                { name: "Express.js", logo: "/logos/ExpressJS.svg" },
                { name: "Flask", logo: "/logos/Flask.svg" },
              ]}
              devOps={[
                { name: "Git", logo: "/logos/git.svg" },
                { name: "Docker", logo: "/logos/docker.svg" },
                { name: "GitLab CI", logo: "/logos/gitlab.svg" },
              ]}
              toolsAndEnv={[
                { name: "macOS", logo: "/logos/macos.svg" },
                { name: "Windows", logo: "/logos/windows.svg" },
                { name: "VS Code", logo: "/logos/vscode.svg" },
                { name: "IntelliJ Idea", logo: "/logos/intellij.svg" },
                { name: "Postman", logo: "/logos/postman.svg" },
                { name: "DBeaver", logo: "/logos/dbeaver.svg" },
              ]}
            />
          </motion.div>
          <motion.div
            custom="left"
            variants={cardVariants}
            id="experience"
            className="mb-4"
          >
            <TimelineCard
              title="Experience"
              info={[
                {
                  title: "Proofpoint",
                  subtitle: "Software Engineer Intern",
                  logo: "/logos/proofpoint.jpeg",
                  timeFrom: "June 2022",
                  timeTo: "June 2024",
                },
                {
                  title: "Proofpoint",
                  subtitle: "Software Engineer",
                  logo: "/logos/proofpoint.jpeg",
                  timeFrom: "June 2024",
                  timeTo: "Present",
                },
              ]}
            />
          </motion.div>
          <motion.div
            custom="right"
            variants={cardVariants}
            id="education"
            className="mb-4"
          >
            <TimelineCard
              title="Education"
              info={[
                {
                  title: "Queen's University Belfast",
                  subtitle: "BEng Software Engineering With Placement",
                  logo: "/logos/queens.png",
                  timeFrom: "September 2020",
                  timeTo: "June 2024",
                  grade: "First Class Honours"
                },
              ]}
            />
          </motion.div>
          <motion.div
            custom="left"
            variants={cardVariants}
            id="projects"
            className="mb-4"
          >
            <TimelineCard
              title="Projects"
              info={[
                {
                  title: "Manage My Cloud",
                  subtitle: "Multi-Cloud Management",
                  timeFrom: "September 2023",
                  timeTo: "April 2024",
                  link: "https://github.com/Richard-Byers/manage-my-cloud",
                },
              ]}
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Footer />
        </motion.div>
      </main>
    </>
  );
}