import React from 'react';
import {ArrowBigUpDash} from "lucide-react";
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Footer = () => {
  return (
      <footer className="relative bg-dirt text-cream max-w-[1080px] mx-auto overflow-hidden">
          <ScrollReveal direction="down" delay={0.4} className="relative z-10">
          {/* Left Root */}
          <img
              src="/assets/backgrounds/root-left.png"
              alt="tree roots left"
              className="absolute w-48 md:w-64 lg:w-96 top-0 left-[5%] opacity-40"
          />

          {/* Right Root */}
          <img
              src="/assets/backgrounds/root-right.png"
              alt="tree roots right"
              className="absolute w-48 md:w-64 lg:w-96 top-0 right-[5%] opacity-40"
          />

          {/* Footer Content */}
          <div className="relative z-10 flex items-center justify-between px-6 py-8">
              <a href="mailto:info@pinecoded.co.uk" className="text-md hover:underline hover:text-leaf">
                  info@pinecoded.co.uk
              </a>
              <a href="#top" aria-label="Scroll to top">
                  <motion.div
                      animate={{
                          rotate: [0, -8, 8, -6, 6, -4, 4, 0],     // playful wiggle
                          y: [0, -6, 0, -3, 0],                    // subtle bounce
                      }}
                      transition={{
                          duration: 2,
                          ease: 'easeInOut',
                          repeat: Infinity,
                          repeatDelay: 0.9,
                      }}
                  >
                      <ArrowBigUpDash className="w-8 h-8 hover:text-leaf transition-colors" />
                  </motion.div>
              </a>
              <p className="text-sm opacity-75">&copy; {new Date().getFullYear()} PineCoded</p>
          </div>
          </ScrollReveal>
      </footer>
  );
};

export default Footer;