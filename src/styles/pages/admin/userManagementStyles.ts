import styled from 'styled-components';
import { theme } from '../../theme';

export const UserManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

export const ModalContent = styled.div`
  background: var(--color-bg-white);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['2xl']};
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: ${theme.shadows.xl};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.xl};
  padding-bottom: ${theme.spacing.lg};
  border-bottom: 1px solid var(--color-border);
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: ${theme.fontSizes['2xl']};
  font-weight: 700;
  color: var(--color-text-primary);
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: ${theme.fontSizes['2xl']};
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: ${theme.spacing.xs};
  line-height: 1;

  &:hover {
    color: var(--color-text-primary);
  }
`;

export const UserDetailGrid = styled.div`
  display: grid;
  gap: ${theme.spacing.lg};
`;

export const DetailRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

export const DetailLabel = styled.span`
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const DetailValue = styled.span`
  font-size: ${theme.fontSizes.base};
  color: var(--color-text-primary);
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.lg};
  background: var(--color-bg-light);
  border-radius: ${theme.borderRadius.md};
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.xs};
`;

export const StatValue = styled.div`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: 700;
  color: var(--color-text-primary);
`;

export const StatLabel = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-secondary);
`;
