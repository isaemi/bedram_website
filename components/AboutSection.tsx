import React from 'react';
import { motion } from 'framer-motion';

const aboutFeatures = [
{ description: "THE COMMUNE OF FANIN and its ardent rakyat are a rather young chukwa: the long-fought outcome of rebellion against the formerly autocratic and corrupt Suzerainty of Fanin. Now seeking resources for post-revolutionary reconstruction, the chukwa is now struggling to gain intercontinental recognition, facing alienation and hostility." },
{ description: "THE UNITED VILLS OF BARRON is a theocratic isolationist chukwa that has amassed notoriety for its violent and belligerent raids across Bedlam. They worship their deity “John Barron,” an orange-skinned humanoid figure that is said to be the reincarnation of God, promoting imperial expansion by divine right." },
{ description: "THE REPUBLIC OF DELORÉ exists as Bedlam’s latest attempt at liberal democracy. Located on the far southern reaches of the Waters Between, the mercantilist rakyat has begun making waves in the greater known world through shrewd trade deals and astute diplomatic alliances, drawing individuals in with a faint promise of hope." },
{ description: "THE WAVELENGTH TERRITORIES is a loosely organized federation of nations that lie geographically in the far northern stretches of Greater Bedlam. Despite largely staying away from the rest of civilization, the rakyat is known far and wide through the reliable and advanced tech they produce, sparking rumours of toying with dark and forbidden magic." }

];

const boldNames = (text: string) => {
  const targets = [
    "THE COMMUNE OF FANIN",
    "THE UNITED VILLS OF BARRON",
    "THE REPUBLIC OF DELORÉ",
    "THE WAVELENGTH TERRITORIES"
  ];

  let result = text;
  targets.forEach(name => {
    const bold = `<span class="font-bold">${name}</span>`;
    result = result.replace(name, bold);
  });

  return result;
};

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
         
     <div
  className="absolute inset-0 bg-[url('/image/mechanics.png')] bg-no-repeat bg-cover bg-center z-0"
  style={{filter: 'grayscale(50%) brightness(0.5)'}}
></div>

      <AnimatedText
        text="BEDLAM, AND THE WATERS BETWEEN"
        className="font-display mt-5 text-2xl md:text-6xl uppercase text-glow-cyan mb-8 tracking-widest"
      />

      <motion.p
        className="max-w-6xl z-10 mt-5 text-center text-gray-400 text-lg md:text-xl lg:text-2xl leading-relaxed"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        There exists no longer faith that sustains. Hope is scarce and mercy is fading fast. How could it not have come to this? Xiān slumbers in Their heaven, Their skies silent. What remains hangs in the thick, humid air. You feel it. The push to live. To keep going. Forward. Across endless fields of saltwater, deep in the maze of subterranean ruins, lie truths long hidden. Maybe it was love all along. That thing called compassion and humanity that our grandparents’ grandparents gave their lives for. Maybe that is the key to escaping our misery, the key to breaking the cycle of Pralay. Maybe. Or maybe not. The grip on the 11 gun in your right hand and the diveaxe in your left tightens, and you grit your teeth as you step onto the mezzanine to face your rakyat. They cheer and howl for their Amid, not from belief or passion, but from need. They have nothing else. Same as you. And you answer them the only way you can. Diveaxe raised high, you promise them survival. You promise them life. Hope.

      </motion.p>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "60%" }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="h-[2px] mt-5 bg-gradient-to-r from-transparent via-magenta-500 to-transparent"
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
