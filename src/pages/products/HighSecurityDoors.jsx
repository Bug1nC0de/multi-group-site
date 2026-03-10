import { Shield, Lock, Disc, Key, RefreshCw, Smartphone, Boxes } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

const HighSecurityDoors = () => {
  const subCategories = [
    { icon: <Key size={24} />, label: "Cylinders", path: "/products/multlock/cylinders" },
    { icon: <RefreshCw size={24} />, label: "Upgrades", path: "/products/multlock/upgrades" },
    { icon: <Boxes size={24} />, label: "Innovations", path: "/products/multlock/innovations" },
    { icon: <Smartphone size={24} />, label: "CLIQ® Digital", path: "/products/multlock/electronic" },
    { icon: <Lock size={24} />, label: "Padlocks", path: "/products/multlock/padlocks" }
  ];

  const hero = {
    subtitle: "Fortress Grade",
    title: <>High Security <br /><span>Steel Doors</span></>,
    description: "Engineered for absolute resistance. Featuring a 2mm alloy steel mono-block frame, internal reinforcement tubes, and a patented 3-shaft, 3-level locking system."
  };

  const sections = [
    {
      type: 'image-text',
      subtitle: "Engineering",
      title: <>Unbreachable <span>Construction</span></>,
      desc: "Multi Group Inc high security doors are designed for the most demanding environments. We combine ballistic resistance with architectural elegance.",
      image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=1000",
      list: [
        "3-Level Radial Locking System",
        "Independent Major/Minor Units",
        "Reinforced Steel Mesh Core",
        "Ballistic Rated Options"
      ]
    },
    {
      type: 'features',
      items: [
        { icon: <Lock size={32} />, title: "3-Level Locking", desc: "Specialized 3-shaft, 3-level radial locking mechanism for multi-directional frame engagement." },
        { icon: <Shield size={32} />, title: "Redundant Protection", desc: "Equipped with independent Major and Minor locking units for layered defense." },
        { icon: <Disc size={32} />, title: "Internal Armor", desc: "Reinforced with vertical steel tubes and high-density rock wool for maximum insulation." }
      ]
    },
    {
      type: 'technical-specs',
      subtitle: "Data Sheet",
      title: <>TECHNICAL <span>SPECIFICATIONS</span></>,
      items: [
        { title: "Material", spec: "2mm Galvanized Steel Alloy" },
        { title: "Locking", spec: "14-Point Radial System" },
        { title: "Cylinder", spec: "Mul-T-Lock Interactive®+" },
        { title: "Insulation", spec: "Rock Wool / Polyurethane" },
        { title: "Finish", spec: "Electrostatic Powder Coating" },
        { title: "Hinges", spec: "3x Adjustable Heavy Duty" }
      ]
    }
  ];

  return (
    <ProductPageTemplate 
      hero={hero}
      subCategories={subCategories}
      sections={sections}
      productName="High Security Doors"
    />
  );
};

export default HighSecurityDoors;
