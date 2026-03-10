import { Network, Wifi } from 'lucide-react';

const IPSurveillance = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">High Definition</span>
          <h1 className="text-6xl font-bold mb-6">IP <br /><span className="text-gradient-gold">SURVEILLANCE</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8">
            Digital security for a connected world. High-resolution IP cameras with intelligent analytics and global remote access.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold uppercase tracking-tighter">DIGITAL <span className="text-accent">CLARITY</span></h2>
              <p className="text-gray-400 leading-relaxed">
                Move beyond the limitations of analogue. Our IP solutions provide 4K resolution, advanced motion detection, and seamless integration with your existing network infrastructure.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "Power over Ethernet (PoE)", desc: "Single cable installation for both power and data transmission." },
                  { title: "Remote Cloud Access", desc: "Monitor your property from anywhere via secure encrypted streams." },
                  { title: "Smart Analytics", desc: "Line crossing, object removal, and intrusion detection alerts." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-bg border border-white/5 rounded-none text-center">
                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative p-8 bg-surface border border-white/5 rounded-none shadow-2xl flex items-center justify-center">
               <Network size={300} className="text-accent opacity-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
               <div className="relative z-10 grid grid-cols-2 gap-4 w-full">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="aspect-video bg-bg border border-accent/20 rounded-none flex items-center justify-center">
                       <Wifi className="text-accent/20" />
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IPSurveillance;
