import React from 'react';
import { Tractor } from 'lucide-react';
import SolutionTemplate from '../../components/SolutionTemplate';

const AgricultureSolutions = () => {
  return (
    <SolutionTemplate
      title="Agricultural Technology"
      subtitle="Farming & Production"
      description="Innovative solutions for the agricultural sector, ranging from livestock protection to automated feeding systems and nutritional supplements."
      icon={Tractor}
      image="/assets/agri-hero.jpg" // Placeholder
      features={[
        { title: "Livestock Protection", desc: "Security tagging, tracking, and perimeter fencing solutions to prevent stock theft." },
        { title: "Nutritional Supplements", desc: "Supply of high-grade feed additives and vitamins for optimal animal health." },
        { title: "Automated Feeding", desc: "Smart systems for precise feed distribution and consumption monitoring." },
        { title: "Health Management", desc: "Veterinary supplies and hygiene products for bio-security on farms." }
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
