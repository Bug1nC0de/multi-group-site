import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import SectorOverview from '../components/SectorOverview';
import KeyStrengths from '../components/KeyStrengths';
import SecuritySolutions from '../components/SecuritySolutions';
import Partners from '../components/Partners';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Infrastructure Hub",
      role: "Lead Systems Architect",
      content: "Multi Group Inc's integration of physical hardware with digital monitoring has revolutionized our facility management. The operational integrity is unmatched.",
      rating: 5
    },
    {
      name: "Global Logistics Corp",
      role: "Operations Director",
      content: "Their asset tracking solutions provide us with real-time global visibility. The ROI on reduced cargo loss alone was immediate. Professional, reliable, and secure.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="home-page">
      <Hero />
      
      {/* 1. Core Value Proposition - Why Choose Us */}
      <section className="section-padding pb-0 bg-bg-offset border-y border-border">
        <WhyChooseUs />
      </section>

      {/* 2. Comprehensive Sector Overview (The New "Products") */}
      <SectorOverview />
      
      {/* 3. Strategic Strengths */}
      <KeyStrengths />

      <div className="section-padding pt-0 pb-0">
        <SecuritySolutions />
      </div>

      <section className="section-padding pt-0 bg-bg-offset border-y border-border">
        <Partners />
      </section>

      {/* Multi-Locking Strategic Link */}
      <section className="pb-[var(--section-spacing)] bg-bg relative overflow-hidden border-b border-border">
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto bg-bg-offset border border-border p-12 md:p-20 rounded-sm shadow-xl relative overflow-hidden text-center">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 blur-3xl pointer-events-none"></div>
            
            <div className="flex flex-col items-center gap-12 relative z-10">
              <div className="space-y-8">
                <div className="flex flex-col items-center gap-4">
                  <span className="text-primary font-black text-[10px] uppercase tracking-[0.6em]">Subsidiary Excellence</span>
                  <h2 className="text-4xl md:text-6xl font-black text-heading-color tracking-tighter uppercase leading-[0.9]">
                    Advanced <br /><span className="text-primary">Locking Systems</span>
                  </h2>
                </div>
                
                <p className="text-lg text-text-muted font-medium leading-relaxed max-w-2xl mx-auto">
                  Visit Multi-Locking for world-class high-security cylinders, padlocks, and electromechanical locking solutions. Africa's leader in physical security infrastructure.
                </p>

                <div className="pt-4">
                  <a 
                    href="https://www.multi-locking.co.za" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary px-12 py-5 group shadow-2xl shadow-primary/20"
                  >
                    Explore Multi-Locking <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="relative group w-full max-w-2xl mx-auto">
                <div className="absolute -inset-4 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative aspect-[21/9] bg-bg border border-border flex items-center justify-center p-8 overflow-hidden shadow-inner">
                   <div className="text-center space-y-4">
                      <div className="text-4xl md:text-5xl font-black text-primary opacity-30 group-hover:opacity-60 transition-all duration-500 tracking-tighter uppercase italic select-none">
                        Multi-Locking
                      </div>
                      <div className="h-1 w-20 bg-primary mx-auto opacity-40 group-hover:w-32 transition-all duration-500"></div>
                      <p className="text-[9px] font-black tracking-[0.4em] uppercase text-text-muted group-hover:text-primary transition-colors">Security Without Compromise</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Luxury Testimonial Slider */}
      <section className="section-padding bg-bg-offset relative border-y border-border">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-subtitle mx-auto">Industry Validation</span>
            <div className="relative min-h-[400px] md:min-h-[300px] flex items-center justify-center py-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-10"
                >
                  <Quote size={48} strokeWidth={1.5} className="text-primary mx-auto opacity-30" />
                  <p className="text-2xl md:text-3xl font-bold text-text-main leading-snug tracking-tight">
                    "{testimonials[currentIndex].content}"
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-lg font-black uppercase tracking-[0.2em] text-text-main">{testimonials[currentIndex].name}</h4>
                    <p className="text-xs font-bold text-primary tracking-[0.4em]">{testimonials[currentIndex].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center gap-4 mt-12">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1 transition-all duration-500 rounded-full ${i === currentIndex ? 'w-12 bg-primary' : 'w-3 bg-border'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final Strategic CTA */}
      <section className="section-padding pt-16 pb-0 bg-bg border-t border-border">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <div className="flex flex-col items-center gap-4">
              <span className="text-primary font-black text-[10px] uppercase tracking-[0.6em]">Regional Distribution</span>
              <h2 className="text-4xl md:text-6xl font-black text-heading-color tracking-tighter uppercase leading-none">
                Begin Your Industrial <br /><span>Transformation</span>
              </h2>
            </div>
            
            <div className="flex justify-center mb-10">
              <Link to="/contact" className="btn btn-primary px-12 py-5 shadow-2xl">
                Contact Expert <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
