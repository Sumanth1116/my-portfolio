/* eslint-disable react/jsx-no-undef */
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

function About() {
  return (
    <motion.section
      className="py-12 px-4 sm:py-20 sm:px-6 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionWrapper id="about">
        <section id="about" className="py-12 sm:py-20">
          <div className="flex justify-center">
            {/* Text Card with hover shadow */}
            <motion.div
              className="bg-white border-2 border-black rounded-2xl p-6 sm:p-10 md:p-12 w-full sm:max-w-3xl text-center
                         shadow-[6px_6px_15px_rgba(0,0,0,0.2),_-6px_-6px_15px_rgba(0,0,0,0.2)]
                         hover:shadow-[10px_10px_25px_rgba(0,0,0,0.3),_-10px_-10px_25px_rgba(0,0,0,0.3)]
                         transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ y: -5 }}
            >
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative inline-block">
                About Me
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded"></span>
              </h2>

              {/* Content */}
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                Aspiring engineering student seeking a position to leverage my technical skills, 
                to gain hands on experience, contribute to team success, and further develop my 
                engineering foundation through mentorship and project-based learning.
              </p>
            </motion.div>
          </div>
        </section>
      </SectionWrapper>
    </motion.section>
  );
}

export default About;
