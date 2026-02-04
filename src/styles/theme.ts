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

  // 데코레이션 크기
  decorationSizes: {
    circle: '100px',
  },

  // 투명도
  opacity: {
    decorationBg: 'rgba(255, 255, 255, 0.1)',
    textPrimary: 'rgba(255, 255, 255, 0.9)',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
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

  // Transition - 더 부드러운 easing
  transitions: {
    fast: '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    base: '0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: '0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

// 라이트 테마
export const lightTheme = {
  ...commonTheme,
  colors: {
    // Primary - 더 생생한 인디고/바이올렛
    primary: '#6366f1',
    primaryHover: '#4f46e5',
    primaryLight: '#eef2ff',

    // Background - 더 부드러운 그레이 톤
    bgDark: '#0f172a',
    bgLight: '#fafbfc',
    bgWhite: '#ffffff',
    bgGray: '#f1f5f9',
    bgDarkHover: '#1e293b',

    // Border - 더 섬세한 경계
    border: '#e2e8f0',
    borderDark: '#334155',
    borderDarkHover: '#475569',
    borderLight: '#f1f5f9',

    // Text - 더 명확한 계층
    textPrimary: '#0f172a',
    textSecondary: '#475569',
    textTertiary: '#94a3b8',
    textLight: '#64748b',
    textWhite: '#ffffff',

    // Status - 더 선명한 상태 색상
    success: '#22c55e',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',

    // Gradient - 더 역동적인 그라데이션
    gradientPurple: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    gradientBlue: 'linear-gradient(135deg, #667eea 0%, #4f46e5 100%)',
    gradientPink: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    gradientOrange: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    gradientGreen: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
  },

  // 그림자 - 더 입체적인 깊이감
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
    md: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
    lg: '0 12px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)',
    xl: '0 20px 40px rgba(0, 0, 0, 0.16), 0 8px 16px rgba(0, 0, 0, 0.08)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
    glow: '0 0 20px rgba(99, 102, 241, 0.3)',
  },
} as const;

// 다크 테마
export const darkTheme = {
  ...commonTheme,
  colors: {
    // Primary - 네온 같은 생생한 컬러
    primary: '#818cf8',
    primaryHover: '#6366f1',
    primaryLight: '#312e81',

    // Background - 깊은 네이비 블랙
    bgDark: '#0f172a',
    bgLight: '#0a0f1e',
    bgWhite: '#1e293b',
    bgGray: '#334155',
    bgDarkHover: '#1e293b',

    // Border - 은은한 경계
    border: '#334155',
    borderDark: '#1e293b',
    borderDarkHover: '#475569',
    borderLight: '#334155',

    // Text - 부드러운 대비
    textPrimary: '#f1f5f9',
    textSecondary: '#cbd5e1',
    textTertiary: '#64748b',
    textLight: '#94a3b8',
    textWhite: '#ffffff',

    // Status - 더 밝고 선명한 상태 색상
    success: '#34d399',
    error: '#f87171',
    warning: '#fbbf24',
    info: '#60a5fa',

    // Gradient - 네온 느낌의 그라데이션
    gradientPurple: 'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)',
    gradientBlue: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 100%)',
    gradientPink: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
    gradientOrange: 'linear-gradient(135deg, #fb923c 0%, #fbbf24 100%)',
    gradientGreen: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
  },

  // 그림자 - 더 극적인 깊이감
  shadows: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.4), 0 1px 4px rgba(0, 0, 0, 0.3)',
    md: '0 4px 16px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.4)',
    lg: '0 12px 32px rgba(0, 0, 0, 0.6), 0 4px 12px rgba(0, 0, 0, 0.5)',
    xl: '0 20px 48px rgba(0, 0, 0, 0.7), 0 8px 20px rgba(0, 0, 0, 0.6)',
    inner: 'inset 0 2px 8px rgba(0, 0, 0, 0.4)',
    glow: '0 0 24px rgba(129, 140, 248, 0.5), 0 0 48px rgba(129, 140, 248, 0.2)',
  },
} as const;

// 기본 테마 (하위 호환성)
export const theme = lightTheme;

export type Theme = typeof lightTheme;
