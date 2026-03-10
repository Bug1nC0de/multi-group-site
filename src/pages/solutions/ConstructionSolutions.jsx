import React from 'react';
import { HardHat } from 'lucide-react';
import SolutionTemplate from '../../components/SolutionTemplate';

const ConstructionSolutions = () => {
  return (
    <SolutionTemplate
      title="Construction & Infrastructure"
      subtitle="Development & Engineering"
      description="End-to-end construction services and material supply for civil engineering projects, commercial developments, and infrastructure upgrades."
      icon={HardHat}
      image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
      features={[
        { title: "Civil Engineering", desc: "Roads, earthworks, and structural concrete projects delivered to specification." },
        { title: "Building Materials", desc: "Sourcing and supply of high-quality aggregates, cement, and structural steel." },
        { title: "Project Management", desc: "Full-spectrum oversight from site establishment to handover and close-out." },
        { title: "Safety Equipment", desc: "Provision of PPE and site safety systems to ensure regulatory compliance." }
      ]}
      benefits={[
        "CIDB Graded Capabilities",
        "On-Time Project Delivery",
        "Cost-Effective Sourcing",
        "Quality Assurance"
      ]}
    />
  );
};

export default ConstructionSolutions;
