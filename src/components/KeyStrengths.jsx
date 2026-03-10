import React from 'react';
import { motion } from 'framer-motion';
import { Map, Briefcase, Handshake, Building2, Compass, Wrench } from 'lucide-react';
import LuxCard from './LuxCard';

const strengths = [
  {
    icon: <Map size={32} strokeWidth={1.5} />,
    title: "Pan-African Reach",
    desc: "Direct distribution channels supporting SADC access and operations across the continent.",
    color: "text-blue-400"
  },
  {
    icon: <Briefcase size={32} strokeWidth={1.5} />,
    title: "Multi-Sector Expertise",
    desc: "Diverse expertise across various industries with focus on operational efficiency.",
    color: "text-green-400"
  },
  {
    icon: <Handshake size={32} strokeWidth={1.5} />,
    title: "Blue-chip Partnerships",
    desc: "Partnerships with blue-chip clients and state-owned companies strengthening corporate credibility.",
    color: "text-purple-400"
  },
  {
    icon: <Building2 size={32} strokeWidth={1.5} />,
    title: "Government Engagement",
    desc: "Active engagement with governments across the continent facilitating strategic initiatives.",
    color: "text-yellow-400"
  },
  {
    icon: <Compass size={32} strokeWidth={1.5} />,
    title: "Strategic Locations",
    desc: "Offices in MOZ, RSA, SD, NB, BT enhancing regional presence and service delivery.",
    color: "text-red-400"
  },
  {
    icon: <Wrench size={32} strokeWidth={1.5} />,
    title: "Premier Spares Supplier",
    desc: "Africa's premier supplier of aftermarket and original spares with excellence in complex project execution.",
    color: "text-orange-400"
  }
];

const KeyStrengths = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-bg">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <span className="section-subtitle">Core Capabilities</span>
          <h2 className="section-title text-4xl md:text-6xl mb-8">
            Strategic <span>Infrastructure</span>
          </h2>
          <p className="text-xl text-text-muted font-medium leading-relaxed">
            Exploring the core capabilities and strengths across the African continent
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {strengths.map((item, i) => (
            <LuxCard
              key={i}
              index={i}
              className="group"
            >
              <div className="card-content p-4">
                <div className={`mb-8 ${item.color} w-14 h-14 flex items-center justify-center rounded-none bg-primary/5 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-muted leading-relaxed font-medium">
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

export default KeyStrengths;
