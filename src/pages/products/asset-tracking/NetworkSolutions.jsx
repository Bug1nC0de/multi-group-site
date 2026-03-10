import LuxCard from '../../../components/LuxCard';

const NetworkSolutions = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Global Connectivity</span>
          <h1 className="text-6xl font-bold mb-6 uppercase tracking-tighter">INTERNATIONAL <br /><span className="text-gradient-gold">NETWORK SOLUTIONS</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8">
            Advanced cellular and satellite network tracking for seamless international asset visibility. No borders, no blind spots.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Roaming Capability", desc: "Automatic network switching ensures constant connectivity across different international territories." },
              { title: "Satellite Fallback", desc: "Redundant satellite links for tracking assets in remote regions where cellular coverage is unavailable." },
              { title: "256-bit Encryption", desc: "Bank-grade security for all transmitted location and status data." }
            ].map((item, i) => (
              <LuxCard key={i} index={i} className="p-10">
                <div className="card-content">
                  <h3 className="text-xl font-bold mb-4 text-accent">{item.title}</h3>
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

export default NetworkSolutions;
