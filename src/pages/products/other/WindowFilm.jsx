import { Disc, ShieldAlert, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import LuxCard from '../../../components/LuxCard';

const WindowFilm = () => {
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
          <span className="section-subtitle">Shatter Proofing</span>
          <h1 className="text-6xl font-bold mb-6 text-white uppercase tracking-tighter">SECURITY <br /><span className="text-gradient-gold">WINDOW FILM</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            Turn standard glass into a high-security barrier. Prevent smash-and-grab attacks and 
            slow down forced entry attempts with structural reinforcement.
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
                className={`flex items-center justify-center p-6 border transition-all text-center min-h-[80px] ${item.label === 'Security Window Film' ? 'bg-accent/10 border-accent shadow-[0_0_20px_rgba(212,175,55,0.1)]' : 'bg-bg border-white/5 hover:border-accent group'}`}
              >
                <span className={`text-[9px] font-black uppercase tracking-widest ${item.label === 'Security Window Film' ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldAlert />, title: "Smash & Grab", desc: "Heavy-duty 100-micron polyester film that holds glass shards together upon impact, preventing instant access." },
              { icon: <Zap />, title: "Intrusion Delay", desc: "Significantly increases the time and effort required to breach glass, serving as a powerful deterrent." },
              { icon: <Disc />, title: "Optical Clarity", desc: "Provides high-level security without distorting views or affecting the architectural look of the building." }
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

export default WindowFilm;
