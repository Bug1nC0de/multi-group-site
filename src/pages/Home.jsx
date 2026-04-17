import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import SectorOverview from '../components/SectorOverview';
import KeyStrengths from '../components/KeyStrengths';
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

      <section className="section-padding pt-0 bg-bg-offset border-y border-border">
         <Partners />
      </section>

      {/* Subsidiary Excellence - Multi-Locking Strategic Highlight */}
      <section className="section-padding bg-bg relative overflow-hidden border-b border-border">
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center space-y-12">

            {/* Header Content */}
            <motion.div 
              className="max-w-3xl space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3">
                <span className="w-2 h-2 bg-primary animate-pulse"></span>
                <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em]">Subsidiary Excellence</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-heading-color tracking-tighter uppercase leading-[0.85]">
                Advanced <br />
                <span className="text-primary">Locking Systems</span>
              </h2>

              <p className="text-lg text-text-muted font-medium leading-relaxed">
                As a key subsidiary of Multi Group Inc, Multi-Locking provides Africa with world-class high-security cylinders, padlocks, and electromechanical locking solutions.
              </p>
            </motion.div>

            {/* Metrics Strip */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 py-8 border-y border-border/50 w-full max-w-4xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex flex-col items-center gap-1 px-8">
                <div className="text-3xl font-black text-heading-color">SABS</div>
                <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Certified Standards</div>
              </div>
              <div className="w-px h-12 bg-border/50 hidden md:block"></div>
              <div className="flex flex-col items-center gap-1 px-8">
                <div className="text-3xl font-black text-heading-color">40+</div>
                <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-border/50 hidden md:block"></div>
              <div className="flex flex-col items-center gap-1 px-8">
                <div className="text-3xl font-black text-heading-color">24/7</div>
                <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Support Access</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a
                href="https://www.multi-locking.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-12 py-5 group shadow-2xl shadow-primary/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Multi-Locking 
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
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
      <section className="section-padding pt-16 pb-6 bg-bg border-t border-border">
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
