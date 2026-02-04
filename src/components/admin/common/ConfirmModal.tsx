import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const ModalOverlay = styled.div<{ isOpen: boolean }>`
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

const ModalContent = styled.div`
  background: var(--color-bg-white);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['2xl']};
  max-width: 500px;
  width: 90%;
  box-shadow: ${theme.shadows.xl};
`;

const ModalTitle = styled.h2`
  margin: 0 0 ${theme.spacing.md} 0;
  font-size: ${theme.fontSizes['2xl']};
  font-weight: 700;
  color: var(--color-text-primary);
`;

const ModalMessage = styled.p`
  margin: 0 0 ${theme.spacing.xl} 0;
  font-size: ${theme.fontSizes.base};
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const ModalActions = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: flex-end;
`;

const Button = styled.button<{ variant?: 'primary' | 'danger' | 'secondary' }>`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  font-weight: 600;
  cursor: pointer;
  transition: all ${theme.transitions.fast};

  ${props => {
    switch (props.variant) {
      case 'danger':
        return `
          background: ${theme.colors.error};
          color: white;
          &:hover {
            background: ${theme.colors.errorDark};
          }
        `;
      case 'secondary':
        return `
          background: var(--color-bg-light);
          color: var(--color-text-primary);
          &:hover {
            background: var(--color-border);
          }
        `;
      case 'primary':
      default:
        return `
          background: ${theme.colors.primary};
          color: white;
          &:hover {
            background: ${theme.colors.primaryDark};
          }
        `;
    }
  }}
`;

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'primary' | 'danger';
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  isOpen,
  title,
  message,
  confirmText = '확인',
  cancelText = '취소',
  variant = 'primary',
  onConfirm,
  onCancel
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <ModalOverlay isOpen={isOpen} onClick={onCancel}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalTitle>{title}</ModalTitle>
        <ModalMessage>{message}</ModalMessage>
        <ModalActions>
          <Button variant="secondary" onClick={onCancel}>
            {cancelText}
          </Button>
          <Button variant={variant} onClick={onConfirm}>
            {confirmText}
          </Button>
        </ModalActions>
      </ModalContent>
    </ModalOverlay>
  );
}
