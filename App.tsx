import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CursorEffect from './components/CursorEffect';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <CursorEffect />
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
        <nav className="fixed top-0 left-0 right-0 bg-[#030014]/80 backdrop-blur-sm z-50">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                Pallav Burnwal
              </Link>
              <div className="flex items-center space-x-6">
                <Link to="/education" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Education
                </Link>
                <Link to="/experience" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Experience
                </Link>
                <Link to="/projects" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Projects
                </Link>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-cyan-400 transition-colors"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;