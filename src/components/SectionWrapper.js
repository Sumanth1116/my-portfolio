// src/components/SectionWrapper.js
import React from "react";
import { motion } from "framer-motion";

export default function SectionWrapper({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`py-20 px-6 md:px-12 ${className}`}
    >
      {children}
    </motion.section>
  );
}
