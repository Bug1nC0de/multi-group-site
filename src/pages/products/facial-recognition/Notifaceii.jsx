import { ScanFace, Bell, Wifi } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const Notifaceii = () => {
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
          <span className="section-subtitle">Networked Intelligence</span>
          <h1 className="text-6xl font-bold mb-6 text-white uppercase tracking-tighter">FACE-TEK <br /><span className="text-gradient-gold">NOTIFACE II</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            Advanced networked facial recognition with real-time push notifications and mobile management. Stay informed of every entry attempt with visual logs.
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
                className={`flex items-center justify-center p-6 border transition-all text-center min-h-[100px] ${item.label === 'Face-Tek Notiface II' ? 'bg-accent/10 border-accent shadow-[0_0_20px_rgba(212,175,55,0.1)]' : 'bg-bg border-white/5 hover:border-accent group'}`}
              >
                <div className="card-content">
                  <span className={`text-[9px] font-black uppercase tracking-widest ${item.label === 'Face-Tek Notiface II' ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>{item.label}</span>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold uppercase tracking-tighter text-white text-center lg:text-left">SMART <span className="text-accent">ALERTS</span></h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-6 bg-bg border border-white/5 text-left">
                  <Bell className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Instant Notifications</h4>
                    <p className="text-sm text-gray-400">Receive snapshots and alerts on your smartphone for unauthorized or recognized entries.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-6 bg-bg border border-white/5 text-left">
                  <Wifi className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Cloud Management</h4>
                    <p className="text-sm text-gray-400">Manage user profiles and access logs from anywhere in the world via secure web portal.</p>
                  </div>
                </div>
              </div>
            </div>
            <LuxCard className="bg-bg border border-white/5 shadow-2xl">
               <div className="card-content">
                  <div className="aspect-square bg-surface border border-accent/10 rounded-none flex items-center justify-center w-full">
                    <ScanFace size={100} className="text-accent/20" />
                  </div>
               </div>
            </LuxCard>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Notifaceii;
