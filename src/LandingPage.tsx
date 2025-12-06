import { useState } from 'react';

// Sections
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import SocialProofSection from './sections/SocialProofSection';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
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
 * Refactoré avec nouveau contenu :
 * - Focus sur le problème duplicate content
 * - Pricing simplifié (setup + 30€/user)
 * - Multi-plateforme (Facebook + à venir)
 * - Network Intelligence teaser
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
