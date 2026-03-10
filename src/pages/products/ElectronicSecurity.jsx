import { Eye, MonitorPlay, Network, Box } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

const ElectronicSecurity = () => {
  const subCategories = [
    { icon: <Network size={24} />, label: "IP Surveillance Systems", path: "/products/surveillance" },
    { icon: <Box size={24} />, label: "Black Box Recorder Units", path: "/products/surveillance/s1" }
  ];

  const hero = {
    subtitle: "24/7 Monitoring",
    title: <>Electronic <br /><span>Surveillance</span></>,
    description: "Comprehensive IP and Analog CCTV solutions with remote monitoring capabilities. Keep a watchful eye on your premises from anywhere in the world."
  };

  const sections = [
    {
      type: 'image-text',
      subtitle: "Intelligent Vision",
      title: <>Smart <br /><span>Surveillance</span></>,
      desc: "Our camera systems integrate with our access control and physical barriers to provide a complete security ecosystem. Ultra-high resolution with advanced night vision and AI-powered motion detection.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
      list: [
        "High-Definition 4K Resolution",
        "AI-Powered Motion Detection",
        "Night Vision (Up to 100m)",
        "Mobile App Integration"
      ]
    },
    {
      type: 'features',
      items: [
        { icon: <Eye size={32} />, title: "Live Feed", desc: "Real-time remote monitoring with encrypted point-to-point transmission." },
        { icon: <MonitorPlay size={32} />, title: "Black Box Series", desc: "Specialized mobile DVR units (S1, S2, MOBI) for in-vehicle and remote monitoring." },
        { icon: <Network size={32} />, title: "Scalable Architecture", desc: "From single residential cameras to massive 450+ unit industrial IP networks." }
      ]
    }
  ];

  return (
    <ProductPageTemplate 
      hero={hero}
      subCategories={subCategories}
      sections={sections}
      productName="Electronic Surveillance"
    />
  );
};

export default ElectronicSecurity;
