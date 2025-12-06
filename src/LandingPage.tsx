import { useState } from 'react';

// Sections
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import SocialProofSection from './sections/SocialProofSection';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
import BeforeAfterSection from './sections/BeforeAfterSection';
import HowItWorksSection from './sections/HowItWorksSection';
import UseCasesSection from './sections/UseCasesSection';
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
 * Structure des sections (ordre optimisé pour conversion) :
 * 
 * 1. Hero - Accroche "0 duplicate content"
 * 2. SocialProof - Stats crédibilité (+340%, etc.)
 * 3. Problem - Pénalité Facebook duplicate
 * 4. Solution - Comment on résout (3 points clés)
 * 5. BeforeAfter - Simulation posts Facebook (impact visuel)
 * 6. HowItWorks - Flowchart animé Siège→VisioPost→Magasins + teaser modes
 * 7. UseCases - Exemples par secteur (Optique, Distribution, Sport, Coiffure)
 * 8. Features - Fonctionnalités détaillées
 * 9. MultiPlatform - Facebook + Instagram/TikTok/LinkedIn à venir
 * 10. NetworkIntelligence - Teaser V5 (IA qui apprend)
 * 11. Pricing - Tarification (setup + 30€/user)
 * 12. FAQ - Questions fréquentes
 * 13. FinalCTA - Appel à l'action Calendly
 * 14. Footer
 */
const LandingPage = () => {
  const [isRoiModalOpen, setIsRoiModalOpen] = useState(false);

  const handleOpenRoi = () => setIsRoiModalOpen(true);
  const handleCloseRoi = () => setIsRoiModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative">
      {/* ROI Simulator Modal */}
      <RoiModal isOpen={isRoiModalOpen} onClose={handleCloseRoi} />

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
        <HowItWorksSection />
        <UseCasesSection />
        <FeaturesSection />
        <MultiPlatformSection />
        <NetworkIntelligenceSection />
        <PricingSection onOpenRoi={handleOpenRoi} />
        <FaqSection />
        <FinalCtaSection onOpenRoi={handleOpenRoi} />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
