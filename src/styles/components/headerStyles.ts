import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background: var(--color-bg-dark);
  color: var(--color-text-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${theme.spacing.xl};
  border-bottom: 1px solid var(--color-border-dark);
  z-index: 1000;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.lg};
  }
`;

export const Logo = styled(Link)`
  width: 40px;
  height: 40px;
  background: #ffffff;
  border-radius: ${theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.fontWeights.bold};
  color: #0a0a0a;
  font-size: ${theme.fontSizes.xl};
  text-decoration: none;
  transition: transform ${theme.transitions.base};

  &:hover {
    transform: scale(1.05);
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${theme.spacing.xl};
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing.md};
  }
`;

export const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: ${theme.fontSizes.base};
  cursor: pointer;
  transition: color ${theme.transitions.base};

  &:hover {
    color: var(--color-text-white);
  }
`;

export const LoginButton = styled(Link)`
  background: var(--color-border-dark);
  color: var(--color-text-white);
  padding: 0.7rem 1.8rem;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  cursor: pointer;
  transition: background ${theme.transitions.base};
  text-decoration: none;
  display: inline-block;
  font-weight: ${theme.fontWeights.medium};

  &:hover {
    background: var(--color-border-dark-hover);
  }
`;

export const SignupButton = styled(Link)`
  background: transparent;
  border: 1px solid var(--color-border-dark);
  color: var(--color-text-white);
  padding: 0.7rem 1.8rem;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  text-decoration: none;
  display: inline-block;
  font-weight: ${theme.fontWeights.medium};

  &:hover {
    background: var(--color-border-dark);
  }
`;
