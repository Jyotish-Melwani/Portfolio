import React from 'react'; // Add this if not already included
import { motion } from 'framer-motion';


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-400">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Hello, I&apos;m Jyotish!</h1>
        <p className="text-lg text-white">Welcome to my portfolio website. I am a passionate developer!</p>
      </motion.div>
    </div>
  );
}