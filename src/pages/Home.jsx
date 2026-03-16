import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import KeyStrengths from '../components/KeyStrengths';
import SectorOverview from '../components/SectorOverview';
import SecuritySolutions from '../components/SecuritySolutions';

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
    <>
      <Hero />
      
      {/* 1. Core Value Proposition - Why Choose Us */}
      <WhyChooseUs />

      {/* 2. Comprehensive Sector Overview (The New "Products") */}
      <SectorOverview />
      
      {/* 3. Strategic Strengths */}
      <KeyStrengths />

      <div className="pt-20">
        <SecuritySolutions />
      </div>

      {/* 4. Luxury Testimonial Slider */}
      <section className="py-12 bg-bg-offset relative border-y border-border">
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
      <section className="pt-16 pb-32 bg-bg border-t border-border">
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
    </>
  );
};

export default Home;
