import { Zap, ShieldAlert } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const MobiIBlackBox = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Rapid Deployment</span>
          <h1 className="text-6xl font-bold mb-6 text-white uppercase tracking-tighter">MOBI-I <br /><span className="text-gradient-gold">BLACK BOX</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            Highly versatile mobile surveillance unit for temporary events, construction sites, and emergency response teams. Deploy professional recording in minutes.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <LuxCard className="bg-bg border border-white/5">
              <div className="card-content">
                <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-widest text-center">Portable Intelligence</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 text-center">
                  The Mobi-i is a self-contained unit that includes everything needed for remote monitoring: recording hardware, internal battery, and wireless data uplink.
                </p>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="py-3 px-4 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest bg-accent/5 rounded-none text-center">Magnetic Mount</div>
                  <div className="py-3 px-4 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest bg-accent/5 rounded-none text-center">Wi-Fi Direct</div>
                  <div className="py-3 px-4 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest bg-accent/5 rounded-none text-center">Internal Battery</div>
                  <div className="py-3 px-4 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest bg-accent/5 rounded-none text-center">GPS Enabled</div>
                </div>
              </div>
            </LuxCard>
            <div className="space-y-8">
               <div className="flex gap-6 items-start">
                  <div className="bg-accent/10 p-3 rounded-none text-accent"><Zap /></div>
                  <div className="text-left">
                     <h4 className="font-bold text-white mb-1 uppercase tracking-wider">Zero Setup</h4>
                     <p className="text-sm text-gray-400">Power on and start recording immediately. No complex cabling required.</p>
                  </div>
               </div>
               <div className="flex gap-6 items-start">
                  <div className="bg-accent/10 p-3 rounded-none text-accent"><ShieldAlert /></div>
                  <div className="text-left">
                     <h4 className="font-bold text-white mb-1 uppercase tracking-wider">Tamper Detection</h4>
                     <p className="text-sm text-gray-400">Internal accelerometers detect and report if the unit is moved or opened.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MobiIBlackBox;
