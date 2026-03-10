import { motion } from 'framer-motion';
import { MonitorPlay, HardDrive, Cpu, Shield, ArrowRight, Settings, Server, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import LuxCard from '../../../components/LuxCard';

const AllInOneDVR = () => {
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
            <span className="section-subtitle">Stationary Recording</span>
            <h1 className="text-6xl font-bold mb-6 text-white uppercase tracking-tighter uppercase">ALL-IN-ONE <br /><span className="text-gradient-gold">DIGITAL VIDEO RECORDER</span></h1>
            <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed font-medium">
              A complete, high-performance recording solution. Integrated storage, intelligent software, and high-fidelity output in a single secure chassis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Internal Navigation Grid */}
      <section className="py-12 bg-surface border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "IP Surveillance", path: "/products/surveillance" },
              { label: "Black Box Units", path: "/products/surveillance/s1" },
              { label: "Mobile DVR", path: "/products/surveillance/mobile-dvr" },
              { label: "Surveillance Cameras", path: "/products/surveillance/cameras" }
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
              { icon: <HardDrive size={32} />, title: "Internal Storage", desc: "Up to 16TB of surveillance-grade storage for months of high-definition recording." },
              { icon: <Cpu size={32} />, title: "Smart Compression", desc: "H.265+ encoding provides high image quality while significantly reducing bandwidth." },
              { icon: <MonitorPlay size={32} />, title: "HDMI 4K Output", desc: "Crystal clear multi-channel viewing on any modern UHD monitoring display." }
            ].map((item, i) => (
              <LuxCard 
                key={i}
                index={i}
              >
                <div className="card-content">
                  <div className="text-accent mb-8 bg-accent/5 w-16 h-16 flex items-center justify-center border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all duration-500">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs Table Section */}
      <section className="section-padding bg-bg relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="section-subtitle">Data Sheet</span>
              <h2 className="text-4xl font-black text-white mb-10 tracking-tighter uppercase">TECHNICAL <span className="text-accent">SPECIFICATIONS</span></h2>
              
              <div className="space-y-4">
                {[
                  { label: "Compression", val: "H.265+ / H.264 High Profile" },
                  { label: "Input", val: "Up to 32 Channels IP/Analog" },
                  { label: "Resolution", val: "4K (3840 x 2160) @ 30fps" },
                  { label: "Storage", val: "4x SATA Interfaces (up to 40TB)" },
                  { label: "Network", val: "Dual 1000Mbps Ethernet Ports" },
                  { label: "Backup", val: "USB 3.0, Network, Cloud Sync" }
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between py-4 border-b border-white/5">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">{spec.label}</span>
                    <span className="text-sm font-bold text-white tracking-tight">{spec.val}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <LuxCard className="bg-surface/50 border border-white/5 p-12">
                 <div className="flex flex-col gap-8">
                    <div className="flex gap-6 items-start">
                       <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                          <Server size={24} />
                       </div>
                       <div>
                          <h4 className="text-lg font-bold text-white mb-2 tracking-tight uppercase">CENTRAL MANAGEMENT</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">Integrated with Multi-CMS for remote viewing across multiple locations and unified user permission management.</p>
                       </div>
                    </div>
                    <div className="flex gap-6 items-start">
                       <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                          <Activity size={24} />
                       </div>
                       <div>
                          <h4 className="text-lg font-bold text-white mb-2 tracking-tight uppercase">AI ANALYTICS</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">Advanced behavioral tracking, line-crossing detection, and face matching capabilities built directly into the core engine.</p>
                       </div>
                    </div>
                 </div>
              </LuxCard>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation CTA Strip */}
      <section className="section-padding bg-surface border-t border-white/5">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <Settings size={32} />, title: "SYSTEM SETUP", desc: "Expert installation and configuration for high-traffic commercial environments.", path: "/contact" },
              { icon: <Shield size={32} />, title: "MAINTENANCE", desc: "24/7 technical support and regular system health auditing for critical surveillance.", path: "/contact" },
              { icon: <MonitorPlay size={32} />, title: "INTEGRATION", desc: "Seamlessly connect with your existing alarm and access control infrastructure.", path: "/contact" }
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

export default AllInOneDVR;
