import React from 'react';
import { motion } from 'framer-motion';
import SpaceBackground from '../components/SpaceBackground';

function Education() {
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
              Education Journey
            </h1>
            
            <div className="space-y-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 hover:shadow-lg transition-shadow border border-cyan-400/20"
              >
                <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
                  Bachelor of Computer Applications
                </h2>
                <p className="text-gray-400 mb-4">
                  Chandigarh University | 2021 - Present
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Maintaining excellent academic performance</li>
                  <li>Active participant in coding competitions</li>
                  <li>Member of the University's Tech Club</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6 hover:shadow-lg transition-shadow border border-cyan-400/20"
              >
                <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
                  Higher Secondary Education
                </h2>
                <p className="text-gray-400 mb-4">
                  Your School Name | 2019 - 2021
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Graduated with distinction in Computer Science</li>
                  <li>Participated in various technical competitions</li>
                  <li>Class representative and tech club coordinator</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Education;