import React from 'react';
import { Snowflake } from 'lucide-react';
import SolutionTemplate from '../../components/SolutionTemplate';

const RefrigerationSolutions = () => {
  return (
    <SolutionTemplate
      title="Industrial Refrigeration"
      subtitle="Cold Chain Management"
      description="Advanced cooling and climate control solutions for food processing, pharmaceuticals, and cold storage logistics."
      icon={Snowflake}
      image="/assets/fridge-hero.jpg" // Placeholder
      features={[
        { title: "Cold Storage Facilities", desc: "Design and installation of large-scale freezer and chiller rooms with precise temperature control." },
        { title: "Commercial HVAC", desc: "Energy-efficient heating, ventilation, and air conditioning for industrial complexes." },
        { title: "Ammonia Systems", desc: "Specialized maintenance and installation of industrial ammonia refrigeration plants." },
        { title: "Remote Monitoring", desc: "IoT-enabled sensors for 24/7 temperature tracking and alarm notifications." }
      ]}
      benefits={[
        "HACCP Compliance",
        "Energy Efficiency Optimization",
        "Product Integrity Assurance",
        "Rapid Breakdown Response"
      ]}
    />
  );
};

export default RefrigerationSolutions;
