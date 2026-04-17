import React from 'react';
import { Sun, Battery, LayoutPanelLeft, Search } from 'lucide-react';
import SolutionTemplate from '../../components/SolutionTemplate';

const SolarSolutions = () => {
  return (
    <SolutionTemplate
      title="Industrial Solar Energy"
      description="Empowering businesses with renewable energy solutions that reduce operational costs and carbon footprint through advanced photovoltaic systems."
      icon={Sun}
      image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=2000"
      features={[
        { title: "Commercial PV Installations", desc: "Large-scale rooftop and ground-mounted solar arrays tailored for industrial energy loads.", icon: LayoutPanelLeft },
        { title: "Battery Storage Systems", desc: "High-capacity lithium-ion storage for peak shaving and backup power continuity.", icon: Battery },
        { title: "Hybrid Inverters", desc: "Intelligent power management systems integrating solar, grid, and generator inputs.", icon: Sun },
        { title: "Energy Audits", desc: "Comprehensive analysis of consumption patterns to optimize system sizing and ROI.", icon: Search }
      ]}
      benefits={[
        "Reduced Energy Costs",
        "Energy Independence",
        "Carbon Tax Benefits",
        "Long-term Warranty Support"
      ]}
    />
  );
};

export default SolarSolutions;
