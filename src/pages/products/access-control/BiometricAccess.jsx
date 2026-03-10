import { Fingerprint, ShieldCheck, Database, Cpu, Key, Clock } from 'lucide-react';
import ProductPageTemplate from '../../../components/ProductPageTemplate';

const BiometricAccess = () => {
  const subCategories = [
    { icon: <Cpu size={24} />, label: "Bio Flash", path: "/products/access-control/bio-flash" },
    { icon: <Fingerprint size={24} />, label: "Biometrics", path: "/products/access-control/biometrics", active: true },
    { icon: <Key size={24} />, label: "CLIQ Digital", path: "/products/access-control/intelligent-keys" },
    { icon: <Clock size={24} />, label: "Attendance", path: "/products/access-control/attendance" }
  ];

  const hero = {
    subtitle: "Biological Identification",
    title: <>Biometric <br /><span>Access Control</span></>,
    description: "Advanced fingerprint and facial identification systems designed for secure entry management in high-traffic commercial and industrial environments."
  };

  const sections = [
    {
      type: 'features',
      items: [
        { 
          icon: <Fingerprint size={32} />, 
          title: "Live Finger Detection", 
          desc: "Prevents unauthorized entry using fake fingers made of silicone, rubber, or paper." 
        },
        { 
          icon: <ShieldCheck size={32} />, 
          title: "Rugged Design", 
          desc: "IP65 rated housings that withstand dust, rain, and extreme South African temperatures." 
        },
        { 
          icon: <Database size={32} />, 
          title: "High Capacity", 
          desc: "Store up to 50,000 users and 500,000 event logs on a single local unit." 
        }
      ]
    },
    {
      type: 'image-text',
      subtitle: "Management",
      title: <>Centralized <span>Control</span></>,
      desc: "Manage multiple entry points from a single administrative interface. Our systems provide real-time reporting and unauthorized attempt alerts.",
      image: "https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80&w=1000",
      list: [
        "Network-Based Management",
        "Anti-Passback Protocols",
        "Encrypted Data Storage",
        "Emergency Lockdown Trigger"
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

export default BiometricAccess;
