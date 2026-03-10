import { ShieldAlert, ShieldCheck, Fingerprint, Crosshair, KeyRound, Layout, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LuxCard from './LuxCard';

const features = [
  {
    icon: <ShieldAlert size={32} strokeWidth={1.5} />,
    title: "14-Point Locking",
    description: "Advanced high-tensile steel deadbolts that engage into all four sides of the reinforced mono-block frame."
  },
  {
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: "Reinforced Steel",
    description: "Handcrafted from 2mm alloy steel plates with internal structural mesh to resist all forced entry attempts."
  },
  {
    icon: <Fingerprint size={32} strokeWidth={1.5} />,
    title: "Integrated Access",
    description: "Seamlessly combine biometrics, facial recognition, and smart key systems for modern facility management."
  },
  {
    icon: <Crosshair size={32} strokeWidth={1.5} />,
    title: "Ballistic Protection",
    description: "Engineered core options providing Level 3-4 bullet resistance for high-risk residential and corporate zones."
  },
  {
    icon: <KeyRound size={32} strokeWidth={1.5} />,
    title: "Patented Tech",
    description: "Equipped with world-class Mul-T-Lock Interactive®+ cylinders featuring unique telescopic pin technology."
  },
  {
    icon: <Layout size={32} strokeWidth={1.5} />,
    title: "Custom Finishes",
    description: "Bespoke architectural finishes that complement your property's aesthetic without compromising on safety."
  }
];

const Features = () => {
  return (
    <section className="section-padding bg-bg hero-pattern relative">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="section-subtitle mx-auto">Technical Superiority</span>
          <h2 className="section-title">The Standards of <span>Absolute Protection</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
          {features.map((feature, index) => (
            <LuxCard 
              key={index}
              index={index}
              className="group relative overflow-hidden"
            >
              <div className="card-content">
                <div className="icon-3d-wrapper mb-8">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-text-muted text-base leading-relaxed mb-8 font-medium">{feature.description}</p>
                <Link to="/mul-t-lock" className="text-primary font-black text-[11px] flex items-center gap-4 tracking-[0.4em] group/link">
                  System Details 
                  <div className="w-8 h-px bg-primary group-hover/link:w-16 transition-all duration-500"></div>
                  <ChevronRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </LuxCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
