import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Lightbulb, Workflow, Fingerprint, Network, ArrowRight, Activity, Zap, Check, Microscope, Rocket, Globe, Settings, Database } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import LuxCard from '../components/LuxCard';
import SectionIntroBlock from '../components/SectionIntroBlock';

const Innovation = () => {
  const innovationFocus = [
    {
      icon: <Settings size={32} strokeWidth={1.5} />,
      title: "Advanced Engineering",
      desc: "Our engineering division specializes in bespoke industrial solutions, from high-tension structural steel work to complex electronic system integration.",
      tag: "Core Prowess",
      color: "from-blue-500/20 to-transparent"
    },
    {
      icon: <Microscope size={32} strokeWidth={1.5} />,
      title: "Quality Assurance",
      desc: "Rigorous testing protocols and SABS-certified standards ensure every product meets international reliability and security benchmarks.",
      tag: "Certified",
      color: "from-purple-500/20 to-transparent"
    },
    {
      icon: <Database size={32} strokeWidth={1.5} />,
      title: "Digital Infrastructure",
      desc: "Comprehensive IT and data architecture services designed to support enterprise-level security and operational monitoring.",
      tag: "Digital Core",
      color: "from-green-500/20 to-transparent"
    },
    {
      icon: <Zap size={32} strokeWidth={1.5} />,
      title: "Power & Energy",
      desc: "High-voltage electrical engineering and sustainable solar solutions for industrial-scale operations.",
      tag: "Critical Power",
      color: "from-red-500/20 to-transparent"
    }
  ];

  return (
    <div className="bg-bg min-h-screen page-wrapper">
      <div className="container" style={{ paddingTop: '2rem' }}>
        <Breadcrumbs />
      </div>

      <SectionIntroBlock
        badge="Future Focused"
        badgeIcon={<Lightbulb size={16} className="text-primary" strokeWidth={1.5} />}
        title={<>Pioneering <span className="text-primary">Next-Gen</span> <br />Industrial Tech</>}
        description="Multi Group Inc is committed to advancing the frontier of industrial security through relentless R&D and the adoption of emerging technologies."
        stats={[
          { label: 'R&D Verticals', value: '04' },
          { label: 'Core Domains', value: 'IT + HV' },
          { label: 'Design Mode', value: 'Future' }
        ]}
      />

      {/* Innovation Philosophy */}
      <section className="py-24 bg-bg-offset border-y border-border">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Microscope size={24} />,
                title: "Evidence-Based R&D",
                desc: "Our innovations are born from rigorous testing and empirical data collection across extreme industrial environments."
              },
              {
                icon: <Globe size={24} />,
                title: "Scalable Architectures",
                desc: "We design systems that grow with your infrastructure, ensuring long-term viability and ease of integration."
              },
              {
                icon: <ShieldCheck size={24} />,
                title: "Security by Design",
                desc: "Every protocol is engineered with a security-first mindset, neutralizing threats at the foundational level."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {item.icon}
                </div>
                <h4 className="text-lg font-black uppercase tracking-widest text-text-main mb-3">{item.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Grid */}
      <section className="section-padding bg-bg relative">
        <div className="container">
          <div className="text-center mb-20">
            <span className="text-primary font-black text-[10px] uppercase tracking-[0.8em] mb-4 block">Technological Focus</span>
            <h2 className="section-title text-4xl md:text-6xl">Core <span>R&D Verticals</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {innovationFocus.map((item, index) => (
              <LuxCard key={index} index={index}>
                <div className="card-content p-12 overflow-hidden relative">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} blur-3xl pointer-events-none`}></div>
                  
                  <div className="flex justify-between items-start mb-10 relative z-10">
                    <div className="w-16 h-16 bg-bg border border-border flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary border border-primary/20 px-4 py-2 bg-primary/5">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-text-main mb-6 group-hover:text-primary transition-colors tracking-tight uppercase">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-lg font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      {/* IT and High Voltage Electrical Solutions */}
      <section className="section-padding bg-bg-offset overflow-hidden relative border-y border-border">
        <div className="container">
          <div className="text-center mb-24">
            <span className="text-primary font-black text-[10px] uppercase tracking-[0.8em] mb-4 block">Industrial Infrastructure</span>
            <h2 className="text-4xl md:text-6xl font-black text-text-main mb-8 tracking-tight uppercase">
              IT & <span className="text-primary">High Voltage</span> Solutions
            </h2>
            <p className="text-xl text-text-muted font-medium leading-relaxed max-w-2xl mx-auto">
              Bridging the gap between digital intelligence and physical power systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* IT Solutions */}
            <LuxCard index={0} className="bg-bg border-border group">
              <div className="card-content p-12">
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-20 h-20 bg-purple-600 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    <Cpu size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-text-main uppercase tracking-tight">IT Solutions</h3>
                </div>

                <div className="space-y-6">
                  {[
                    { title: "Network Integration", desc: "Seamless connectivity and infrastructure setup" },
                    { title: "Platforms Re-engineering", desc: "Modernize and optimize existing systems" },
                    { title: "Cybersecurity", desc: "Comprehensive protection against digital threats" },
                    { title: "Intelligent Access", desc: "Smart authentication and authorization systems" },
                    { title: "Device Tracking", desc: "Real-time monitoring and asset management" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group/item">
                      <div className="w-6 h-6 bg-purple-100 flex items-center justify-center shrink-0 mt-1 rounded-full group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                        <Check size={14} className="text-purple-600 group-hover/item:text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-text-main mb-1 tracking-tight">{item.title}</h4>
                        <p className="text-text-muted text-sm font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </LuxCard>

            {/* High Voltage Solutions */}
            <LuxCard index={1} className="bg-bg border-border group">
              <div className="card-content p-12">
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-20 h-20 bg-orange-600 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    <Zap size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-text-main uppercase tracking-tight">High Voltage</h3>
                </div>

                <div className="space-y-6">
                  {[
                    { title: "Transformers", desc: "High-quality power transformation equipment" },
                    { title: "Switchgear", desc: "Advanced electrical switching and protection" },
                    { title: "Substation Components", desc: "Complete substation infrastructure solutions" },
                    { title: "Safety Equipment", desc: "Comprehensive safety and protection systems" },
                    { title: "Maintenance Services", desc: "Professional maintenance and support" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group/item">
                      <div className="w-6 h-6 bg-orange-100 flex items-center justify-center shrink-0 mt-1 rounded-full group-hover/item:bg-orange-600 group-hover/item:text-white transition-colors">
                        <Check size={14} className="text-orange-600 group-hover/item:text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-text-main mb-1 tracking-tight">{item.title}</h4>
                        <p className="text-text-muted text-sm font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </LuxCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none"></div>
        <div className="container text-center relative z-10">
          <div className="max-w-3xl mx-auto">
             <div className="w-24 h-24 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary mx-auto mb-10 shadow-inner">
               <ShieldCheck size={48} strokeWidth={1.5} />
             </div>
             <h3 className="text-4xl md:text-5xl font-black text-text-main mb-6 uppercase tracking-tight">Ready for the Future?</h3>
             <p className="text-xl text-text-muted font-medium mb-12 leading-relaxed">
                Connect with our technical architects to explore how our innovation roadmap can future-proof your industrial infrastructure.
             </p>
             <div className="flex flex-wrap justify-center gap-6">
               <a href="/contact" className="btn btn-primary px-12 py-5 shadow-2xl shadow-primary/20">
                  Initiate Consultation <ArrowRight size={18} />
               </a>
               <a href="/capabilities" className="btn btn-outline px-12 py-5">
                  View Full Prowess
               </a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
