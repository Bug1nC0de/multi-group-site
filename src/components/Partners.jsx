import React from 'react';
import { motion } from 'framer-motion';

// Import logos
import pimaLogo from '../assets/partners/pima.png';
import enpctLogo from '../assets/partners/enpct-new.png';
import naffcoLogo from '../assets/partners/naffco.png';

const Partners = () => {
  const partners = [
    { name: 'PIMA Alarm Systems', logo: pimaLogo, scale: 0.9, url: 'https://www.pima-alarms.com/' },
    { name: 'ENPCT', logo: enpctLogo, scale: 0.9, url: 'https://enpct.org.mz/' },
    { 
      name: 'NAFFCO', 
      logo: naffcoLogo, 
      scale: 0.9,
      url: 'https://www.naffco.com/',
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
              Global Partnerships
            </h2>
          </div>
          <div className="w-12 h-1 bg-primary mx-auto mt-8 opacity-20"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 max-w-7xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative flex items-center justify-center p-6 md:p-8 h-32 md:h-36 transition-all duration-500"
            >
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative z-10 w-full h-full flex items-center justify-center p-2 cursor-pointer"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className={`max-h-full w-auto object-contain transition-all duration-700 ease-out grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100`}
                  style={{ 
                    maxWidth: '180px',
                    transform: `scale(${partner.scale})`,
                    filter: partner.customFilter 
                      ? `${partner.customFilter} ${partner.hasGlow ? 'drop-shadow(0 0 2px rgba(255,255,255,0.5))' : ''}`       
                      : undefined
                  }}
                />
              </a>
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
