import { ShieldCheck, Cpu, Key, Lock, RefreshCw, Boxes } from 'lucide-react';
import ProductPageTemplate from '../components/ProductPageTemplate';

const MulTLock = () => {
  const subCategories = [
    { icon: <Key size={24} />, label: "Cylinders", path: "/products/multlock/cylinders" },
    { icon: <Cpu size={24} />, label: "Electronic Cylinders", path: "/products/multlock/electronic" },
    { icon: <RefreshCw size={24} />, label: "System Upgrades", path: "/products/multlock/upgrades" },
    { icon: <Lock size={24} />, label: "High Security Padlocks", path: "/products/multlock/padlocks" },
    { icon: <Boxes size={24} />, label: "Product Innovations", path: "/products/multlock/innovations" }
  ];

  const hero = {
    subtitle: "Global Security Leader",
    title: <>Mul-T-Lock High Security <br /><span>Locking Systems</span></>,
    description: "Multi Group Inc is a world leader in the provision of Mul-T-Lock® Master Key Systems. Since 1973, we have provided patented, international high-security solutions that define the standards of physical and digital protection."
  };

  const sections = [
    {
      type: 'brand-hero',
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
      title: "Master Key Precision",
      subtitle: "Hardware Layer",
      icon: <ShieldCheck size={24} />
    },
    {
      type: 'image-text',
      subtitle: "Integration",
      title: <>The Power of <br /><span>Unified Access</span></>,
      desc: "Our Mul-T-Lock range is fully compatible with complex Master Key Systems, allowing a single key to control all access points—from main entrances to high-security safes.",
      image: "https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80&w=1000",
      list: [
        "One Master Key Solutions",
        "Patented Key Control",
        "Global Technical Support",
        "Authorization Card Protocol"
      ]
    },
    {
      type: 'features',
      items: [
        { icon: <ShieldCheck size={32} />, title: "One Master Key", desc: "Open all your locks at home or business with a single patented key." },
        { icon: <Lock size={32} />, title: "Key Control", desc: "No unauthorized duplication. Keys require a unique authorization card." },
        { icon: <ShieldCheck size={32} />, title: "Global Patents", desc: "Backed by over 100 patents and 40 years of engineering expertise." }
      ]
    }
  ];

  return (
    <ProductPageTemplate 
      hero={hero}
      subCategories={subCategories}
      sections={sections}
      productName="Mul-T-Lock Systems"
    />
  );
};

export default MulTLock;
