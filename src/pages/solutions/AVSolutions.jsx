import React from 'react';
import { Monitor } from 'lucide-react';
import SolutionTemplate from '../../components/SolutionTemplate';

const AVSolutions = () => {
  return (
    <SolutionTemplate
      title="Audio Visual Integration"
      subtitle="Communication & Display"
      description="State-of-the-art AV solutions for boardrooms, command centers, and public spaces, enhancing communication and visual engagement."
      icon={Monitor}
      image="/assets/av-hero.jpg" // Placeholder
      features={[
        { title: "Video Conferencing", desc: "Seamless unified communications systems for hybrid work environments." },
        { title: "Digital Signage", desc: "Dynamic display networks for corporate branding, wayfinding, and information distribution." },
        { title: "Control Rooms", desc: "Mission-critical video walls and processing systems for security and operations centers." },
        { title: "Smart Automation", desc: "Integrated control of lighting, audio, and visual systems via touch panels." }
      ]}
      benefits={[
        "Immersive Experiences",
        "Simplified User Control",
        "Crystal Clear Audio/Video",
        "Remote Management"
      ]}
    />
  );
};

export default AVSolutions;
