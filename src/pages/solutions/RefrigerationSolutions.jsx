import React from 'react';
import { Snowflake, Box, Wind, Droplets, MonitorDot } from 'lucide-react';
import SolutionTemplate from '../../components/SolutionTemplate';
import refrigerationProfile from '../../assets/docs/AC Profile-Multi Group Inc - HVAC and Refrigeration.pdf';
import refrigerationBanner from '../../assets/banners/refrigeration-banner.jpg';

const RefrigerationSolutions = () => {
  return (
    <SolutionTemplate
      title="Industrial Refrigeration"
      description="Advanced cooling and climate control solutions for food processing, pharmaceuticals, and cold storage logistics."
      icon={Snowflake}
      image={refrigerationBanner}
      pdfLink={refrigerationProfile}
      pdfLabel="View HVAC & Refrigeration Profile"
      hideHeroText={true}
      bannerMode={true}
      features={[
        { title: "Cold Storage Facilities", desc: "Design and installation of large-scale freezer and chiller rooms with precise temperature control.", icon: Box },
        { title: "Commercial HVAC", desc: "Energy-efficient heating, ventilation, and air conditioning for industrial complexes.", icon: Wind },
        { title: "Ammonia Systems", desc: "Specialized maintenance and installation of industrial ammonia refrigeration plants.", icon: Droplets },
        { title: "Remote Monitoring", desc: "IoT-enabled sensors for 24/7 temperature tracking and alarm notifications.", icon: MonitorDot }
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
