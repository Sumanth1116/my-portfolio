/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          Sumanth
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li><Link to="hero" smooth duration={600} className="cursor-pointer hover:text-blue-600">Home</Link></li>
          <li><Link to="about" smooth duration={600} className="cursor-pointer hover:text-blue-600">About</Link></li>
          <li><Link to="Education" smooth duration={600} className="cursor-pointer hover:text-blue-600">Education</Link></li>
          <li><Link to="skills" smooth duration={600} className="cursor-pointer hover:text-blue-600">Skills</Link></li>
          <li><Link to="Certificates" smooth duration={600} className="cursor-pointer hover:text-blue-600">Certificates</Link></li>
          <li><Link to="projects" smooth duration={600} className="cursor-pointer hover:text-blue-600">Projects</Link></li>
          <li><Link to="contact" smooth duration={600} className="cursor-pointer hover:text-blue-600">Contact</Link></li>
         
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-2xl text-gray-800 focus:outline-none"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/30 backdrop-blur-lg shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        {/* Close Button (Top Right) */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl text-gray-800 hover:text-red-500"
        >
          <FiX />
        </button>

        {/* Links */}
        <ul className="flex flex-col space-y-6 mt-20 px-6 font-semibold text-lg text-gray-900">
          <li>
            <Link onClick={() => setIsOpen(false)} to="hero" smooth duration={600} className="hover:text-blue-600 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="about" smooth duration={600} className="hover:text-blue-600 cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="Education" smooth duration={600} className="hover:text-blue-600 cursor-pointer">
              Education
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="skills" smooth duration={600} className="hover:text-blue-600 cursor-pointer">
              Skills
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="Certificates" smooth duration={600} className="hover:text-blue-600 cursor-pointer">
              Certificates
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="projects" smooth duration={600} className="hover:text-blue-600 cursor-pointer">
              Projects
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} to="contact" smooth duration={600} className="hover:text-blue-600 cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
