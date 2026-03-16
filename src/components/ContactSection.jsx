import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight, Globe, ShieldCheck } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="relative bg-bg overflow-hidden py-40 border-t border-border" id="contact">
      {/* Cinematic Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[160px] rounded-full opacity-50"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          
          {/* Side A: Executive Briefing */}
          <div className="lg:col-span-5 space-y-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-px bg-primary"></div>
                <span className="text-primary font-black text-[10px] uppercase tracking-[0.8em]">Secure Channel</span>
              </div>
              
              <h2 className="text-6xl lg:text-8xl font-black text-text-main leading-[0.85] tracking-tighter uppercase mb-12">
                ESTABLISH <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-main to-text-main/20">CONTACT</span>
              </h2>
              
              <p className="text-text-muted text-xl font-medium leading-relaxed max-w-md italic">
                "Precision in security begins with clarity in communication."
              </p>
            </motion.div>

            <div className="space-y-12">
              {[
                { icon: <Phone size={20} />, label: "Direct Voice Uplink", val: "0861 102 203" },
                { icon: <Mail size={20} />, label: "Encrypted Transmission", val: "admin@multi-locking.co.za" },
                { icon: <MapPin size={20} />, label: "Global Headquarters", val: "Fourways, Sandton, RSA" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-start gap-8 group"
                >
                  <div className="w-px h-12 bg-border group-hover:bg-primary transition-colors duration-700"></div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.4em] block group-hover:text-primary transition-colors">{item.label}</span>
                    <p className="text-xl font-bold text-text-main tracking-tight uppercase">{item.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-12 border-t border-border flex items-center gap-10">
               <div className="flex flex-col">
                  <span className="text-[9px] font-black text-text-muted uppercase tracking-[0.4em] mb-2">Service Status</span>
                  <div className="flex items-center gap-3">
                     <div className="w-2 h-2 bg-green-500 rounded-none shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                     <span className="text-[10px] font-bold text-text-main tracking-widest uppercase">System Operational</span>
                  </div>
               </div>
               <div className="w-px h-10 bg-border"></div>
               <ShieldCheck className="text-text-muted/20" size={32} />
            </div>
          </div>

          {/* Side B: Stealth Form Terminal */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative p-1 bg-bg-offset border border-border"
            >
              <div className="bg-bg p-10 lg:p-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none"></div>
                
                <form className="space-y-16 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="group relative">
                      <label className="text-[10px] font-black text-text-muted uppercase tracking-[0.4em] mb-4 block group-focus-within:text-primary transition-colors">Identification</label>
                      <input 
                        type="text" 
                        placeholder="NAME / CORPORATE ID"
                        className="w-full bg-transparent border-b border-border py-4 text-text-main outline-none focus:border-primary transition-all font-bold text-sm tracking-widest uppercase placeholder:text-text-muted/30 rounded-none"
                      />
                    </div>
                    <div className="group relative">
                      <label className="text-[10px] font-black text-text-muted uppercase tracking-[0.4em] mb-4 block group-focus-within:text-primary transition-colors">Access Logic</label>
                      <input 
                        type="tel" 
                        placeholder="COMMUNICATION LINE"
                        className="w-full bg-transparent border-b border-border py-4 text-text-main outline-none focus:border-primary transition-all font-bold text-sm tracking-widest uppercase placeholder:text-text-muted/30 rounded-none"
                      />
                    </div>
                  </div>

                  <div className="group relative">
                    <label className="text-[10px] font-black text-text-muted uppercase tracking-[0.4em] mb-4 block group-focus-within:text-primary transition-colors">Digital Address</label>
                    <input 
                      type="email" 
                      placeholder="EMAIL@PROTOCOL.COM"
                      className="w-full bg-transparent border-b border-border py-4 text-text-main outline-none focus:border-primary transition-all font-bold text-sm tracking-widest uppercase placeholder:text-text-muted/30 rounded-none"
                    />
                  </div>

                  <div className="group relative">
                    <label className="text-[10px] font-black text-text-muted uppercase tracking-[0.4em] mb-4 block group-focus-within:text-primary transition-colors">Transmission</label>
                    <textarea 
                      rows={4} 
                      placeholder="DESCRIBE YOUR DEFENSE REQUIREMENTS..."
                      className="w-full bg-transparent border-b border-border py-4 text-text-main outline-none focus:border-primary transition-all font-bold text-sm tracking-widest uppercase resize-none placeholder:text-text-muted/30 rounded-none"
                    ></textarea>
                  </div>

                  <div className="pt-10 flex flex-col md:flex-row items-center gap-12">
                    <button className="w-full md:w-auto bg-primary text-on-dark px-16 py-6 font-black text-[11px] tracking-[0.6em] uppercase hover:bg-primary-dark transition-all flex items-center justify-center gap-6 group rounded-none shadow-[0_0_40px_rgba(37,99,235,0.2)]">
                      SEND UPLINK
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                    <p className="text-[9px] font-black text-text-muted/40 uppercase tracking-[0.3em] leading-relaxed max-w-[200px]">
                      Encrypted connection established via Multi Group Secure-Net.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Tactical Map Marker */}
            <div className="mt-12 h-40 bg-bg-offset border border-border relative group cursor-crosshair overflow-hidden">
               <div className="absolute inset-0 grayscale opacity-20 group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-1000">
                  <iframe 
                    title="Location"
                    width="100%" height="100%" frameBorder="0" 
                    src="https://maps.google.com/maps?q=50%20Pierneef%20Road,%20Fourways,%20Sandton&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  ></iframe>
               </div>
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center space-y-2">
                     <Globe className="text-primary mx-auto mb-2 animate-spin-slow" size={24} />
                     <span className="text-[10px] font-black text-text-main uppercase tracking-[0.5em]">HQ COORDINATES</span>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
