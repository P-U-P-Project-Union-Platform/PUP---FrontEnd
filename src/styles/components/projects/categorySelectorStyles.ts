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

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CategoryButton = styled.button<{ selected: boolean }>`
  background: ${(props) =>
    props.selected ? theme.colors.primary : theme.colors.bgWhite};
  color: ${(props) =>
    props.selected ? theme.colors.textWhite : theme.colors.textPrimary};
  border: 1px solid
    ${(props) => (props.selected ? theme.colors.primary : theme.colors.border)};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${(props) =>
    props.selected ? theme.fontWeights.semibold : theme.fontWeights.normal};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};

  &:hover {
    background: ${(props) =>
      props.selected ? theme.colors.primaryHover : theme.colors.bgGray};
    border-color: ${(props) =>
      props.selected ? theme.colors.primaryHover : theme.colors.textSecondary};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Icon = styled.span`
  font-size: ${theme.fontSizes.lg};
`;
