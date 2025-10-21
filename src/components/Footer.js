/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <p className="mb-4">© 2025 Sumanth | Dream in code, build in reality.</p>
      <div className="flex justify-center gap-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/sumanth-m-b911b0252"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Sumanth1116"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=arunisumanth20031964@gmail.com"
          className="hover:text-red-500 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
