import styled from 'styled-components';
import { theme } from '../theme';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: fadeIn 0.2s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  background: var(--color-bg-white);
  border-radius: ${theme.borderRadius.lg};
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: var(--shadow-lg);
  animation: slideUp 0.3s ease-in-out;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 95%;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.xl};
  border-bottom: 1px solid var(--color-border-light);
  position: sticky;
  top: 0;
  background: var(--color-bg-white);
  z-index: 1;
`;

export const ModalTitle = styled.h2`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  color: var(--color-text-primary);
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 32px;
  line-height: 1;
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color ${theme.transitions.base};

  &:hover {
    color: var(--color-text-primary);
  }
`;

export const ModalBody = styled.div`
  padding: ${theme.spacing.xl};
`;

export const InfoSection = styled.div`
  margin-bottom: ${theme.spacing.lg};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoLabel = styled.div`
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  color: var(--color-text-secondary);
  margin-bottom: ${theme.spacing.xs};
`;

export const InfoValue = styled.div`
  font-size: ${theme.fontSizes.base};
  color: var(--color-text-primary);
  line-height: 1.6;

  a {
    color: var(--color-primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid var(--color-border-light);
  margin: ${theme.spacing.lg} 0;
`;
