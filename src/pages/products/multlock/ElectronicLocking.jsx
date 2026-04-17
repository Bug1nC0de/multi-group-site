import { motion } from 'framer-motion';
import { History, Clock, Key, Wifi, UserCheck, Cpu, RefreshCw, Boxes, Lock } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const ElectronicLocking = () => {
  const subCategories = [
    { icon: <Key size={18} />, label: "Cylinders", path: "/products/multlock/cylinders" },
    { icon: <Cpu size={18} />, label: "Electronic", path: "/products/multlock/electronic" },
    { icon: <RefreshCw size={18} />, label: "Upgrades", path: "/products/multlock/upgrades" },
    { icon: <Lock size={18} />, label: "Padlocks", path: "/products/multlock/padlocks" },
    { icon: <Boxes size={18} />, label: "Innovations", path: "/products/multlock/innovations" }
  ];

  return (
    <div>
      <section className="py-32 dark-section hero-pattern relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-none"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Mul-T-Lock CLIQ®</span>
            <h1 className="section-title text-5xl md:text-7xl">Electronic <br /><span>Intelligence</span></h1>
            <p className="text-gray-400 max-w-2xl text-xl font-medium leading-relaxed mt-8">
              Revolutionizing access control with electromechanical intelligence. CLIQ® technology 
              combines high-security mechanical protection with flexible digital management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Internal Navigation Grid */}
      <section className="py-16 dark-section border-y border-white/5">
        <div className="container relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {subCategories.map((item, i) => (
              <LuxCard 
                key={i} 
                index={i}
                to={item.path}
                className={`group min-h-[140px] ${item.label === 'Electronic' ? 'border-primary bg-primary/5' : ''}`}
              >
                <div className="card-content">
                  <div className={`${item.label === 'Electronic' ? 'text-primary' : 'text-gray-500 group-hover:text-primary'} mb-4 transition-colors`}>{item.icon}</div>
                  <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${item.label === 'Electronic' ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>{item.label}</span>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding dark-section relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <span className="section-subtitle">Intelligent CLIQ®</span>
                <h2 className="section-title text-4xl md:text-6xl">Electromechanical <span>Protocols</span></h2>
              </div>
              
              <div className="space-y-8">
                {[
                  { 
                    icon: <History />, 
                    title: "Full Audit Trails", 
                    desc: "Know exactly who accessed which door and when. Every key stores an internal log of every opening attempt." 
                  },
                  { 
                    icon: <Clock />, 
                    title: "Time Schedules", 
                    desc: "Grant access only during specific hours. Automatically disable keys outside of working hours or authorized times." 
                  },
                  { 
                    icon: <UserCheck />, 
                    title: "Mobile Management", 
                    desc: "Revoke lost keys instantly via the web portal or mobile app. No need to re-pin or replace any cylinders." 
                  }
                ].map((item, i) => (
                  <LuxCard key={i} index={i} className="group">
                    <div className="card-content flex-row gap-8 text-left">
                      <div className="w-14 h-14 bg-transparent rounded-none flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-white tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-gray-400 text-base font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </LuxCard>
                ))}
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="absolute -inset-10 bg-primary/5 blur-[100px] rounded-none opacity-50"></div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="relative aspect-square bg-[#0A0D14] border border-white/5 rounded-none flex items-center justify-center p-20 shadow-2xl"
              >
                <div className="absolute inset-0 border border-primary/10 rounded-none animate-pulse"></div>
                <div className="text-center relative z-10">
                  <Key size={120} className="text-primary mb-6 mx-auto group-hover:scale-110 transition-transform duration-700" />
                  <div className="flex items-center gap-3 justify-center text-primary text-[10px] font-black uppercase tracking-[0.4em]">
                    <Wifi size={16} className="animate-pulse" /> Encrypted Sync
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ElectronicLocking;
