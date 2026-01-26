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
  width: 60px;
  height: 30px;
  background: ${({ active }) =>
    active
      ? 'linear-gradient(135deg, #1e3a8a 0%, #312e81 100%)'
      : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
  };
  border-radius: ${theme.borderRadius.full};
  position: relative;
  cursor: pointer;
  transition: all ${theme.transitions.slow};
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2),
              0 2px 8px ${({ active }) =>
                active ? 'rgba(99, 102, 241, 0.3)' : 'rgba(251, 191, 36, 0.3)'
              };

  &:hover {
    transform: scale(1.05);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2),
                0 4px 12px ${({ active }) =>
                  active ? 'rgba(99, 102, 241, 0.5)' : 'rgba(251, 191, 36, 0.5)'
                };
  }

  &::before {
    content: '${({ active }) => (active ? '🌙' : '☀️')}';
    position: absolute;
    font-size: 14px;
    top: 50%;
    transform: translateY(-50%);
    left: ${({ active }) => (active ? '8px' : 'auto')};
    right: ${({ active }) => (active ? 'auto' : '8px')};
    transition: all ${theme.transitions.slow};
    opacity: 0.9;
  }

  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background: linear-gradient(145deg, #ffffff, #f0f0f0);
    border-radius: 50%;
    top: 3px;
    left: ${({ active }) => (active ? '33px' : '3px')};
    transition: all ${theme.transitions.slow};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3),
                inset 0 -1px 2px rgba(0, 0, 0, 0.1);
  }
`;
