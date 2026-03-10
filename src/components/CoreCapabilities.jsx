import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Link, ShieldCheck, Award } from 'lucide-react';
import LuxCard from './LuxCard';

const CoreCapabilities = () => {
  const capabilities = [
    {
      icon: <Link size={32} />,
      title: "End-to-End Integration",
      desc: "Multi Group Inc. provides a comprehensive and seamless integration process that covers all aspects from sourcing to delivery, ensuring efficiency and reliability.",
      color: "text-blue-500"
    },
    {
      icon: <Layers size={32} />,
      title: "Unified Supply Chain",
      desc: "We establish a unified supply chain model that enhances cross-industry efficiency, allowing businesses to optimize resources and reduce operational costs.",
      color: "text-purple-500"
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Quality Assurance",
      desc: "Our commitment to quality assurance is demonstrated through certified refurbishment and the use of OEM-grade parts, ensuring top-tier performance and longevity.",
      color: "text-green-500"
    },
    {
      icon: <Award size={32} />,
      title: "Diverse Sector Experience",
      desc: "With 40 years of experience, Multi Group Inc. serves a wide range of sectors, making us the #1 supplier in the SADC market, meeting diverse customer needs.",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="section-padding bg-bg relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.03)_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-4xl mx-auto"
        >
          <div className="hero-badge mb-6 mx-auto">
            <ShieldCheck size={16} className="text-primary" strokeWidth={1.5} />
            Operational Standards
          </div>
          <h2 className="section-title text-4xl md:text-6xl mb-8">
            Unified <span>Excellence</span>
          </h2>
          <p className="text-xl text-text-muted font-medium leading-relaxed max-w-3xl mx-auto">
            Leveraging 40 years of engineering excellence to deliver integrated industrial solutions across the SADC region.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((item, i) => (
            <LuxCard
              key={i}
              index={i}
              className="group h-full"
            >
              <div className="card-content p-10 flex flex-col items-center h-full text-center">
                <div className={`w-16 h-16 ${item.color} bg-bg-offset border border-border flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-110 rounded-2xl`}>
                  {React.cloneElement(item.icon, { strokeWidth: 1.5 })}
                </div>
                <h3 className="text-xl font-bold text-text-main mb-6 leading-tight tracking-tight uppercase group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </LuxCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
