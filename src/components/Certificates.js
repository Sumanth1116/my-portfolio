"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Import all images
import cloudCert from "../assets/cloud computing - certificate.jpg";
import aiCert from "../assets/internship-virtual.png";
import softSkillsCert from "../assets/softskills - certificate.jpg";
import accentureCert from "../assets/accenture certificate.jpg";
import deloitteCert from "../assets/deloitte certificate.jpg";
import fvtuCert from "../assets/Fvtu - certificate.jpg";
import fvtu1Cert from "../assets/Fvtu1 - certificate.jpg";

const certificates = [
  { id: 1, title: "Certificate 1", text: "NPTEL - Cloud Computing", image: cloudCert },
  { id: 2, title: "Certificate 2", text: "AI-ML Virtual Internship", image: aiCert },
  { id: 3, title: "Certificate 3", text: "Strategy and leadership for career development", image: softSkillsCert },
  { id: 4, title: "Certificate 4", text: "Inter-Collegiate Division Level Football Tournament - WINNERS (2022-2023)", image: accentureCert },
  { id: 5, title: "Certificate 5", text: "Inter-Collegiate Division Level Football Tournament - WINNERS (2023-2024)", image: deloitteCert },
  { id: 6, title: "Certificate 6", text: "Inter-Collegiate Division Level Football Tournament - WINNERS (2023-2024)", image: fvtuCert },
  { id: 7, title: "Certificate 7", text: "Inter-Collegiate Division Level Football Tournament - WINNERS (2023-2024)", image: fvtu1Cert },
];

export default function Certificates() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="Certificates"
      ref={targetRef}
      className="relative h-[200vh] bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      {/* Section Heading */}
      <div className="sticky top-10 z-20 text-center mb-10">
        <h2 className="mt-20 text-2xl sm:text-3xl md:text-4xl font-bold text-white relative inline-block">
          Certificates
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600 rounded"></span>
        </h2>
      </div>

      {/* Sticky container */}
      <div className="sticky top-20 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-16">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="min-w-[340px] h-[360px] bg-white/5 backdrop-blur-lg text-white p-5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex flex-col transition-all duration-300 border-b-4 border-white/20"
              style={{
                rotate: i % 2 === 0 ? "-8deg" : "8deg",
                transform: `translateY(${i % 2 === 0 ? "30px" : "-30px"})`,
              }}
              whileHover={{
                rotate: 0,
                scale: 1.05,
                boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                backgroundColor: "rgba(255,255,255,0.08)",
                borderBottomColor: "rgba(255,255,255,0.6)",
              }}
            >
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-lg mb-3 cursor-pointer border border-white/10"
                onClick={() => setSelectedImage(cert.image)}
              />

              {/* Title & Text */}
              <h3 className="text-lg font-bold mb-2 tracking-wide">{cert.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{cert.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Certificate Preview"
            className="max-w-4xl max-h-[90vh] rounded-lg shadow-2xl border border-white/20"
          />
        </div>
      )}
    </section>
  );
}
