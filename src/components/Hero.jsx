import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ChevronRight, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import heroVideo from '../assets/video/hero-bg.mp4';

const Counter = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  
  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span className="stat-number">{rounded}</motion.span>;
};

const Hero = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero relative overflow-hidden bg-dark">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>
      
      <div className="container hero-container relative z-10 pb-80 md:pb-40">
        <div className="hero-content mx-auto md:mx-0 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* System Status Bar */}
            <div className="flex items-center justify-center md:justify-start gap-6 mb-10">
              <div className="hero-badge" style={{background: 'rgba(0,0,0,0.4)', borderColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF'}}>
                <ShieldCheck size={16} style={{color: '#FFFFFF'}} strokeWidth={1.5} />
                40 Years of Excellence in SADC Market
              </div>
              <div className="hidden sm:flex items-center gap-3 text-[10px] font-black tracking-[0.4em] border-l pl-6" style={{color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)'}}>
                <Clock size={14} style={{color: '#FFFFFF'}} strokeWidth={1.5} />
                {time.toLocaleTimeString([], { hour12: false })} UTC
              </div>
            </div>

            <h1 className="hero-title">
              <span className="text-on-dark">Diverse Industries,</span> <br />
              <span className="text-primary">Unified Excellence</span>
            </h1>
            
            <p className="hero-description font-bold mx-auto md:mx-0" style={{color: '#FFFFFF'}}>
              Discover how Multi Group Inc serves multiple sectors across Southern Africa with integrated industrial solutions and 40 years of proven expertise.
            </p>

            <div className="hero-actions justify-center md:justify-start -mt-12">
              <Link to="/about" className="btn btn-primary px-10 py-4 shadow-2xl shadow-primary/30">
                Learn More <ChevronRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline px-10 py-4 backdrop-blur-md" style={{color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.8)', background: 'rgba(0,0,0,0.3)'}}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Real-time Data Strip */}
      <div className="hero-stats">
        <div className="container stats-container">
          <div className="stat-item group">
            <Counter value={1985} />
            <span className="stat-label group-hover:text-primary transition-colors">Operational Est.</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item group">
            <Counter value={40} suffix="+" />
            <span className="stat-label group-hover:text-primary transition-colors">Years Excellence</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item group">
            <Counter value={500} suffix="K+" />
            <span className="stat-label group-hover:text-primary transition-colors">Systems Deployed</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item group">
            <Counter value={100} suffix="%" />
            <span className="stat-label group-hover:text-primary transition-colors">Security Integrity</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
