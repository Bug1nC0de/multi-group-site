import { motion } from 'framer-motion';
import { Anchor, ShieldAlert, Truck, ArrowRight, Settings, Shield, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import LuxCard from '../../../components/LuxCard';

const KingpinLocks = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Trailer Security</span>
            <h1 className="text-6xl font-bold mb-6 text-white tracking-tighter uppercase">KINGPIN <br /><span className="text-gradient-gold">LOCK SYSTEMS</span></h1>
            <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed font-medium">
              The ultimate prevention against unauthorized trailer coupling. Physically lock the fifth-wheel kingpin to secure high-value cargo during transit or storage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Internal Navigation Grid */}
      <section className="py-12 bg-surface border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Gear Locks", path: "/products/vehicle-security" },
              { label: "Container Locks", path: "/products/vehicle/container-locks" },
              { label: "Trailer Ring", path: "/products/vehicle/trailer-ring" },
              { label: "Wheel Clamps", path: "/products/vehicle/wheel-clamps" }
            ].map((item, i) => (
              <Link 
                key={i} 
                to={item.path}
                className="flex items-center justify-center p-6 border border-white/5 bg-bg hover:border-accent transition-all text-center min-h-[80px] group"
              >
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Anchor size={32} />, title: "Coupling Block", desc: "Prevents any tractor unit from engaging with the trailer while the lock is active." },
              { icon: <ShieldAlert size={32} />, title: "Anti-Drill", desc: "Hardened steel casing protects the locking mechanism from brute-force drilling and leverage." },
              { icon: <Truck size={32} />, title: "Fleet Management", desc: "Can be master-keyed to allow fleet managers access across multiple trailers." }
            ].map((item, i) => (
              <LuxCard 
                key={i}
                index={i}
              >
                <div className="card-content">
                  <div className="text-accent mb-8 bg-transparent w-16 h-16 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">{item.icon}</div>                  <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section className="section-padding bg-bg relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square bg-surface border border-white/5 flex items-center justify-center p-20 group">
                <Lock size={200} className="text-accent/10 group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent opacity-60"></div>
                <div className="absolute bottom-10 left-10">
                   <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Structural Grade Steel</span>
                </div>
              </div>
            </div>

            <div>
              <span className="section-subtitle">Data Sheet</span>
              <h2 className="text-4xl font-black text-white mb-10 tracking-tighter uppercase">TECHNICAL <span className="text-accent">SPECIFICATIONS</span></h2>
              
              <div className="space-y-4">
                {[
                  { label: "Material", val: "High-Tensile Cast Steel" },
                  { label: "Cylinder", val: "Mul-T-Lock Interactive®+ 262S" },
                  { label: "Finish", val: "Bright Orange Powder Coat (High Visibility)" },
                  { label: "Compatibility", val: "Standard 2-inch & 3.5-inch Kingpins" },
                  { label: "Weight", val: "7.5kg Heavy Duty Construction" },
                  { label: "Security", val: "Anti-Drill & Anti-Pick Technology" }
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between py-4 border-b border-white/5">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">{spec.label}</span>
                    <span className="text-sm font-bold text-white tracking-tight">{spec.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="section-padding bg-surface border-t border-white/5">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <Settings size={32} />, title: "QUICK INSTALL", desc: "Easy one-handed operation for drivers while maintaining maximum security.", path: "/contact" },
              { icon: <Shield size={32} />, title: "CORROSION RESISTANT", desc: "Designed to withstand harsh coastal and industrial environments.", path: "/contact" },
              { icon: <Truck size={32} />, title: "FLEET READY", desc: "Streamline your logistics security with master-keyed fleet systems.", path: "/contact" }
            ].map((item, i) => (
              <LuxCard key={i} index={i} to={item.path} className="group hover:bg-accent/5 transition-all text-center">
                <div className="card-content">
                  <div className="text-accent mb-8 group-hover:scale-110 transition-transform flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 tracking-tight uppercase">{item.title}</h4>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed mb-10">{item.desc}</p>
                  <div className="flex items-center gap-3 text-accent text-[10px] font-black uppercase tracking-[0.2em] justify-center w-full group/link">
                    LEARN MORE <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                  </div>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default KingpinLocks;
