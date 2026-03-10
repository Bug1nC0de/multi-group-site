import { motion } from 'framer-motion';
import { RefreshCw, Key, Palette, Cpu, Lock, Boxes } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const LockUpgrades = () => {
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
            <span className="section-subtitle">System Evolution</span>
            <h1 className="section-title text-5xl md:text-7xl">Existing Lock <br /><span>System Upgrades</span></h1>
            <p className="text-gray-400 max-w-2xl text-xl font-medium leading-relaxed mt-8">
              Breathe new life into your current security infrastructure. We specialize in upgrading existing locking systems to Mul-T-Lock or Abloy standards.
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
                className={`group min-h-[140px] ${item.label === 'Upgrades' ? 'border-primary bg-primary/5' : ''}`}
              >
                <div className="card-content">
                  <div className={`${item.label === 'Upgrades' ? 'text-primary' : 'text-gray-500 group-hover:text-primary'} mb-4 transition-colors`}>{item.icon}</div>
                  <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${item.label === 'Upgrades' ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>{item.label}</span>
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
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <span className="section-subtitle">Integration</span>
                <h2 className="section-title text-4xl md:text-6xl text-center lg:text-left">Flexible <span>Retrofitting</span></h2>
              </div>
              
              <div className="space-y-8">
                <LuxCard className="group">
                  <div className="card-content flex-row gap-8 text-left">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 border border-primary/20 rounded-none flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <RefreshCw size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white tracking-tight group-hover:text-primary transition-colors">Re-pinnable Security</h3>
                      <p className="text-gray-400 text-base font-medium leading-relaxed">
                        Lost or stolen keys? Our cylinders can be professionally re-pinned and issued with new keys on-site, eliminating the need for full lock replacement.
                      </p>
                    </div>
                  </div>
                </LuxCard>
                <LuxCard className="group">
                  <div className="card-content flex-row gap-8 text-left">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 border border-primary/20 rounded-none flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <Palette size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white tracking-tight group-hover:text-primary transition-colors">Color-Coded Control</h3>
                      <p className="text-gray-400 text-base font-medium leading-relaxed">
                        Facilitation of easy identification and key control using multiple colored key heads for different clearance levels and departmental access.
                      </p>
                    </div>
                  </div>
                </LuxCard>
              </div>
            </motion.div>
            
            <LuxCard className="group">
              <div className="card-content bg-[#0A0D14] border-primary/10 shadow-2xl relative overflow-hidden text-center items-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-none"></div>
                <span className="section-subtitle">Upgrade Path</span>
                <h3 className="text-3xl font-bold mb-10 text-white tracking-tight">UPGRADE OPTIONS</h3>
                <ul className="space-y-6 w-full">
                  {[
                    "Flexible Master Key Systems", 
                    "Keyed Alike Solutions", 
                    "Individual Custom Pinning", 
                    "Abloy High-Security Integration", 
                    "Existing Cylinder Replacement", 
                    "Retrofit Lock Cases"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-5 text-gray-300 group justify-center">
                      <div className="w-2 h-2 bg-primary rounded-none shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                      <span className="text-sm font-black uppercase tracking-[0.3em] text-gray-500 group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-12 pt-10 border-t border-white/5 w-full">
                   <p className="text-sm text-gray-500 italic font-medium leading-relaxed">
                      *We support over 200 different lock profiles for seamless retrofitting.
                   </p>
                </div>
              </div>
            </LuxCard>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LockUpgrades;
