import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import LuxCard from './LuxCard';

const ProductPageTemplate = ({ 
  hero = {}, 
  subCategories = [], 
  sections = [],
  productName = ""
}) => {
  const displayProductName = productName || (typeof hero.title === 'string' ? hero.title : "");
  return (
    <div className="bg-bg">
      {/* Hero Section */}
      <section className="pt-48 pb-32 hero-pattern relative overflow-hidden bg-bg">
        {/* Cinematic Backdrop Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.03] -skew-x-12 translate-x-1/4 pointer-events-none"></div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumbs />
            {hero.subtitle && <span className="section-subtitle lg:mx-0">{hero.subtitle}</span>}
            <h1 className="section-title text-5xl md:text-8xl lg:text-9xl mb-12 tracking-tighter leading-[0.85]">
              {hero.title}
            </h1>
            {hero.description && (
              <p className="text-text-muted max-w-4xl text-xl font-medium leading-relaxed">
                {hero.description}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Sub-Category Navigation */}
      {subCategories.length > 0 && (
        <section className="py-16 bg-bg-offset border-y border-border">
          <div className="container relative z-10">
            <div className={`grid grid-cols-2 lg:grid-cols-${subCategories.length > 5 ? '5' : subCategories.length} gap-8 lg:gap-12`}>
              {subCategories.map((item, i) => (
                <LuxCard 
                  key={i} 
                  to={item.path}
                  index={i}
                  className={`min-h-[140px] ${item.active ? 'border-primary bg-primary/5' : ''}`}
                >
                  <div className="card-content">
                    <div className={`${item.active ? 'text-primary' : 'text-text-muted group-hover:text-primary'} mb-4 transition-colors`}>
                      {item.icon}
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-[0.3em] text-center ${item.active ? 'text-text-main' : 'text-text-muted group-hover:text-text-main'}`}>
                      {item.label}
                    </span>
                  </div>
                </LuxCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dynamic Sections */}
      {sections.map((section, idx) => (
        <section key={idx} className="section-padding bg-bg relative overflow-hidden">
          <div className="container relative z-10">
            {section.type === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                {section.items.map((item, i) => (
                  <LuxCard 
                    key={i}
                    index={i}
                    className="group"
                  >
                    <div className="card-content">
                      <div className="icon-3d-wrapper mb-8">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                      <p className="text-text-muted text-base leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </LuxCard>
                ))}
              </div>
            )}

            {section.type === 'image-text' && (
              <div className={`grid lg:grid-cols-2 gap-24 items-center ${section.reverse ? 'lg:flex-row-reverse' : ''}`}>
                <div className={section.reverse ? 'lg:order-2' : ''}>
                   <div className="relative">
                      <div className="absolute -inset-10 bg-primary/5 blur-3xl rounded-none opacity-50"></div>
                      <LuxCard 
                        className="p-2 bg-bg-offset border border-border rounded-none overflow-hidden aspect-video shadow-2xl"
                      >
                         <img src={section.image} alt={section.title} className="w-full h-full object-cover grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-1000" />
                      </LuxCard>
                   </div>
                </div>
                <div className={`space-y-8 text-center lg:text-left ${section.reverse ? 'lg:order-1' : ''}`}>
                   {section.subtitle && <span className="section-subtitle lg:mx-0">{section.subtitle}</span>}
                   <h2 className="section-title text-4xl md:text-5xl mb-6">{section.title}</h2>
                   <p className="text-text-muted text-lg leading-relaxed font-medium">
                      {section.desc}
                   </p>
                   {section.list && (
                     <ul className="space-y-4 pt-4">
                       {section.list.map((item, i) => (
                         <li key={i} className="flex items-center gap-4 text-text-muted">
                           <div className="w-6 h-6 border border-primary/30 flex items-center justify-center text-primary">
                             <CheckCircle2 size={14} />
                           </div>
                           <span className="text-sm font-bold tracking-tight uppercase">{item}</span>
                         </li>
                       ))}
                     </ul>
                   )}
                </div>
              </div>
            )}

            {section.type === 'platforms' && (
              <div className="space-y-24">
                <div className="text-center">
                  <span className="section-subtitle mx-auto">{section.subtitle}</span>
                  <h2 className="section-title">{section.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                  {section.items.map((item, i) => (
                    <LuxCard 
                      key={i}
                      index={i}
                      className="group"
                    >
                      <div className="card-content">
                        <div className="icon-3d-wrapper mb-8">
                          {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-text-muted text-sm mb-6 leading-relaxed h-20">{item.desc}</p>
                        {item.features && (
                          <ul className="space-y-3 pt-6 border-t border-border w-full">
                            {item.features.map((f, j) => (
                              <li key={j} className="flex items-center gap-2 text-[10px] font-black text-text-muted uppercase tracking-widest justify-center">
                                <CheckCircle2 size={14} className="text-primary" /> {f}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </LuxCard>
                  ))}
                </div>
              </div>
            )}
            {section.type === 'brand-hero' && (
              <div className="relative h-[60vh] -mx-8 md:-mx-12 mb-32 overflow-hidden border-y border-border">
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover grayscale opacity-50 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg"></div>
                <div className="absolute bottom-12 left-12 flex items-center gap-6">
                  <div className="w-16 h-16 border border-primary/30 flex items-center justify-center text-primary bg-bg/40 backdrop-blur-md">
                    {section.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">{section.subtitle}</p>
                    <p className="text-3xl font-bold text-text-main tracking-tight uppercase">{section.title}</p>
                  </div>
                </div>
              </div>
            )}

            {section.type === 'technical-specs' && (
              <div className="space-y-20">
                <div className="text-center">
                  <span className="section-subtitle mx-auto">{section.subtitle}</span>
                  <h2 className="section-title">{section.title}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                  {section.items.map((item, i) => (
                    <LuxCard key={i} index={i} className="border-l-4 border-l-primary group">
                      <div className="card-content">
                        <span className="text-[10px] text-text-muted uppercase tracking-[0.3em] font-black block mb-3 text-center">{item.title}</span>
                        <span className="text-xl font-bold group-hover:text-primary transition-colors text-center">{item.spec}</span>
                      </div>
                    </LuxCard>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Request Quote CTA */}
      <section className="py-24 bg-primary/5 border-y border-border">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div>
              <h2 className="text-4xl font-bold mb-4 tracking-tight">Need a customized security solution?</h2>
              <p className="text-text-muted text-lg font-medium">Connect with our strategic advisors for a professional consultation.</p>
            </div>
            <Link 
              to={`/contact?product=${encodeURIComponent(displayProductName)}`}
              className="btn btn-primary px-12 py-5 text-[11px] group"
            >
              Initiate Consultation
              <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPageTemplate;
