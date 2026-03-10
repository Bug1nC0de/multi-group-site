import { motion } from 'framer-motion';

const Disclaimer = () => {
  return (
    <div>
      <section className="py-32 dark-section hero-pattern relative">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Legal Information</span>
            <h1 className="section-title">Legal <br /><span>Disclaimer</span></h1>
            <p className="text-gray-400 max-w-2xl text-lg font-medium leading-relaxed">
              Terms of use and legal notices regarding the Multi Group Inc digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding dark-section relative">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto space-y-20">
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-4">
                <span className="text-primary font-black">01.</span> Agreement of Use
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg font-medium border-l-2 border-primary/20 pl-8">
                By accessing and using this website, you agree to be bound by the terms and conditions set forth by Multi Group Inc. We reserve the right to amend these terms, conditions, and notices at any time without prior notice.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-4">
                <span className="text-primary font-black">02.</span> Nature of Information
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg font-medium border-l-2 border-primary/20 pl-8">
                All content provided on this website, including information about products and services, is for informational purposes only. It does not constitute a formal offer. While we strive to maintain the accuracy of all information, technical or factual inaccuracies may occur.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-4">
                <span className="text-primary font-black">03.</span> Limitation of Liability
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg font-medium border-l-2 border-primary/20 pl-8">
                To the maximum extent permitted by South African and International law, Multi Group Inc, its agents, and employees shall not be liable for any direct, indirect, special, consequential, or punitive damages arising from the use of this website or the information gathered from it.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-4">
                <span className="text-primary font-black">04.</span> Third-Party Links
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg font-medium border-l-2 border-primary/20 pl-8">
                This website may contain links to third-party websites. These links are provided for your convenience only. Multi Group Inc does not endorse, control, or take responsibility for the content, privacy policies, or practices of any third-party sites.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-4">
                <span className="text-primary font-black">05.</span> Intellectual Property
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg font-medium border-l-2 border-primary/20 pl-8">
                All content, including text, graphics, and logos, is the property of Multi Group Inc and is protected by international copyright laws. Replication or redistribution of any content is strictly prohibited without prior written consent.
              </p>
              <p className="text-gray-500 leading-relaxed mt-10 p-8 bg-white/5 rounded-none italic font-medium text-center">
                Mul-T-Lock® is a registered trademark of Mul-T-Lock Limited. All other trademarks used on this site are the property of their respective owners and are used with permission.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Disclaimer;
