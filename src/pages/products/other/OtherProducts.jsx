import { motion } from 'framer-motion';
import { Lock, Box, Disc } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const OtherProducts = () => {
  const subCategories = [
    { label: "High Security Doors", path: "/products/high-security-doors" },
    { label: "Mortise Deadbolts", path: "/products/other/locks" },
    { label: "Safes & Cabinets", path: "/products/other/safes" },
    { label: "Security Window Film", path: "/products/other/window-film" }
  ];

  return (
    <div>
      <section className="py-32 dark-section hero-pattern relative">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Specialized Hardware</span>
            <h1 className="section-title">Other <br /><span>Security Products</span></h1>
            <p className="text-gray-400 max-w-2xl text-lg font-medium leading-relaxed">
              A comprehensive range of auxiliary security hardware, from high-tensile safes 
              to structural window reinforcement and high-security deadbolts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Internal Navigation Grid */}
      <section className="py-16 dark-section border-y border-white/5">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subCategories.map((item, i) => (
              <LuxCard 
                key={i} 
                index={i}
                to={item.path}
                className="group min-h-[100px]"
              >
                <div className="card-content">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">{item.label}</span>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding dark-section relative">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { icon: <Lock size={32} />, title: "Mortise Locks", desc: "Heavy-duty internal and external mortise locks with multi-point engagement cases for ultimate door security." },
              { icon: <Box size={32} />, title: "High Security Safes", desc: "SABS approved residential and commercial safes with biometric or high-security mechanical overrides." },
              { icon: <Disc size={32} />, title: "Security Window Film", desc: "Shatter-proof structural film that prevents smash-and-grab attacks and significantly slows forced entry." }
            ].map((item, i) => (
              <LuxCard key={i} index={i} className="group">
                <div className="card-content">
                  <div className="w-16 h-16 bg-transparent rounded-none flex items-center justify-center text-primary mb-8 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-105">                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed font-medium">{item.desc}</p>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default OtherProducts;
