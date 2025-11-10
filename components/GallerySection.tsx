
import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = Array.from({length:10}, (_, i) =>`/image/gallery/gallery${i+1}.png`)

interface GalleryImageProps {
  src: string;
  index: number;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, index }) => {
  return (
    <motion.div
      className="relative overflow-hidden group border-2 border-magenta-500/0 transition-all duration-300"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        borderColor: '#ff00aa',
        boxShadow: '0 0 25px #ff00aa',
        scale: 2,
        zIndex: 50
      }}      
    >
      <motion.img
        src={src}
        alt={`BEDLAM gallery image ${index + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        style={{ filter: 'saturate(1.2) contrast(1.1) brightness(0.8)' }}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
    </motion.div>
  );
};

const GallerySection = () => {
  return (
    <div className="py-24 md:py-32 relative bg-black">
      <div
        className="absolute inset-0  bg-[url('/image/gallery.png')]"
        style={{ filter: 'grayscale(50%) brightness(0.8)' }}
></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2 
            className="text-4xl md:text-6xl font-display text-center uppercase text-glow-magenta mb-16 tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
        >
            Game Gallery
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((src, index) => (
            <GalleryImage key={index} src={src} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;