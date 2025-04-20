import React from 'react';
import { motion } from 'framer-motion';
import SpaceBackground from '../components/SpaceBackground';

function Experience() {
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
              Professional Experience
            </h1>

            <div className="space-y-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 hover:shadow-lg transition-shadow border border-cyan-400/20"
              >
                <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
                  Java Developer Intern
                </h2>
                <p className="text-gray-400 mb-4">
                  Code Alpha | 2024
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Developed and maintained Java applications</li>
                  <li>Collaborated with team members on various projects</li>
                  <li>Improved application efficiency by 30%</li>
                  <li>Implemented new features and resolved bugs</li>
                  <li>Participated in code reviews and team meetings</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6 hover:shadow-lg transition-shadow border border-cyan-400/20"
              >
                <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
                  Freelance Web Developer
                </h2>
                <p className="text-gray-400 mb-4">
                  Self-Employed | 2022 - Present
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Developed responsive websites for clients</li>
                  <li>Implemented modern web technologies and best practices</li>
                  <li>Managed client relationships and project timelines</li>
                  <li>Created custom solutions for unique client needs</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;