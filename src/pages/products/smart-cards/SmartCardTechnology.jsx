import { CreditCard, Cpu, ShieldCheck, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import LuxCard from '../../../components/LuxCard';

const SmartCardTechnology = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Secure Identification</span>
          <h1 className="text-6xl font-bold mb-6 uppercase tracking-tighter text-white">SMART CARD <br /><span className="text-gradient-gold">TECHNOLOGY</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            Advanced cryptographic smart cards for secure access control, data encryption, and integrated workforce management solutions.
          </p>
        </div>
      </section>

      {/* Internal Navigation Buttons */}
      <section className="py-12 bg-surface border-y border-white/5">
        <div className="container text-center">
          <Link 
            to="/products/smart-cards/overview"
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
             <div className="space-y-6">
                <h2 className="text-4xl font-bold uppercase tracking-tighter text-white">CRYPTOGRAPHIC <span className="text-accent">SECURITY</span></h2>
                <p className="text-gray-400 leading-relaxed">
                   Our smart cards utilize high-level encryption standards to ensure that user credentials cannot be cloned or intercepted. Integrated with Mifare and DESFire EV2 technologies.
                </p>
             </div>
             <LuxCard className="p-2 bg-bg border border-white/5 rounded overflow-hidden aspect-video">
                <div className="card-content">
                  <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000" alt="Smart Card Technology" className="w-full h-full object-cover opacity-60" />
                </div>
             </LuxCard>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <CreditCard />, title: "Contactless Entry", desc: "High-frequency RFID cards for rapid and secure entry without physical contact." },
              { icon: <Cpu />, title: "Encrypted Data", desc: "On-card encryption ensures user credentials cannot be cloned or intercepted." },
              { icon: <ShieldCheck />, title: "Multi-App Support", desc: "Use a single card for access control, cashless vending, and secure printing." }
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

export default SmartCardTechnology;
