import { ScanFace, Monitor, Cpu } from 'lucide-react';
import ProductPageTemplate from '../../../components/ProductPageTemplate';

const FacialRecognition = () => {
  const subCategories = [
    { icon: <ScanFace size={24} />, label: "Client Face", path: "/products/facial-recognition/client-face" },
    { icon: <Monitor size={24} />, label: "Matrix Keeper", path: "/products/facial-recognition/matrix-keeper" },
    { icon: <Cpu size={24} />, label: "Notiface II", path: "/products/facial-recognition/notifaceii" },
    { icon: <Monitor size={24} />, label: "Wall Mount Unit", path: "/products/facial-recognition/wall-mount" }
  ];

  const hero = {
    subtitle: "Biometric Innovation",
    title: <>Facial <br /><span>Recognition</span></>,
    description: "The Face-Tek series represents the pinnacle of touchless security. High-speed, accurate identification designed for seamless integration into high-security environments."
  };

  const sections = [
    {
      type: 'features',
      items: [
        { icon: <ScanFace size={32} />, title: "Dual Camera Sensing", desc: "Combines IR and visible light sensors to provide 3D depth perception and prevent spoofing." },
        { icon: <Monitor size={32} />, title: "Edge Processing", desc: "Face-Tek units process identification locally for rapid response times." },
        { icon: <Cpu size={32} />, title: "Integration Ready", desc: "Easily connects with our high-security doors and gate control systems." }
      ]
    }
  ];

  return (
    <ProductPageTemplate 
      hero={hero}
      subCategories={subCategories}
      sections={sections}
      productName="Facial Recognition"
    />
  );
};

export default FacialRecognition;
