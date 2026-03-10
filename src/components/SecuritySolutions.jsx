import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Scan, Activity, ShieldCheck } from 'lucide-react';
import LuxCard from './LuxCard';

const solutions = [
  {
    icon: <Camera className="text-white" size={24} />,
    title: "CCTV and Access Control",
    desc: "Monitor and restrict access with advanced surveillance and control systems.",
    color: "bg-blue-600"
  },
  {
    icon: <Scan className="text-white" size={24} />,
    title: "X-ray Machines",
    desc: "Enhance security screening with state-of-the-art detection technology.",
    color: "bg-purple-600"
  },
  {
    icon: <Activity className="text-white" size={24} />,
    title: "Fiber Optic Systems",
    desc: "Ensure reliable data transmission with high-speed fiber optic infrastructure.",
    color: "bg-green-600"
  },
  {
    icon: <ShieldCheck className="text-white" size={24} />,
    title: "Integrated Security",
    desc: "Combine multiple systems for comprehensive protection and monitoring.",
    color: "bg-orange-600"
  }
];

const SecuritySolutions = () => {
  return (
    <section className="section-padding bg-bg-offset overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-text-main mb-6 uppercase tracking-tight">
            Comprehensive Security Industry Solutions
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Enhanced safety through advanced security solutions tailored to meet corporate objectives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => (
            <LuxCard key={index} index={index}>
              <div className="card-content">
                <div className={`w-12 h-12 ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-text-main mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </LuxCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySolutions;

