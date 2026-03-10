import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div>
      <section className="py-32 dark-section hero-pattern relative">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Data Protection</span>
            <h1 className="section-title">Privacy <br /><span>Policy</span></h1>
            <p className="text-gray-400 max-w-2xl text-lg font-medium leading-relaxed">
              Committed to the confidentiality and security of your personal information in accordance with the Protection of Personal Information Act (POPIA).
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding dark-section relative">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto space-y-20">
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-4">
                <span className="text-primary font-black">01.</span> Information Collection
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg font-medium border-l-2 border-primary/20 pl-8">
                When you visit the Multi Group Inc website, we automatically collect technical data including your IP address, browser type, domain names, and referring website addresses. Any personal details provided via our contact forms are collected based on your voluntary input and treated as consent to contact you regarding our services.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-4">
                <span className="text-primary font-black">02.</span> Purpose of Collection
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg font-medium border-l-2 border-primary/20 pl-8">
                We collect this information to maintain the quality of our online services, provide general statistics regarding website usage, and respond to specific security service inquiries. We analyze user trends to improve our digital presence and marketing efficiency.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-4">
                <span className="text-primary font-black">03.</span> Data Sharing & Security
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg font-medium border-l-2 border-primary/20 pl-8">
                Multi Group Inc does not sell, rent, or lease gathered information to third parties. Sections of our website involving sensitive data are protected by SSL (Secure Socket Layer) encryption. All information is stored on secure servers with limited access to prevent unauthorized disclosure.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-4">
                <span className="text-primary font-black">04.</span> Cookie Policy
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg font-medium border-l-2 border-primary/20 pl-8">
                Our website uses cookies to authenticate users, maintain session states, and track site preferences. Cookies enhance the security of information exchanged during your session and provide a more personalized browsing experience.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-4">
                <span className="text-primary font-black">05.</span> Your Rights (POPIA)
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg font-medium border-l-2 border-primary/20 pl-8">
                In accordance with South African law (POPIA), you have the right to access the personal information we hold about you, request corrections to inaccurate data, or object to the processing of your information for purposes such as direct marketing.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-4">
                <span className="text-primary font-black">06.</span> Privacy Enquiries
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg font-medium border-l-2 border-primary/20 pl-8">
                For any questions regarding this policy or our data handling practices, please contact our administration department at <strong className="text-primary">admin@multi-locking.co.za</strong> or visit our head office in Fourways, Sandton.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default PrivacyPolicy;
