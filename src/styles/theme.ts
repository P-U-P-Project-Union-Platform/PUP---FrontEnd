// 공통 테마 속성
const commonTheme = {
  // 폰트 크기
  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '2rem',    // 32px
    '4xl': '2.5rem',  // 40px
  },

  // 폰트 굵기
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // 간격
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
  },

  // Border Radius
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },

  // 브레이크포인트
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },

  // Transition
  transitions: {
    fast: '0.15s ease',
    base: '0.2s ease',
    slow: '0.3s ease',
  },
} as const;

// 라이트 테마
export const lightTheme = {
  ...commonTheme,
  colors: {
    // Primary
    primary: '#4f46e5',
    primaryHover: '#4338ca',
    primaryLight: '#f0f0ff',

    // Background
    bgDark: '#0a0a0a',
    bgLight: '#F9F9F9',
    bgWhite: '#ffffff',
    bgGray: '#f5f5f5',
    bgDarkHover: '#1a1a1a',

    // Border
    border: '#ddd',
    borderDark: '#2a2a2a',
    borderDarkHover: '#3a3a3a',
    borderLight: '#e5e7eb',

    // Text
    textPrimary: '#1a1a1a',
    textSecondary: '#666',
    textTertiary: '#999',
    textLight: '#6b7280',
    textWhite: '#ffffff',

    // Status
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',

    // Gradient
    gradientPurple: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },

  // 그림자
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
  },
} as const;

// 다크 테마
export const darkTheme = {
  ...commonTheme,
  colors: {
    // Primary
    primary: '#6366f1',
    primaryHover: '#4f46e5',
    primaryLight: '#312e81',

    // Background
    bgDark: '#1a1a1a',
    bgLight: '#0f0f0f',
    bgWhite: '#1e1e1e',
    bgGray: '#2a2a2a',
    bgDarkHover: '#2a2a2a',

    // Border
    border: '#3a3a3a',
    borderDark: '#2a2a2a',
    borderDarkHover: '#3a3a3a',
    borderLight: '#2a2a2a',

    // Text
    textPrimary: '#e5e5e5',
    textSecondary: '#a3a3a3',
    textTertiary: '#737373',
    textLight: '#9ca3af',
    textWhite: '#ffffff',

    // Status
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',

    // Gradient
    gradientPurple: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },

  // 그림자
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px rgba(0, 0, 0, 0.4)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.5)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.6)',
  },
} as const;

// 기본 테마 (하위 호환성)
export const theme = lightTheme;

export type Theme = typeof lightTheme;
