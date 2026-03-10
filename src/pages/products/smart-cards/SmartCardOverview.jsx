import { CreditCard, Cpu, ShieldCheck } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const SmartCardOverview = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Secure Identification</span>
          <h1 className="text-6xl font-bold mb-6 text-white uppercase tracking-tighter">SMART CARD <br /><span className="text-gradient-gold">PRODUCT OVERVIEW</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            A comprehensive look at our secure card-based access and management solutions. 
            From simple identification to multi-application cryptographic smart cards.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <CreditCard />, 
                title: "Identification", 
                desc: "High-quality personalized ID cards with photo, employee data, and corporate branding." 
              },
              { 
                icon: <Cpu />, 
                title: "Data Encryption", 
                desc: "On-card chip technology that stores encrypted credentials, protecting against cloning." 
              },
              { 
                icon: <ShieldCheck />, 
                title: "System Integration", 
                desc: "Seamless integration with our biometric and facial recognition systems for dual-factor security." 
              }
            ].map((item, i) => (
              <LuxCard 
                key={i}
                index={i}
                className="border border-white/5"
              >
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

      <section className="section-padding">
        <div className="container">
           <div className="max-w-4xl mx-auto bg-surface border border-white/10 relative overflow-hidden">
              <div className="card-content">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <CreditCard size={200} className="text-accent" />
                </div>
                <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest text-white">THE SMART <span className="text-accent">ADVANTAGE</span></h2>
                <div className="space-y-6 relative z-10 w-full">
                   <p className="text-gray-400 leading-relaxed">
                      Our smart card solutions go beyond simple access. We provide turn-key systems for cashless vending, secure printing, and automated time and attendance recording—all accessible via a single, secure credential.
                   </p>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                      {[
                         "Mifare & DESFire EV2 support",
                         "Custom card printing & encoding",
                         "Multi-site management capability",
                         "NFC mobile phone compatibility",
                         "Legacy system migration support",
                         "Secure key management"
                      ].map((feat, i) => (
                         <li key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-gray-300 justify-start md:justify-center">
                            <div className="w-1.5 h-1.5 bg-accent rounded-none"></div> {feat}
                         </li>
                      ))}
                   </ul>
                </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default SmartCardOverview;
