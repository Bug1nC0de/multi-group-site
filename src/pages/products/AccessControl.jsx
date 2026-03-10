import { Fingerprint, Clock, Cpu, Key } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

const AccessControl = () => {
  const subCategories = [
    { icon: <Cpu size={24} />, label: "Bio Flash Memory", path: "/products/access-control/bio-flash" },
    { icon: <Fingerprint size={24} />, label: "Biometric Access", path: "/products/access-control/biometrics" },
    { icon: <Key size={24} />, label: "Intelligent Keys", path: "/products/access-control/intelligent-keys" },
    { icon: <Clock size={24} />, label: "Time & Attendance", path: "/products/access-control/attendance" }
  ];

  const hero = {
    subtitle: "Integrated Security",
    title: <>Access Control <br /><span>Systems</span></>,
    description: "From biological identification to programmable microelectric keys. Our access control systems provide absolute authority over who enters your sensitive zones and when."
  };

  const sections = [
    {
      type: 'image-text',
      subtitle: "Command & Control",
      title: <>Intelligent <span>Facility Management</span></>,
      desc: "Our units are designed for the harsh environments of Sub-Saharan Africa. Manage thousands of users with centralized software and detailed audit logs.",
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=1000",
      list: [
        "Live Finger Detection (LFD)",
        "Microelectric Cylinders",
        "Centralized Audit Logs",
        "Weatherproof Hardware"
      ]
    }
  ];

  return (
    <ProductPageTemplate 
      hero={hero}
      subCategories={subCategories}
      sections={sections}
      productName="Biometric Access Control"
    />
  );
};

export default AccessControl;
