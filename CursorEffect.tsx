import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CursorParticle {
  id: number;
  x: number;
  y: number;
  color: string;
}

export default function CursorEffect() {
  const [particles, setParticles] = useState<CursorParticle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const colors = ['#60A5FA', '#34D399', '#F472B6', '#A78BFA', '#38BDF8'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: MouseEvent) => {
      const newParticles = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
      setParticles(prev => [...prev, ...newParticles]);

      // Remove particles after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed w-4 h-4 rounded-full bg-cyan-400/50 pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePos.x - 8,
          y: mousePos.y - 8,
          scale: 1,
          opacity: 0.8
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      />
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: particle.x,
              y: particle.y,
              scale: 0,
              opacity: 1
            }}
            animate={{
              x: particle.x + (Math.random() - 0.5) * 100,
              y: particle.y + (Math.random() - 0.5) * 100,
              scale: 2,
              opacity: 0
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
            style={{ backgroundColor: particle.color }}
            className="fixed w-3 h-3 rounded-full pointer-events-none z-50 mix-blend-screen"
          />
        ))}
      </AnimatePresence>
    </>
  );
}