import React from 'react';
import { Tractor, Shield, Beaker, Settings, HeartPulse } from 'lucide-react';
import SolutionTemplate from '../../components/SolutionTemplate';

const AgricultureSolutions = () => {
  return (
    <SolutionTemplate
      title="Agricultural Technology"
      description="Innovative solutions for the agricultural sector, ranging from livestock protection to automated feeding systems and nutritional supplements."
      icon={Tractor}
      image="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2000"
      features={[
        { title: "Livestock Protection", desc: "Security tagging, tracking, and perimeter fencing solutions to prevent stock theft.", icon: Shield },
        { title: "Nutritional Supplements", desc: "Supply of high-grade feed additives and vitamins for optimal animal health.", icon: Beaker },
        { title: "Automated Feeding", desc: "Smart systems for precise feed distribution and consumption monitoring.", icon: Settings },
        { title: "Health Management", desc: "Veterinary supplies and hygiene products for bio-security on farms.", icon: HeartPulse }
      ]}
      benefits={[
        "Increased Yield",
        "Asset Protection",
        "Animal Welfare focus",
        "Supply Chain Traceability"
      ]}
    />
  );
};

export default AgricultureSolutions;
