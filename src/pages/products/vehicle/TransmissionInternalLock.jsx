import { motion } from 'framer-motion';
import { Shield, Settings } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const TransmissionInternalLock = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Discreet Immobilisation</span>
          <h1 className="text-6xl font-bold mb-6 text-white tracking-tighter">Internal <br /><span className="text-gradient-gold">Transmission Locks</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            The invisible fortress. Seamlessly integrated into the vehicle's center console, providing high-security immobilization without altering the cabin's aesthetic.
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
              <h2 className="text-4xl font-bold mb-8 tracking-tighter text-white">Concealed <span className="text-accent">Defense</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Designed for luxury and high-value vehicles, our internal locks are professionally installed beneath the console. Only the high-security keyhole is visible, maintaining the factory finish.
              </p>
              <div className="space-y-4">
                {[
                  "Vehicle-specific bracketry for perfect fitment.",
                  "Attack-resistant steel shroud for the shifter cable/linkage.",
                  "Zero interference with vehicle electronics.",
                  "Approved by major South African insurance providers."
                ].map((text, i) => (
                  <div key={i} className="flex gap-3 items-center text-gray-300">
                    <Shield className="text-accent" size={18} />
                    <span className="text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <LuxCard className="bg-bg border border-white/5">
               <div className="card-content">
                  <Settings size={120} className="text-accent/10" />
               </div>
            </LuxCard>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TransmissionInternalLock;
