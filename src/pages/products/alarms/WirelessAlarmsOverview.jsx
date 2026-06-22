import { motion } from 'framer-motion';
import { BellRing, Radio, ShieldAlert, Smartphone } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const WirelessAlarmsOverview = () => {
  return (
    <div>
      <section className="py-32 dark-section hero-pattern relative">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Intrusion Detection</span>
            <h1 className="section-title">Alarm Systems <br /><span>Product Overview</span></h1>
            <p className="text-gray-400 max-w-2xl text-lg font-medium leading-relaxed">
              State-of-the-art wireless intrusion detection networks. Designed for rapid deployment and uncompromised structural integrity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding dark-section relative">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { icon: <Radio size={32} />, title: "Dual-Path Comm", desc: "Redundant communication using both GSM and Wi-Fi to ensure signal delivery even during network failures." },
              { icon: <ShieldAlert size={32} />, title: "Anti-Jamming", desc: "Patented frequency-hopping technology that detects and bypasses sophisticated signal interference." },
              { icon: <Smartphone size={32} />, title: "Full App Control", desc: "Arm, disarm, and monitor your entire property from anywhere in the world via our secure mobile app." }
            ].map((item, i) => (
              <LuxCard 
                key={i}
                index={i}
                className="group"
              >
                <div className="card-content">
                  <div className="w-16 h-16 rounded-none flex items-center justify-center text-primary mb-8 group-hover:text-white transition-all duration-500 bg-transparent">                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-white tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed font-medium">{item.desc}</p>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding dark-section hero-pattern">
        <div className="container relative z-10">
           <LuxCard className="max-w-5xl mx-auto relative overflow-hidden bg-[#0A0D14]/80 backdrop-blur-xl">
              <div className="card-content">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                   <BellRing size={200} className="text-primary" />
                </div>
                <span className="section-subtitle">Integration</span>
                <h2 className="section-title text-4xl mb-10">The Wireless <span>Edge</span></h2>
                <div className="space-y-8 relative z-10 w-full">
                   <p className="text-gray-400 text-lg leading-relaxed font-medium">
                      Our wireless systems eliminate the need for invasive cabling, preserving the aesthetics of high-end architectural finishes. With a 2-year battery life on all sensors and encrypted rolling-code technology, we provide security without compromise.
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 pt-8 border-t border-white/5 w-full">
                      {[
                         "Encrypted Rolling-Code tech",
                         "Pet-immune motion sensors",
                         "Glass-break & vibration detection",
                         "Smoke & Heat integration",
                         "Flood & Water leak detection",
                         "Panic & Medical alert buttons"
                      ].map((feat, i) => (
                         <div key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 justify-start md:justify-center">
                            <div className="w-1.5 h-1.5 bg-primary shadow-[0_0_10px_rgba(37,99,235,0.8)] rounded-none"></div> {feat}
                         </div>
                      ))}
                   </div>
                </div>
              </div>
           </LuxCard>
        </div>
      </section>

    </div>
  );
};

export default WirelessAlarmsOverview;
