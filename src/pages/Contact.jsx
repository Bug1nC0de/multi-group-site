import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock,
  MessageSquare,
  Activity,
  Globe,
  ArrowRight,
  CheckCircle2,
  User,
  Users
} from 'lucide-react';
import LuxCard from '../components/LuxCard';
import PageHero from '../components/PageHero';
import { useTheme } from '../context/ThemeContext';
import Breadcrumbs from '../components/Breadcrumbs';
import './Contact.css';

const Contact = () => {
  const { theme } = useTheme();
  const [industry, setIndustry] = useState('');
  const [formStatus, setStatus] = useState('idle'); // idle, sending, success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => setStatus('success'), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-bg min-h-screen">
      <PageHero 
        title={<>Establish <br /><span>Contact</span></>}
        description="Our team of technical architects and consultants are ready to assist you with your industrial infrastructure requirements across Southern Africa."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="contact-container">
        <div className="contact-grid">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            className="contact-info-section"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="contact-title">Get In Touch</h1>
            <p className="contact-description">
              Have questions or need assistance? Our team is here to help you find the 
              right solutions for your business across Southern Africa.
            </p>

            <div className="contact-methods">
              <div className="contact-method-item">
                <MapPin className="contact-method-icon" />
                <div>
                  <h4 className="contact-method-title">Regional Offices</h4>
                  <p className="contact-method-text">Mozambique | South Africa | Swaziland | Namibia | Botswana</p>
                </div>
              </div>

              <div className="contact-method-item">
                <Phone className="contact-method-icon" />
                <div>
                  <h4 className="contact-method-title">Phone</h4>
                  <p className="contact-method-text">+27 (0) 861 102 203</p>
                </div>
              </div>

              <div className="contact-method-item">
                <Mail className="contact-method-icon" />
                <div>
                  <h4 className="contact-method-title">Email</h4>
                  <p className="contact-method-text">info@multigroupinc.com</p>
                </div>
              </div>

              <div className="contact-method-item">
                <Clock className="contact-method-icon" />
                <div>
                  <h4 className="contact-method-title">Business Hours</h4>
                  <p className="contact-method-text">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    24/7 Technical Support Available
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="contact-form-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="success-message"
                >
                  <CheckCircle2 className="success-icon" />
                  <h3 className="text-2xl font-bold text-text-main mb-4">Message Sent!</h3>
                  <p className="text-text-muted mb-8">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="btn btn-outline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input 
                      required 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      type="text" 
                      placeholder="John Doe"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input 
                      required 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      type="email" 
                      placeholder="john@example.com"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      type="tel" 
                      placeholder="+27 XX XXX XXXX"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Industry Interest</label>
                    <select 
                      value={industry} 
                      onChange={(e) => setIndustry(e.target.value)}
                      className="form-select"
                    >
                      <option value="">Select an industry...</option>
                      {['Security', 'IT', 'Energy', 'Construction', 'Rail', 'Agriculture', 'Other'].map(opt => (
                        <option key={opt} value={opt}>{opt} Industry</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea 
                      required 
                      name="message" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      placeholder="Tell us about your requirements..."
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'sending'}
                    className="submit-button"
                  >
                    {formStatus === 'sending' ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Contact Information for Key Personnel */}
      <section className="section-padding bg-bg">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-text-main mb-4 uppercase tracking-tight">Key Personnel</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              { 
                name: "Lee Ann Pillay", 
                organization: "Multi-Group Incorporated Lda - Moz",
                emails: ["lee-ann@multigroupinc.com"],
                phones: ["+258 875988899"],
                phoneLabels: ["WhatsApp"]
              },
              { 
                name: "Peter Trousdale", 
                organization: "Multi-Group Incorporated Lda - RSA",
                emails: ["peter@multigroupinc.com"],
                phones: ["+27 836501682"],
                phoneLabels: ["Tel"]
              }
            ].map((person, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative flex flex-col items-center justify-between border border-border rounded-3xl py-12 px-8 transition-all hover:bg-primary/5 hover:border-primary/50 shadow-sm"
              >
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-black text-text-main tracking-tight mb-2 group-hover:text-primary transition-colors">{person.name}</h3>
                  <p className="text-primary font-bold text-[10px] uppercase tracking-[0.2em]">{person.organization}</p>
                </div>
                
                <div className="flex flex-col gap-4 items-center text-center">
                  {person.phones.map((phone, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-text-muted mb-1">{person.phoneLabels[idx]}</span>
                      <a href={`tel:${phone}`} className="text-sm font-bold text-text-main hover:text-primary transition-colors">{phone}</a>
                    </div>
                  ))}
                  {person.emails.map((email, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-text-muted mb-1">Email</span>
                      <a href={`mailto:${email}`} className="text-sm font-bold text-text-main hover:text-primary transition-colors">{email}</a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departmental Grid */}
      <section className="section-padding bg-bg-offset">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <MessageSquare size={24} />, 
                title: "Sales Inquiries", 
                desc: "Request quotes or specialized master-keying consultations.", 
                email: "sales@multigroupinc.com" 
              },
              { 
                icon: <Activity size={24} />, 
                title: "Technical Support", 
                desc: "Existing account holders can request troubleshooting or maintenance.", 
                email: "support@multigroupinc.com" 
              },
              { 
                icon: <Globe size={24} />, 
                title: "General Admin", 
                desc: "Strategic operations and international logistics coordination.", 
                email: "admin@multigroupinc.com" 
              }
            ].map((item, i) => (
              <LuxCard key={i} index={i} className="group">
                <div className="card-content">
                  <div className="w-12 h-12 bg-transparent flex items-center justify-center text-primary mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-3">{item.title}</h3>
                  <p className="text-text-muted text-sm mb-6">{item.desc}</p>
                  <a href={`mailto:${item.email}`} className="mt-auto text-xs font-bold text-primary flex items-center gap-2 hover:gap-3 transition-all no-underline uppercase tracking-widest">
                    Email Dept <ArrowRight size={14} />
                  </a>
                </div>
              </LuxCard>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-bg" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="relative h-96 border border-border rounded-xl overflow-hidden shadow-lg group">
            <iframe 
              title="HQ" width="100%" height="100%" frameBorder="0" 
              src="https://maps.google.com/maps?q=50%20Pierneef%20Road,%20Fourways,%20Sandton&t=&z=15&ie=UTF8&iwloc=&output=embed"
              style={{ filter: theme === 'dark' ? 'invert(90%) hue-rotate(180deg)' : 'none' }}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
