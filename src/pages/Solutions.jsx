import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Cpu, Zap, Sun, Train, Snowflake, HardHat, Tractor, Monitor, ArrowRight, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
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
    <div className="bg-bg min-h-screen">
      <PageHero 
        title={<>Integrated <br /><span>Industrial Solutions</span></>}
        description="Multi Group Inc operates at the intersection of innovation and infrastructure. Explore our diverse range of tailored services across strategic sectors."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="section-padding bg-bg relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginTop: '1cm' }}>
            {sectors.map((sector, index) => (
              <LuxCard key={index} index={index}>
                <div className="card-content h-full">
                  <div className={`w-16 h-16 ${sector.color} bg-transparent flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
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

    </div>
  );
};

export default Solutions;
