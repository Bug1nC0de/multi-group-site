import { BellRing, Radio, ShieldAlert, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import LuxCard from '../../../components/LuxCard';

const WirelessAlarms = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Intrusion Detection</span>
          <h1 className="text-6xl font-bold mb-6 uppercase tracking-tighter text-white">WIRELESS <br /><span className="text-gradient-gold">ALARM SYSTEMS</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            State-of-the-art wireless security networks. Rapid installation, tamper-proof connectivity, and immediate smartphone alerts.
          </p>
        </div>
      </section>

      {/* Internal Navigation Buttons */}
      <section className="py-12 bg-surface border-y border-white/5">
        <div className="container text-center">
          <Link 
            to="/products/alarms/overview"
            className="inline-flex flex-col items-center justify-center p-10 bg-bg border border-accent/20 hover:border-accent group transition-all min-w-[280px]"
          >
            <BarChart className="text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-white">Product Overview</span>
          </Link>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
             <LuxCard className="p-2 bg-bg border border-white/5 rounded overflow-hidden aspect-video">
                <div className="card-content">
                  <img src="https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80&w=1000" alt="Wireless Alarm Hub" className="w-full h-full object-cover opacity-60" />
                </div>
             </LuxCard>
             <div className="space-y-6">
                <h2 className="text-4xl font-bold uppercase tracking-tighter text-white">RAPID <span className="text-accent">DEPLOYMENT</span></h2>
                <p className="text-gray-400 leading-relaxed">
                   Zero wiring means zero structural damage. Our wireless networks can be fully deployed in a fraction of the time required for traditional wired systems, without compromising on signal integrity.
                </p>
             </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Radio />, title: "Jamming Detection", desc: "Intelligent frequency-hopping technology that detects and bypasses signal interference attempts." },
              { icon: <ShieldAlert />, title: "Zero Wiring", desc: "Clean, non-invasive installation preserving the architectural integrity of your property." },
              { icon: <BellRing />, title: "Instant Response", desc: "Direct link to our world-class control room and immediate mobile app notifications." }
            ].map((item, i) => (
              <LuxCard key={i} index={i} className="p-10">
                <div className="card-content">
                  <div className="text-accent mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
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

export default WirelessAlarms;
