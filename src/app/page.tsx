"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ProjectList from '../../components/ProjectList';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-teal-400">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Hello, I&apos;m Jyotish!</h1>
        <p className="text-lg text-white">Welcome to my portfolio website. I am a passionate developer!</p>
      </motion.div>
      <div className="mt-16 w-full px-8">
        <ProjectList />
      </div>
    </div>
  );
}