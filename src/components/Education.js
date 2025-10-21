/* eslint-disable react/jsx-no-undef */
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

function Education() {
  const educationData = [
    {
      title: "Secondary School",
      school: "ST. John’s High School",
      year: "2018 - 2019",
    },
    {
      title: "Pre-University College",
      school: "Anikethana Integrated PU College",
      year: "2020 - 2021",
    },
    {
      title: "Bachelor of Engineering",
      school: "PES College of Engineering",
      field: "Information Science",
      year: "2021 - 2025",
    },
  ];

  return (
    <motion.section
      className="py-12 px-4 sm:py-20 sm:px-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionWrapper id="Education">
        {/* Section Heading */}
<div className="sticky top-10 z-20 text-center mb-8">
  <h2 className="mt-20 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
    Education
    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded"></span>
  </h2>
</div>



        {/* Timeline */}
        <div className="relative flex flex-col md:flex-row md:justify-between items-center">
          {/* Horizontal line */}
          <div className="hidden md:block absolute top-1/2 w-full h-1 bg-gray-300 -translate-y-1/2 z-0"></div>

          {educationData.map((edu, index) => {
            const isTop = index % 2 === 0; // alternate above/below line
            return (
              <motion.div
                key={index}
                className={`relative md:w-1/3 flex flex-col items-center md:items-center mb-12 md:mb-0`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                {/* Timeline Dot */}
                <span className="absolute md:top-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-blue-600 rounded-full border-2 border-white shadow z-10"></span>

                {/* Card */}
                <div
                  className={`bg-white border-2 border-black rounded-xl shadow-[6px_6px_15px_rgba(0,0,0,0.2),_-6px_-6px_15px_rgba(0,0,0,0.2)] p-6 sm:p-8 hover:shadow-[10px_10px_25px_rgba(0,0,0,0.3),_-10px_-10px_25px_rgba(0,0,0,0.3)] transition-shadow duration-300 w-64 text-center
                  ${isTop ? "md:-translate-y-32" : "md:translate-y-32"}`}
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1">{edu.title}</h3>
                  <p className="text-gray-600 mb-1">{edu.school}</p>
                  {edu.field && <p className="text-gray-600 mb-1">{edu.field}</p>}
                  <span className="text-gray-500 text-sm">{edu.year}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>
    </motion.section>
  );
}

export default Education;
