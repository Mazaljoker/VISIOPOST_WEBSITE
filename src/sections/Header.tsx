import Button from '../components/Button';
import { HeaderProps } from '../types';

/**
 * Section Header - Navigation sticky avec logo + links + CTAs
 * Lignes originales : 27-54 (~29 lignes)
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
            <a href="#features" className="text-gray-700 hover:text-visio-violet transition">
              Fonctionnalités
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-visio-violet transition">
              Tarifs
            </a>
            <button className="text-gray-700 hover:text-visio-violet transition">
              Connexion
            </button>
            <Button variant="primary" size="sm">
              Démo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
