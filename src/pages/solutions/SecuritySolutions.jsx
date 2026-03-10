import React from 'react';
import { Shield } from 'lucide-react';
import SolutionTemplate from '../../components/SolutionTemplate';

const SecuritySolutions = () => {
  return (
    <SolutionTemplate
      title="Comprehensive Security Infrastructure"
      subtitle="Defense & Protection"
      description="From high-security physical barriers to advanced biometric surveillance, we engineer defense layers that adapt to critical risk environments across the SADC region."
      icon={Shield}
      image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2000"
      features={[
        { title: "Physical Access Control", desc: "Mul-T-Lock high-security cylinders, padlocks, and steel doors designed to withstand forced entry and manipulation." },
        { title: "Biometric & Electronic Systems", desc: "Advanced facial recognition, fingerprint scanning, and smart card technologies for precise identity management." },
        { title: "Surveillance Networks", desc: "AI-powered CCTV, rugged mobile DVRs for fleets, and black box recorders for comprehensive visual intelligence." },
        { title: "Asset Tracking", desc: "Real-time GPS and RF tracking for high-value cargo, vehicle fleets, and mobile assets." }
      ]}
      benefits={[
        "SABS Approved Standards",
        "Seamless Physical-Digital Integration",
        "24/7 Monitoring Capabilities",
        "Rapid Emergency Response Protocols"
      ]}
    />
  );
};

export default SecuritySolutions;
