import { ShieldCheck, Settings, Cpu } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const RuggedMobileDVR = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Extreme Environments</span>
          <h1 className="text-6xl font-bold mb-6 text-white uppercase tracking-tighter">RUGGED <br /><span className="text-gradient-gold">MOBILE DVR</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            Military-grade recording hardware designed for mining, construction, and heavy industrial vehicles. Unmatched durability in the most demanding conditions.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck />, title: "Shock Proof", desc: "Military standard 810G rated for impact and continuous high-intensity vibration." },
              { icon: <Settings />, title: "Thermal Control", desc: "Passive and active cooling systems allow for operation in temperatures exceeding 70°C." },
              { icon: <Cpu />, title: "Wide Voltage", desc: "Stable operation from 8V to 36V DC, protecting electronics from vehicle power surges." }
            ].map((item, i) => (
              <LuxCard key={i} index={i} className="border-l-4 border-l-accent">
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

export default RuggedMobileDVR;
