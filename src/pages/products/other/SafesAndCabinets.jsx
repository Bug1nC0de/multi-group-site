import { Lock, Database, Key } from 'lucide-react';
import { Link } from 'react-router-dom';
import LuxCard from '../../../components/LuxCard';

const SafesAndCabinets = () => {
  const subCategories = [
    { label: "High Security Doors", path: "/products/high-security-doors" },
    { label: "Mortise Locks and Deadbolts", path: "/products/other/locks" },
    { label: "Safes, Cabinets and Doors", path: "/products/other/safes" },
    { label: "Security Window Film", path: "/products/other/window-film" }
  ];

  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Secure Storage</span>
          <h1 className="text-6xl font-bold mb-6 text-white uppercase tracking-tighter uppercase">SAFES, CABINETS <br /><span className="text-gradient-gold">& DOORS</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            High-tensile steel storage and secondary structural barriers. SABS approved solutions for firearms, high-value documents, and server infrastructure.
          </p>
        </div>
      </section>

      {/* Internal Navigation Buttons */}
      <section className="py-12 bg-surface border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {subCategories.map((item, i) => (
              <Link 
                key={i} 
                to={item.path}
                className={`flex items-center justify-center p-6 border transition-all text-center min-h-[80px] ${item.label === 'Safes, Cabinets and Doors' ? 'bg-accent/10 border-accent shadow-[0_0_20px_rgba(212,175,55,0.1)]' : 'bg-bg border-white/5 hover:border-accent group'}`}
              >
                <span className={`text-[9px] font-black uppercase tracking-widest ${item.label === 'Safes, Cabinets and Doors' ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Lock />, title: "Gun Safes", desc: "SABS compliant firearm storage with reinforced locking bolts and anti-lever frames." },
              { icon: <Database />, title: "Server Cabinets", desc: "Ventilated high-security racks for critical IT infrastructure with biometric access options." },
              { icon: <Key />, title: "Key Cabinets", desc: "Organized and secure storage for master key systems, available in various capacities." }
            ].map((item, i) => (
              <LuxCard key={i} index={i}>
                <div className="card-content">
                  <div className="text-accent mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default SafesAndCabinets;
