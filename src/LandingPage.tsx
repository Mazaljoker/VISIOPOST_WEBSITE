import { useState } from 'react';

// Sections
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import SocialProofSection from './sections/SocialProofSection';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
import BeforeAfterSection from './sections/BeforeAfterSection';
import FeaturesSection from './sections/FeaturesSection';
import MultiPlatformSection from './sections/MultiPlatformSection';
import NetworkIntelligenceSection from './sections/NetworkIntelligenceSection';
import PricingSection from './sections/PricingSection';
import FaqSection from './sections/FaqSection';
import FinalCtaSection from './sections/FinalCtaSection';
import Footer from './sections/Footer';

// Components
import FloatingIcons from './components/FloatingIcons';
import RoiModal from './components/RoiModal';

/**
 * Landing Page VisioPost V3.1.1
 *
 * Structure des sections :
 * 1. Hero - Accroche principale
 * 2. Social Proof - Stats et confiance
 * 3. Problem - Le problème duplicate content
 * 4. Solution - Comment on résout
 * 5. BeforeAfter - Simulation visuelle Facebook
 * 6. Features - Fonctionnalités
 * 7. MultiPlatform - Facebook + à venir
 * 8. NetworkIntelligence - Teaser V5
 * 9. Pricing - Tarification
 * 10. FAQ - Questions fréquentes
 * 11. FinalCTA - Appel à l'action
 * 12. Footer
 */
const LandingPage = () => {
  const [isRoiModalOpen, setIsRoiModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative">
      {/* ROI Simulator Modal */}
      <RoiModal isOpen={isRoiModalOpen} onClose={() => setIsRoiModalOpen(false)} />

      {/* Floating background icons */}
      <FloatingIcons />

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <SocialProofSection />
        <ProblemSection />
        <SolutionSection />
        <BeforeAfterSection />
        <FeaturesSection />
        <MultiPlatformSection />
        <NetworkIntelligenceSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
