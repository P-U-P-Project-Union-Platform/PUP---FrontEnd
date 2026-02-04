import styled from 'styled-components';
import { theme } from '../../theme';

export const ProjectManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

export const FilterTabs = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
`;

export const FilterTab = styled.button<{ active: boolean }>`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  font-weight: 600;
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  background: ${props => props.active ? theme.colors.primary : 'var(--color-bg-white)'};
  color: ${props => props.active ? 'white' : 'var(--color-text-primary)'};
  box-shadow: ${props => props.active ? theme.shadows.md : 'var(--shadow-sm)'};

  &:hover {
    background: ${props => props.active ? theme.colors.primaryDark : 'var(--color-bg-light)'};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: ${theme.spacing.md};
  border: 1px solid var(--color-border);
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  font-family: inherit;
  background: var(--color-bg-white);
  color: var(--color-text-primary);
  resize: vertical;
  transition: border-color ${theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: var(--color-text-secondary);
  }
`;

export const ProjectDetailSection = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

export const ProjectTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.sm};
`;

export const TechBadge = styled.span`
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  background: var(--color-bg-light);
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-primary);
  font-weight: 500;
`;
