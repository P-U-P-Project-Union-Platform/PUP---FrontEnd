import styled from 'styled-components';
import { theme } from '../theme';

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
  margin: 0 auto 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing.md};
  }
`;

export const TitleSection = styled.div``;

export const Title = styled.h1`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.textPrimary};
  margin-bottom: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`;

export const Description = styled.p`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.textSecondary};
  line-height: 1.6;
`;

export const FilterSection = styled.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const FilterButton = styled.button<{ active?: boolean }>`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  border: 1px solid ${props => props.active ? theme.colors.primary : theme.colors.border};
  background: ${props => props.active ? theme.colors.primary : theme.colors.bgWhite};
  color: ${props => props.active ? theme.colors.textWhite : theme.colors.textPrimary};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    background: ${props => props.active ? theme.colors.primaryHover : theme.colors.bgGray};
  }
`;

export const RecruitGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

export const RecruitCard = styled.div`
  background: ${theme.colors.bgWhite};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.md};
  transition: all ${theme.transitions.base};
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: ${theme.spacing.md};
`;

export const ProjectTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.textPrimary};
  margin-bottom: ${theme.spacing.xs};
`;

export const Status = styled.span<{ status: 'recruiting' | 'closed' }>`
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  background: ${props => props.status === 'recruiting' ? theme.colors.success : theme.colors.textTertiary};
  color: ${theme.colors.textWhite};
`;

export const ProjectDescription = styled.p`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.lg};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PositionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.lg};
`;

export const PositionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.sm};
  background: ${theme.colors.bgLight};
  border-radius: ${theme.borderRadius.sm};
`;

export const PositionName = styled.span`
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.textPrimary};
`;

export const PositionCount = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeights.semibold};
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
`;

export const Tag = styled.span`
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background: ${theme.colors.bgGray};
  color: ${theme.colors.textSecondary};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.sm};
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${theme.spacing.md};
  border-top: 1px solid ${theme.colors.borderLight};
`;

export const Author = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textTertiary};
`;

export const Date = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textTertiary};
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing['3xl']} ${theme.spacing.xl};
  color: ${theme.colors.textTertiary};
  font-size: ${theme.fontSizes.lg};
`;

export const WriteButton = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${theme.colors.primary};
  color: ${theme.colors.textWhite};
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  white-space: nowrap;

  &:hover {
    background: ${theme.colors.primaryHover};
  }
`;
