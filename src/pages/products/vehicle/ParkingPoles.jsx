import { motion } from 'framer-motion';
import { CircleDot, Lock } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const ParkingPoles = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Bay Reservation</span>
          <h1 className="text-6xl font-bold mb-6 text-white tracking-tighter">High Security <br /><span className="text-gradient-gold">Parking Poles</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            Robust structural barriers to secure private parking bays and driveways. Heavy-duty steel construction with integrated Mul-T-Lock technology.
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
              <h2 className="text-4xl font-bold mb-8 tracking-tighter text-white">Formidable <span className="text-accent">Barrier</span></h2>
              <div className="space-y-6">
                {[
                  { title: "Collapsible Design", desc: "Easily fold the pole down to allow vehicle access, and lock it upright to secure the bay." },
                  { title: "Impact Resistant", desc: "Constructed from 3mm thick structural steel tubing to withstand low-speed vehicle impacts." },
                  { title: "Reflective Finish", desc: "High-visibility powder coating with reflective strips for night-time safety." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-bg border border-white/5">
                    <div className="bg-accent/10 p-3 h-fit rounded-none text-accent"><CircleDot /></div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <LuxCard className="bg-bg border border-white/5 aspect-square">
               <div className="card-content">
                  <div className="w-12 h-64 bg-accent/20 rounded-none shadow-[0_0_30px_rgba(212,175,55,0.2)] relative">
                     <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-surface rounded-none flex items-center justify-center">
                        <Lock size={14} className="text-accent" />
                     </div>
                  </div>
               </div>
            </LuxCard>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ParkingPoles;
