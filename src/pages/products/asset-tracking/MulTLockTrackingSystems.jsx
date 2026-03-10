import { ShieldCheck, Lock, Anchor } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const MulTLockTrackingSystems = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Hardware Integration</span>
          <h1 className="text-6xl font-bold mb-6">MUL-T-LOCK <br /><span className="text-gradient-gold">TRACKING SYSTEMS</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8">
            Combining world-class mechanical locks with intelligent tracking hardware. Physically secure and digitally monitor your most valuable assets.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold uppercase tracking-tighter">THE DUAL <span className="text-accent">DEFENSE</span></h2>
              <p className="text-gray-400 leading-relaxed">
                Our Mul-T-Lock tracking units are integrated directly into high-security hasps and cylinders. If a lock is tampered with or moved, the system triggers an immediate alert via the tracking network.
              </p>
              <div className="space-y-4">
                {[
                  "Tamper-evident housing for tracking electronics.",
                  "Direct integration with G-Series padlocks.",
                  "Long-life battery systems for stationary assets.",
                  "High-precision GPS antennas."
                ].map((text, i) => (
                  <div key={i} className="flex gap-3 items-center text-gray-300">
                    <ShieldCheck className="text-accent" size={18} />
                    <span className="text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <LuxCard className="p-12 bg-bg border border-white/5 relative flex items-center justify-center overflow-hidden">
               <div className="card-content flex items-center justify-center">
                 <Anchor size={200} className="text-accent/5 absolute" />
                 <Lock size={80} className="text-accent relative z-10" />
               </div>
            </LuxCard>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MulTLockTrackingSystems;
