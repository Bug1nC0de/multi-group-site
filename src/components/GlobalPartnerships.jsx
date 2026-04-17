import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "CFM", logo: "/assets/partners/cfm.png", url: "https://www.cfmw.com/" },
  { name: "PIMA", logo: "/assets/partners/pima.png", url: "https://www.pima-alarms.com/" },
  { name: "ENPCT", logo: "/assets/partners/enpct-new.png", url: "https://www.enpct.com/" },
  { name: "Six United", logo: "/assets/partners/six-united.png", url: "https://sixunited.com/" },
  { name: "NAFFCO", logo: "/assets/partners/naffco.png", url: "https://naffco.com/" }
];

const GlobalPartnerships = () => {
  return (
    <section className="section-padding bg-bg border-y border-border">
      <div className="container text-center">
        <h2 className="text-4xl font-black mb-16 uppercase tracking-tight">Global Partnerships</h2>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-70">
          {partners.map((partner, i) => (
            <motion.a
              key={i}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grayscale hover:grayscale-0 transition-all duration-500"
            >
              <img src={partner.logo} alt={partner.name} className="h-16 md:h-20 object-contain" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPartnerships;
