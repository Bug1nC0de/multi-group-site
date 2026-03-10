import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const TechSpecs = () => {
  const details = [
    { 
      label: "Precision", 
      title: "Telescopic Pins", 
      desc: "Unique interaction of internal and external tumblers for unbreakable pick resistance." 
    },
    { 
      label: "Restriction", 
      title: "Magnetic Auth", 
      desc: "Patented authorization cards required for all secure key duplication protocols." 
    },
    { 
      label: "Strength", 
      title: "65 HRC Hardness", 
      desc: "Case-hardened steel alloy core engineered to resist high-intensity drill attacks." 
    }
  ];

  return (
    <section className="relative bg-bg py-12 lg:py-16 border-t border-border">
      <div className="container relative z-10">
        
        {/* 1. Header: Focused & Authoritative */}
        <div className="max-w-5xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary"></div>
              <span className="text-[10px] font-black text-primary tracking-[0.6em]">Unified Defense</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tighter">
              The Art of <br /> <span className="opacity-10">Security Engineering</span>
            </h2>
            <p className="text-text-muted text-base lg:text-lg font-medium leading-relaxed max-w-3xl">
              Every structure begins with a point of entry. We ensure that point is an unbreakable absolute, 
              powered by Mul-T-Lock’s legendary mechanical intelligence.
            </p>
          </motion.div>
        </div>

        {/* 2. Main Content: Wide, Clean Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-12">
          {details.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-primary tracking-[0.4em]">{item.label}</span>
                <div className="w-8 h-8 rounded-none border border-border flex items-center justify-center text-text-muted group-hover:text-primary group-hover:border-primary/50 transition-all">
                  <Check size={14} />
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white tracking-tight">{item.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
              <div className="w-full h-px bg-border group-hover:bg-primary/30 transition-colors"></div>
            </motion.div>
          ))}
        </div>

        {/* 3. Visual Anchor: Minimalist Schematic */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-full aspect-[16/6] bg-bg-offset border border-border flex items-center justify-center relative overflow-hidden group"
          >
            {/* Subtle Tech Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none hero-pattern scale-125"></div>
            
            {/* Architectural Centerpiece - Minimalist lines instead of icon */}
            <div className="relative flex flex-col items-center justify-center space-y-4">
               <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
               <div className="flex gap-4">
                  <div className="w-1 h-1 bg-primary shadow-[0_0_10px_rgba(37,99,235,1)]"></div>
                  <div className="w-1 h-1 bg-primary/40"></div>
                  <div className="w-1 h-1 bg-primary/20"></div>
               </div>
            </div>

            {/* Corner Markers */}
            <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-primary/30"></div>
            <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-primary/30"></div>
            <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-primary/30"></div>
            <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-primary/30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
