import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

export const Label = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${theme.fontWeights.semibold};
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${theme.colors.border};
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.base};
  padding: ${theme.spacing.md} 0;
  font-family: inherit;
  outline: none;

  &::placeholder {
    color: ${theme.colors.textTertiary};
    font-style: italic;
  }
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
`;

export const Tag = styled.span`
  background: ${theme.colors.bgWhite};
  color: ${theme.colors.textPrimary};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  padding: 6px 14px;
  font-size: ${theme.fontSizes.sm};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    background: ${theme.colors.bgGray};
    border-color: ${theme.colors.textSecondary};
  }
`;

export const Suggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
`;

export const SuggestionTag = styled.span`
  background: ${theme.colors.bgGray};
  color: ${theme.colors.textSecondary};
  border-radius: ${theme.borderRadius.sm};
  padding: 4px 10px;
  font-size: ${theme.fontSizes.sm};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.textWhite};
  }
`;
