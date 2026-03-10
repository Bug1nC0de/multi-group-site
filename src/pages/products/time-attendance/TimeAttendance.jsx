import { motion } from 'framer-motion';
import { Clock, BarChart, FileSpreadsheet, Fingerprint, ChevronRight, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const TimeAttendance = () => {
  const subCategories = [
    { icon: <Smartphone size={20} />, label: "Mobile Time and Attendance Recorder", path: "/products/time-attendance/mobile" },
    { icon: <Clock size={20} />, label: "Time and Attendance Recorder", path: "/products/time-attendance/recorder" }
  ];

  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Workforce Management</span>
          <h1 className="text-6xl font-bold mb-6 text-white tracking-tighter">Time & Attendance <br /><span className="text-gradient-gold">Systems</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            Eliminate manual record-keeping and payroll errors. Our integrated recording systems 
            provide absolute accuracy for stationary and mobile workforces.
          </p>
        </div>
      </section>

      {/* Internal Navigation Buttons */}
      <section className="py-12 bg-surface border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subCategories.map((item, i) => (
              <Link 
                key={i} 
                to={item.path}
                className="flex items-center justify-between p-10 bg-bg border border-white/5 hover:border-accent group transition-all"
              >
                <div className="flex items-center gap-6">
                   <div className="text-accent group-hover:scale-110 transition-transform">{item.icon}</div>
                   <span className="text-xs font-black tracking-[0.2em] text-gray-400 group-hover:text-white">{item.label}</span>
                </div>
                <ChevronRight size={20} className="text-accent opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
               <div className="grid grid-cols-2 gap-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="aspect-square bg-bg border border-white/5 rounded flex items-center justify-center p-8">
                       <BarChart className="text-accent opacity-20" size={48} />
                    </div>
                  ))}
               </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl font-bold mb-8 tracking-tighter text-white">Payroll <span className="text-accent">Integration</span></h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                   <FileSpreadsheet className="text-accent mt-1" />
                   <div>
                      <h4 className="font-bold text-white mb-1">Export Ready</h4>
                      <p className="text-sm text-gray-400">Direct integration with major South African payroll software packages including VIP and Pastel.</p>
                   </div>
                </div>
                <div className="flex gap-4 items-start">
                   <Fingerprint className="text-accent mt-1" />
                   <div>
                      <h4 className="font-bold text-white mb-1">Identity Verification</h4>
                      <p className="text-sm text-gray-400">Biological traits ensure the right person is at work at the right time.</p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TimeAttendance;
