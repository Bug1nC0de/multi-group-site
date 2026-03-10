import { motion } from 'framer-motion';
import { Box, Truck, ShieldCheck, Wifi } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const S1BlackBox = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Mobile DVR</span>
          <h1 className="text-6xl font-bold mb-6 text-white uppercase tracking-tighter">BNSOFT EVARDY <br /><span className="text-gradient-gold">S1 BLACK BOX</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            The industry standard for compact, vibration-proof vehicle recording. Specifically engineered 
            for commercial fleets and public transport systems.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 uppercase tracking-tighter">RUGGED <span className="text-accent">ARCHITECTURE</span></h2>
              <div className="space-y-6">
                {[
                  { icon: <ShieldCheck />, title: "Vibration Protection", desc: "Patented shock-absorption system protects the hard drive from rough road conditions." },
                  { icon: <Truck />, title: "Dual Channel", desc: "Supports both internal cabin and external forward-facing high-definition cameras." },
                  { icon: <Wifi />, title: "GPS Logging", desc: "Synchronized recording of video data with precise GPS location and speed metrics." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-bg border border-white/5 text-left">
                    <div className="bg-accent/10 p-3 h-fit rounded-none text-accent">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <LuxCard className="bg-bg border border-white/5 relative">
               <div className="card-content">
                  <div className="text-center relative z-10">
                    <Box size={150} className="text-accent/5 mb-6 mx-auto" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">S1 Series Unit Active</span>
                  </div>
               </div>
            </LuxCard>
          </div>
        </div>
      </section>

    </div>
  );
};

export default S1BlackBox;
