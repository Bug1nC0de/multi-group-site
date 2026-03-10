import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div>
      <section className="py-32 dark-section hero-pattern relative">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Legal Framework</span>
            <h1 className="section-title">Terms of <br /><span>Service</span></h1>
            <p className="text-gray-400 max-w-2xl text-lg font-medium leading-relaxed">
              The governing terms for all security services and product installations provided by Multi Group Inc.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding dark-section relative">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto space-y-20">
            {[
              { title: "Service Agreements", text: "All security installations are subject to a detailed site assessment and a signed technical specification document. We do not provide services without a formal work order." },
              { title: "Payment Terms", text: "A 50% deposit is required for custom-engineered solutions (doors, custom gates). Final payment is due immediately upon completion of installation and testing." },
              { title: "Maintenance & Access", text: "For surveillance and electronic systems, clients must provide necessary network access for configuration and remote monitoring setup where applicable." },
              { title: "Liability", text: "While our products are engineered for maximum security, no system is entirely unbreachable. We provide deterrence and delay; we do not provide absolute insurance against loss." }
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-4">
                  <span className="text-primary font-black">0{i + 1}.</span> {item.title}
                </h2>
                <p className="text-gray-400 leading-relaxed text-lg font-medium border-l-2 border-primary/20 pl-8">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default TermsOfService;
