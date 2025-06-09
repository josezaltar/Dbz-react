export const Colors = {
  background: "#1a1a1a",
  text: "#fff",
  primary: "#008000",
  cardBackground: "#333",
  cardHover: "#444",
  black: "#000",
  red: "#FF0000",
};

export const Fonts = {
  body: "'Arial', sans-serif", // Fonte principal para o corpo
  heading: "'SaiyanSans', sans-serif", // Fonte personalizada para os títulos
};

export const Spacing = {
  xsmall: "4px",
  small: "8px",
  medium: "16px",
  large: "32px",
  xLarge: "64px",
};

export const Breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
};

export const Shadows = {
  light: "0 4px 10px rgba(255, 255, 255, 0.4)",
  medium: "0 4px 15px rgb(255, 255, 255, 0.6)",
  heavy: "0 6px 20px rgba(255, 255, 255, 0.9)",
};

// Adicionando novas variáveis de estilo
export const BannerStyles = {
  fontSize: {
    default: "1rem",
    md: "0.95rem",
    sm: "0.85rem",
  },
  padding: {
    default: `${Spacing.medium} 0`,
    small: `${Spacing.small} 0`,
  },
  BannerHeight: {
    large: "17.5rem",
    medium: "12.5rem",
    small: "9.375rem",
  },
  BannerFontSize: {
    large: "1.5rem",
    medium: "1.25rem",
    small: "1rem",
  },
  textAlignLeft: `
    text-align: left;
  `,
  headingStyle: `
    font-weight: 600;
    -webkit-text-stroke: 0.5px ${Colors.black};
    margin-bottom: 0;
  `,
};
