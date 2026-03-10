import { motion } from 'framer-motion';
import { Clock, BarChart, FileSpreadsheet, Cpu, Fingerprint, Key } from 'lucide-react';
import LuxCard from '../../../components/LuxCard';

const TimeAttendance = () => {
  const subCategories = [
    { icon: <Cpu size={18} />, label: "Bio Flash Memory", path: "/products/access-control/bio-flash" },
    { icon: <Fingerprint size={18} />, label: "Biometric Access", path: "/products/access-control/biometrics" },
    { icon: <Key size={18} />, label: "Intelligent Keys", path: "/products/access-control/intelligent-keys" },
    { icon: <Clock size={18} />, label: "Time & Attendance", path: "/products/access-control/attendance" }
  ];

  return (
    <div>
      <section className="py-32 dark-section hero-pattern relative">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Workforce Management</span>
            <h1 className="section-title">Time and <br /><span>Attendance Recorder</span></h1>
            <p className="text-gray-400 max-w-2xl text-lg font-medium leading-relaxed">
              Integrated recording systems that combine security with HR efficiency. Automate payroll 
              data collection and monitor staff movement in real-time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Internal Navigation Grid */}
      <section className="py-16 dark-section border-y border-white/5">
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
            {subCategories.map((item, i) => (
              <LuxCard 
                key={i} 
                to={item.path}
                index={i}
                className={`min-h-[140px] ${item.label === 'Time & Attendance' ? 'border-primary bg-primary/5' : ''}`}
              >
                <div className="card-content">
                  <div className={`${item.label === 'Time & Attendance' ? 'text-primary' : 'text-gray-500 group-hover:text-primary'} mb-4 transition-colors`}>{item.icon}</div>
                  <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${item.label === 'Time & Attendance' ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>{item.label}</span>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding dark-section relative">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="absolute -inset-10 bg-primary/5 blur-3xl rounded-none opacity-50"></div>
               <div className="grid grid-cols-2 gap-6 relative z-10">
                  {[1,2,3,4].map(i => (
                    <LuxCard key={i} index={i} className="aspect-square hover:bg-primary/5 transition-all">
                       <div className="card-content">
                          <BarChart className="text-primary opacity-20 group-hover:opacity-100 transition-opacity" size={64} />
                       </div>
                    </LuxCard>
                  ))}
               </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-10"
            >
              <div className="text-center lg:text-left">
                <span className="section-subtitle lg:mx-0">Integration</span>
                <h2 className="section-title text-4xl md:text-5xl mb-6">PAYROLL <span>OPTIMIZATION</span></h2>
                <p className="text-gray-400 text-lg font-medium leading-relaxed">
                   Direct integration with major South African payroll software packages. 
                   Handle complex shifts and overtime automatically.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-6 group">
                   <div className="w-14 h-14 bg-primary/10 rounded-none flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                      <FileSpreadsheet size={28} />
                   </div>
                   <div className="text-left">
                      <h4 className="font-bold text-white text-xl mb-2 tracking-tight">Export Ready</h4>
                      <p className="text-base text-gray-400 font-medium leading-relaxed">Generated reports are fully compatible with VIP, Pastel, and other leading ERP systems.</p>
                   </div>
                </div>
                <div className="flex gap-6 group">
                   <div className="w-14 h-14 bg-primary/10 rounded-none flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                      <Clock size={28} />
                   </div>
                   <div className="text-left">
                      <h4 className="font-bold text-white text-xl mb-2 tracking-tight">Shift Management</h4>
                      <p className="text-base text-gray-400 font-medium leading-relaxed">Dynamic shift allocation rules that adapt to your workforce requirements in real-time.</p>
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
