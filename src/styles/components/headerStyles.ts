import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  background: var(--color-bg-dark);
  color: var(--color-text-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${theme.spacing['2xl']};
  border-bottom: 1px solid var(--color-border-dark);
  backdrop-filter: blur(12px);
  z-index: 1000;
  box-shadow: var(--shadow-sm);

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.lg};
    height: 64px;
  }
`;

export const Logo = styled(Link)`
  width: 48px;
  height: 48px;
  background: var(--gradient-blue);
  border-radius: ${theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.fontWeights.bold};
  color: var(--color-text-white);
  font-size: ${theme.fontSizes['2xl']};
  text-decoration: none;
  transition: all ${theme.transitions.base};
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: rotate(45deg);
    transition: all ${theme.transitions.slow};
  }

  &:hover {
    transform: scale(1.08) rotate(-5deg);
    box-shadow: var(--shadow-lg), var(--shadow-glow);

    &::before {
      left: 100%;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${theme.spacing['2xl']};
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing.md};
  }
`;

export const NavLink = styled(Link)`
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  position: relative;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background: var(--gradient-blue);
    transition: all ${theme.transitions.base};
    transform: translateX(-50%);
  }

  &:hover {
    color: var(--color-text-white);

    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.sm};
  }
`;

export const LoginButton = styled(Link)`
  background: var(--gradient-blue);
  color: var(--color-text-white);
  padding: 0.75rem 2rem;
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.base};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  text-decoration: none;
  display: inline-block;
  font-weight: ${theme.fontWeights.semibold};
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left ${theme.transitions.slow};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg), var(--shadow-glow);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0.6rem 1.5rem;
    font-size: ${theme.fontSizes.sm};
  }
`;

export const SignupButton = styled(Link)`
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  padding: 0.7rem 2rem;
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.base};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  text-decoration: none;
  display: inline-block;
  font-weight: ${theme.fontWeights.semibold};

  &:hover {
    background: var(--color-primary);
    color: var(--color-text-white);
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0.55rem 1.5rem;
    font-size: ${theme.fontSizes.sm};
  }
`;
