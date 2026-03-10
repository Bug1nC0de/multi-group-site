import { Eye, MonitorPlay, Wifi, Camera, Shield, Database } from 'lucide-react';
import ProductPageTemplate from '../../../components/ProductPageTemplate';

const SurveillanceSystems = () => {
  const subCategories = [
    { icon: <Database size={24} />, label: "DVR Integration", path: "/products/surveillance/dvr" },
    { icon: <MonitorPlay size={24} />, label: "S1 Black Box", path: "/products/surveillance/s1" },
    { icon: <MonitorPlay size={24} />, label: "S2 Black Box", path: "/products/surveillance/s2" },
    { icon: <Wifi size={24} />, label: "Mobi-i Series", path: "/products/surveillance/mobi" },
    { icon: <MonitorPlay size={24} />, label: "Mobile DVR", path: "/products/surveillance/mobile-dvr" },
    { icon: <Camera size={24} />, label: "HD Cameras", path: "/products/surveillance/cameras" }
  ];

  const hero = {
    subtitle: "24/7 Monitoring",
    title: <>Surveillance <br /><span>Systems</span></>,
    description: "Comprehensive IP and Analog CCTV solutions. From stationary digital recorders to specialized Black Box units for mobile asset protection."
  };

  const sections = [
    {
      type: 'image-text',
      subtitle: "Visual Intelligence",
      title: <>Smart <span>Monitoring</span></>,
      desc: "Our surveillance ecosystem integrates high-definition capture with intelligent backend processing to provide proactive security alerts and high-fidelity evidence.",
      image: "https://images.unsplash.com/photo-1557597774-9d2739f85a94?auto=format&fit=crop&q=80&w=1000",
      list: [
        "4K Ultra-HD Resolution",
        "Starlight Night Vision",
        "Intelligent Analytics",
        "Mobile Remote Viewing"
      ]
    },
    {
      type: 'features',
      items: [
        { icon: <Eye size={32} />, title: "Advanced Optics", desc: "4K resolution with starlight technology for full-color night vision in low light." },
        { icon: <MonitorPlay size={32} />, title: "Mobile Recording", desc: "Vibration-proof DVRs for vehicle and logistics monitoring with cellular uplink." },
        { icon: <Shield size={32} />, title: "Secure Storage", desc: "Redundant high-capacity storage solutions with AES encryption." }
      ]
    }
  ];

  return (
    <ProductPageTemplate 
      hero={hero}
      subCategories={subCategories}
      sections={sections}
      productName="Surveillance Systems"
    />
  );
};

export default SurveillanceSystems;
