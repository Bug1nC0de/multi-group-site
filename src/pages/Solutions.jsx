import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Cpu, Zap, Sun, Train, Snowflake, HardHat, Tractor, Monitor, ArrowRight, ShieldCheck } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import LuxCard from '../components/LuxCard';

const Solutions = () => {
  const sectors = [
    { icon: <Shield size={32} strokeWidth={1.5} />, title: "Security Industry", desc: "Integrated defense layers, biometric access systems, and high-security physical barriers.", path: "/solutions/security", color: "text-blue-500" },
    { icon: <Cpu size={32} strokeWidth={1.5} />, title: "IT Solutions", desc: "Robust network infrastructure, cybersecurity frameworks, and enterprise software solutions.", path: "/solutions/it", color: "text-purple-500" },
    { icon: <Zap size={32} strokeWidth={1.5} />, title: "High Voltage Electrical", desc: "Substation construction, industrial power distribution, and electrical engineering services.", path: "/solutions/electrical", color: "text-yellow-500" },
    { icon: <Sun size={32} strokeWidth={1.5} />, title: "Solar Industry", desc: "Commercial PV systems, industrial energy storage, and sustainable power architectures.", path: "/solutions/solar", color: "text-orange-500" },
    { icon: <Train size={32} strokeWidth={1.5} />, title: "Rail Industry Parts", desc: "Locomotive components, signaling infrastructure, and specialized transit logistics.", path: "/solutions/rail", color: "text-red-500" },
    { icon: <Snowflake size={32} strokeWidth={1.5} />, title: "Refrigeration", desc: "Cold chain management, industrial HVAC systems, and thermal regulation solutions.", path: "/solutions/refrigeration", color: "text-cyan-500" },
    { icon: <HardHat size={32} strokeWidth={1.5} />, title: "Construction", desc: "Civil engineering, building material supply, and heavy industrial project management.", path: "/solutions/construction", color: "text-amber-600" },
    { icon: <Tractor size={32} strokeWidth={1.5} />, title: "Agriculture", desc: "Livestock protection, nutritional supplements, and smart agricultural technologies.", path: "/solutions/agriculture", color: "text-green-600" },
    { icon: <Monitor size={32} strokeWidth={1.5} />, title: "Audio Visual", desc: "Smart boardroom integrations, digital display networks, and communication systems.", path: "/solutions/av", color: "text-indigo-500" },
  ];

  return (
    <div className="bg-bg min-h-screen page-wrapper">
      <div className="container" style={{ paddingTop: '2rem' }}>
        <Breadcrumbs />
      </div>

      <section className="section-padding bg-bg relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-20"
          >
            <div className="hero-badge mb-6">
              <ShieldCheck size={16} className="text-primary" />
              Unified Excellence
            </div>
            <h1 className="section-title text-4xl md:text-6xl mb-8">Integrated <br /><span>Industrial Solutions</span></h1>
            <p className="text-xl text-text-muted font-medium leading-relaxed">
              Multi Group Inc operates at the intersection of innovation and infrastructure. 
              Explore our diverse range of tailored services across nine strategic sectors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <LuxCard key={index} index={index}>
                <div className="card-content h-full flex flex-col">
                  <div className={`w-16 h-16 ${sector.color} bg-bg-offset border border-border flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform`}>
                    {sector.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text-main mb-4 group-hover:text-primary transition-colors tracking-tight text-left">
                    {sector.title}
                  </h3>
                  
                  <p className="text-text-muted text-sm leading-relaxed mb-8 text-left font-medium">
                    {sector.desc}
                  </p>

                  <Link 
                    to={sector.path} 
                    className="mt-auto flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-primary no-underline group/link"
                  >
                    View Capabilities 
                    <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-20 bg-bg-offset border-y border-border overflow-hidden relative">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
         <div className="container relative z-10">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
               {['40+ Years', 'SADC Market Leader', 'SABS Certified', 'BEE Level 4'].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                     <span className="text-[11px] font-black uppercase tracking-[0.4em] text-text-main">{text}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Solutions;
