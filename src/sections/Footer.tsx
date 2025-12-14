import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { NSignalLogo } from '../components/NSignalLogo';

const footerLinks = {
  product: [
    { label: 'Fonctionnalités', href: '#features' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  company: [
    { label: 'À propos', href: '#about' },
    { label: 'Contact', href: 'mailto:contact@nsignal.ai' },
    { label: 'Blog', href: '#blog' },
  ],
  legal: [
    { label: 'Mentions légales', href: '#legal' },
    { label: 'CGU', href: '#terms' },
    { label: 'Confidentialité', href: '#privacy' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:contact@nsignal.ai', label: 'Email' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-nreach-midnight text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <NSignalLogo variant="full" theme="dark" size="md" className="mb-6" />
            <p className="text-dark-text-muted max-w-sm mb-6">
              La plateforme de pilotage social qui capte les signaux de votre réseau et coordonne sans imposer.
            </p>
            <p className="text-nreach-electric font-medium italic">
              "n locations. One signal."
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Produit</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-dark-text-muted hover:text-nreach-electric transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-dark-text-muted hover:text-nreach-electric transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-dark-text-muted hover:text-nreach-electric transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-text-muted text-sm">
            © {new Date().getFullYear()} nSignal. Tous droits réservés.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-dark-surface hover:bg-nreach-electric/20 text-dark-text-muted hover:text-nreach-electric transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
