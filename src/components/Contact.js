import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 relative inline-block">
          Contact Me
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded"></span>
        </h2>

        <p className="text-gray-600 mb-6">
          Feel free to reach out via email or connect with me on social media.
        </p>
        <div className="space-x-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=arunisumanth20031964@gmail.com"
            className="text-blue-600 font-medium hover:underline"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/sumanth-m-b911b0252"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Sumanth1116"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
