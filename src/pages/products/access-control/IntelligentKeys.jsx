import { motion } from 'framer-motion';
import { Key, Cpu, Clock, History, Fingerprint } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const IntelligentKeys = () => {
  const subCategories = [
    { icon: <Cpu size={18} />, label: "Bio Flash Memory", path: "/products/access-control/bio-flash" },
    { icon: <Fingerprint size={18} />, label: "Biometric Access", path: "/products/access-control/biometrics" },
    { icon: <Key size={18} />, label: "Intelligent Keys", path: "/products/access-control/intelligent-keys" },
    { icon: <Clock size={18} />, label: "Time & Attendance", path: "/products/access-control/attendance" }
  ];

  return (
    <div>
      <section className="py-32 dark-section hero-pattern relative">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Programmable Access</span>
            <h1 className="section-title">Microelectric <br /><span>Intelligent Keys</span></h1>
            <p className="text-gray-400 max-w-2xl text-lg font-medium leading-relaxed">
              Manage permissions and audit trails at the key level. Microelectric cylinders and keys provide 
              flexible control for complex facilities without any structural wiring.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Internal Navigation Grid */}
      <section className="py-16 dark-section border-y border-white/5">
        <div className="container relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {subCategories.map((item, i) => (
              <LuxCard 
                key={i} 
                to={item.path}
                index={i}
                className={`min-h-[140px] ${item.label === 'Intelligent Keys' ? 'border-primary bg-primary/5' : ''}`}
              >
                <div className="card-content">
                  <div className={`${item.label === 'Intelligent Keys' ? 'text-primary' : 'text-gray-500 group-hover:text-primary'} mb-4 transition-colors`}>{item.icon}</div>
                  <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${item.label === 'Intelligent Keys' ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>{item.label}</span>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding dark-section relative">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {[
              { icon: <Cpu size={32} />, title: "Digital Identity", desc: "Each key carries a unique encrypted digital identity that cannot be cloned or duplicated." },
              { icon: <Clock size={32} />, title: "Time Windows", desc: "Keys can be programmed to work only during specific shifts, dates, or recurring time slots." },
              { icon: <History size={32} />, title: "Access Logs", desc: "Every lock interaction is recorded on the key's internal memory for comprehensive auditing." }
            ].map((item, i) => (
              <LuxCard 
                key={i}
                index={i}
                className="group"
              >
                <div className="card-content">
                  <div className="w-16 h-16 bg-transparent rounded-none flex items-center justify-center text-primary mb-8 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-105">                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed font-medium">{item.desc}</p>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default IntelligentKeys;
