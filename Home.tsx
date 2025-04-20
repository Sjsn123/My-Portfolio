import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import SpaceBackground from '../components/SpaceBackground';

function Home() {
  const [currentTitle, setCurrentTitle] = React.useState(0);
  const titles = ["Aspiring Software Developer", "Web Developer", "Java Developer"];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#030014] relative overflow-hidden">
      <SpaceBackground />
      
      <nav className="fixed top-0 left-0 right-0 bg-[#030014]/80 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <HomeIcon className="w-6 h-6" />
              <span className="font-bold">Home</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/education" className="text-gray-400 hover:text-cyan-400 transition-colors">Education</Link>
              <Link to="/experience" className="text-gray-400 hover:text-cyan-400 transition-colors">Experience</Link>
              <Link to="/projects" className="text-gray-400 hover:text-cyan-400 transition-colors">Projects</Link>
              <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 pt-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-cyan-400 mb-4"
            >
              Hello I'm
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text"
            >
              Pallav Burnwal
            </motion.h1>

            <AnimatePresence mode="wait">
              <motion.h2
                key={currentTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-2xl md:text-3xl text-cyan-400 mb-8"
              >
                {titles[currentTitle]}
              </motion.h2>
            </AnimatePresence>

            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-12"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl text-cyan-400 mb-4"
              >
                Overview
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 max-w-2xl"
              >
                Transforming ideas into reality through code. Specializing in full-stack development
                with a focus on creating intuitive and efficient solutions.
              </motion.p>
            </motion.section>

            <div className="grid grid-cols-2 gap-4 mb-12">
              <Link
                to="/projects"
                className="bg-transparent hover:bg-cyan-500 text-cyan-400 hover:text-white border border-cyan-400 hover:border-transparent py-3 px-6 rounded-xl text-center font-semibold transition-all duration-300 transform hover:-translate-y-1"
              >
                View Work
              </Link>
              <Link
                to="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-xl text-center font-semibold transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex space-x-6">
              {[
                { icon: Github, href: "https://github.com/Sjsn123?tab=repositories" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/pallavburnwal" },
                { icon: Mail, href: "mailto:paburnwal123@gmail.com" },
                { icon: Phone, href: "tel:+917406395095" }
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={href}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <motion.div
  className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-cyan-400/20 group"
  whileHover={{ rotate: 8, scale: 1.04 }}
  whileTap={{ rotate: -8, scale: 0.98 }}
  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
>
  <img
    src="my img.png"
    alt="Pallav Burnwal"
    className="w-full h-full object-cover object-center"
    draggable="false"
  />
  {/* Darker overlay for the image */}
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="absolute inset-0 bg-cyan-400/10"></div>
</motion.div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-20 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;