import { useState } from 'react';

// Sections
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import SocialProofSection from './sections/SocialProofSection';
import ProblemSection from './sections/ProblemSection';
import SolutionSection from './sections/SolutionSection';
import HowItWorksSection from './sections/HowItWorksSection';
import FeaturesSection from './sections/FeaturesSection';
import MultiPlatformSection from './sections/MultiPlatformSection';
import PricingSection from './sections/PricingSection';
import FaqSection from './sections/FaqSection';
import FinalCtaSection from './sections/FinalCtaSection';
import Footer from './sections/Footer';

// Components
import FloatingIcons from './components/FloatingIcons';
import RoiModal from './components/RoiModal';

/**
 * Landing Page nSignal - Vision Complete
 *
 * Structure optimisée pour la nouvelle vision :
 * 
 * 1. Hero - "Du contenu siège au post local en 40 secondes"
 * 2. SocialProof - Stats clés (15% → 80%, 40s, +300%)
 * 3. Problem - L'email est mort (le vrai problème = distribution)
 * 4. Solution - Les 3 modes (Auto, Suggéré, Participatif)
 * 5. HowItWorks - Le flux 40 secondes + comparaison avant/après
 * 6. Features - Dashboard Siège + App Franchisé + IA invisible
 * 7. MultiPlatform - Facebook + roadmap plateformes
 * 8. Pricing - 30€/magasin/mois simple
 * 9. FAQ - Questions fréquentes
 * 10. FinalCTA - Pitch final + Calendly
 * 11. Footer
 */
const LandingPage = () => {
  const [isRoiModalOpen, setIsRoiModalOpen] = useState(false);

  const handleOpenRoi = () => setIsRoiModalOpen(true);
  const handleCloseRoi = () => setIsRoiModalOpen(false);

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg relative">
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
        <HowItWorksSection />
        <FeaturesSection />
        <MultiPlatformSection />
        <PricingSection onOpenRoi={handleOpenRoi} />
        <FaqSection />
        <FinalCtaSection onOpenRoi={handleOpenRoi} />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
