import React from 'react';
import { Train, Settings, Shield, Truck, Wrench } from 'lucide-react';
import SolutionTemplate from '../../components/SolutionTemplate';

const RailSolutions = () => {
  return (
    <SolutionTemplate
      title={<>Rail Industry <br /><span>Parts & Logistics</span></>}
      description="We provide mission-critical locomotive components and signaling infrastructure, ensuring safety and operational efficiency across the rail network."
      icon={Train}
      image="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=2000"
      features={[
        { title: "Locomotive Components", desc: "High-precision mechanical parts engineered for heavy-duty transit and reliability.", icon: Settings },
        { title: "Signaling Systems", desc: "Advanced signaling infrastructure designed to optimize traffic flow and ensure network safety.", icon: Shield },
        { title: "Specialized Logistics", desc: "End-to-end management for transit hardware and specialized rail logistics support.", icon: Truck },
        { title: "Rolling Stock Maintenance", desc: "Complete lifecycle support and refurbishment for aging locomotive and wagon fleets.", icon: Wrench }
      ]}
      benefits={[
        "High-Durability Engineering",
        "SABS Compliant Components",
        "Optimized Transit Safety",
        "Strategic SADC Supply Chain"
      ]}
    />
  );
};

export default RailSolutions;
