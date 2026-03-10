import LuxCard from '../../../components/LuxCard';

const MatrixKeeper = () => {
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
          <span className="section-subtitle">Heavy Duty Standalone</span>
          <h1 className="text-6xl font-bold mb-6 text-white uppercase tracking-tighter">FACE-TEK <br /><span className="text-gradient-gold">MATRIX KEEPER</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            The ultimate outdoor standalone facial recognition unit. Built for durability and high-security perimeter access control in any environment.
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
                className={`flex items-center justify-center p-6 border transition-all text-center min-h-[100px] ${item.label === 'Face-Tek Matrix Keeper' ? 'border-accent bg-accent/10 shadow-[0_0_20px_rgba(212,175,55,0.1)]' : 'bg-bg border-white/5 hover:border-accent group'}`}
              >
                <div className="card-content">
                  <span className={`text-[9px] font-black uppercase tracking-widest ${item.label === 'Face-Tek Matrix Keeper' ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>{item.label}</span>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container text-center">
          <LuxCard 
            className="inline-block bg-bg border border-white/5 max-w-3xl"
          >
            <div className="card-content">
              <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-widest text-center">Rugged Excellence</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 text-center">
                The Matrix Keeper is designed to operate in the harshest environments, featuring an IP65-rated weatherproof housing and a high-brightness display for direct sunlight visibility.
              </p>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="py-3 px-4 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest bg-accent/5 rounded-none text-center">Outdoor Rated</div>
                <div className="py-3 px-4 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest bg-accent/5 rounded-none text-center">Integrated RFID</div>
                <div className="py-3 px-4 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest bg-accent/5 rounded-none text-center">10,000 Users</div>
                <div className="py-3 px-4 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest bg-accent/5 rounded-none text-center">Tamper Alarm</div>
              </div>
            </div>
          </LuxCard>
        </div>
      </section>

    </div>
  );
};

export default MatrixKeeper;
