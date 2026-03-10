import { Box, Truck, Shield, HardDrive } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const BlackBoxUnits = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Mobile DVR</span>
          <h1 className="text-6xl font-bold mb-6">BLACK BOX <br /><span className="text-gradient-gold">SURVEILLANCE</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8">
            Specialized ruggedized recording units designed for extreme mobility and security. The S1, S2, and Mobi units are built for the toughest environments.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                title: "S1 Black Box", 
                icon: <Box />, 
                desc: "Primary mobile DVR for commercial vehicles. Compact, vibration-proof, and tamper-resistant." 
              },
              { 
                title: "S2 Heavy Duty", 
                icon: <Shield />, 
                desc: "High-capacity unit for long-haul logistics. Supports up to 8 channels with GPS tracking." 
              },
              { 
                title: "Mobi Series", 
                icon: <Truck />, 
                desc: "Rapid deployment temporary surveillance. Ideal for construction sites and events." 
              }
            ].map((unit, i) => (
              <LuxCard 
                key={i}
                index={i}
                className="border-t-4 border-accent"
              >
                <div className="card-content">
                  <div className="text-accent mb-6">{unit.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{unit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{unit.desc}</p>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-accent tracking-widest justify-center">
                    <HardDrive size={14} /> SSD STORAGE READY
                  </div>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default BlackBoxUnits;
