import React from 'react';
import { Zap, Sun, Battery, Activity } from 'lucide-react';
import SolutionTemplate from '../../components/SolutionTemplate';

const EnergySolutions = () => {
  return (
    <SolutionTemplate
      title="Integrated Energy Solutions"
      subtitle="Power & Sustainability"
      description="Multi Group Inc provides comprehensive energy infrastructure, from high-voltage electrical engineering to industrial-scale solar integration, ensuring stable and sustainable power for mission-critical operations."
      icon={Zap}
      image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2000"
      features={[
        { 
          title: "High-Voltage Engineering", 
          desc: "Expert design and construction of substations, transformers, and industrial power distribution networks.",
          icon: <Zap size={24} />
        },
        { 
          title: "Industrial Solar PV", 
          desc: "Large-scale photovoltaic installations designed to reduce grid dependency and operational overhead.",
          icon: <Sun size={24} />
        },
        { 
          title: "BESS Integration", 
          desc: "Battery Energy Storage Systems for peak shaving, load shifting, and seamless backup power continuity.",
          icon: <Battery size={24} />
        },
        { 
          title: "Power Quality Monitoring", 
          desc: "Advanced diagnostics and real-time monitoring to ensure system stability and equipment longevity.",
          icon: <Activity size={24} />
        }
      ]}
      benefits={[
        "Total Operational Continuity",
        "Significant Cost Reduction",
        "SADC Region Compliance",
        "24/7 Technical Support"
      ]}
    />
  );
};

export default EnergySolutions;
