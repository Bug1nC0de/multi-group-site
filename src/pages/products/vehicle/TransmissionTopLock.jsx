import { Lock, ShieldCheck, Settings } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const TransmissionTopLock = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Gear Shifter Protection</span>
          <h1 className="text-6xl font-bold mb-6 text-white tracking-tighter">Top Lock <br /><span className="text-gradient-gold">Transmission Lock</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            The visible deterrent. A high-security external lock that physically prevents the gear shifter from moving out of the park or neutral position.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Lock />, title: "External Access", desc: "Easy to engage and disengage for the driver while providing a clear warning to potential intruders." },
              { icon: <ShieldCheck />, title: "Case-Hardened", desc: "Constructed from hardened steel that resists all common hand tools and cutting equipment." },
              { icon: <Settings />, title: "Mul-T-Lock Tech", desc: "Integrated with patented Interactive®+ cylinders for world-class key control." }
            ].map((item, i) => (
              <LuxCard key={i} index={i}>
                <div className="card-content">
                  <div className="text-accent mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 tracking-wider">{item.title}</h3>
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

export default TransmissionTopLock;
