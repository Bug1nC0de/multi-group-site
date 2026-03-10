import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Key, Fingerprint, Truck, Eye, Settings, ScanFace, MapPin, CreditCard, BellRing, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LuxCard from '../components/LuxCard';

const categories = [
  {
    icon: <Key size={32} />,
    title: "Mul-T-Lock High Security Locking",
    path: "/products/multlock/cylinders",
    desc: "Patented cylinders, existing system upgrades, and heavy-duty padlocks."
  },
  {
    icon: <Fingerprint size={32} />,
    title: "Access Control Systems",
    path: "/products/access-control",
    desc: "Biometric access control, intelligent keys, and time recording units."
  },
  {
    icon: <ScanFace size={32} />,
    title: "Facial Recognition Systems",
    path: "/products/facial-recognition",
    desc: "Touchless 3D facial mapping for secure residential and commercial entry."
  },
  {
    icon: <MapPin size={32} />,
    title: "Intelligent Asset Tracking",
    path: "/products/asset-tracking",
    desc: "International network-based monitoring for fleets and high-value cargo."
  },
  {
    icon: <CreditCard size={32} />,
    title: "Smart Card Technology",
    path: "/products/smart-cards",
    desc: "Secure identification, integration, and data encryption solutions."
  },
  {
    icon: <Eye size={32} />,
    title: "Surveillance Systems",
    path: "/products/surveillance",
    desc: "IP and Analog CCTV solutions, DVRs, and specialized Black Box units."
  },
  {
    icon: <Settings size={32} />,
    title: "Time & Attendance Systems",
    path: "/products/time-attendance",
    desc: "Integrated recording units and workforce management software."
  },
  {
    icon: <Truck size={32} />,
    title: "Vehicle Security",
    path: "/products/vehicle-security",
    desc: "World-class gear locks, container locks, and wheel immobilization."
  },
  {
    icon: <BellRing size={32} />,
    title: "Wireless Alarm Systems",
    path: "/products/alarms",
    desc: "Advanced wireless intrusion detection with signal jamming protection."
  },
  {
    icon: <Shield size={32} />,
    title: "Other Products",
    path: "/products/other",
    desc: "High security steel doors, safes, cabinets, and security window film."
  }
];

const Products = () => {
  return (
    <div className="bg-bg min-h-screen">
      <section className="pt-24 pb-32 hero-pattern relative overflow-hidden bg-bg">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[160px] pointer-events-none"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-primary"></div>
              <span className="text-primary font-black text-[10px] uppercase tracking-[0.8em]">Tactical Catalog</span>
            </div>
            <h1 className="section-title text-6xl md:text-8xl lg:text-9xl mb-0 tracking-tighter leading-[0.85]">
              Security <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-main to-text-main/20">Hierarchy</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-64 bg-bg relative">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {categories.map((cat, i) => (
              <LuxCard 
                key={cat.title}
                index={i}
                className="group relative"
              >
                <div className="card-content">
                  <div className="icon-3d-wrapper mb-10">
                    {cat.icon}
                  </div>
                  
                  <div className="mb-10 w-full">
                    <span className="text-[10px] text-primary font-black uppercase tracking-[0.4em] mb-4 block opacity-60">Phase 0{i + 1} System</span>
                    <h3 className="text-2xl font-bold text-text-main mb-4 tracking-tight group-hover:text-primary transition-colors leading-tight">{cat.title}</h3>
                    <p className="text-text-muted text-base leading-relaxed font-medium line-clamp-3">{cat.desc}</p>
                  </div>

                  <div className="pt-10 border-t border-border w-full">
                    <Link to={cat.path} className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] uppercase text-primary group/link no-underline">
                      Review Protocol 
                      <div className="w-8 h-px bg-primary group-hover/link:w-16 transition-all duration-500"></div>
                      <ChevronRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
