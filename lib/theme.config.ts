// Design Tokens
export const theme = {
  colors: {
    primary: {
      light: '#0ea5e9',
      dark: '#0284c7',
    },
    secondary: {
      light: '#8b5cf6',
      dark: '#7c3aed',
    },
    background: {
      light: '#ffffff',
      dark: '#111827',
    },
    text: {
      light: '#1f2937',
      dark: '#f3f4f6',
    },
  },
  fonts: {
    primary: 'system-ui, -apple-system, sans-serif',
    mono: 'Menlo, Monaco, Courier New, monospace',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
}

export const animationPresets = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
}
