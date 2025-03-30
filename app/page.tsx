'use client'
import React from 'react';

import AboutMeCard from './components/AboutMeCard';
import SkillsCard from './components/SkillsCard';
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4">
      <div className="mb-4">
        <ProfileCard
          name="Richard Byers"
          title="Software Engineer"
          shortBio="I'm a Software Engineer that is currently working for Proofpoint where I began my professional career as an intern."
          skills={["React", "Next.js", "TypeScript", "Node.js", "TailwindCSS"]}
          imageUrl="/RichardByersCircle.jpeg"
        />
      </div>
      <div className="mb-4">
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
      ]}
      frameworks={[
        { name: "Spring Boot", logo: "/logos/springboot.svg" },
        { name: "Express.js", logo: "/logos/ExpressJS.svg" },
        { name: "Flask", logo: "/logos/flask.svg" },
      ]}
      devOps={[
        { name: "Git", logo: "/logos/git.svg" },
        { name: "Docker", logo: "/logos/Docker.svg" },
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
      </div>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Footer />
      </motion.div>
      </main>
  );
}
