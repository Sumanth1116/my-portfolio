/* eslint-disable react/jsx-no-undef */
import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Alumni Management System",
      description: "It is a user-friendly interfaces for alumni to register, login, and manage profiles securely.",
      github: "https://github.com/DHariharanD/Alumni-Connect.git",
    },
    {
      title: "Quiz Master",
      description: "Quiz master is a useful tool for those looking to explore, learn, and their knowledge in an interactive way.",
      github: "https://github.com/Sumanth1116/quiz-master",
    },
    {
      title: "Calculator App",
      description: "A simple and elegant Calculator Application built using Python Tkinter.",
      github: "https://github.com/Sumanth1116/calculator-app.git",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 relative inline-block">
          Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded"></span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="relative bg-white rounded-xl shadow-lg p-6 cursor-pointer overflow-hidden group transition-all duration-500"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500"></div>

              <h3 className="text-xl font-semibold mb-3 relative z-10">{project.title}</h3>
              <p className="text-gray-600 mb-4 relative z-10">{project.description}</p>
              
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-800 hover:text-blue-600 transition relative z-10"
              >
                <FaGithub className="text-2xl" />
                <span className="hidden md:inline font-medium">GitHub</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
