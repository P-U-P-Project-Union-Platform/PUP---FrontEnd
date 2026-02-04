import styled from 'styled-components';
import { theme } from '../../theme';

export const TableContainer = styled.div`
  background: var(--color-bg-white);
  border-radius: ${theme.borderRadius.lg};
  box-shadow: var(--shadow-md);
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background: var(--color-bg-light);
  border-bottom: 2px solid var(--color-border);
`;

export const TableRow = styled.tr<{ clickable?: boolean }>`
  border-bottom: 1px solid var(--color-border);
  transition: background-color ${theme.transitions.fast};

  ${props => props.clickable && `
    cursor: pointer;
    &:hover {
      background: var(--color-bg-light);
    }
  `}

  &:last-child {
    border-bottom: none;
  }
`;

export const TableHeader = styled.th<{ width?: string }>`
  padding: ${theme.spacing.lg};
  text-align: left;
  font-weight: 600;
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  ${props => props.width && `width: ${props.width};`}
`;

export const TableCell = styled.td`
  padding: ${theme.spacing.lg};
  font-size: ${theme.fontSizes.base};
  color: var(--color-text-primary);
  vertical-align: middle;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
`;

export const ActionButton = styled.button<{ variant?: 'primary' | 'danger' | 'secondary' }>`
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.sm};
  font-weight: 500;
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

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Badge = styled.span<{ variant?: 'success' | 'warning' | 'danger' | 'info' }>`
  display: inline-flex;
  align-items: center;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.xs};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${props => {
    switch (props.variant) {
      case 'success':
        return `
          background: rgba(34, 197, 94, 0.1);
          color: ${theme.colors.success};
        `;
      case 'warning':
        return `
          background: rgba(251, 146, 60, 0.1);
          color: ${theme.colors.warning};
        `;
      case 'danger':
        return `
          background: rgba(239, 68, 68, 0.1);
          color: ${theme.colors.error};
        `;
      case 'info':
      default:
        return `
          background: rgba(59, 130, 246, 0.1);
          color: ${theme.colors.primary};
        `;
    }
  }}
`;

export const EmptyState = styled.div`
  padding: ${theme.spacing['3xl']};
  text-align: center;
  color: var(--color-text-secondary);
  font-size: ${theme.fontSizes.base};
`;
