import styled from 'styled-components';
import { theme } from '../theme';

interface ToggleProps {
  active: boolean;
}

export const FooterContainer = styled.footer`
  width: 100%;
  padding: ${theme.spacing.xl} ${theme.spacing['2xl']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-bg-dark);
  color: rgba(255, 255, 255, 0.6);
  border-top: 1px solid var(--color-border-dark);

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${theme.spacing.md};
    padding: ${theme.spacing.xl};
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
`;

export const FooterRight = styled.div`
  display: flex;
  gap: ${theme.spacing.xl};
  align-items: center;
`;

export const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: ${theme.fontSizes.sm};
  cursor: pointer;
  transition: color ${theme.transitions.base};

  &:hover {
    color: ${theme.colors.textWhite};
  }
`;

export const ModeText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: ${theme.fontSizes.sm};
  margin: 0;
`;

export const Toggle = styled.div<ToggleProps>`
  width: 48px;
  height: 24px;
  background: ${({ active }) => (active ? '#4a4a4a' : theme.colors.borderDark)};
  border-radius: ${theme.borderRadius.full};
  position: relative;
  cursor: pointer;
  transition: background ${theme.transitions.base};

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: ${theme.colors.bgWhite};
    border-radius: 50%;
    top: 2px;
    left: ${({ active }) => (active ? '26px' : '2px')};
    transition: left ${theme.transitions.base};
  }
`;
