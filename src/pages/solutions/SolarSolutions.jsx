import React from 'react';
import { Sun } from 'lucide-react';
import SolutionTemplate from '../../components/SolutionTemplate';

const SolarSolutions = () => {
  return (
    <SolutionTemplate
      title="Industrial Solar Energy"
      subtitle="Sustainable Power"
      description="Empowering businesses with renewable energy solutions that reduce operational costs and carbon footprint through advanced photovoltaic systems."
      icon={Sun}
      image="/assets/solar-hero.jpg" // Placeholder
      features={[
        { title: "Commercial PV Installations", desc: "Large-scale rooftop and ground-mounted solar arrays tailored for industrial energy loads." },
        { title: "Battery Storage Systems", desc: "High-capacity lithium-ion storage for peak shaving and backup power continuity." },
        { title: "Hybrid Inverters", desc: "Intelligent power management systems integrating solar, grid, and generator inputs." },
        { title: "Energy Audits", desc: "Comprehensive analysis of consumption patterns to optimize system sizing and ROI." }
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
