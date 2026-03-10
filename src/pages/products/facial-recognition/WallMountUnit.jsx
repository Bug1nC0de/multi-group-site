import LuxCard from '../../../components/LuxCard';

const WallMountUnit = () => {
  const subCategories = [
    { label: "Face-Tek Client Face", path: "/products/facial-recognition/client-face" },
    { label: "Face-Tek Matrix Keeper", path: "/products/facial-recognition/matrix-keeper" },
    { label: "Face-Tek Notiface II", path: "/products/facial-recognition/notifaceii" },
    { label: "Face-Tek Wall Mount Unit", path: "/products/facial-recognition/wall-mount" }
  ];

  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle text-white">Structural Integration</span>
          <h1 className="text-6xl font-bold mb-6 text-white uppercase tracking-tighter">FACE-TEK <br /><span className="text-gradient-gold">WALL MOUNT UNIT</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            Specialized recessed or surface-mount facial recognition units designed for seamless integration into high-end architectural wall finishes.
          </p>
        </div>
      </section>

      {/* Internal Navigation Buttons */}
      <section className="py-12 bg-surface border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {subCategories.map((item, i) => (
              <LuxCard 
                key={i} 
                index={i}
                to={item.path}
                className={`flex items-center justify-center p-6 border transition-all text-center min-h-[100px] ${item.label === 'Face-Tek Wall Mount Unit' ? 'border-accent bg-accent/10 shadow-[0_0_20px_rgba(212,175,55,0.1)]' : 'bg-bg border-white/5 hover:border-accent group'}`}
              >
                <div className="card-content">
                  <span className={`text-[9px] font-black uppercase tracking-widest ${item.label === 'Face-Tek Wall Mount Unit' ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>{item.label}</span>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Architectural Fit", desc: "Available in custom bezel finishes including brushed steel, gold, and matte black to match premium building materials." },
              { title: "Flush Mounting", desc: "Designed to be mounted flush with the wall surface for a minimalist, integrated aesthetic." },
              { title: "Power & Data", desc: "Internal management for concealed wiring and secure network termination directly within the wall structure." }
            ].map((item, i) => (
              <LuxCard key={i} index={i}>
                <div className="card-content">
                  <h3 className="text-xl font-bold mb-4 text-accent uppercase tracking-wider">{item.title}</h3>
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

export default WallMountUnit;
