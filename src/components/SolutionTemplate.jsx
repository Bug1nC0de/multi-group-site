import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from './PageHero';

const SolutionTemplate = ({ 
  title, 
  subtitle, 
  description, 
  features, 
  benefits, 
  image 
}) => {
  return (
    <div className="bg-bg min-h-screen">
      <PageHero 
        title={title}
        description={description}
        image={image}
      />

      {/* Features Column */}
      <section className="py-12 bg-bg relative">
        <div className="container relative z-10">
          <div className="text-center mb-12 max-w-3xl mx-auto">
             <div className="hero-badge mb-4 mx-auto">
                <ShieldCheck size={16} className="text-primary" strokeWidth={1.5} />
                Strategic Industry Focus
             </div>
             <h2 className="section-title text-4xl md:text-5xl mb-4">Architecting <span>Absolute Trust</span></h2>
             <p className="text-lg text-text-muted font-medium leading-relaxed">
               {subtitle ? `Our ${subtitle.toLowerCase()} solutions` : 'Our solutions'} are engineered to harmonize with critical operational requirements, delivering precision and long-term resilience.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon || ShieldCheck;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div 
                    className="lux-card h-full p-8 md:p-10 flex flex-col items-center text-center border-border/50 hover:border-primary/50 transition-all duration-500 bg-surface/50 backdrop-blur-sm rounded-3xl"
                    style={{ paddingLeft: '1cm', paddingRight: '1cm' }}
                  >
                    {/* Icon with 3D-ish wrapper */}
                    <div className="mb-8 relative" style={{ marginTop: '1cm' }}>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 relative z-10">
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                      <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    </div>

                    <h4 className="text-2xl font-black text-text-main mb-4 uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h4>
                    
                    <p className="text-text-muted leading-relaxed font-medium text-base mb-8 flex-grow">
                      {feature.desc}
                    </p>

                    <div className="flex items-center justify-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-[10px] group-hover:translate-y-0 transition-all duration-300">
                      Precision Solution <ArrowRight size={14} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Advantages Strip */}
      <section className="py-12 border-y border-border">
         <div className="container">
            <h3 className="text-lg font-black mb-8 text-center text-text-main uppercase tracking-tight">Strategic Advantages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col items-center text-center gap-2">
                    <CheckCircle className="text-primary shrink-0" size={20} />
                    <span className="text-text-main font-bold text-xs tracking-tight">{benefit}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-bg" style={{ paddingTop: '1cm', paddingBottom: '1cm' }}>
         <div className="container text-center">
             <Link to="/contact" className="btn btn-primary px-8 py-3 text-[11px] border-none shadow-xl">
                  Request Consultation <ChevronRight size={14} />
             </Link>
         </div>
      </section>
    </div>
  );
};

export default SolutionTemplate;
