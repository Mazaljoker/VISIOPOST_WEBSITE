import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../components/Button';
import { HeaderProps } from '../types';

/**
 * Section Header - Navigation B2B responsive avec menu mobile
 */
const Header = ({ className = '' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-visio-violet via-visio-rose to-visio-bleu flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">V</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-visio-violet via-visio-rose to-visio-bleu bg-clip-text text-transparent">
              VisioPost
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-700 hover:text-visio-violet transition">
              Solution
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-visio-violet transition">
              Offre Réseau
            </a>
            <button className="text-gray-900 font-medium hover:text-visio-violet transition">
              Espace Client
            </button>
            <Button variant="primary" size="sm">
              Réserver une Démo
            </Button>
          </div>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex md:hidden items-center space-x-2">
            <Button variant="primary" size="sm" className="text-xs px-3 py-1.5">
              Démo
            </Button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#features"
              onClick={closeMenu}
              className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-visio-violet transition"
            >
              Solution
            </a>
            <a
              href="#pricing"
              onClick={closeMenu}
              className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-visio-violet transition"
            >
              Offre Réseau
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="block py-2 px-3 rounded-lg text-gray-900 font-medium hover:bg-gray-50 hover:text-visio-violet transition"
            >
              Espace Client
            </a>
            <div className="pt-2 border-t border-gray-100">
              <Button variant="primary" size="sm" className="w-full">
                Réserver une Démo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
