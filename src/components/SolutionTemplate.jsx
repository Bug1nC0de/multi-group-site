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
  const solutionLinks = [
    { label: 'Security', path: '/solutions/security' },
    { label: 'IT', path: '/solutions/it' },
    { label: 'Electrical', path: '/solutions/electrical' },
    { label: 'Solar', path: '/solutions/solar' },
    { label: 'Rail', path: '/solutions/rail' },
    { label: 'Refrigeration', path: '/solutions/refrigeration' },
    { label: 'Construction', path: '/solutions/construction' },
    { label: 'Agriculture', path: '/solutions/agriculture' },
    { label: 'AV', path: '/solutions/av' },
    { label: 'Energy', path: '/solutions/energy' }
  ];

  return (
    <div className="bg-bg min-h-screen">
      <PageHero 
        title={title}
        subtitle={subtitle}
        description={description}
        image={image}
        badge="Strategic Industry Solution"
      />

      {/* Main Content */}
      <section className="section-padding bg-bg relative overflow-hidden">
        {/* Background Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(37,99,235,0.05)_0%,_transparent_70%)] pointer-events-none"></div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            
            {/* Features Column */}
            <div className="lg:col-span-7">
              <div className="mb-16">
                <div className="hero-badge mb-6">
                  <ShieldCheck size={16} className="text-primary" />
                  Core Capabilities
                </div>
                <h2 className="section-title text-4xl md:text-6xl mb-8">Engineering <span>Excellence</span></h2>
                <p className="text-xl text-text-muted font-medium leading-relaxed max-w-2xl">
                  Our {subtitle.toLowerCase()} solutions are architected to meet the most demanding operational requirements with precision and reliability.
                </p>
              </div>

              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-10 bg-bg-offset border border-border hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
                    <h4 className="text-2xl font-bold mb-4 text-text-main group-hover:text-primary transition-colors">{feature.title}</h4>
                    <p className="text-text-muted leading-relaxed font-medium">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits & CTA Sticky Sidebar */}
            <div className="lg:col-span-5 sticky top-32">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-bg-offset p-12 border border-border shadow-2xl relative"
              >
                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none"></div>
                
                <h3 className="text-2xl font-black mb-10 text-text-main uppercase tracking-tight flex items-center gap-3">
                  <span className="w-2 h-8 bg-primary"></span>
                  Strategic Advantages
                </h3>
                
                <ul className="space-y-6 mb-12">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary transition-colors">
                        <CheckCircle className="text-primary group-hover:text-white transition-colors" size={14} />
                      </div>
                      <span className="text-text-main font-bold text-sm tracking-tight">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-6">
                  <Link to="/contact" className="btn btn-primary w-full justify-center py-5 text-base shadow-xl shadow-primary/20">
                    Request Consultation <ChevronRight size={18} />
                  </Link>
                  <p 
                    className="text-center text-[10px] text-text-muted uppercase tracking-[0.4em] font-black"
                    style={{ marginBottom: '1.5cm' }}
                  >
                    Custom Architectures Available
                  </p>
                </div>
              </motion.div>

              {/* Quick Navigation Hub */}
              <div className="mt-12 p-8 border border-border bg-bg-offset/50 backdrop-blur-sm">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-text-muted mb-8">Other Strategic Sectors</h4>
                <div className="grid grid-cols-2 gap-3">
                  {solutionLinks.map((sector) => (
                    <Link 
                      key={sector.path}
                      to={sector.path}
                      className="btn btn-outline py-3 px-4 text-[10px] border-border hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      {sector.label}
                    </Link>
                  ))}
                  <Link to="/solutions" className="btn btn-primary py-3 px-4 text-[10px] shadow-lg">
                    All Solutions <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats/Data Strip for this solution */}
      <section className="py-16 bg-bg-offset border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "SABS Standards", value: "100%" },
              { label: "Regional Support", value: "24/7" },
              { label: "Deployment Speed", value: "Rapid" },
              { label: "System Integrity", value: "Absolute" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-3xl font-black text-text-main">{stat.value}</div>
                <div className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionTemplate;
