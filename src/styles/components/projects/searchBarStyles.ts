import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: ${theme.spacing.md} 40px ${theme.spacing.md} ${theme.spacing.md};
  font-size: ${theme.fontSizes.base};
  border: 1px solid var(--color-border);
  border-radius: ${theme.borderRadius.md};
  outline: none;
  transition: border-color ${theme.transitions.base};
  background: var(--color-bg-white);
  color: var(--color-text-primary);

  &:focus {
    border-color: var(--color-primary);
  }

  &::placeholder {
    color: var(--color-text-tertiary);
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  right: ${theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-tertiary);
  font-size: ${theme.fontSizes.lg};
`;

export const ClearButton = styled.button`
  position: absolute;
  right: ${theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--color-text-tertiary);
  font-size: ${theme.fontSizes.xl};
  cursor: pointer;
  padding: ${theme.spacing.xs};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color ${theme.transitions.base};

  &:hover {
    color: var(--color-text-primary);
  }
`;
