import React from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ text }: { text: string }) => (
  <motion.div
    key={text}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="font-display text-3xl md:text-6xl text-center text-glow-cyan uppercase tracking-widest"
  >
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.05, delay: i * 0.02 }}
      >
        {char}
      </motion.span>
    ))}
  </motion.div>
);

const CreditsSection = () => {
  const credits = [
    {
      title: "GAME CONCEPT (Ideation & Mechanics)",
      people: ["Nigel (50%)", "Solomon (50%)"],
    },
    {
      title: "CREATIVE DIRECTION (Visual Direction, Cards & UI Assets)",
      people: ["Nigel (100%)"],
    },
    {
      title: "COPYWRITING (Lore & Worldbuilding)",
      people: ["Nigel (100%)"],
    },
    {
      title: "GAME TRAILER (Editing & Direction)",
      people: ["Zahra (100%)"],
    },
    {
      title: "GAME PROTOTYPE (Development & Documentation)",
      people: ["Solomon (100%)"],
    },
    {
      title: "GAME WEBSITE (Back-end Code & Development)",
      people: ["Saemi (100%)"],
    },
    {
      title: "TRAILER SOUNDTRACK (Production & Arrangement)",
      people: ["Saemi (100%)"],
    },
    {
      title: "ADMINISTRATIVE TASKS (Logging, Minutes & Organization)",
      people: ["Ibrahim (100%)"],
    },
  ];

  return (
    <footer className="py-20 md:py-24 text-center relative">

      {/* Divider line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-1/4 bg-cyan-400/50"
        style={{
          animation: `pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
          boxShadow: '0 0 15px #00ffff'
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <GlitchText text="CREATION BY" />

        {/* Logo */}
        <img
          src="/image/overdueworks.png"
          alt="logo"
          className="mt-10 mx-auto w-[300px] sm:w-[400px] md:w-[500px] lg:w-[650px] object-contain"
        />

        {/* GRID BOX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto px-4">
          {credits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border border-cyan-400/40 rounded-lg p-6 bg-black/40 
                         shadow-[0_0_20px_rgba(0,255,255,0.15)] backdrop-blur-sm"
            >
              <h3 className="text-cyan-400 font-subheader text-lg md:text-xl tracking-widest text-glow-cyan mb-3">
                {item.title}
              </h3>

              {item.people.map((p, i) => (
                <p key={i} className="text-gray-300 text-sm md:text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        <p className="text-sm mt-10 opacity-50">
          BEDLAM and all associated assets © 2025 Overdue Works. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default CreditsSection;
