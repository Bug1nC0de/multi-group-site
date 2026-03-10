import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Settings, Truck, Microscope, PenTool, Database, Globe, Zap, ArrowRight, Target, Shield, Briefcase } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import LuxCard from '../components/LuxCard';

const Capabilities = () => {
  const coreCapabilities = [
    {
      icon: <Settings size={32} strokeWidth={1.5} />,
      title: "Advanced Engineering",
      desc: "Our engineering division specializes in bespoke industrial solutions, from high-tension structural steel work to complex electronic system integration.",
      features: ["CAD/CAM Design", "Structural Analysis", "Custom Prototyping"]
    },
    {
      icon: <Truck size={32} strokeWidth={1.5} />,
      title: "Regional Logistics",
      desc: "An integrated supply chain network ensuring seamless delivery and deployment of mission-critical systems across the SADC region.",
      features: ["SADC Distribution", "Secure Transit", "Inventory Management"]
    },
    {
      icon: <Microscope size={32} strokeWidth={1.5} />,
      title: "Quality Assurance",
      desc: "Rigorous testing protocols and SABS-certified standards ensure every product meets international reliability and security benchmarks.",
      features: ["SABS Certified", "Stress Testing", "Compliance Audits"]
    },
    {
      icon: <PenTool size={32} strokeWidth={1.5} />,
      title: "Bespoke Manufacturing",
      desc: "State-of-the-art manufacturing facilities capable of high-volume production without compromising on precision or structural integrity.",
      features: ["Reinforced Steel", "Precision Machining", "Custom Finishes"]
    },
    {
      icon: <Database size={32} strokeWidth={1.5} />,
      title: "Digital Infrastructure",
      desc: "Comprehensive IT and data architecture services designed to support enterprise-level security and operational monitoring.",
      features: ["Network Design", "Cybersecurity", "Data Analytics"]
    },
    {
      icon: <Zap size={32} strokeWidth={1.5} />,
      title: "Power & Energy",
      desc: "High-voltage electrical engineering and sustainable solar solutions for industrial-scale operations.",
      features: ["Substation Construction", "PV Integration", "Power Management"]
    }
  ];

  return (
    <div className="bg-bg min-h-screen page-wrapper">
      <div className="container" style={{ paddingTop: '2rem' }}>
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="hero-badge mb-6">
              <ShieldCheck size={16} className="text-primary" strokeWidth={1.5} />
              Industrial Prowess
            </div>
            <h1 className="section-title text-5xl md:text-7xl mb-8">
              Core <span className="text-primary">Capabilities</span>
            </h1>
            <p className="text-xl text-text-muted font-medium leading-relaxed mb-12 max-w-2xl">
              Multi Group Inc delivers unified excellence through a sophisticated blend of engineering, 
              logistics, and strategic manufacturing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding bg-bg-offset">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((item, index) => (
              <LuxCard key={index} index={index}>
                <div className="card-content h-full">
                  <div className="w-16 h-16 bg-bg border border-border flex items-center justify-center mb-8 text-primary shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-text-main mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-text-muted text-sm font-medium leading-relaxed mb-8">{item.desc}</p>
                  
                  <div className="mt-auto space-y-3">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-text-main">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Impact */}
      <section className="section-padding bg-bg overflow-hidden relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-4xl mb-8">Regional <span>Infrastructure</span></h2>
              <p className="text-lg text-text-muted font-medium mb-10 leading-relaxed">
                With operational hubs strategically positioned across Mozambique, South Africa, 
                Swaziland, Namibia, and Botswana, we provide localized expertise with global standards.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "SADC Hubs", value: "05" },
                  { label: "Expert Engineers", value: "150+" },
                  { label: "Success Rate", value: "99.9%" },
                  { label: "Years Exp", value: "40+" }
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-bg-offset border border-border">
                    <div className="text-3xl font-black text-primary mb-2">{stat.value}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Globe section removed */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Training Programs */}
      <section className="section-padding bg-bg-offset">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-text-main mb-4 uppercase tracking-tight">Professional Training Programs</h2>
            <p className="text-text-muted max-w-2xl mx-auto font-medium">
              Comprehensive training solutions for security, firearms, VIP protection, and IT skills development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Target className="text-white" size={24} />, 
                title: "Firearm Training", 
                desc: "Professional training focusing on safe handling, operation, and legal compliance for security personnel.",
                color: "bg-red-600"
              },
              { 
                icon: <Shield className="text-white" size={24} />, 
                title: "Security Training", 
                desc: "Tailored programs equipping personnel with essential skills in access control, patrolling, and emergency response.",
                color: "bg-blue-600"
              },
              { 
                icon: <Briefcase className="text-white" size={24} />, 
                title: "VIP Protection", 
                desc: "Specialized training in close protection, threat assessment, and emergency response for high-profile individuals.",
                color: "bg-purple-600"
              },
              { 
                icon: <Globe className="text-white" size={24} />, 
                title: "IT Training", 
                desc: "Comprehensive IT skills development for digital transformation and competitive advantage in technology.",
                color: "bg-green-600"
              }
            ].map((item, i) => (
              <LuxCard key={i} index={i}>
                <div className="card-content">
                  <div className={`w-12 h-12 ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-black text-text-main mb-3 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]"></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter">READY TO UPGRADE YOUR INFRASTRUCTURE?</h2>
          <div className="flex flex-wrap justify-center gap-6">
             <a href="/contact" className="btn bg-white text-primary px-12 py-5 shadow-2xl shadow-black/10">
                Request Consultation <ArrowRight size={18} />
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Capabilities;
