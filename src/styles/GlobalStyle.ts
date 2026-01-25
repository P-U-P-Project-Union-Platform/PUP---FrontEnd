import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Primary */
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-primary-hover: ${({ theme }) => theme.colors.primaryHover};
    --color-primary-light: ${({ theme }) => theme.colors.primaryLight};

    /* Background */
    --color-bg-dark: ${({ theme }) => theme.colors.bgDark};
    --color-bg-light: ${({ theme }) => theme.colors.bgLight};
    --color-bg-white: ${({ theme }) => theme.colors.bgWhite};
    --color-bg-gray: ${({ theme }) => theme.colors.bgGray};
    --color-bg-dark-hover: ${({ theme }) => theme.colors.bgDarkHover};

    /* Border */
    --color-border: ${({ theme }) => theme.colors.border};
    --color-border-dark: ${({ theme }) => theme.colors.borderDark};
    --color-border-dark-hover: ${({ theme }) => theme.colors.borderDarkHover};
    --color-border-light: ${({ theme }) => theme.colors.borderLight};

    /* Text */
    --color-text-primary: ${({ theme }) => theme.colors.textPrimary};
    --color-text-secondary: ${({ theme }) => theme.colors.textSecondary};
    --color-text-tertiary: ${({ theme }) => theme.colors.textTertiary};
    --color-text-light: ${({ theme }) => theme.colors.textLight};
    --color-text-white: ${({ theme }) => theme.colors.textWhite};

    /* Status */
    --color-success: ${({ theme }) => theme.colors.success};
    --color-error: ${({ theme }) => theme.colors.error};
    --color-warning: ${({ theme }) => theme.colors.warning};
    --color-info: ${({ theme }) => theme.colors.info};

    /* Shadows */
    --shadow-sm: ${({ theme }) => theme.shadows.sm};
    --shadow-md: ${({ theme }) => theme.shadows.md};
    --shadow-lg: ${({ theme }) => theme.shadows.lg};
    --shadow-xl: ${({ theme }) => theme.shadows.xl};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--color-bg-light);
    color: var(--color-text-primary);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    font-family: inherit;
    background: none;
    border: none;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--color-bg-light);
  }
`;
