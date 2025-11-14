import { ButtonProps } from '../types';

/**
 * Composant Button réutilisable avec variants
 * Utilisé partout dans la landing page (8+ fois)
 *
 * Variants:
 * - primary: Gradient violet → rose (CTA principal)
 * - secondary: Outline violet (CTA secondaire)
 * - ghost: Transparent avec hover
 * - outline: Border avec couleur personnalisée
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button'
}: ButtonProps) => {
  const baseClasses = "font-semibold transition-all duration-300 flex items-center justify-center space-x-2";

  const variantClasses = {
    primary: "bg-gradient-to-r from-visio-violet to-visio-rose text-white hover:shadow-2xl",
    secondary: "border-2 border-visio-violet text-visio-violet hover:bg-visio-violet hover:text-white",
    ghost: "text-gray-700 hover:text-visio-violet",
    outline: "border-2 border-current hover:shadow-lg"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-2 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  }`.trim();

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
