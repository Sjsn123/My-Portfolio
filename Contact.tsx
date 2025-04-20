import React from 'react';
import { motion } from 'framer-motion';
import SpaceBackground from '../components/SpaceBackground';

function Contact() {
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
              Get in Touch
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
                  Let's Connect
                </h2>
                <p className="text-gray-400 mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 rounded-lg border border-cyan-400/20">
                    <h3 className="font-semibold text-cyan-400 mb-2">Email</h3>
                    <p className="text-gray-400">paburnwal123@gmail.com</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-4 rounded-lg border border-cyan-400/20">
                    <h3 className="font-semibold text-cyan-400 mb-2">Phone</h3>
                    <p className="text-gray-400">+91 7406395095</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-sm text-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-sm text-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-sm text-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;