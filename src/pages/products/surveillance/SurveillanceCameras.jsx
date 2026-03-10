import { Video, Sun, Moon } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const SurveillanceCameras = () => {
  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Visual Capture</span>
          <h1 className="text-6xl font-bold mb-6 text-white uppercase tracking-tighter">SURVEILLANCE <br /><span className="text-gradient-gold">CAMERAS</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            From covert internal units to long-range thermal perimiter sensors. Our camera range 
            provides the optical precision required for absolute security.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Sun />, title: "Starlight Tech", desc: "Full-color imaging in near-total darkness, capturing crucial details where standard cameras fail." },
              { icon: <Video />, title: "4K Resolution", desc: "Ultra-high-definition sensors that allow for forensic digital zooming without losing clarity." },
              { icon: <Moon />, title: "Thermal Sensors", desc: "Detect heat signatures through smoke, fog, and foliage for high-security perimeter protection." }
            ].map((item, i) => (
              <LuxCard 
                key={i}
                index={i}
                className="group"
              >
                <div className="card-content">
                  <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
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

export default SurveillanceCameras;
