import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const WhyChooseUs = () => {
  const items = [
    {
      title: "Regional Presence",
      subtitle: "MOZ, RSA, SD, NB, BT",
      color: "bg-[#2563EB]"
    },
    {
      title: "Diverse Offering",
      subtitle: <span className="whitespace-nowrap">Multisector capabilities</span>,
      color: "bg-[#16A34A]"
    },
    {
      title: "Customer Centric",
      subtitle: "Your needs first",
      color: "bg-[#9333EA]"
    },
    {
      title: "National Reach",
      subtitle: "Reliable delivery",
      color: "bg-[#EA580C]"
    },
    {
      title: "Future Focused",
      subtitle: "Emerging tech trends",
      color: "bg-[#DC2626]"
    },
    {
      title: "Strategic Prowess",
      subtitle: "Complex execution",
      color: "bg-[#F59E0B]"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-bg-offset border-y border-border">
      {/* Background Radial Glow - Matches the screenshot lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
      
      <div className="container relative z-10 text-center">
        {/* Top Red Dot Indicator */}
        <div className="flex justify-center mb-8">
          <div className="w-1.5 h-1.5 bg-[#FF0000] rounded-full shadow-[0_0_8px_rgba(255,0,0,0.6)]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '1.5cm' }}
        >
          <h2 className="text-[44px] font-bold text-text-main tracking-tight leading-tight uppercase">
            Why Choose Multi Group Inc?
          </h2>
        </motion.div>

        {/* 2 by 3 Horizontal Layout (3 columns, 2 rows) */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 max-w-5xl mx-auto"
          style={{ rowGap: '1.5cm', marginBottom: '1.5cm' }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-[22px] font-black text-text-main mb-4 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-[16px] text-text-muted font-medium leading-relaxed max-w-[250px]">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-[1000px] mx-auto"
        >
          <p 
            className="text-[22px] text-text-main font-normal leading-[1.6] px-4"
            style={{ marginBottom: '1.5cm' }}
          >
            Africa's premier supplier of aftermarket and original spares, renowned for excellence in 
            complex project execution and strong presence in the SADC market.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link 
              to="/contact" 
              className="btn btn-primary px-10 py-4 shadow-2xl shadow-primary/20"
            >
              Request a Quote <ChevronRight size={18} />
            </Link>
            <Link 
              to="/contact" 
              className="btn btn-outline px-10 py-4 backdrop-blur-md border-border text-text-main hover:text-primary hover:border-primary"
            >
              Schedule Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
