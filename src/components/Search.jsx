import { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const searchData = [
  { title: "High Security Cylinders", path: "/products/multlock/cylinders", category: "Locking" },
  { title: "Biometric Access Control", path: "/products/access-control/biometrics", category: "Access Control" },
  { title: "Bio Flash Memory Sticks", path: "/products/access-control/bio-flash", category: "Access Control" },
  { title: "Intelligent Keys", path: "/products/access-control/intelligent-keys", category: "Access Control" },
  { title: "Time & Attendance", path: "/products/access-control/attendance", category: "Access Control" },
  { title: "Facial Recognition", path: "/products/facial-recognition", category: "Facial Recognition" },
  { title: "Asset Tracking", path: "/products/asset-tracking", category: "Tracking" },
  { title: "Surveillance Systems", path: "/products/surveillance", category: "Surveillance" },
  { title: "Vehicle Security", path: "/products/vehicle-security", category: "Vehicle" },
  { title: "High Security Doors", path: "/products/high-security-doors", category: "Doors" },
  { title: "Wireless Alarms", path: "/products/alarms", category: "Alarms" },
  { title: "Smart Cards", path: "/products/smart-cards", category: "Cards" },
  { title: "Mul-T-Lock Systems", path: "/mul-t-lock", category: "Brand" },
  { title: "Electronic Locking", path: "/products/multlock/electronic", category: "Locking" },
  { title: "Padlocks", path: "/products/multlock/padlocks", category: "Locking" },
  { title: "Lock Upgrades", path: "/products/multlock/upgrades", category: "Locking" },
  { title: "IP Surveillance", path: "/products/electronic-security", category: "Surveillance" },
];

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const results = query.trim() === '' ? [] : searchData.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (path) => {
    navigate(path);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className="relative" ref={searchRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white/40 hover:text-primary transition-colors focus:outline-none"
        aria-label="Search"
      >
        <SearchIcon size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-4 w-[320px] md:w-[400px] bg-surface border border-border shadow-3xl z-[10000] overflow-hidden"
          >
            <div className="p-4 border-b border-white/5 flex items-center gap-3">
              <SearchIcon size={18} className="text-primary" />
              <input 
                type="text" 
                placeholder="Search security protocols..." 
                className="bg-transparent border-none outline-none text-white w-full font-bold text-sm uppercase tracking-widest placeholder:text-white/20"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={() => setIsOpen(false)} className="text-white/20 hover:text-white">
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[300px] overflow-y-auto">
              {results.length > 0 ? (
                <div className="py-2">
                  {results.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(item.path)}
                      className="w-full text-left px-6 py-4 hover:bg-white/[0.03] flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <span className="text-[10px] text-primary font-black uppercase tracking-[0.3em] block mb-1 opacity-60">
                          {item.category}
                        </span>
                        <span className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <ChevronRight size={14} className="text-white/10 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              ) : query.trim() !== '' ? (
                <div className="p-8 text-center">
                  <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">No matching protocols found</span>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Awaiting input...</span>
                </div>
              )}
            </div>
            
            <div className="p-4 bg-white/[0.02] border-t border-white/5 text-center">
               <span className="text-[8px] font-black text-white/10 uppercase tracking-[0.4em]">Multi Group Command Interface</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Search;
