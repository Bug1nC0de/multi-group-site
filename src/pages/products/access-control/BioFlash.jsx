import { Fingerprint, Cpu, Key, Clock, ShieldCheck, Zap } from 'lucide-react';
import ProductPageTemplate from '../../../components/ProductPageTemplate';

const BioFlash = () => {
  const subCategories = [
    { icon: <Cpu size={18} />, label: "Bio Flash Memory", path: "/products/access-control/bio-flash", active: true },
    { icon: <Fingerprint size={18} />, label: "Biometric Access", path: "/products/access-control/biometrics" },
    { icon: <Key size={18} />, label: "Intelligent Keys", path: "/products/access-control/intelligent-keys" },
    { icon: <Clock size={18} />, label: "Time & Attendance", path: "/products/access-control/attendance" }
  ];

  const hero = {
    subtitle: "Secure Data Storage",
    title: <>Bio Flash <br /><span>Memory Sticks</span></>,
    description: "The ultimate in portable data security. Biometrically protected memory sticks that ensure your sensitive files are only accessible by you."
  };

  const sections = [
    {
      type: 'features',
      items: [
        { icon: <Fingerprint size={32} />, title: "Fingerprint Auth", desc: "Built-in sensor requires a valid fingerprint scan before the drive is mounted by the OS." },
        { icon: <ShieldCheck size={32} />, title: "Hardware Encryption", desc: "On-the-fly AES 256-bit hardware encryption for all stored data." },
        { icon: <Zap size={32} />, title: "Rapid Transfer", desc: "USB 3.0 technology for high-speed read/write operations without compromising security." }
      ]
    }
  ];

  return (
    <ProductPageTemplate 
      hero={hero}
      subCategories={subCategories}
      sections={sections}
      productName="Bio Flash Memory Sticks"
    />
  );
};

export default BioFlash;
