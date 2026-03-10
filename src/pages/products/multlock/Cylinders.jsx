import { Key, Lock, Cpu, RefreshCw, Boxes } from 'lucide-react';
import ProductPageTemplate from '../../../components/ProductPageTemplate';

const Cylinders = () => {
  const subCategories = [
    { icon: <Key size={18} />, label: "Cylinders", path: "/products/multlock/cylinders", active: true },
    { icon: <Cpu size={18} />, label: "Electronic", path: "/products/multlock/electronic" },
    { icon: <RefreshCw size={18} />, label: "Upgrades", path: "/products/multlock/upgrades" },
    { icon: <Lock size={18} />, label: "Padlocks", path: "/products/multlock/padlocks" },
    { icon: <Boxes size={18} />, label: "Innovations", path: "/products/multlock/innovations" }
  ];

  const hero = {
    subtitle: "Core Technology",
    title: <>High Security <br /><span>Cylinders</span></>,
    description: "Engineered from high-grade stainless steel and nickel silver. Our cylinders are market-proven to be pick-proof and drill-resistant by leading security experts."
  };

  const sections = [
    {
      type: 'image-text',
      subtitle: "Engineering",
      title: <>Precision <span>Locking Technology</span></>,
      desc: "Multi Group Inc (Mul-T-Lock) cylinders are built with unique telescopic pins that require a 3D shear line alignment. This makes them virtually impossible to pick or bump with standard tools.",
      image: "https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80&w=1000"
    },
    {
      type: 'platforms',
      subtitle: "Platforms",
      title: <>SECURITY <span>ARCHITECTURE</span></>,
      items: [
        {
          icon: <Key size={24} />,
          title: "Interactive®+",
          desc: "Advanced High Security with a unique telescopic pin mechanism. The key has a moving element that interacts with the cylinder for 3D protection.",
          features: ["Patented Key Control", "Drill & Pick Resistant", "Master Key Capable"]
        },
        {
          icon: <Key size={24} />,
          title: "MT5®+",
          desc: "The 5th generation of high security. Features a double-sided flat key, a telescopic pin mechanism, and a powerful side bar for extreme resistance.",
          features: ["Alpha Spring Element", "Snake Groove Pattern", "Maximum Key Restriction"]
        },
        {
          icon: <Key size={24} />,
          title: "Classic Series",
          desc: "The foundation of Mul-T-Lock high security. Reliable telescopic pin technology that has secured homes globally for decades.",
          features: ["Proven Reliability", "Economical High Security", "Extensive Profile Range"]
        }
      ]
    }
  ];

  return (
    <ProductPageTemplate 
      hero={hero}
      subCategories={subCategories}
      sections={sections}
      productName="High Security Cylinders"
    />
  );
};

export default Cylinders;
