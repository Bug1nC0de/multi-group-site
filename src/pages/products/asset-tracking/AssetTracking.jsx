import { MapPin, Globe, ShieldCheck, BarChart, Network } from 'lucide-react';
import ProductPageTemplate from '../../../components/ProductPageTemplate';

const AssetTracking = () => {
  const subCategories = [
    { icon: <BarChart size={24} />, label: "Product Overview", path: "/products/asset-tracking/overview" },
    { icon: <Network size={24} />, label: "Network Solutions", path: "/products/asset-tracking/network" },
    { icon: <ShieldCheck size={24} />, label: "Mul-T-Lock Systems", path: "/products/asset-tracking/multlock" }
  ];

  const hero = {
    subtitle: "Intelligent Monitoring",
    title: <>Intelligent <br /><span>Asset Tracking</span></>,
    description: "Global real-time visibility for high-value cargo and vehicle fleets. Secure your assets with international network-based tracking and specialized Mul-T-Lock hardware."
  };

  const sections = [
    {
      type: 'image-text',
      subtitle: "Tactical Reach",
      title: <>Real-Time <span>Global Visibility</span></>,
      desc: "Our asset tracking solutions provide accurate location data and status alerts for any asset, anywhere in the world. From stationary high-value inventory to international cargo containers.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
      list: [
        "Geo-Fencing Technology",
        "Instant Tamper Alerts",
        "GSM & Satellite Uplink",
        "G-Series Hardware Integration"
      ]
    },
    {
      type: 'features',
      items: [
        { icon: <MapPin size={32} />, title: "Precision GPS", desc: "Real-time location data with sub-meter accuracy for sensitive cargo." },
        { icon: <ShieldCheck size={32} />, title: "Tamper Detection", desc: "Instant notifications if a lock is engaged, disengaged, or interfered with." },
        { icon: <Globe size={32} />, title: "Global Coverage", desc: "Seamless roaming across international networks for cross-border logistics." }
      ]
    }
  ];

  return (
    <ProductPageTemplate 
      hero={hero}
      subCategories={subCategories}
      sections={sections}
      productName="Asset Tracking"
    />
  );
};

export default AssetTracking;
