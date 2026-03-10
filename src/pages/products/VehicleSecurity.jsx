import { Truck, ShieldCheck, Settings, Lock } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

const VehicleSecurity = () => {
  const subCategories = [
    { icon: <Lock size={18} />, label: "Transmission Top Lock", path: "/products/vehicle/transmission-top" },
    { icon: <Lock size={18} />, label: "Container Locks", path: "/products/vehicle/container-locks" },
    { icon: <Lock size={18} />, label: "Internal Transmission", path: "/products/vehicle/transmission-internal" },
    { icon: <Lock size={18} />, label: "Kingpin Locks", path: "/products/vehicle/kingpin" },
    { icon: <Lock size={18} />, label: "Parking Poles", path: "/products/vehicle/parking-poles" },
    { icon: <Lock size={18} />, label: "Trailer Ring Locks", path: "/products/vehicle/trailer-ring" },
    { icon: <Lock size={18} />, label: "Wheel Clamps", path: "/products/vehicle/wheel-clamps" }
  ];

  const hero = {
    subtitle: "Mobile Asset Protection",
    title: <>Vehicle <br /><span>Security</span></>,
    description: "Specialized mechanical and digital protection for vehicles and cargo. The most trusted immobilisation systems for fleets and individual assets."
  };

  const sections = [
    {
      type: 'image-text',
      subtitle: "Defense",
      title: <>Unbreachable <span>Immobilisation</span></>,
      desc: "Multi Group Inc produced the world's first gear lock. We continue to define the gold standard in vehicle security with case-hardened steel and patented locking cylinders.",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000",
      list: [
        "Custom Engineering for Every Model",
        "Case-Hardened Steel Bodies",
        "Patented Mul-T-Lock Cylinders",
        "Weatherproof Surface Protection"
      ]
    },
    {
      type: 'features',
      items: [
        { icon: <Settings size={32} />, title: "Precise Fit", desc: "Designed for specific transmission architectures to prevent bypass or forced leverage." },
        { icon: <ShieldCheck size={32} />, title: "Material Strength", desc: "High-tensile alloys that resist drilling, sawing, and cryogenic attacks." },
        { icon: <Truck size={32} />, title: "Fleet Solutions", desc: "Master-keyable systems for entire fleets using a single secure key profile." }
      ]
    }
  ];

  return (
    <ProductPageTemplate 
      hero={hero}
      subCategories={subCategories}
      sections={sections}
      productName="Vehicle Security"
    />
  );
};

export default VehicleSecurity;
