import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useScroll, motion, useSpring, AnimatePresence } from 'framer-motion';
import { Phone, Shield, ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[60vh] w-full">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <Shield size={48} className="text-primary" />
    </motion.div>
  </div>
);

// Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Capabilities = lazy(() => import('./pages/Capabilities'));
const Innovation = lazy(() => import('./pages/Innovation'));
const Products = lazy(() => import('./pages/Products'));
const Services = lazy(() => import('./pages/Services'));
const MulTLock = lazy(() => import('./pages/MulTLock'));
const Contact = lazy(() => import('./pages/Contact'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Careers = lazy(() => import('./pages/Careers'));
const Warranties = lazy(() => import('./pages/Warranties'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const SABS = lazy(() => import('./pages/SABS'));

// Product Category Hubs
const HighSecurityDoors = lazy(() => import('./pages/products/HighSecurityDoors'));
const AccessControl = lazy(() => import('./pages/products/AccessControl'));
const VehicleSecurity = lazy(() => import('./pages/products/VehicleSecurity'));
const ElectronicSecurity = lazy(() => import('./pages/products/ElectronicSecurity')); 
const SurveillanceSystems = lazy(() => import('./pages/products/surveillance/SurveillanceSystems'));
const FacialRecognition = lazy(() => import('./pages/products/facial-recognition/FacialRecognition'));
const AssetTracking = lazy(() => import('./pages/products/asset-tracking/AssetTracking'));
const SmartCardTechnology = lazy(() => import('./pages/products/smart-cards/SmartCardTechnology'));
const TimeAttendance = lazy(() => import('./pages/products/time-attendance/TimeAttendance'));
const WirelessAlarms = lazy(() => import('./pages/products/alarms/WirelessAlarms'));
const OtherProducts = lazy(() => import('./pages/products/other/OtherProducts'));

// New Multi Group Solutions
const Solutions = lazy(() => import('./pages/Solutions'));
const SecuritySolutions = lazy(() => import('./pages/solutions/SecuritySolutions'));
const ITSolutions = lazy(() => import('./pages/solutions/ITSolutions'));
const ElectricalSolutions = lazy(() => import('./pages/solutions/ElectricalSolutions'));
const SolarSolutions = lazy(() => import('./pages/solutions/SolarSolutions'));
const RailSolutions = lazy(() => import('./pages/solutions/RailSolutions'));
const RefrigerationSolutions = lazy(() => import('./pages/solutions/RefrigerationSolutions'));
const ConstructionSolutions = lazy(() => import('./pages/solutions/ConstructionSolutions'));
const AgricultureSolutions = lazy(() => import('./pages/solutions/AgricultureSolutions'));
const AVSolutions = lazy(() => import('./pages/solutions/AVSolutions'));
const EnergySolutions = lazy(() => import('./pages/solutions/Energy'));

// Sub-Details - Mul-T-Lock
const Cylinders = lazy(() => import('./pages/products/multlock/Cylinders'));
const LockUpgrades = lazy(() => import('./pages/products/multlock/LockUpgrades'));
const Innovations = lazy(() => import('./pages/products/multlock/Innovations'));
const ElectronicLocking = lazy(() => import('./pages/products/multlock/ElectronicLocking'));
const Padlocks = lazy(() => import('./pages/products/multlock/Padlocks'));

// Sub-Details - Access Control
const BiometricAccess = lazy(() => import('./pages/products/access-control/BiometricAccess'));
const BioFlash = lazy(() => import('./pages/products/access-control/BioFlash'));
const IntelligentKeys = lazy(() => import('./pages/products/access-control/IntelligentKeys'));

// Sub-Details - Facial Recognition
const ClientFace = lazy(() => import('./pages/products/facial-recognition/ClientFace'));
const MatrixKeeper = lazy(() => import('./pages/products/facial-recognition/MatrixKeeper'));
const Notifaceii = lazy(() => import('./pages/products/facial-recognition/Notifaceii'));
const WallMountUnit = lazy(() => import('./pages/products/facial-recognition/WallMountUnit'));

// Sub-Details - Asset Tracking
const AssetTrackingOverview = lazy(() => import('./pages/products/asset-tracking/AssetTrackingOverview'));
const NetworkSolutions = lazy(() => import('./pages/products/asset-tracking/NetworkSolutions'));
const MulTLockTrackingSystems = lazy(() => import('./pages/products/asset-tracking/MulTLockTrackingSystems'));

// Sub-Details - Smart Cards & Alarms
const SmartCardOverview = lazy(() => import('./pages/products/smart-cards/SmartCardOverview'));
const WirelessAlarmsOverview = lazy(() => import('./pages/products/alarms/WirelessAlarmsOverview'));

// Sub-Details - Surveillance
const AllInOneDVR = lazy(() => import('./pages/products/surveillance/AllInOneDVR'));
const S1BlackBox = lazy(() => import('./pages/products/surveillance/S1BlackBox'));
const S2BlackBox = lazy(() => import('./pages/products/surveillance/S2BlackBox'));
const MobiIBlackBox = lazy(() => import('./pages/products/surveillance/MobiIBlackBox'));
const RuggedMobileDVR = lazy(() => import('./pages/products/surveillance/RuggedMobileDVR'));
const SurveillanceCameras = lazy(() => import('./pages/products/surveillance/SurveillanceCameras'));

// Sub-Details - Time & Attendance
const MobileAttendance = lazy(() => import('./pages/products/time-attendance/MobileAttendance'));
const TimeAttendanceRecorder = lazy(() => import('./pages/products/time-attendance/TimeAttendanceRecorder'));

// Sub-Details - Vehicle
const TransmissionTopLock = lazy(() => import('./pages/products/vehicle/TransmissionTopLock'));
const ContainerLocks = lazy(() => import('./pages/products/vehicle/ContainerLocks'));
const TransmissionInternalLock = lazy(() => import('./pages/products/vehicle/TransmissionInternalLock'));
const KingpinLocks = lazy(() => import('./pages/products/vehicle/KingpinLocks'));
const ParkingPoles = lazy(() => import('./pages/products/vehicle/ParkingPoles'));
const TrailerRingLocks = lazy(() => import('./pages/products/vehicle/TrailerRingLocks'));
const WheelClamps = lazy(() => import('./pages/products/vehicle/WheelClamps'));

// Sub-Details - Other
const OtherLocks = lazy(() => import('./pages/products/other/OtherLocks'));
const SafesAndCabinets = lazy(() => import('./pages/products/other/SafesAndCabinets'));
const WindowFilm = lazy(() => import('./pages/products/other/WindowFilm'));

const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {React.cloneElement(children, { location })}
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <ScrollToTop />
      
      {/* Global Scroll Progress */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <div className="min-h-screen bg-bg flex flex-col">
        <Navbar />
        
        <div className="flex-grow page-wrapper">
          <PageWrapper>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/capabilities" element={<Capabilities />} />
                <Route path="/innovation" element={<Innovation />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path="/mul-t-lock" element={<MulTLock />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/warranties" element={<Warranties />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/certifications" element={<SABS />} />
                
                {/* New Solutions Routes */}
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/solutions/security" element={<SecuritySolutions />} />
                <Route path="/solutions/it" element={<ITSolutions />} />
                <Route path="/solutions/electrical" element={<ElectricalSolutions />} />
                <Route path="/solutions/solar" element={<SolarSolutions />} />
                <Route path="/solutions/rail" element={<RailSolutions />} />
                <Route path="/solutions/refrigeration" element={<RefrigerationSolutions />} />
                <Route path="/solutions/construction" element={<ConstructionSolutions />} />
                <Route path="/solutions/agriculture" element={<AgricultureSolutions />} />
                <Route path="/solutions/av" element={<AVSolutions />} />
                <Route path="/solutions/energy" element={<EnergySolutions />} />

                {/* Category Hubs */}
                <Route path="/products/high-security-doors" element={<HighSecurityDoors />} />
                <Route path="/products/access-control" element={<AccessControl />} />
                <Route path="/products/vehicle-security" element={<VehicleSecurity />} />
                <Route path="/products/electronic-security" element={<ElectronicSecurity />} />
                <Route path="/products/surveillance" element={<SurveillanceSystems />} />
                <Route path="/products/facial-recognition" element={<FacialRecognition />} />
                <Route path="/products/asset-tracking" element={<AssetTracking />} />
                <Route path="/products/smart-cards" element={<SmartCardTechnology />} />
                <Route path="/products/time-attendance" element={<TimeAttendance />} />
                <Route path="/products/alarms" element={<WirelessAlarms />} />
                <Route path="/products/other" element={<OtherProducts />} />

                {/* Sub-Details */}
                <Route path="/products/multlock/cylinders" element={<Cylinders />} />
                <Route path="/products/multlock/upgrades" element={<LockUpgrades />} />
                <Route path="/products/multlock/innovations" element={<Innovations />} />
                <Route path="/products/multlock/electronic" element={<ElectronicLocking />} />
                <Route path="/products/multlock/padlocks" element={<Padlocks />} />

                <Route path="/products/access-control/biometrics" element={<BiometricAccess />} />
                <Route path="/products/access-control/facial" element={<FacialRecognition />} />
                <Route path="/products/access-control/attendance" element={<TimeAttendance />} />
                <Route path="/products/access-control/bio-flash" element={<BioFlash />} />
                <Route path="/products/access-control/intelligent-keys" element={<IntelligentKeys />} />

                <Route path="/products/facial-recognition/client-face" element={<ClientFace />} />
                <Route path="/products/facial-recognition/matrix-keeper" element={<MatrixKeeper />} />
                <Route path="/products/facial-recognition/notifaceii" element={<Notifaceii />} />
                <Route path="/products/facial-recognition/wall-mount" element={<WallMountUnit />} />

                <Route path="/products/asset-tracking/overview" element={<AssetTrackingOverview />} />
                <Route path="/products/asset-tracking/network" element={<NetworkSolutions />} />
                <Route path="/products/asset-tracking/systems" element={<MulTLockTrackingSystems />} />

                <Route path="/products/smart-cards/overview" element={<SmartCardOverview />} />
                <Route path="/products/alarms/overview" element={<WirelessAlarmsOverview />} />

                <Route path="/products/surveillance/dvr" element={<AllInOneDVR />} />
                <Route path="/products/surveillance/s1" element={<S1BlackBox />} />
                <Route path="/products/surveillance/s2" element={<S2BlackBox />} />
                <Route path="/products/surveillance/mobi" element={<MobiIBlackBox />} />
                <Route path="/products/surveillance/mobile-dvr" element={<RuggedMobileDVR />} />
                <Route path="/products/surveillance/cameras" element={<SurveillanceCameras />} />

                <Route path="/products/time-attendance/mobile" element={<MobileAttendance />} />
                <Route path="/products/time-attendance/recorder" element={<TimeAttendanceRecorder />} />

                <Route path="/products/vehicle/transmission-top" element={<TransmissionTopLock />} />
                <Route path="/products/vehicle/container-locks" element={<ContainerLocks />} />
                <Route path="/products/vehicle/transmission-internal" element={<TransmissionInternalLock />} />
                <Route path="/products/vehicle/kingpin" element={<KingpinLocks />} />
                <Route path="/products/vehicle/parking-poles" element={<ParkingPoles />} />
                <Route path="/products/vehicle/trailer-ring" element={<TrailerRingLocks />} />
                <Route path="/products/vehicle/wheel-clamps" element={<WheelClamps />} />

                <Route path="/products/other/locks" element={<OtherLocks />} />
                <Route path="/products/other/safes" element={<SafesAndCabinets />} />
                <Route path="/products/other/window-film" element={<WindowFilm />} />

                <Route path="*" element={<div className="pt-40 text-center text-text-main h-screen"><h1>404: PAGE NOT FOUND</h1><p className="text-primary mt-4">The requested high-security zone is inaccessible.</p></div>} />
              </Routes>
            </Suspense>
          </PageWrapper>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
