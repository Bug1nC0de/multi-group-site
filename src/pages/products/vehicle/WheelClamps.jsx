import LuxCard from '../../../components/LuxCard';

const WheelClamps = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Absolute Immobilisation</span>
          <h1 className="text-6xl font-bold mb-6 text-white tracking-tighter">Heavy Duty <br /><span className="text-gradient-gold">Wheel Clamps</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            Professional-grade wheel immobilization for cars, trailers, and heavy trucks. A visible and structural barrier against unauthorized vehicle movement.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container text-center">
          <LuxCard 
            className="inline-block bg-bg border border-white/5 max-w-3xl"
          >
            <div className="card-content">
              <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-widest text-center">Structural Defense</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 text-center">
                Our wheel clamps are manufactured from high-grade structural steel and feature a specialized shroud that protects the wheel nuts from removal while the clamp is in place.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                {["Adjustable Size", "Steel Shrouded", "Mul-T-Lock Integrated", "Weatherproof", "High Visibility"].map((item, i) => (
                  <div key={i} className="py-3 px-4 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest bg-accent/5 rounded-none text-center">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </LuxCard>
        </div>
      </section>

    </div>
  );
};

export default WheelClamps;
