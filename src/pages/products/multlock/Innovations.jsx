import { motion } from 'framer-motion';
import { Cpu, Lock, Microscope, Key, RefreshCw, Boxes } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const Innovations = () => {
  const subCategories = [
    { icon: <Key size={18} />, label: "Cylinders", path: "/products/multlock/cylinders" },
    { icon: <Cpu size={18} />, label: "Electronic", path: "/products/multlock/electronic" },
    { icon: <RefreshCw size={18} />, label: "Upgrades", path: "/products/multlock/upgrades" },
    { icon: <Lock size={18} />, label: "Padlocks", path: "/products/multlock/padlocks" },
    { icon: <Boxes size={18} />, label: "Innovations", path: "/products/multlock/innovations" }
  ];

  return (
    <div>
      <section className="py-32 dark-section hero-pattern relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-none"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Future of Security</span>
            <h1 className="section-title text-5xl md:text-7xl">Product <br /><span>Innovations</span></h1>
            <p className="text-gray-400 max-w-2xl text-xl font-medium leading-relaxed mt-8">
              Pushing the boundaries of mechanical and digital locking. Discover our patented 20-telescopic pin systems and cutting-edge security breakthroughs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Internal Navigation Grid */}
      <section className="py-16 dark-section border-y border-white/5">
        <div className="container relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {subCategories.map((item, i) => (
              <LuxCard 
                key={i} 
                index={i}
                to={item.path}
                className={`group min-h-[140px] ${item.label === 'Innovations' ? 'border-primary bg-primary/5' : ''}`}
              >
                <div className="card-content">
                  <div className={`${item.label === 'Innovations' ? 'text-primary' : 'text-gray-500 group-hover:text-primary'} mb-4 transition-colors`}>{item.icon}</div>
                  <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${item.label === 'Innovations' ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>{item.label}</span>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding dark-section relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <LuxCard 
            className="inline-block border-primary/10 bg-[#0A0D14] max-w-5xl relative overflow-hidden"
          >
            <div className="card-content">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-none translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="flex justify-center mb-12">
                <div className="w-24 h-24 bg-primary/10 rounded-none flex items-center justify-center text-primary shadow-2xl shadow-primary/5">
                  <Microscope size={56} />
                </div>
              </div>
              
              <span className="section-subtitle mx-auto">Patented Engineering</span>
              <h2 className="section-title text-4xl mb-8">20 Telescopic-Size <span>Pin System</span></h2>
              
              <p className="text-gray-400 text-xl leading-relaxed mb-12 font-medium max-w-3xl mx-auto">
                The core of Mul-T-Lock innovation. This unique mechanism utilizes internal and external pins that must align simultaneously to create a three-dimensional shear line, making manipulation virtually impossible.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/5 w-full">
                {["Anti-Pick", "Anti-Drill", "Anti-Bump", "Anti-Snap"].map((item, i) => (
                  <div key={i} className="py-5 px-6 border border-white/5 text-primary text-[11px] font-black uppercase tracking-[0.3em] bg-white/[0.02] rounded-none hover:bg-primary/5 hover:border-primary/30 transition-all duration-500">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </LuxCard>
        </div>
      </section>

    </div>
  );
};

export default Innovations;
