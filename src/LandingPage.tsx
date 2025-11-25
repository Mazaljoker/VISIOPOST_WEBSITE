import { useState } from 'react';

// Sections
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import SocialProofSection from './sections/SocialProofSection';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
import FeaturesSection from './sections/FeaturesSection';
import BeforeAfterSection from './sections/BeforeAfterSection';
import PricingSection from './sections/PricingSection';
import FaqSection from './sections/FaqSection';
import FinalCtaSection from './sections/FinalCtaSection';
import Footer from './sections/Footer';

// Components
import FloatingIcons from './components/FloatingIcons';
import RoiModal from './components/RoiModal';

/**
 * Landing Page VisioPost - Composant principal
 *
 * Refactoré selon les principes KISS, SRP, SOLID, DRY
 * - Avant : 771 lignes monolithiques
 * - Après : 45 lignes d'orchestration
 *
 * Architecture :
 * - 11 sections modulaires
 * - 5 composants réutilisables
 * - 6 fichiers de données
 * - 1 hook custom
 *
 * @see CLAUDE.md pour les guidelines complètes
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
        <BeforeAfterSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection onOpenRoi={() => setIsRoiModalOpen(true)} />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
