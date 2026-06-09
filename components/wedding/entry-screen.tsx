'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function EntryScreen({ onEnter }: { onEnter: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleEnter = () => {
    setIsVisible(false);
    setTimeout(onEnter, 500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Background image */}
          <Image
            src="/bg.jpeg"
            alt="background"
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(250,247,240,0.75)_0%,rgba(245,240,230,0.75)_50%,rgba(250,247,240,0.75)_100%)]" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 text-center px-6 sm:px-8 w-full max-w-sm sm:max-w-md mx-auto"
          >
            {/* Ganesh */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-4 sm:mb-6 flex justify-center"
            >
              <img
                className="hero-ganesh sm:w-28 sm:h-28 object-contain w-75 h-75"
                alt="Ganesh"
                src="bg-ganesh-Doltar5t.png"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xs sm:text-sm tracking-[0.3em] text-[#800020] uppercase mb-2 sm:mb-4"
            >
              Chandina's
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xs sm:text-sm tracking-[0.3em] text-[#800020] uppercase mb-3 sm:mb-4"
            >
              Wedding Invitation
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl text-[#800020] mb-1 sm:mb-2"
              style={{ fontFamily: 'var(--font-great-vibes), cursive' }}
            >
              Swamy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-base sm:text-xl text-[#c9a227] tracking-widest mb-1 sm:mb-2"
            >
              weds
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-4xl sm:text-5xl md:text-7xl text-[#800020] mb-5 sm:mb-8"
              style={{ fontFamily: 'var(--font-great-vibes), cursive' }}
            >
              Satya
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-8"
            >
              Friday, June 26, 2026 • 8:49 PM
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnter}
              className="px-8 sm:px-10 py-3 sm:py-4 rounded-full text-primary-foreground text-sm sm:text-base font-medium tracking-wide transition-all shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #800020 0%, #a02040 100%)',
              }}
            >
              Open Invitation
            </motion.button>

            {/* Bottom ornament */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="mt-6 sm:mt-8"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#c9a227]" />
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#c9a227]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L9 9L2 12L9 15L12 22L15 15L22 12L15 9L12 2Z" />
                </svg>
                <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#c9a227]" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}