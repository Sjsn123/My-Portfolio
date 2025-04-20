import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SpaceBackground from '../components/SpaceBackground';

function Projects() {
  return (
    <div className="min-h-screen bg-[#030014] relative overflow-hidden">
      <SpaceBackground />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-20 px-4 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#030014]/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-cyan-400/20"
          >
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Projects & Achievements
            </h1>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 hover:shadow-lg transition-shadow border border-cyan-400/20"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold text-cyan-400">
                    Student Tracker System
                  </h2>
                  <div className="flex space-x-2">
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">
                  A comprehensive system for tracking student attendance and performance,
                  built with Java and MySQL.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm border border-cyan-400/20">
                    Java
                  </span>
                  <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm border border-cyan-400/20">
                    MySQL
                  </span>
                  <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm border border-cyan-400/20">
                    JDBC
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6 hover:shadow-lg transition-shadow border border-cyan-400/20"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold text-cyan-400">
                    Portfolio Website
                  </h2>
                  <div className="flex space-x-2">
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">
                  A modern, responsive portfolio website built with React and Tailwind CSS.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm border border-cyan-400/20">
                    React
                  </span>
                  <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm border border-cyan-400/20">
                    Tailwind
                  </span>
                  <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm border border-cyan-400/20">
                    TypeScript
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-400/20"
            >
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
                Certifications & Achievements
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></span>
                  <span className="text-gray-400">Advanced JavaScript Certification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></span>
                  <span className="text-gray-400">First Prize in University Hackathon</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></span>
                  <span className="text-gray-400">Java Development Excellence Award</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;