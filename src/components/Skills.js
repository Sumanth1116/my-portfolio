/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython className="text-blue-700 text-4xl" /> },
    { name: "HTML", icon: <FaHtml5 className="text-5xl text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-5xl text-blue-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-5xl text-yellow-400" /> },
    { name: "ReactJS", icon: <FaReact className="text-5xl text-cyan-400" /> },
    { name: "NodeJS", icon: <FaNodeJs className="text-5xl text-green-600" /> },
    { name: "ExpressJS", icon: <SiExpress className="text-5xl text-gray-700" /> },
    { name: "MySQL", icon: <FaDatabase className="text-5xl text-blue-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-5xl text-green-500" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
<div className="sticky top-10 z-20 text-center mb-10">
  <h2 className="mt-20 text-2xl sm:text-3xl md:text-4xl font-bold  text-gray-800 relative inline-block">
    Skills
    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded"></span>
  </h2>
</div>


        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group flex flex-col items-center justify-center bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-blue-400/50 cursor-pointer transition-all duration-300"
            >
              {/* Icon Glow */}
              <div className="transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
                {skill.icon}
              </div>

              {/* Title Glow */}
              <p className="mt-3 text-lg font-medium text-gray-700 transition-all duration-300 group-hover:text-blue-600 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.9)]">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;


//{ name: "Python", icon: <FaPython className="text-blue-700 text-4xl" /> },