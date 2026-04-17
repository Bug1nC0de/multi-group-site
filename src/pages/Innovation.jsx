import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Monitor, Zap, Wifi, Shield, Network, Lock, AlertCircle, Cpu, Database, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import LuxCard from '../components/LuxCard';
import { Link } from 'react-router-dom';

const Innovation = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  // Comprehensive Security Solutions - 4 main cards
  const securitySolutions = [
    {
      id: 1,
      title: "CCTV and Access Control",
      description: "Monitor and restrict access with advanced surveillance and control systems.",
      icon: <Monitor size={32} strokeWidth={1.5} />,
    },
    {
      id: 2,
      title: "X-ray Machines",
      description: "Enhance security screening with state-of-the-art detection technology.",
      icon: <AlertCircle size={32} strokeWidth={1.5} />,
    },
    {
      id: 3,
      title: "Fiber Optic Systems",
      description: "Ensure reliable data transmission with high-speed fiber optic infrastructure.",
      icon: <Wifi size={32} strokeWidth={1.5} />,
    },
    {
      id: 4,
      title: "Integrated Security",
      description: "Combine multiple systems for comprehensive protection and monitoring.",
      icon: <Shield size={32} strokeWidth={1.5} />,
    }
  ];

  // IT and High Voltage Solutions - Expandable sections
  const advancedSolutions = [
    {
      id: 1,
      title: "IT Solutions",
      icon: <Cpu size={32} strokeWidth={1.5} />,
      features: [
        { title: "Network Integration", description: "Seamless connectivity and infrastructure setup" },
        { title: "Platforms Re-engineering", description: "Modernize and optimize existing systems" },
        { title: "Cybersecurity", description: "Comprehensive protection against digital threats" },
        { title: "Intelligent Access", description: "Smart authentication and authorization systems" },
        { title: "Device Tracking", description: "Real-time monitoring and asset management" }
      ]
    },
    {
      id: 2,
      title: "High Voltage Solutions",
      icon: <Zap size={32} strokeWidth={1.5} />,
      features: [
        { title: "Transformers", description: "High-quality power transformation equipment" },
        { title: "Switchgear", description: "Advanced electrical switching and protection" },
        { title: "Substation Components", description: "Complete substation infrastructure solutions" },
        { title: "Safety Equipment", description: "Comprehensive safety and protection systems" },
        { title: "Maintenance Services", description: "Professional maintenance and support" }
      ]
    }
  ];

  return (
    <div className="bg-bg min-h-screen">
      <PageHero 
        title={<>Pioneering <br /><span>Next-Gen Tech</span></>}
        description="Multi Group Inc is committed to advancing the frontier of industrial security through relentless R&D and the adoption of emerging technologies."
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Comprehensive Security Solutions Section */}
      <section className="section-padding bg-bg">
        <div className="container">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 flex flex-col items-center"
          >
            <span className="text-primary font-black text-[10px] uppercase tracking-[0.6em] mb-4 block">Comprehensive Solutions</span>
            <h2 className="section-title mb-8">Comprehensive Security <br /><span>Industry Solutions</span></h2>
            <p className="text-lg text-text-muted font-medium max-w-3xl">
              Enhanced safety through advanced security solutions tailored to meet corporate objectives
            </p>
          </motion.div>

          {/* 4 Cards Grid using LuxCard */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ marginTop: '1cm' }}>
            {securitySolutions.map((solution, index) => (
              <LuxCard key={solution.id} index={index}>
                <div className="card-content h-full flex flex-col">
                  <div className="w-16 h-16 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-4 group-hover:text-primary transition-colors">{solution.title}</h3>
                  <p className="text-text-muted text-sm font-medium leading-relaxed flex-grow">{solution.description}</p>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      {/* IT and High Voltage Solutions Section */}
      <section className="section-padding bg-bg-offset">
        <div className="container">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 flex flex-col items-center"
          >
            <span className="text-primary font-black text-[10px] uppercase tracking-[0.6em] mb-4 block">Advanced Technologies</span>
            <h2 className="section-title mb-8">IT and High Voltage <br /><span>Electrical Solutions</span></h2>
            <p className="text-lg text-text-muted font-medium max-w-3xl">
              Integrated services in IT and high voltage electrical systems
            </p>
          </motion.div>

          {/* Two Expandable Cards using LuxCard */}
          <div className="grid md:grid-cols-2 gap-8" style={{ marginTop: '1cm' }}>
            {advancedSolutions.map((section, sectionIndex) => (
              <LuxCard key={section.id} index={sectionIndex}>
                <div
                  onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                  className="card-content w-full h-full flex flex-col text-left cursor-pointer"
                  style={{ color: 'var(--text-main)' }}
                >
                  {/* Header */}
                  <div className="flex items-center mb-8 gap-5">
                    <div className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" style={{ marginTop: '-8px' }}>
                      {React.cloneElement(section.icon, { size: 28 })}
                    </div>
                    <h3 className="text-2xl font-bold text-text-main group-hover:text-primary transition-colors">{section.title}</h3>
                  </div>

                  {/* Features List - Animated */}
                  <div className="mt-auto">
                    <AnimatePresence>
                      {expandedSection === section.id ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4 pt-6 border-t border-border"
                        >
                          {section.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.05 }}
                            >
                              <h4 className="font-black text-text-main text-sm group-hover:text-primary transition-colors">{feature.title}</h4>
                              <p className="text-text-muted text-sm mt-1 font-medium">{feature.description}</p>
                            </motion.div>
                          ))}
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-4 pt-4"
                        >
                          {section.features.map((feature, featureIndex) => (
                            <div key={featureIndex}>
                              <h4 className="font-black text-text-main text-sm group-hover:text-primary transition-colors">{feature.title}</h4>
                              <p className="text-text-muted text-sm mt-1 font-medium">{feature.description}</p>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-bg border-t border-border">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center flex flex-col items-center"
          >
            <h2 className="section-title mb-8 text-center">Ready to Secure Your <span>Operations?</span></h2>
            <p className="text-lg text-text-muted font-medium max-w-2xl mb-12 leading-relaxed">
              Multi Group Inc brings industry-leading security solutions combining physical infrastructure with digital intelligence. Partner with us for a comprehensive security ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/contact" 
                className="btn btn-primary px-10 py-4"
              >
                Get a Consultation <ArrowRight size={18} />
              </Link>
              <Link 
                to="/capabilities" 
                className="btn btn-outline px-10 py-4"
              >
                View Capabilities <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
