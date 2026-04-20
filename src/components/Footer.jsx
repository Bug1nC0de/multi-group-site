import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import WordmarkLogo from './WordmarkLogo';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const blueColor = isDark ? '#FFFFFF' : '#155FA6';
  const blueMuted = isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(21, 95, 166, 0.8)';
  const blueLight = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(21, 95, 166, 0.1)';
  const blueBorder = isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(21, 95, 166, 0.2)';

  const socialIcons = [
    { Icon: Facebook, label: "Facebook", color: isDark ? "#FFFFFF" : "#1877F2", hoverBg: "rgba(24, 119, 242, 0.2)" },
    { Icon: Instagram, label: "Instagram", color: isDark ? "#FFFFFF" : "#E4405F", hoverBg: "rgba(228, 64, 95, 0.2)" },
    { Icon: Linkedin, label: "LinkedIn", color: isDark ? "#FFFFFF" : "#0A66C2", hoverBg: "rgba(10, 102, 194, 0.2)" }
  ];

  return (
    <footer className="pt-0 pb-5 relative z-10 overflow-hidden hero-pattern bg-bg-offset">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 mt-0">

          {/* Brand Column */}
          <div className="space-y-10" style={{ paddingTop: '0.4cm' }}>
            <WordmarkLogo logoHeight="96px" boxed={false} />
            <p className="text-base leading-relaxed max-w-xs font-medium" style={{color: blueMuted}}>
              Pioneering integrated industrial infrastructure and advanced technological solutions since 1985. We secure what matters most.
            </p>
            {/* Social Icons - Centered */}
            <div className="flex justify-center gap-5" style={{ marginBottom: '1cm' }}>
              {socialIcons.map(({ Icon, label, color, hoverBg }, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    color: color
                  }}
                  aria-label={label}
                >
                  <Icon size={20} strokeWidth={2} />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-black px-2 py-1 rounded bg-text-main text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8" style={{ paddingTop: '1.4cm' }}>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10" style={{color: blueMuted}}>Solutions</h4>
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
                  <Link to={item.path} className="text-sm font-bold flex items-center gap-3 group no-underline transition-opacity hover:opacity-70" style={{color: blueColor}}>
                    <div className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all" style={{backgroundColor: blueColor}}></div>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:pl-8" style={{ paddingTop: '1.4cm' }}>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10" style={{color: blueMuted}}>Company</h4>
            <ul className="space-y-5">
              {[
                { label: "About Us", path: "/about" },
                { label: "Capabilities", path: "/capabilities" },
                { label: "Innovation", path: "/innovation" },
                { label: "Our Projects", path: "/our-projects" },
                { label: "Contact", path: "/contact" }
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="text-sm font-bold flex items-center gap-3 group no-underline transition-opacity hover:opacity-70" style={{color: blueColor}}>
                    <div className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all" style={{backgroundColor: blueColor}}></div>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-8" style={{ paddingTop: '1.4cm' }}>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-10" style={{color: blueMuted}}>Contact</h4>
            <div className="space-y-2">
              <div className="flex gap-5 items-start">
                <MapPin size={20} strokeWidth={1.5} color={blueColor} className="shrink-0 mt-1" />
                <span className="text-sm font-bold leading-relaxed" style={{color: blueColor}}>
                  50 Pierneef Road, Witkoppen Ext., <br />
                  Fourways, Sandton, South Africa
                </span>
              </div>
              <div className="flex gap-5 items-center">
                <Phone size={20} strokeWidth={1.5} color={blueColor} className="shrink-0" />
                <a href="tel:0861102203" className="text-sm font-bold no-underline transition-opacity hover:opacity-70" style={{color: blueColor}}>0861 102 203</a>
              </div>
              <div className="flex gap-5 items-center">
                <Mail size={20} strokeWidth={1.5} color={blueColor} className="shrink-0" />
                <a href="mailto:admin@multigroupinc.com" className="text-sm font-bold no-underline transition-opacity hover:opacity-70" style={{color: blueColor}}>admin@multigroupinc.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em]" style={{borderTop: `1px solid ${blueBorder}`, color: blueColor}}>
          <p>© 2026 Multi Group Inc. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            <Link to="/disclaimer" className="no-underline transition-opacity hover:opacity-60" style={{color: blueColor}}>Disclaimer</Link>
            <Link to="/privacy-policy" className="no-underline transition-opacity hover:opacity-60" style={{color: blueColor}}>Privacy</Link>
            <Link to="/terms" className="no-underline transition-opacity hover:opacity-60" style={{color: blueColor}}>Terms</Link>
            <span className="hidden sm:inline pl-10" style={{color: blueColor, borderLeft: `1px solid ${blueBorder}`}}>Level 4 BEE Contributor</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
