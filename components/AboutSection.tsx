import React from 'react';
import { motion } from 'framer-motion';

const aboutFeatures = [
  { description: "A survival strategy game where you lead a chukwa through storms, raids, and politics. Your goal is simple. Keep your people alive." },
  { description: "Hope is rare in Bedlam. Every turn forces a choice. Trust or betray. Risk or retreat. No path is safe and no plan lasts long." },
  { description: "Take actions, explore ruins, trade, negotiate, or fight other players. Use your rakyat traits to your advantage. Time your moves to survive the next Pralay." },
  { description: "Every session plays out differently. Random events, council meetings, raids, and Kiseki rolls keep the world unstable and full of tension." }
];

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.04 }
        }
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.35 }
            }
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};

const AboutCard = ({ description, index }: { description?: string, index?: number }) => {
  return (
    <motion.div
      className="p-6 border-4 border-gray-400/50 bg-black/30 backdrop-blur-md flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{
        scale: 1.05,
        borderColor: "#9ca3af",
        boxShadow: "0 0 20px #9ca3af, inset 0 0 10px #9ca3af"
      }}
    >
      <p className="text-gray-400 text-lg">{description}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center">

      <AnimatedText
        text="The World of Bedlam"
        className="font-display mt-10 text-2xl md:text-6xl uppercase text-glow-cyan mb-8 tracking-widest"
      />

      <motion.p
        className="max-w-4xl mt-10 text-center text-gray-400 text-lg md:text-xl lg:text-2xl leading-relaxed"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        A thousand years after the collapse, Earth is no longer the same. Now called Bedlam, ninety five percent of the planet is covered by saltwater and storms that never end. People survive on floating cities called chukwa, built long ago by hands no one remembers. At the center of this world stands Babel, a massive alien tower that reaches up into the sky and down into the deep sea. You are the Amid, the leader of a fishermen chukwa, trying to guide your people through the next Pralay.
      </motion.p>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "60%" }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="h-[2px] mt-10 bg-gradient-to-r from-transparent via-magenta-500 to-transparent"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {aboutFeatures.map((feature, index) => (
          <AboutCard {...feature} index={index} />
        ))}
      </div>

    </div>
  );
};

export default AboutSection;
