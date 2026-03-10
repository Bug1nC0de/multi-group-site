import { LayoutGrid, Radio, Database } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const S2BlackBox = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Heavy Duty Mobile DVR</span>
          <h1 className="text-6xl font-bold mb-6 text-white uppercase tracking-tighter">BNSOFT EVARDY <br /><span className="text-gradient-gold">S2 BLACK BOX</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            The next generation of high-capacity mobile recording. Support for up to 8 channels, 
            allowing for complete 360-degree visibility of high-value cargo and transit assets.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <LayoutGrid />, title: "8-Channel Input", desc: "Monitor cabin, rear, sides, and blind spots simultaneously with synchronized recording." },
              { icon: <Radio />, title: "3G/4G Integration", desc: "Live-stream video and GPS data directly to your central control room in real-time." },
              { icon: <Database />, title: "Dual Storage", desc: "Supports high-capacity HDD/SSD along with SD card backup for redundant recording." }
            ].map((item, i) => (
              <LuxCard key={i} index={i} className="border-t-4 border-accent">
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

export default S2BlackBox;
