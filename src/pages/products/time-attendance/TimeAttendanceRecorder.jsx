import { BarChart, FileSpreadsheet, Fingerprint, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LuxCard from '../../../components/LuxCard';

const TimeAttendanceRecorder = () => {
  const subCategories = [
    { label: "Mobile Time and Attendance Recorder", path: "/products/time-attendance/mobile" },
    { label: "Time and Attendance Recorder", path: "/products/time-attendance/recorder" }
  ];

  return (
    <div className="pt-32">
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12"></div>
        <div className="container relative z-10">
          <span className="section-subtitle">Workforce Intelligence</span>
          <h1 className="text-6xl font-bold mb-6 text-white tracking-tighter">Time and <br /><span className="text-gradient-gold">Attendance Recorder</span></h1>
          <p className="text-gray-400 max-w-2xl text-lg mb-8 leading-relaxed">
            Integrated recording units that combine high-security biometric identification with powerful HR management software.
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
                className={`flex items-center justify-between p-8 border transition-all ${item.label === 'Time and Attendance Recorder' ? 'bg-accent/10 border-accent' : 'bg-bg border-white/5 hover:border-accent group'}`}
              >
                <span className={`text-xs font-bold uppercase tracking-widest ${item.label === 'Time and Attendance Recorder' ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{item.label}</span>
                <ChevronRight size={16} className="text-accent" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Fingerprint />, title: "Biometric Entry", desc: "Use unique biological traits to ensure zero 'buddy clocking' and absolute record integrity." },
              { icon: <FileSpreadsheet />, title: "Payroll Ready", desc: "Automatically calculate hours, overtime, and leave, then export directly to payroll systems." },
              { icon: <BarChart />, title: "Real-time Reporting", desc: "Monitor staff presence and movement across multiple sites from a central dashboard." }
            ].map((item, i) => (
              <LuxCard key={i} index={i}>
                <div className="card-content">
                  <div className="text-accent mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 tracking-wider">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default TimeAttendanceRecorder;
