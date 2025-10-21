import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white"
    >
      {/* Profile Picture */}
      <motion.img
        src={logo} 
        alt="Sumanth"
        className="w-60 h-[26rem] sm:w-72 sm:h-[30rem] md:w-96 md:h-[36rem] mb-6 md:mb-0 md:mr-12 md:mt-12 mt-28"
        initial={{ opacity: 0, x: -80, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      />

      {/* Text Content */}
      <div className="flex flex-col justify-center -mt-28 sm:-mt-24 md:mt-0">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Hi, I’m Sumanth M
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-6 drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Aspiring Full Stack Developer | Eager to Learn and Create
        </motion.p>

        <motion.div
          className="space-x-4 flex justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a
            href="#projects"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-gray-200 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 shadow-lg transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
