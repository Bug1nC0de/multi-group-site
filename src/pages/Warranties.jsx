import { motion } from 'framer-motion';
import { ShieldCheck, Award, FileCheck } from 'lucide-react';
import LuxCard from '../components/LuxCard';

const Warranties = () => {
  return (
    <div>
      <section className="py-32 dark-section hero-pattern relative">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Lifetime Commitment</span>
            <h1 className="section-title">Product <br /><span>Warranties</span></h1>
            <p className="text-gray-400 max-w-2xl text-lg font-medium leading-relaxed">
              We stand behind every component we manufacture. Our warranties reflect the 
              industrial-grade materials and precision engineering found in every Multi Group Inc product.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding dark-section relative">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
            {[
              { 
                title: "Mechanical Lifetime", 
                desc: "We provide a limited lifetime warranty on all mechanical locking mechanisms and structural door components under normal usage conditions.",
                icon: <ShieldCheck size={40} />
              },
              { 
                title: "Electronic Systems", 
                desc: "Biometric and electronic access control units are covered by a comprehensive 2-year technical warranty, including on-site troubleshooting.",
                icon: <Award size={40} />
              },
              { 
                title: "Installation Guarantee", 
                desc: "Every installation performed by our certified technicians is guaranteed for 12 months to ensure perfect structural alignment and performance.",
                icon: <FileCheck size={40} />
              }
            ].map((item, i) => (
              <LuxCard key={i} index={i} className="group">
                <div className="card-content">
                  <div className="w-20 h-20 bg-primary/10 rounded-none flex items-center justify-center text-primary mb-10 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-2xl shadow-primary/5">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed font-medium mb-12">{item.desc}</p>
                  <div className="pt-8 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 group-hover:text-primary transition-colors w-full">*Terms and conditions apply</div>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Warranties;
