import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LuxCard from './LuxCard';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "High Security Locking",
    category: "Mul-T-Lock Series",
    image: "https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80&w=800",
    description: "World-class cylinders and mechanical locks featuring patented telescopic pin technology.",
    specs: ["Patented Key Control", "Anti-Pick/Drill", "3D Shear Line"]
  },
  {
    id: 2,
    title: "Access Control",
    category: "Biometric Integration",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=800",
    description: "Intelligent facial recognition and fingerprint systems for secure, contactless entry management.",
    specs: ["LFD Technology", "Audit Trail Logs", "Cloud Management"]
  },
  {
    id: 3,
    title: "Steel Security Doors",
    category: "Architectural Grade",
    image: "https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80&w=800",
    description: "Mono-block alloy steel doors engineered for maximum resistance and aesthetic elegance.",
    specs: ["2mm Steel Alloy", "14-Point Locking", "Bullet Proof Options"]
  }
];

const ProductShowcase = () => {
  return (
    <section className="section-padding bg-bg hero-pattern relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <span className="section-subtitle">Our Core Solutions</span>
            <h2 className="section-title mb-0">Architectural <br /><span>Security Hierarchy</span></h2>
          </div>
          <Link to="/products" className="btn btn-primary px-12 py-5 shadow-2xl shadow-primary/20">
            View Full Catalog <ChevronRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 perspective-1000" style={{ marginTop: '1cm' }}>
          {products.map((product, index) => (
            <LuxCard key={product.id} index={index} className="group relative">
                <div className="w-full flex justify-between items-start mb-8">
                  <div className="bg-primary/10 border border-primary/20 text-primary px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em]">
                    {product.category}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-text-main mb-6 tracking-tight group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-text-muted text-lg mb-10 leading-relaxed font-medium line-clamp-2 text-left w-full">
                  {product.description}
                </p>

                <div className="space-y-4 mb-12 w-full">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-4 text-[10px] font-black text-text-muted/60 uppercase tracking-[0.2em] text-left">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                      {spec}
                    </div>
                  ))}
                </div>
                
                <div className="pt-10 border-t border-border w-full">
                  <Link to="/products" className="text-primary font-bold text-[11px] flex items-center gap-3 uppercase tracking-[0.2em] group/link border-none bg-transparent cursor-pointer no-underline">
                    View Details 
                    <div className="w-8 h-px bg-primary group-hover/link:w-16 transition-all duration-300"></div>
                    <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
            </LuxCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
