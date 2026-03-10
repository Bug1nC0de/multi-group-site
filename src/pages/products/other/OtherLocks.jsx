import { Lock, Shield, Key } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const OtherLocks = () => {
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
          <span className="section-subtitle">Mechanical Excellence</span>
          <h1 className="text-6xl font-bold mb-6 text-white uppercase tracking-tighter uppercase">MORTISE LOCKS <br /><span className="text-gradient-gold">& DEADBOLTS</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            Superior mechanical locking solutions for every architectural requirement. Engineered for 
            high-traffic durability and maximum resistance to physical manipulation.
          </p>
        </div>
      </section>

      {/* Internal Navigation Buttons */}
      <section className="py-12 bg-surface border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {subCategories.map((item, i) => (
              <LuxCard 
                key={i} 
                index={i}
                to={item.path}
                className={`flex items-center justify-center p-6 border transition-all text-center min-h-[80px] ${item.label === 'Mortise Locks and Deadbolts' ? 'border-accent bg-accent/10 shadow-[0_0_20px_rgba(212,175,55,0.1)]' : 'bg-bg border-white/5 hover:border-accent group'}`}
              >
                <div className="card-content">
                  <span className={`text-[9px] font-black uppercase tracking-widest ${item.label === 'Mortise Locks and Deadbolts' ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>{item.label}</span>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Lock />, title: "Premium Mortise", desc: "Heavy-duty steel cases with anti-friction bolts and multi-point engagement for residential and commercial doors." },
              { icon: <Shield />, title: "High Security Deadbolts", desc: "Case-hardened steel deadbolts with a 1-inch throw and integrated drill-resistant cylinders." },
              { icon: <Key />, title: "Rim & Surface Locks", desc: "Specialized locking for gates, warehouse doors, and unique architectural entrances where internal mounting is not feasible." }
            ].map((item, i) => (
              <LuxCard key={i} index={i} className="p-10">
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

export default OtherLocks;
