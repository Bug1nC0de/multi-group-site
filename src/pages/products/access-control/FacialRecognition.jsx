import { motion } from 'framer-motion';
import { ScanFace, Monitor } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const FacialRecognition = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Touchless Entry</span>
          <h1 className="text-6xl font-bold mb-6 uppercase tracking-tighter">FACIAL <br /><span className="text-gradient-gold">RECOGNITION</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8">
            State-of-the-art 3D facial mapping technology. Rapid identification even in low light or while wearing masks and glasses.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">ELITE HARDWARE <span className="text-accent">SERIES</span></h2>
              <div className="space-y-6">
                {[
                  { title: "Client Face", desc: "Compact desktop or wall-mount unit for office management." },
                  { title: "Matrix Keeper", desc: "Heavy-duty outdoor standalone unit with integrated RFID reader." },
                  { title: "Notifaceii", desc: "Advanced networked system with real-time push notifications." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-surface border border-white/5 rounded hover:border-accent/30 transition-all group">
                    <div className="bg-accent/10 p-3 h-fit rounded text-accent group-hover:bg-accent group-hover:text-primary transition-colors">
                      <ScanFace size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <LuxCard className="p-4 bg-bg border border-white/5 overflow-hidden rounded">
               <div className="card-content">
                  <div className="aspect-video bg-surface flex items-center justify-center relative">
                     <Monitor size={64} className="text-white/10" />
                     <div className="absolute inset-0 border-2 border-accent/20 m-8 flex items-center justify-center">
                        <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-accent animate-pulse">Scanning Active</span>
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

export default FacialRecognition;
