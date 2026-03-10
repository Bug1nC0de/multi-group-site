import { Truck, ShieldAlert, Anchor } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const ContainerLocks = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Logistics Protection</span>
          <h1 className="text-6xl font-bold mb-6">Cargo & <br /><span className="text-gradient-gold">Container Locks</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8">
            High-security hasp and padlock solutions specifically engineered for shipping containers, trailers, and heavy-duty logistics.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                title: "Kingpin Locks", 
                desc: "Prevents unauthorized coupling of semi-trailers by physically locking the fifth-wheel kingpin.", 
                icon: <Anchor /> 
              },
              { 
                title: "Trailer Ring Locks", 
                desc: "Specialized circular locks for heavy trailer hitch points, resistant to brute force and leverage attacks.", 
                icon: <Truck /> 
              },
              { 
                title: "Container Hasps", 
                desc: "Custom-fitted steel hasps that shroud the padlock, protecting the shackle from bolt-cutters.", 
                icon: <ShieldAlert /> 
              }
            ].map((item, i) => (
              <LuxCard 
                key={i}
                index={i}
                className="border border-white/5 hover:border-accent group"
              >
                <div className="card-content">
                  <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
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

export default ContainerLocks;
