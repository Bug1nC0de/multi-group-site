import { Facebook, Instagram, Linkedin, Shield, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-bg border-t border-border pt-32 pb-12 relative z-10 text-text-main overflow-hidden hero-pattern">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-text-main rounded-2xl flex items-center justify-center text-bg-light shadow-2xl">
                <Shield size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight text-text-main leading-none">Multi Group Inc</span>
                <span className="text-[9px] tracking-[0.3em] text-text-main font-black uppercase mt-1 opacity-50">Global Excellence</span>
              </div>
            </div>
            <p className="text-text-muted text-base leading-relaxed max-w-xs font-medium">
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
                  className="w-10 h-10 bg-bg-offset rounded-full flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all border border-border"
                  aria-label={label}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-text-main mb-10 opacity-50">Solutions</h4>
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
                  <Link to={item.path} className="text-sm text-text-main hover:text-primary transition-colors font-bold flex items-center gap-3 group no-underline">
                    <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div className="lg:pl-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-text-main mb-10 opacity-50">Company</h4>
            <ul className="space-y-5">
              {[
                { label: "About Us", path: "/about" },
                { label: "Capabilities", path: "/capabilities" },
                { label: "Innovation", path: "/innovation" },
                { label: "Our Projects", path: "/our-projects" },
                { label: "Contact", path: "/contact" }
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="text-sm text-text-main hover:text-primary transition-colors font-bold flex items-center gap-3 group no-underline">
                    <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="lg:pl-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-text-main mb-10 opacity-50">Contact</h4>
            <div className="space-y-8">
              <div className="flex gap-5 items-start">
                <MapPin size={20} strokeWidth={1.5} className="text-text-main shrink-0 mt-1" />
                <span className="text-sm text-text-main font-bold leading-relaxed">
                  50 Pierneef Road, Witkoppen Ext., <br />
                  Fourways, Sandton, South Africa
                </span>
              </div>
              <div className="flex gap-5 items-center">
                <Phone size={20} strokeWidth={1.5} className="text-text-main shrink-0" />
                <a href="tel:0861102203" className="text-sm text-primary font-bold hover:opacity-70 transition-all no-underline">0861 102 203</a>
              </div>
              <div className="flex gap-5 items-center">
                <Mail size={20} strokeWidth={1.5} className="text-text-main shrink-0" />
                <a href="mailto:admin@multigroupinc.com" className="text-sm text-primary font-bold hover:opacity-70 transition-all cursor-pointer no-underline">admin@multigroupinc.com</a>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] text-text-muted font-black uppercase tracking-[0.3em]">
          <p>© 2026 Multi Group Inc. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            <Link to="/disclaimer" className="text-text-main hover:opacity-60 transition-colors no-underline">Disclaimer</Link>
            <Link to="/privacy-policy" className="text-text-main hover:opacity-60 transition-colors no-underline">Privacy</Link>
            <Link to="/terms" className="text-text-main hover:opacity-60 transition-colors no-underline">Terms</Link>
            <span className="text-text-muted border-l border-border pl-10 hidden sm:inline">Level 4 BEE Contributor</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
