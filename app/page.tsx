'use client'
import React from 'react';

import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import ProfileCard from "./components/ProfileCard";
import SkillsCard from './components/SkillsCard';

import {motion} from 'framer-motion'

export default function Home() {
  return (
    <>
      <div className="relative z-50">
        <Navbar />
      </div>
      <main className="container mx-auto py-10 px-4 pt-20">
        <div id="about" className="mb-4">
          <ProfileCard
            name="Richard Byers"
            title="Software Engineer"
            bio="Software engineer by day, entertainment enthusiast by night! That's me, Richard Byers, from Belfast, Northern Ireland. I leverage my programming skills to build and work on improving full-stack applications. My fascination with technology extends beyond coding. The lessons I learned I have learned while at Proofpoint has been team work, effective communication, discipline, problem solving and adaptabililty. Queen's University equipped me with the technical knowledge and problem-solving skills to excel in this field. When I'm not coding, you'll likely find me gaming - I find it's a great way to unwind and recharge. (Well when not playing eSports titles that is!)"
          />
        </div>
        <div id="skills" className="mb-4">
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
        </div>
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
