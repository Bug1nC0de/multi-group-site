import { motion } from 'framer-motion';
import { ShieldCheck, Lock } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const GearLocks = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Original Innovation</span>
          <h1 className="text-6xl font-bold mb-6">Transmission <br /><span className="text-gradient-gold">Gear Locks</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8">
            Multi-Locking (Mul-T-Lock) produced the world's first gear lock. We continue to provide the most secure mechanical immobilization systems for vehicles.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Mechanical <span className="text-accent">Strength</span></h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                By physically locking the gear shifter, we provide a visible and formidable deterrent. Our systems are virtually impossible to bypass without the high-security Mul-T-Lock key.
              </p>
              <div className="space-y-4">
                {[
                  "Internal and External lock options available.",
                  "Specifically designed for each vehicle make and model.",
                  "Case-hardened steel construction.",
                  "High-security Mul-T-Lock Interactive®+ cylinders."
                ].map((text, i) => (
                  <div key={i} className="flex gap-3 items-center text-gray-300">
                    <ShieldCheck className="text-accent" size={18} />
                    <span className="text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <LuxCard className="bg-bg border border-white/5 relative group">
               <div className="card-content">
                  <div className="aspect-square bg-surface flex items-center justify-center border border-white/10 overflow-hidden w-full rounded-none">
                    <Lock size={120} className="text-accent/10 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-none">
                    The Gold Standard
                  </div>
               </div>
            </LuxCard>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GearLocks;
