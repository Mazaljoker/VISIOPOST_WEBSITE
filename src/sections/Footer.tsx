import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { FooterProps } from '../types';

/**
 * Section Footer - Navigation complète + liens légaux + socials
 * Lignes originales : 692-766 (~76 lignes)
 */
const Footer = ({ className = '' }: FooterProps) => {
  return (
    <footer className={`bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-visio-violet via-visio-rose to-visio-bleu flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-bold">VisioPost</span>
            </div>
            <p className="text-gray-400 mb-6">
              La plateforme sociale des coopératives qui respectent l'autonomie de leurs adhérents.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-visio-rose transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-visio-bleu transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-visio-violet transition">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Produit */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Produit</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-white transition">Fonctionnalités</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition">Tarifs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Démo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Changelog</a></li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Ressources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Vidéos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">API</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Statut</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 VisioPost - Développé par VisioScreen, Suisse
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">CGV</a>
              <a href="#" className="hover:text-white transition">Mentions légales</a>
              <a href="#" className="hover:text-white transition">Confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
