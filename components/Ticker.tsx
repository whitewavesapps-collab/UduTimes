'use client';
import { motion } from 'motion/react';

export function Ticker() {
  return (
    <div className="bg-[#dae2ff] overflow-hidden py-2.5">
      <div className="max-w-screen-2xl mx-auto px-4 flex items-center gap-4">
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#735c00] animate-pulse"></span>
          <span className="font-[family-name:var(--font-work-sans)] text-xs font-bold uppercase tracking-widest text-[#001947]">
            Live Updates
          </span>
        </div>
        <div className="flex-1 overflow-hidden whitespace-nowrap relative flex">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="inline-flex gap-8 font-[family-name:var(--font-work-sans)] text-sm text-[#144296]"
          >
            <span>New Infrastructure project launched in Warri South • Oil production hits 2-year high in Delta State • Local council elections scheduled for October...</span>
            <span>New Infrastructure project launched in Warri South • Oil production hits 2-year high in Delta State • Local council elections scheduled for October...</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
