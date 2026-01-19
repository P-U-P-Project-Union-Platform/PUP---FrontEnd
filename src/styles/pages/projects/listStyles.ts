import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';

export const Container = styled.div`
  background: ${theme.colors.bgLight};
  min-height: 100vh;
  padding: 80px 40px 60px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 80px 20px 40px;
  }
`;

export const Header = styled.div`
  max-width: 1200px;
  margin: 0 auto 3rem;
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.textPrimary};
  margin-bottom: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`;

export const SearchSection = styled.div`
  margin-bottom: ${theme.spacing['2xl']};
`;

export const FilterSection = styled.div`
  margin-bottom: ${theme.spacing['2xl']};
`;

export const FilterLabel = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.md};
  font-weight: ${theme.fontWeights.semibold};
`;

export const CategoryFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

export const CategoryChip = styled.button<{ $active: boolean }>`
  background: ${(props) => (props.$active ? theme.colors.primary : theme.colors.bgWhite)};
  color: ${(props) => (props.$active ? theme.colors.textWhite : theme.colors.textSecondary)};
  border: 1px solid ${(props) => (props.$active ? theme.colors.primary : theme.colors.border)};
  border-radius: ${theme.borderRadius.full};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  font-size: ${theme.fontSizes.sm};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};

  &:hover {
    background: ${(props) => (props.$active ? theme.colors.primaryHover : theme.colors.bgGray)};
    border-color: ${(props) => (props.$active ? theme.colors.primaryHover : theme.colors.textSecondary)};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${theme.spacing['2xl']};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: ${theme.colors.textSecondary};
`;

export const EmptyIcon = styled.div`
  font-size: 64px;
  margin-bottom: ${theme.spacing.lg};
`;

export const EmptyText = styled.p`
  font-size: ${theme.fontSizes.lg};
  margin-bottom: ${theme.spacing.sm};
`;

export const EmptyHint = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textTertiary};
`;

export const RegisterButton = styled(Link)`
  display: inline-block;
  background: ${theme.colors.primary};
  color: ${theme.colors.textWhite};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.md};
  text-decoration: none;
  font-weight: ${theme.fontWeights.semibold};
  margin-top: ${theme.spacing.xl};
  transition: background ${theme.transitions.base};

  &:hover {
    background: ${theme.colors.primaryHover};
  }
`;

export const ResultCount = styled.p`
  text-align: center;
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fontSizes.sm};
  margin-top: ${theme.spacing['2xl']};
`;
