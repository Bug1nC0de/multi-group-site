import { motion } from 'framer-motion';
import { Users, Briefcase, GraduationCap } from 'lucide-react';
import LuxCard from '../components/LuxCard';

const Careers = () => {
  return (
    <div>
      <section className="py-32 dark-section hero-pattern relative">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Join Our Team</span>
            <h1 className="section-title">Building a <br /><span>Secure Future</span></h1>
            <p className="text-gray-400 max-w-2xl text-lg font-medium leading-relaxed">
              Multi Group Inc is always looking for dedicated engineers, security consultants, and professional technicians to join our mission of protecting South Africa.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding dark-section relative">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
            {[
              { icon: <Briefcase size={40} />, title: "Technical Engineering", desc: "Expert manufacturing and installation of high-security steel doors and locking systems." },
              { icon: <Users size={40} />, title: "Consulting", desc: "Design bespoke risk portfolios and security strategies for elite corporate and residential clients." },
              { icon: <GraduationCap size={40} />, title: "Apprenticeships", desc: "Start your career in high-security locksmithing and electronic access control with our certified training." }
            ].map((item, i) => (
              <LuxCard key={i} index={i} className="group">
                <div className="card-content">
                  <div className="w-20 h-20 bg-primary/10 rounded-none flex items-center justify-center text-primary mb-10 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed font-medium">{item.desc}</p>
                </div>
              </LuxCard>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 p-16 bg-white/5 border border-white/5 rounded-none text-center relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
             <h2 className="text-3xl font-bold mb-4 text-white tracking-tight">No Active Openings?</h2>
             <p className="text-gray-400 mb-10 text-lg font-medium max-w-2xl mx-auto leading-relaxed">We are always interested in meeting exceptional talent. Send your CV and portfolio to our HR department for future opportunities.</p>
             <a href="mailto:careers@multi-locking.co.za" className="text-primary font-black tracking-[0.3em] uppercase border-b-2 border-primary pb-2 hover:text-white hover:border-white transition-all text-sm">careers@multi-locking.co.za</a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Careers;
