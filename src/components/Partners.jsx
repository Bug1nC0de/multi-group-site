import React from 'react';
import { motion } from 'framer-motion';

// Import logos
import sixUnitedLogo from '../assets/partners/six-united.png';
import pimaLogo from '../assets/partners/pima.png';
import enpctLogo from '../assets/partners/enpct-new.png';
import cfmLogo from '../assets/partners/cfm.png';
import naffcoLogo from '../assets/partners/naffco.png';

const Partners = () => {
  const partners = [
    { name: 'Six-United Technology Solutions', logo: sixUnitedLogo, scale: 0.85 },
    { name: 'PIMA Alarm Systems', logo: pimaLogo, scale: 0.9 },
    { name: 'ENPCT', logo: enpctLogo, scale: 0.9 }, // Reduced scale slightly to avoid container edges
    { name: 'CFM', logo: cfmLogo, scale: 0.8 },
    { 
      name: 'NAFFCO', 
      logo: naffcoLogo, 
      scale: 0.9,
      customFilter: 'brightness(0) saturate(100%) invert(15%) sepia(95%) saturate(6932%) hue-rotate(358deg) brightness(95%) contrast(112%)',
      hasGlow: true 
    },
  ];

  return (
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >          <div className="flex flex-col items-center">
            <span className="text-primary font-black text-[10px] uppercase tracking-[0.6em] mb-[-8px]">Global Network</span>
            <h2 className="text-4xl md:text-5xl font-black text-heading-color tracking-tighter uppercase leading-none mt-2">
              Strategic Partners
            </h2>
          </div>
          <div className="w-12 h-1 bg-primary mx-auto mt-8 opacity-20"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 max-w-7xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative flex items-center justify-center bg-bg border border-border/50 p-6 md:p-8 h-32 md:h-36 rounded-sm hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/5 ${
                index === 4 ? 'col-span-2 md:col-span-1 md:col-start-2 lg:col-start-5' : ''
              }`}
            >
              {/* Subtle Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 w-full h-full flex items-center justify-center p-2">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className={`max-h-full w-auto object-contain transition-all duration-700 ease-out ${
                    partner.customFilter ? '' : 'grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100'
                  }`}
                  style={{ 
                    maxWidth: '90%',
                    transform: `scale(${partner.scale})`,
                    filter: partner.customFilter 
                      ? `${partner.customFilter} ${partner.hasGlow ? 'drop-shadow(0 0 2px rgba(255,255,255,0.5))' : ''}`
                      : undefined
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center text-[11px] font-bold text-text-muted uppercase tracking-[0.4em] mt-16"
        >
          Trusted by Industry Leaders Worldwide
        </motion.p>
      </div>
  );
};

export default Partners;
