import { motion } from 'framer-motion';
import { Award, Target, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CoreCapabilities from '../components/CoreCapabilities';

const About = () => {
  return (
    <div className="bg-bg min-h-screen">
      <PageHero 
        title={<>Since <br /><span>1985</span></>}
        subtitle="Industrial Heritage"
        description="Multi Group Inc has pioneered the integration of physical infrastructure and industrial intelligence for over four decades."
        badge="40 Years of Excellence"
      />

      {/* Corporate Philosophy Section */}
      <section className="section-padding bg-bg-offset relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <span className="section-subtitle lg:mx-0">Our Mission</span>
                <h2 className="section-title text-4xl md:text-6xl mb-8">Architecting <span>Absolute Trust</span></h2>
                <p className="text-text-muted text-lg leading-relaxed font-medium">
                  We don't just provide services; we engineer resilient industrial environments. Our approach combines legendary engineering precision with the latest in digital monitoring and network-based systems.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-10">
                {[
                  { icon: <Target className="text-primary" strokeWidth={1.5} />, title: "Precision", desc: "Industrial-grade tolerances in every component and installation." },
                  { icon: <Award className="text-primary" strokeWidth={1.5} />, title: "Excellence", desc: "Level 4 BEE certified and SABS compliant operations." }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-bg border border-border group hover:border-primary/50 transition-all duration-500 rounded-2xl shadow-sm">
                    <div className="w-12 h-12 bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 mb-6 rounded-xl">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-text-main uppercase tracking-tight mb-2">{item.title}</h4>
                    <p className="text-sm text-text-muted font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative">
              <div className="absolute -inset-10 bg-primary/5 blur-3xl rounded-none opacity-50"></div>
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="aspect-square bg-bg-offset border border-border p-2 rounded-2xl overflow-hidden"
                >
                   <img 
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                      alt="Tech Foundation" 
                      className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="aspect-square bg-bg-offset border border-border p-2 mt-12 rounded-2xl overflow-hidden"
                >
                   <img 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                      alt="Corporate Presence" 
                      className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    />
                </motion.div>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg/60 backdrop-blur-2xl border border-border p-10 shadow-2xl z-20 rounded-3xl">
                 <div className="flex flex-col items-center gap-2">
                    <span className="text-6xl font-black text-primary leading-none">40+</span>
                    <span className="text-[10px] text-text-main font-black uppercase tracking-[0.4em] text-center">Years of Operational <br/>Excellence</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CoreCapabilities />

      {/* Compliance Strip */}
      <section className="py-32 bg-bg-offset border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="section-subtitle">Compliance</span>
            <h2 className="section-title text-4xl md:text-6xl mb-8">Regulated <span>Integrity</span></h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {["PSIRA", "SABS", "ISO 9001", "SAIA", "LASA", "BEE L4"].map((cert, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center p-8 bg-bg border border-border hover:border-primary/50 transition-all group rounded-2xl"
              >
                <span className="font-black text-xl text-text-muted group-hover:text-primary tracking-tighter transition-colors">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-bg">
        <div className="container">
          <div className="bg-primary/5 border border-primary/20 p-16 md:p-24 text-center relative overflow-hidden rounded-3xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-10"
            >
              <h2 className="text-4xl md:text-6xl font-black text-text-main leading-tight">READY TO UPGRADE <br/><span>YOUR INFRASTRUCTURE?</span></h2>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact" className="btn btn-primary px-12 py-5">
                  Get in Touch <ChevronRight />
                </Link>
                <Link to="/solutions" className="btn btn-outline px-12 py-5">
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
