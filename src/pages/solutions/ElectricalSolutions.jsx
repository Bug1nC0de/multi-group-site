import React from 'react';
import { Zap } from 'lucide-react';
import SolutionTemplate from '../../components/SolutionTemplate';

const ElectricalSolutions = () => {
  return (
    <SolutionTemplate
      title="High Voltage Electrical Systems"
      subtitle="Power & Infrastructure"
      description="Delivering critical high-voltage solutions, substation maintenance, and industrial electrification projects with a focus on safety and reliability."
      icon={Zap}
      image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2000"
      features={[
        { title: "Substation Construction", desc: "Turnkey design and build of high-voltage substations for municipal and industrial applications." },
        { title: "Transformer Maintenance", desc: "Comprehensive oil analysis, testing, and refurbishment of power transformers." },
        { title: "Switchgear Solutions", desc: "Installation and commissioning of MV/HV switchgear for optimized power distribution." },
        { title: "Cable Fault Location", desc: "Precision diagnostics and repair of underground and overhead power transmission lines." }
      ]}
      benefits={[
        "Certified HV Technicians",
        "Strict Safety Compliance",
        "Minimized Downtime",
        "Grid Stability Enhancement"
      ]}
    />
  );
};

export default ElectricalSolutions;
