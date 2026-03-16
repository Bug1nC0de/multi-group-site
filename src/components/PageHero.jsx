import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock } from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';

const PageHero = ({ 
  title, 
  subtitle, 
  description, 
  image = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000',
  badge = "Global Excellence"
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundColor: 'var(--section-bg)',
        backgroundImage: `url(${image})`
      }}
    >
      <div className="hero-overlay"></div>
      
      <div className="container hero-container relative z-10 pb-40 md:pb-20">
        <div className="hero-content mx-auto md:mx-0 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6">
              <Breadcrumbs />
            </div>

            {/* System Status Bar */}
            <div className="flex items-center justify-center md:justify-start gap-6 mb-10">
              <div className="hero-badge" style={{background: 'rgba(0,0,0,0.4)', borderColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF'}}>
                <ShieldCheck size={16} style={{color: '#FFFFFF'}} strokeWidth={1.5} />
                {badge}
              </div>
              <div className="hidden sm:flex items-center gap-3 text-[10px] font-black tracking-[0.4em] pl-6" style={{color: '#FFFFFF', borderLeft: '1px solid rgba(255,255,255,0.3)'}}>
                <Clock size={14} style={{color: '#FFFFFF'}} strokeWidth={1.5} />
                {time.toLocaleTimeString([], { hour12: false })} UTC
              </div>
            </div>

            <span className="section-subtitle lg:mx-0" style={{color: '#FFFFFF'}}>{subtitle}</span>
            <h1 className="hero-title mt-4" style={{color: '#FFFFFF'}}>
              {title}
            </h1>

            <p className="hero-description font-bold mx-auto md:mx-0" style={{color: 'rgba(255,255,255,0.9)'}}>
              {description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Aesthetic Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50"></div>
    </section>
  );
};

export default PageHero;
