import { ReactNode } from 'react';

// ============================================
// COMPONENT PROPS TYPES
// ============================================

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export interface PricingCardProps {
  title: string;
  price: number | null;
  period?: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
  variant?: 'free' | 'starter' | 'pro' | 'centrale';
  highlight?: string;
  onClick?: () => void;
}

export interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export interface StepCardProps {
  number: string;
  title: string;
  icon: ReactNode;
  features: string[];
  highlight: string;
  showArrow?: boolean;
}

export interface SectionContainerProps {
  children: ReactNode;
  background?: 'white' | 'gray' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}

// ============================================
// DATA TYPES
// ============================================

export interface Feature {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

export interface Step {
  number: string;
  title: string;
  icon: string;
  features: string[];
  highlight: string;
  gradientIcon: string;
  gradientNumber: string;
  highlightColor: string;
}

export interface DegressivityTier {
  min: number;
  max: number;
  price: number;
}

export interface PricingPlan {
  title: string;
  price: number | null;
  period: string;
  features: string[];
  cta: string;
  variant: 'free' | 'starter' | 'pro' | 'centrale';
  isPopular?: boolean;
  highlight?: string;
  degressivity?: DegressivityTier[];
}

export interface Faq {
  q: string;
  a: string;
}

export interface Partner {
  name: string;
}

export type Problem = string;

// ============================================
// SECTION PROPS TYPES
// ============================================

export interface HeroSectionProps {
  className?: string;
}

export interface SocialProofSectionProps {
  className?: string;
}

export interface ProblemSectionProps {
  className?: string;
}

export interface SolutionSectionProps {
  className?: string;
}

export interface FeaturesSectionProps {
  className?: string;
}

export interface BeforeAfterSectionProps {
  className?: string;
}

export interface PricingSectionProps {
  className?: string;
  onOpenRoi?: () => void;
}

export interface FaqSectionProps {
  className?: string;
}

export interface FinalCtaSectionProps {
  className?: string;
  onOpenRoi?: () => void;
}

export interface FooterProps {
  className?: string;
}

export interface HeaderProps {
  className?: string;
}
