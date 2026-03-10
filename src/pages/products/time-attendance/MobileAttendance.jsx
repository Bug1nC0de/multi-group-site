import { motion } from 'framer-motion';
import { Smartphone, MapPin, Fingerprint, Clock } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const MobileAttendance = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Field Workforce</span>
          <h1 className="text-6xl font-bold mb-6 text-white tracking-tighter">Mobile Time <br /><span className="text-gradient-gold">& Attendance</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            Verify and record workforce presence in the field. Ideal for construction, security guarding, and off-site service teams.
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
              <h2 className="text-4xl font-bold mb-8 tracking-tighter text-white">Field <span className="text-accent">Verification</span></h2>
              <div className="space-y-6">
                {[
                  { icon: <MapPin />, title: "GPS Geo-Location", desc: "Every clock-in event is tagged with precise GPS coordinates to ensure the user is at the correct site." },
                  { icon: <Fingerprint />, title: "Mobile Biometrics", desc: "Optional handheld biometric scanners that sync directly with the attendance platform." },
                  { icon: <Clock />, title: "Offline Sync", desc: "Data is stored locally on the device when signal is poor and automatically uploaded when connectivity returns." }
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
                  <div className="absolute inset-0 bg-accent/5"></div>
                  <div className="text-center relative z-10">
                    <Smartphone size={120} className="text-accent/20 mb-6 mx-auto" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Mobile Sync Active</span>
                  </div>
               </div>
            </LuxCard>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MobileAttendance;
