import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Zap, Factory, ArrowRight } from 'lucide-react';
import LuxCard from './LuxCard';

const SectorOverview = () => {
  const categories = [
    { 
      icon: <Shield size={32} strokeWidth={1.5} />, 
      title: "Defense & Technology", 
      desc: "Integrated security, enterprise IT, and advanced audio-visual systems for digital and physical protection.",      items: ["Security", "IT Sector", "Audio Visual"],
      color: "text-blue-500"
    },
    { 
      icon: <Zap size={32} strokeWidth={1.5} />, 
      title: "Energy & Infrastructure", 
      desc: "High-voltage electrical systems, solar energy solutions, and critical rail infrastructure parts.",
      items: ["High Voltage", "Solar Energy", "Rail Parts"],
      color: "text-yellow-500"
    },
    { 
      icon: <Factory size={32} strokeWidth={1.5} />, 
      title: "Industrial & Logistics", 
      desc: "Advanced refrigeration, heavy construction, and strategic agricultural livestock protection systems.",
      items: ["Refrigeration", "Construction", "Agriculture"],
      color: "text-green-600"
    }
  ];

  return (
    <section className="section-padding pb-0 bg-bg relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <span className="section-subtitle">Comprehensive Scope</span>
          <h2 className="section-title text-4xl md:text-6xl mb-6">
            Multisector Reach, <br /><span>Singular Distinction</span>
          </h2>
          <p className="text-xl text-text-muted font-medium">
            We provide specialized solutions across nine key industries, grouped into three primary strategic divisions to ensure absolute operational efficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8" style={{ marginTop: '1cm' }}>
          {categories.map((cat, index) => (
            <LuxCard key={index} index={index}>
              <div className="card-content">
                <div className={`w-16 h-16 ${cat.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-text-main mb-4 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                
                <p className="text-text-muted text-sm font-medium leading-relaxed mb-8">
                  {cat.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {cat.items.map((item, i) => (
                    <span key={i} className="text-[10px] font-black uppercase tracking-widest bg-bg-offset border border-border px-3 py-1 text-text-muted">
                      {item}
                    </span>
                  ))}
                </div>

                <Link 
                  to="/solutions" 
                  className="mt-auto flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-primary no-underline group/link"
                >
                  Explore Solutions 
                  <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </LuxCard>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: '0.5cm' }}>
          <Link to="/solutions" className="btn btn-primary px-10 py-4 shadow-xl shadow-primary/20">
            View All Capabilities <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectorOverview;
