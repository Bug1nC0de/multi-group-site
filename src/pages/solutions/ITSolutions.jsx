import React from 'react';
import { Cpu, Network, ShieldAlert, Laptop, Cloud } from 'lucide-react';
import SolutionTemplate from '../../components/SolutionTemplate';

const ITSolutions = () => {
  return (
    <SolutionTemplate
      title={<>Advanced <br /><span>IT Solutions</span></>}
      description="Secure network frameworks, enterprise IT architecture, and digital transformation services for modern industrial operations."
      icon={Cpu}
      image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000"
      features={[
        { title: "Network Integration", desc: "Design and deployment of secure, high-speed enterprise networking solutions.", icon: Network },
        { title: "Cybersecurity Frameworks", desc: "Comprehensive protection strategies for sensitive data and operational critical infrastructure.", icon: ShieldAlert },
        { title: "Digital Transformation", desc: "Strategic implementation of intelligent software and data-driven management systems.", icon: Laptop },
        { title: "Cloud Infrastructure", desc: "High-availability hosting and hybrid cloud environments tailored for industrial scalability.", icon: Cloud }
      ]}
      benefits={[
        "Enterprise-Level Reliability",
        "Proactive Threat Neutralization",
        "Scalable Data Architectures",
        "Real-Time Monitoring Integration"
      ]}
    />
  );
};

export default ITSolutions;
