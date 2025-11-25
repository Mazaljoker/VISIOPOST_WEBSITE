import Button from '../components/Button';
import { HeaderProps } from '../types';

/**
 * Section Header - Navigation B2B avec "Espace Client"
 * Transformation : "Connexion" -> "Espace Client", "Démo" -> "Réserver une Démo"
 */
const Header = ({ className = '' }: HeaderProps) => {
  return (
    <nav className={`fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-visio-violet via-visio-rose to-visio-bleu flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-visio-violet via-visio-rose to-visio-bleu bg-clip-text text-transparent">
              VisioPost
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#features" className="text-gray-700 hover:text-visio-violet transition hidden md:block">
              Solution
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-visio-violet transition hidden md:block">
              Offre Réseau
            </a>
            <button className="text-gray-900 font-medium hover:text-visio-violet transition px-4">
              Espace Client
            </button>
            <Button variant="primary" size="sm">
              Réserver une Démo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
