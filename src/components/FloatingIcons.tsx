import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Heart,
  Share2,
  MessageCircle,
  ThumbsUp,
  Send,
  TrendingUp,
  Sparkles,
  Users
} from 'lucide-react';

/**
 * Composant FloatingIcons - Éléments flottants en arrière-plan
 * Icônes réseaux sociaux animées avec couleurs VisioScreen
 *
 * Features:
 * - Mouvement aléatoire (float + drift)
 * - Changement de couleur graduel (VisioScreen palette)
 * - Positions aléatoires
 * - Opacité faible pour ne pas distraire
 */
const FloatingIcons = () => {
  // Configuration des icônes avec positions et animations aléatoires
  const floatingIcons = [
    // Facebook - Top left
    {
      Icon: Facebook,
      style: {
        top: '10%',
        left: '5%',
        animationDelay: '0s',
        animationDuration: '20s'
      }
    },
    // Instagram - Top right
    {
      Icon: Instagram,
      style: {
        top: '15%',
        right: '10%',
        animationDelay: '2s',
        animationDuration: '25s'
      }
    },
    // Twitter - Middle left
    {
      Icon: Twitter,
      style: {
        top: '30%',
        left: '8%',
        animationDelay: '4s',
        animationDuration: '18s'
      }
    },
    // LinkedIn - Middle right
    {
      Icon: Linkedin,
      style: {
        top: '35%',
        right: '5%',
        animationDelay: '1s',
        animationDuration: '22s'
      }
    },
    // Heart - Upper middle left
    {
      Icon: Heart,
      style: {
        top: '20%',
        left: '15%',
        animationDelay: '3s',
        animationDuration: '16s'
      }
    },
    // Share2 - Upper middle right
    {
      Icon: Share2,
      style: {
        top: '25%',
        right: '18%',
        animationDelay: '5s',
        animationDuration: '19s'
      }
    },
    // MessageCircle - Middle center left
    {
      Icon: MessageCircle,
      style: {
        top: '50%',
        left: '3%',
        animationDelay: '2.5s',
        animationDuration: '21s'
      }
    },
    // ThumbsUp - Middle center right
    {
      Icon: ThumbsUp,
      style: {
        top: '55%',
        right: '8%',
        animationDelay: '4.5s',
        animationDuration: '17s'
      }
    },
    // Send - Lower left
    {
      Icon: Send,
      style: {
        top: '70%',
        left: '10%',
        animationDelay: '1.5s',
        animationDuration: '23s'
      }
    },
    // TrendingUp - Lower right
    {
      Icon: TrendingUp,
      style: {
        top: '75%',
        right: '12%',
        animationDelay: '3.5s',
        animationDuration: '20s'
      }
    },
    // Sparkles - Lower middle left
    {
      Icon: Sparkles,
      style: {
        top: '85%',
        left: '6%',
        animationDelay: '0.5s',
        animationDuration: '24s'
      }
    },
    // Users - Lower middle right
    {
      Icon: Users,
      style: {
        top: '90%',
        right: '15%',
        animationDelay: '2.8s',
        animationDuration: '18s'
      }
    },
    // Heart - Middle extra
    {
      Icon: Heart,
      style: {
        top: '45%',
        left: '20%',
        animationDelay: '6s',
        animationDuration: '26s'
      }
    },
    // Share2 - Middle extra
    {
      Icon: Share2,
      style: {
        top: '60%',
        right: '20%',
        animationDelay: '5.5s',
        animationDuration: '15s'
      }
    },
    // MessageCircle - Top extra
    {
      Icon: MessageCircle,
      style: {
        top: '8%',
        left: '25%',
        animationDelay: '4.2s',
        animationDuration: '22s'
      }
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingIcons.map((item, index) => {
        const { Icon, style } = item;
        return (
          <div
            key={index}
            className="absolute animate-float-random animate-color-shift"
            style={style}
          >
            <Icon
              className="w-12 h-12 opacity-[0.08]"
              strokeWidth={1.5}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
