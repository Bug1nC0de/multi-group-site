import React from 'react';
import { Train } from 'lucide-react';
import SolutionTemplate from '../../components/SolutionTemplate';

const RailSolutions = () => {
  return (
    <SolutionTemplate
      title="Rail Industry Engineering"
      subtitle="Transport & Logistics"
      description="Specialized parts, signaling systems, and maintenance services for the rail sector, ensuring the safe and efficient movement of freight and passengers."
      icon={Train}
      image="https://images.unsplash.com/photo-1474487056289-6223889efff6?auto=format&fit=crop&q=80&w=2000"
      features={[
        { title: "Locomotive Parts", desc: "Supply of critical engine components, braking systems, and electrical spares for diesel and electric locomotives." },
        { title: "Signaling & Control", desc: "Modernization of trackside signaling and centralized traffic control systems." },
        { title: "Track Maintenance", desc: "Equipment and components for permanent way maintenance and rehabilitation." },
        { title: "Rolling Stock Refurbishment", desc: "Upgrading and extending the lifecycle of wagons and coaches." }
      ]}
      benefits={[
        "OEM Quality Standards",
        "Supply Chain Reliability",
        "Technical Engineering Support",
        "Safety Critical Compliance"
      ]}
    />
  );
};

export default RailSolutions;
