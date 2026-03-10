import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import LuxCard from '../components/LuxCard';

const SABS = () => {
  return (
    <div className="bg-bg min-h-screen">
      <section className="pt-48 pb-32 hero-pattern relative overflow-hidden bg-bg">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[160px] pointer-events-none"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumbs />
            <span className="section-subtitle">National Standards</span>
            <h1 className="section-title text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.85]">SABS & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-text-main to-text-main/20">Certifications</span></h1>
            <p className="text-text-muted max-w-2xl text-xl font-medium leading-relaxed">
              Every product we manufacture meets or exceeds the South African Bureau of Standards (SABS) and international ISO quality benchmarks.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-bg relative">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {[
              { title: "SABS 1321", spec: "Standard for burglary-resistant safes and specialized storage units." },
              { title: "ISO 9001:2015", spec: "International standard for quality management systems in manufacturing." },
              { title: "Level 4 BEE", spec: "Certified Black Economic Empowerment contributor helping build South Africa." }
            ].map((item, i) => (
              <LuxCard key={i} index={i} className="border-l-4 border-l-primary group">
                <div className="card-content">
                  <h3 className="text-3xl font-bold mb-6 text-text-main tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-text-muted text-lg leading-relaxed font-medium">{item.spec}</p>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-offset hero-pattern border-y border-border">
        <div className="container relative z-10 text-center">
           <span className="section-subtitle mx-auto">Compliance</span>
           <h2 className="section-title mb-20">Industry <span>Memberships</span></h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["SAIA", "LASA", "ISO", "SEIRA"].map((cert, i) => (
                <div key={i} className="p-10 bg-bg border border-border rounded-none grayscale hover:grayscale-0 hover:border-primary transition-all group backdrop-blur-sm flex flex-col items-center">
                  <div className="icon-3d-wrapper mb-6">
                    <ShieldCheck size={48} />
                  </div>
                  <span className="font-black text-2xl text-text-muted/60 group-hover:text-text-main transition-colors uppercase tracking-tighter">{cert}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
};

export default SABS;
