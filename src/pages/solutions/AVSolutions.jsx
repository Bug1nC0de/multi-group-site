import React from 'react';
import { Monitor, Video, Tv, Layout, Settings } from 'lucide-react';
import SolutionTemplate from '../../components/SolutionTemplate';

const AVSolutions = () => {
  return (
    <SolutionTemplate
      title="Audio Visual Integration"
      description="State-of-the-art AV solutions for boardrooms, command centers, and public spaces, enhancing communication and visual engagement."
      icon={Monitor}
      image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000"
      features={[
        { title: "Video Conferencing", desc: "Seamless unified communications systems for hybrid work environments.", icon: Video },
        { title: "Digital Signage", desc: "Dynamic display networks for corporate branding, wayfinding, and information distribution.", icon: Tv },
        { title: "Control Rooms", desc: "Mission-critical video walls and processing systems for security and operations centers.", icon: Layout },
        { title: "Smart Automation", desc: "Integrated control of lighting, audio, and visual systems via touch panels.", icon: Settings }
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
