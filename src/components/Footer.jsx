import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import WordmarkLogo from './WordmarkLogo';

const Footer = () => {
  return (
    <footer className="border-t border-border pt-32 pb-12 relative z-10 overflow-hidden hero-pattern" style={{backgroundColor: '#2563EB', color: '#FFFFFF'}}>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          {/* Brand Column */}
          <div className="space-y-10">
            <WordmarkLogo />
            <p className="text-base leading-relaxed max-w-xs font-medium" style={{color: 'rgba(255,255,255,0.8)'}}>
              Pioneering integrated industrial infrastructure and advanced technological solutions since 1985. We secure what matters most.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" }
              ].map(({ Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.2)'}}
                  aria-label={label}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10" style={{color: 'rgba(255,255,255,0.6)'}}>Solutions</h4>
            <ul className="space-y-5">
              {[
                { label: "Security & Access", path: "/solutions/security" },
                { label: "IT & Networking", path: "/solutions/it" },
                { label: "High Voltage Electrical", path: "/solutions/electrical" },
                { label: "Solar Energy", path: "/solutions/solar" },
                { label: "Construction", path: "/solutions/construction" },
                { label: "Agriculture", path: "/solutions/agriculture" }
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="text-sm font-bold flex items-center gap-3 group no-underline transition-opacity hover:opacity-70" style={{color: '#FFFFFF'}}>
                    <div className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all" style={{backgroundColor: '#FFFFFF'}}></div>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:pl-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10" style={{color: 'rgba(255,255,255,0.6)'}}>Company</h4>
            <ul className="space-y-5">
              {[
                { label: "About Us", path: "/about" },
                { label: "Capabilities", path: "/capabilities" },
                { label: "Innovation", path: "/innovation" },
                { label: "Our Projects", path: "/our-projects" },
                { label: "Contact", path: "/contact" }
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="text-sm font-bold flex items-center gap-3 group no-underline transition-opacity hover:opacity-70" style={{color: '#FFFFFF'}}>
                    <div className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all" style={{backgroundColor: '#FFFFFF'}}></div>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10" style={{color: 'rgba(255,255,255,0.6)'}}>Contact</h4>
            <div className="space-y-8">
              <div className="flex gap-5 items-start">
                <MapPin size={20} strokeWidth={1.5} color="#FFFFFF" className="shrink-0 mt-1" />
                <span className="text-sm font-bold leading-relaxed" style={{color: '#FFFFFF'}}>
                  50 Pierneef Road, Witkoppen Ext., <br />
                  Fourways, Sandton, South Africa
                </span>
              </div>
              <div className="flex gap-5 items-center">
                <Phone size={20} strokeWidth={1.5} color="#FFFFFF" className="shrink-0" />
                <a href="tel:0861102203" className="text-sm font-bold no-underline transition-opacity hover:opacity-70" style={{color: '#FFFFFF'}}>0861 102 203</a>
              </div>
              <div className="flex gap-5 items-center">
                <Mail size={20} strokeWidth={1.5} color="#FFFFFF" className="shrink-0" />
                <a href="mailto:admin@multigroupinc.com" className="text-sm font-bold no-underline transition-opacity hover:opacity-70" style={{color: '#FFFFFF'}}>admin@multigroupinc.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.3em]" style={{borderTop: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.92)'}}>
          <p style={{color: 'rgba(255,255,255,0.92)'}}>© 2026 Multi Group Inc. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            <Link to="/disclaimer" className="no-underline transition-opacity hover:opacity-60" style={{color: '#FFFFFF'}}>Disclaimer</Link>
            <Link to="/privacy-policy" className="no-underline transition-opacity hover:opacity-60" style={{color: '#FFFFFF'}}>Privacy</Link>
            <Link to="/terms" className="no-underline transition-opacity hover:opacity-60" style={{color: '#FFFFFF'}}>Terms</Link>
            <span className="hidden sm:inline pl-10" style={{color: 'rgba(255,255,255,0.92)', borderLeft: '1px solid rgba(255,255,255,0.3)'}}>Level 4 BEE Contributor</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
