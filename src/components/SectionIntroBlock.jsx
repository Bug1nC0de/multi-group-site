import React from 'react';
import { motion } from 'framer-motion';

const SectionIntroBlock = ({ badge, badgeIcon, title, description, stats = [] }) => {
  return (
    <section className="bg-bg relative overflow-hidden" style={{ padding: '1rem 0 4rem' }}>
      <div className="absolute top-0 right-0 w-[560px] h-[560px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-8">
            <div className="bg-bg-offset border border-border shadow-sm" style={{ padding: '2.5rem' }}>
              <div className="hero-badge mb-6">
                {badgeIcon}
                {badge}
              </div>
              <h1 className="section-title text-5xl md:text-7xl mb-6">{title}</h1>
              <p className="text-xl text-text-muted font-medium leading-relaxed max-w-3xl">
                {description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div
              className="text-on-dark shadow-lg"
              style={{ padding: '2rem', backgroundColor: 'var(--primary)' }}
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: 'rgba(255,255,255,0.72)' }}>
                Snapshot
              </span>
              <div className="space-y-6" style={{ marginTop: '1.5rem' }}>
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-end justify-between gap-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.18)', paddingBottom: '1rem' }}>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: 'rgba(255,255,255,0.78)' }}>
                      {stat.label}
                    </span>
                    <span className="text-3xl font-black text-on-dark leading-none">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionIntroBlock;
