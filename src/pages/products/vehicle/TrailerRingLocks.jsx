import { motion } from 'framer-motion';
import { CircleDot, ShieldAlert, Truck, ArrowRight, Settings, Shield, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import LuxCard from '../../../components/LuxCard';

const TrailerRingLocks = () => {
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
            <span className="section-subtitle">Hitch Point Security</span>
            <h1 className="text-6xl font-bold mb-6 text-white tracking-tighter uppercase">TRAILER <br /><span className="text-gradient-gold">RING LOCKS</span></h1>
            <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed font-medium">
              Specialized mechanical protection for heavy-duty trailer ring hitches. Prevent unauthorized towing of plant machinery and industrial equipment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Internal Navigation Grid */}
      <section className="py-12 bg-surface border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Kingpin Locks", path: "/products/vehicle/kingpin" },
              { label: "Container Locks", path: "/products/vehicle/container-locks" },
              { label: "Gear Locks", path: "/products/vehicle-security" },
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
              { icon: <CircleDot size={32} />, title: "Full Shroud", desc: "Completely encloses the ring hitch to prevent any connection to a tow vehicle." },
              { icon: <ShieldAlert size={32} />, title: "High-Tensile Steel", desc: "Constructed from solid structural steel, making it resistant to cutting and leverage." },
              { icon: <Truck size={32} />, title: "Plant Equipment", desc: "The ideal solution for securing generators, compressors, and trailer-mounted machinery." }
            ].map((item, i) => (
              <LuxCard 
                key={i}
                index={i}
                className="border border-white/5"
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
            <div>
              <span className="section-subtitle">Data Sheet</span>
              <h2 className="text-4xl font-black text-white mb-10 tracking-tighter uppercase">TECHNICAL <span className="text-accent">SPECIFICATIONS</span></h2>
              
              <div className="space-y-4">
                {[
                  { label: "Application", val: "40mm & 50mm Towing Rings" },
                  { label: "Locking Type", val: "Integral High-Security Cylinder" },
                  { label: "Hardware", val: "Mul-T-Lock Classic / Interactive®+" },
                  { label: "Casing", val: "Hardened Carbon Steel" },
                  { label: "Visibility", val: "High-Visibility Security Yellow" },
                  { label: "Certification", val: "ISO 9001:2015 Manufacturing" }
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between py-4 border-b border-white/5">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">{spec.label}</span>
                    <span className="text-sm font-bold text-white tracking-tight">{spec.val}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-surface border border-white/5 flex items-center justify-center p-20 group">
                <Lock size={200} className="text-accent/10 group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent opacity-60"></div>
                <div className="absolute bottom-10 right-10">
                   <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Tow Point Shield Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation CTA Strip */}
      <section className="section-padding bg-surface border-t border-white/5">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <Settings size={32} />, title: "CUSTOM FITTING", desc: "Bespoke security solutions for unique industrial hitching systems.", path: "/contact" },
              { icon: <Shield size={32} />, title: "TAMPER PROOF", desc: "Integrated anti-drill and anti-grind armor plating for absolute defense.", path: "/contact" },
              { icon: <Truck size={32} />, title: "PLANT SECURITY", desc: "Secure your high-value mobile plant assets across various job sites.", path: "/contact" }
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

export default TrailerRingLocks;
