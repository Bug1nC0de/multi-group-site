import { motion } from 'framer-motion';
import { Lock, CheckCircle2, Key, Cpu, RefreshCw, Boxes } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const Padlocks = () => {
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
            <span className="section-subtitle">Extreme Security</span>
            <h1 className="section-title text-5xl md:text-7xl">Heavy Duty <br /><span>Padlocks</span></h1>
            <p className="text-gray-400 max-w-2xl text-xl font-medium leading-relaxed mt-8">
              Engineered to withstand the most aggressive physical attacks and environmental conditions. Our Mul-T-Lock range offers the ultimate in portable security.
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
                className={`group min-h-[140px] ${item.label === 'Padlocks' ? 'border-primary bg-primary/5' : ''}`}
              >
                <div className="card-content">
                  <div className={`${item.label === 'Padlocks' ? 'text-primary' : 'text-gray-500 group-hover:text-primary'} mb-4 transition-colors`}>{item.icon}</div>
                  <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${item.label === 'Padlocks' ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>{item.label}</span>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding dark-section relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {[
              {
                title: "G-Series Heavy Duty",
                features: ["Boron alloy shackle", "Hardened steel body", "Drill resistant", "Protective shutter"],
                desc: "Ideal for commercial applications where maximum resistance to bolt cutters and saws is required. Engineered for the harshest climates."
              },
              {
                title: "NE-Series (Electromechanical)",
                features: ["CLIQ Integration", "Audit trail enabled", "Weatherproof design", "No battery in lock"],
                desc: "Combine physical strength with electronic access control for remote infrastructure and high-value gates. Full permission management."
              }
            ].map((series, i) => (
              <LuxCard 
                key={i}
                index={i}
                className="group"
              >
                <div className="card-content">
                  <div className="w-20 h-20 bg-primary/10 rounded-none flex items-center justify-center text-primary mb-10 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-2xl shadow-primary/5">
                    <Lock size={40} />
                  </div>
                  <h2 className="text-3xl font-bold mb-6 text-white tracking-tight group-hover:text-primary transition-colors">{series.title}</h2>
                  <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium min-h-[80px] text-center">{series.desc}</p>
                  <ul className="space-y-5 pt-10 border-t border-white/5 w-full">
                    {series.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-4 text-[11px] font-black text-gray-300 uppercase tracking-[0.3em] justify-center">
                        <CheckCircle2 size={18} className="text-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Padlocks;
