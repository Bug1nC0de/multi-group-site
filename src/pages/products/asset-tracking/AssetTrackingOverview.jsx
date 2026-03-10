import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Truck, Box, ChevronRight } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const AssetTrackingOverview = () => {
  return (
    <div>
      <section className="py-32 dark-section hero-pattern relative">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Intelligent Solutions</span>
            <h1 className="section-title">Asset Tracking <br /><span>Product Overview</span></h1>
            <p className="text-gray-400 max-w-2xl text-lg font-medium leading-relaxed">
              A comprehensive look at our international network-based tracking solutions. 
              From individual high-value items to global logistics fleets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Internal Navigation Grid */}
      <section className="py-16 dark-section border-y border-white/5">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { icon: <Globe size={24} />, label: "Network Solutions", path: "/products/asset-tracking/network" },
              { icon: <ShieldCheck size={24} />, label: "Mul-T-Lock Systems", path: "/products/asset-tracking/systems" }
            ].map((item, i) => (
              <LuxCard 
                key={i} 
                index={i}
                to={item.path}
                className="group"
              >
                <div className="card-content flex-row justify-between w-full">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-primary/5 rounded-none flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-primary/20">
                      {item.icon}
                    </div>
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">{item.label}</span>
                  </div>
                  <div className="w-10 h-10 rounded-none border border-white/5 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                    <ChevronRight size={18} className="text-primary" />
                  </div>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding dark-section relative">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { 
                icon: <Truck size={32} />, 
                title: "Fleet Management", 
                desc: "Real-time tracking of vehicle location, speed, and fuel consumption across Sub-Saharan Africa." 
              },
              { 
                icon: <Box size={32} />, 
                title: "Cargo Protection", 
                desc: "Specialized container tracking with integrated hasps and light sensors to detect unauthorized openings." 
              },
              { 
                icon: <Globe size={32} />, 
                title: "Global Network", 
                desc: "Seamless switching between cellular and satellite networks for uninterrupted international visibility." 
              }
            ].map((item, i) => (
              <LuxCard 
                key={i}
                index={i}
                className="group"
              >
                <div className="card-content">
                  <div className="w-16 h-16 bg-primary/10 rounded-none flex items-center justify-center text-primary mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-5 text-white tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed font-medium">{item.desc}</p>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding dark-section hero-pattern border-t border-white/5">
        <div className="container relative z-10">
           <LuxCard className="max-w-5xl mx-auto relative overflow-hidden bg-[#0A0D14]/80 backdrop-blur-xl">
              <div className="card-content">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                   <ShieldCheck size={200} className="text-primary" />
                </div>
                <span className="section-subtitle">Integration</span>
                <h2 className="section-title text-4xl mb-10">The Tracking <span>Advantage</span></h2>
                <div className="space-y-8 relative z-10 w-full">
                   <p className="text-gray-400 text-lg leading-relaxed font-medium">
                      Our asset tracking technology doesn't just show you where your assets are; it gives you complete control over them. Integrated with Mul-T-Lock hardware, the system can physically immobilize assets or trigger sirens upon unauthorized movement.
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 pt-8 border-t border-white/5 w-full">
                      {[
                         "Real-time GPS precision",
                         "2-year battery life options",
                         "Customizable geo-fences",
                         "Impact and roll-over sensing",
                         "Temperature monitoring",
                         "Remote immobilisation"
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

export default AssetTrackingOverview;
