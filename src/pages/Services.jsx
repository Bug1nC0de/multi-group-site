import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Settings, UserCheck, Video, Search, Cpu, BarChart, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import LuxCard from '../components/LuxCard';

const servicesData = [
  {
    icon: <UserCheck size={32} />,
    title: "Executive Protection",
    brand: "Siyavikela",
    desc: "40 years of combined experience providing professional Close Protection Officers (CPOs). Our team operates globally with calm authority and diplomatic conduct, tailored for high-risk environments."
  },
  {
    icon: <Search size={32} />,
    title: "Private Investigation",
    brand: "Commercial & Domestic",
    desc: "Specialized investigative services focused on absolute discretion and confidentiality. We handle complex cases in both corporate and personal sectors with high-level professional standards."
  },
  {
    icon: <Video size={32} />,
    title: "Offsite Monitoring",
    brand: "Control Room Services",
    desc: "State-of-the-art control room designed for high-level asset management. Features online redundancy, high innovation standards, and secure remote monitoring with energy-efficient policies."
  },
  {
    icon: <Settings size={32} />,
    title: "Independent Control Room",
    brand: "Mobile & Temporary",
    desc: "Professional design and installation of world-leading offsite monitoring solutions, including the provision of mobile and temporary control rooms serviced by our central facility."
  },
  {
    icon: <BarChart size={32} />,
    title: "Risk Assessment",
    brand: "Security Analysis",
    desc: "Impartial and professional analysis using Prince II methodology to customize solutions that negate specific identified risks and ensure compliance with legal regulations."
  },
  {
    icon: <Cpu size={32} />,
    title: "System Integration",
    brand: "Project Management",
    desc: "Specialized management for complex transitions, particularly Analogue to IP Surveillance and Access Control, supported by onsite IT professionals and specialized software support."
  },
  {
    icon: <Settings size={32} />,
    title: "Technical Maintenance",
    brand: "OEM Supported",
    desc: "Full on-site technical maintenance for security industry products. We maintain strategic relationships with Original Equipment Manufacturers (OEMs) for expert troubleshooting and resolution."
  },
  {
    icon: <Shield size={32} />,
    title: "CPO Provision",
    brand: "Specialized Personnel",
    desc: "Supply of highly vetted, personal protection candidates. Each candidate undergoes intense induction, vetting, and etiquette training to ensure they are ready to protect the finest."
  }
];

const Services = () => {
  return (
    <div className="bg-bg min-h-screen">
      <PageHero 
        title={<>Specialized <br /><span className="text-primary">Operational Services</span></>}
        subtitle="Professional Excellence"
        description="Providing turn-key analysis and world-class security services through our specialized Siyavikela division. Powered by 40 years of combined industry experience."
        badge="Strategic Security Unit"
      />

      <section className="section-padding bg-bg relative overflow-hidden">
        {/* Background Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(37,99,235,0.03)_0%,_transparent_70%)] pointer-events-none"></div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24 max-w-4xl mx-auto"
          >
            <div className="hero-badge mb-6">
              <ShieldCheck size={16} className="text-primary" />
              Tactical Support
            </div>
            <h2 className="section-title text-4xl md:text-6xl mb-8">Integrated <span>Solutions</span></h2>
            <p className="text-xl text-text-muted font-medium leading-relaxed">
              We engineer specialized services that negate identified risks and ensure absolute compliance with international regulatory frameworks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, i) => (
              <LuxCard key={i} index={i} className="group">
                <div className="card-content p-10 flex flex-col items-start h-full text-left">
                  <div className="w-full flex justify-between items-start mb-10">
                    <div className="w-16 h-16 bg-bg border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg group-hover:scale-110">
                      {React.cloneElement(service.icon, { strokeWidth: 1.5 })}
                    </div>
                    <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em]">{service.brand}</span>
                  </div>

                  <h3 className="text-2xl font-black mb-6 text-text-main group-hover:text-primary transition-colors uppercase tracking-tight w-full">{service.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed font-medium mb-10 text-left w-full flex-grow">{service.desc}</p>
                  
                  <div className="pt-8 border-t border-border w-full">
                     <Link to="/contact" className="text-[10px] font-black uppercase tracking-[0.4em] text-text-muted group-hover:text-primary transition-all flex items-center gap-3 no-underline">
                        Enquire Now <ArrowRight size={14} />
                     </Link>
                  </div>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      {/* Vetting & Training Section - Revamped */}
      <section className="section-padding bg-bg-offset relative overflow-hidden border-y border-border">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-7 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="hero-badge mb-6">
                  <ShieldCheck size={16} className="text-primary" />
                  Training Standards
                </div>
                <h2 className="section-title text-4xl md:text-6xl mb-8">Elite Protector <br /><span className="text-primary">Protocols</span></h2>
                <p className="text-text-muted text-lg font-medium leading-relaxed max-w-2xl">
                  Our Close Protection Officers (CPOs) undergo a rigorous selection process, ensuring they embody calm authority and absolute tactical precision.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-10">
                {[
                  { title: "Intense Induction", desc: "Multi-week situational stress tests and tactical drills." },
                  { title: "Extensive Vetting", desc: "Comprehensive background and psychological profiling." },
                  { title: "Diplomatic Conduct", desc: "Specialized training in etiquette and high-profile interaction." },
                  { title: "Realistic Scenarios", desc: "Live-action simulation of high-risk security breaches." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-1.5 h-16 bg-primary/10 group-hover:bg-primary transition-all duration-500 shrink-0"></div>
                    <div>
                      <h4 className="font-black text-text-main text-lg mb-2 tracking-tight uppercase group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-text-muted text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-bg border border-border p-12 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-20 h-20 bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/20">
                    <UserCheck size={40} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-black text-text-main text-2xl tracking-tighter uppercase">Siyavikela</h4>
                    <span className="text-[10px] text-primary font-black tracking-[0.4em] uppercase">Vetting Division</span>
                  </div>
                </div>

                <div className="space-y-8">
                  <p className="text-2xl text-text-main font-bold leading-tight tracking-tight italic border-l-4 border-primary/20 pl-8 py-2">
                    "Our protectors are the physical manifestation of our security philosophy. They provide not just safety, but absolute peace of mind."
                  </p>
                  
                  <div className="pt-10 border-t border-border flex justify-between items-center">
                    <div className="space-y-1">
                      <span className="text-[9px] text-text-muted font-black tracking-[0.4em] uppercase">Accreditation</span>
                      <div className="text-text-main font-black uppercase text-sm">PSIRA Grade A Certified</div>
                    </div>
                    <div className="w-14 h-14 bg-bg-offset flex items-center justify-center text-primary border border-border">
                      <Shield size={28} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Strip */}
      <section className="py-24 bg-bg">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <h2 className="text-4xl md:text-7xl font-black text-heading-color tracking-tighter uppercase leading-none">
              Initialize Strategic <br/><span>Operations</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <Link to="/contact" className="btn btn-primary px-12 py-5 shadow-2xl">
                Enquire Now <ArrowRight size={18} />
              </Link>
              <Link to="/solutions" className="btn btn-outline px-12 py-5">
                Full Capabilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
