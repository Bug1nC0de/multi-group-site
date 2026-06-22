import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import WordmarkLogo from './WordmarkLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prevLocationRef = useRef(location.pathname);

  useEffect(() => {
    if (prevLocationRef.current !== location.pathname) {
      prevLocationRef.current = location.pathname;
      if (isMenuOpen) {
        setIsMenuOpen(false); // eslint-disable-line react-hooks/set-state-in-effect
      }
    }
  }, [location.pathname, isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo Section */}
          <WordmarkLogo compact boxed={false} />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 h-full">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
            <Link to="/capabilities" className={`nav-link ${location.pathname === '/capabilities' ? 'active' : ''}`}>Capabilities</Link>
            <Link to="/innovation" className={`nav-link ${location.pathname === '/innovation' ? 'active' : ''}`}>Innovation</Link>
            
            {/* Solutions Dropdown */}
            <div className="dropdown-container h-full">
              <Link to="/solutions" className={`nav-link flex items-center gap-1 ${location.pathname.startsWith('/solutions') ? 'active' : ''}`}>
                Solutions <ChevronDown size={14} />
              </Link>
              <div className="dropdown-menu">
                <Link to="/solutions/security" className="dropdown-item">Security Industry</Link>
                <Link to="/solutions/it" className="dropdown-item">IT Solutions</Link>
                <Link to="/solutions/electrical" className="dropdown-item">High Voltage Electrical</Link>
                <Link to="/solutions/solar" className="dropdown-item">Solar Industry</Link>
                <Link to="/solutions/rail" className="dropdown-item">Rail Industry Parts</Link>
                <Link to="/solutions/refrigeration" className="dropdown-item">Refrigeration</Link>
                <Link to="/solutions/construction" className="dropdown-item">Construction</Link>
                <Link to="/solutions/agriculture" className="dropdown-item">Agriculture</Link>
                <Link to="/solutions/av" className="dropdown-item">Audio Visual</Link>
              </div>
            </div>

            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full transition-all focus:outline-none cursor-pointer border-none"
              style={{ 
                color: theme === 'dark' ? '#FFFFFF' : '#000000',
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
                outline: 'none',
                padding: 0
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/contact" className="btn btn-primary px-8 py-3 text-[11px] border-none cursor-pointer">Get In Touch</Link>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-4 relative">
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full focus:outline-none cursor-pointer border-none"
              style={{ 
                color: theme === 'dark' ? '#FFFFFF' : '#000000',
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
                outline: 'none',
                padding: 0
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className="text-text-main border-none bg-transparent cursor-pointer" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-dark z-999 flex flex-col pt-10 px-8 transition-all duration-500 lg:hidden overflow-y-auto pb-12 ${isMenuOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'}`}>
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center mb-16">
          <WordmarkLogo compact />
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="w-12 h-12 flex items-center justify-center text-white rounded-none cursor-pointer"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <Link to="/" className="text-2xl font-bold text-white no-underline border-b border-white/5 pb-4">Home</Link>
          <Link to="/about" className="text-2xl font-bold text-white no-underline border-b border-white/5 pb-4">About Us</Link>
          <Link to="/capabilities" className="text-2xl font-bold text-white no-underline border-b border-white/5 pb-4">Capabilities</Link>
          <Link to="/innovation" className="text-2xl font-bold text-white no-underline border-b border-white/5 pb-4">Innovation</Link>
          
          {/* Mobile Solutions Section */}
          <div className="flex flex-col gap-4 border-b border-white/5 pb-4">
            <Link to="/solutions" className="text-2xl font-bold text-white no-underline">Solutions</Link>
            <div className="grid grid-cols-1 gap-3 pl-4">
              <Link to="/solutions/security" className="text-sm font-bold text-white/60 no-underline hover:text-primary transition-colors py-1">Security Industry</Link>
              <Link to="/solutions/it" className="text-sm font-bold text-white/60 no-underline hover:text-primary transition-colors py-1">IT Solutions</Link>
              <Link to="/solutions/electrical" className="text-sm font-bold text-white/60 no-underline hover:text-primary transition-colors py-1">High Voltage Electrical</Link>
              <Link to="/solutions/solar" className="text-sm font-bold text-white/60 no-underline hover:text-primary transition-colors py-1">Solar Industry</Link>
              <Link to="/solutions/rail" className="text-sm font-bold text-white/60 no-underline hover:text-primary transition-colors py-1">Rail Industry Parts</Link>
              <Link to="/solutions/refrigeration" className="text-sm font-bold text-white/60 no-underline hover:text-primary transition-colors py-1">Refrigeration</Link>
              <Link to="/solutions/construction" className="text-sm font-bold text-white/60 no-underline hover:text-primary transition-colors py-1">Construction</Link>
              <Link to="/solutions/agriculture" className="text-sm font-bold text-white/60 no-underline hover:text-primary transition-colors py-1">Agriculture</Link>
              <Link to="/solutions/av" className="text-sm font-bold text-white/60 no-underline hover:text-primary transition-colors py-1">Audio Visual</Link>
            </div>
          </div>

          <Link to="/contact" className="text-2xl font-bold text-primary no-underline border-b border-white/5 pb-4">Contact</Link>
          
          <Link to="/contact" className="btn btn-primary mt-4 justify-center py-4 border-none cursor-pointer">Get In Touch</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
