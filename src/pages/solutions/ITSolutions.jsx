import React from 'react';
import { Cpu } from 'lucide-react';
import SolutionTemplate from '../../components/SolutionTemplate';

const ITSolutions = () => {
  return (
    <SolutionTemplate
      title="Enterprise IT Architectures"
      subtitle="Digital Transformation"
      description="Scalable, secure, and robust IT infrastructure solutions designed to drive operational efficiency and data integrity for modern enterprises."
      icon={Cpu}
      image="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2000"
      features={[
        { title: "Network Integration", desc: "End-to-end network design, cabling, and implementation for high-speed, reliable connectivity." },
        { title: "Cybersecurity Frameworks", desc: "Advanced threat detection, firewall management, and data encryption to protect critical business intelligence." },
        { title: "Data Center Solutions", desc: "Server deployment, cooling systems, and power management for high-availability computing environments." },
        { title: "Cloud Migration", desc: "Strategic planning and execution for seamless transition to hybrid and cloud-native architectures." }
      ]}
      benefits={[
        "99.9% Uptime Guarantee",
        "Scalable Infrastructure",
        "Proactive Threat Monitoring",
        "Disaster Recovery Compliance"
      ]}
    />
  );
};

export default ITSolutions;
