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

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: ${theme.colors.bgWhite};
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${theme.shadows.lg};
`;

export const Thumbnail = styled.div<{ $hasImage: boolean }>`
  width: 100%;
  height: 400px;
  background: ${(props) =>
    props.$hasImage ? theme.colors.bgGray : theme.colors.gradientPurple};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 120px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 250px;
    font-size: 80px;
  }
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DetailContent = styled.div`
  padding: ${theme.spacing['3xl']};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing['2xl']} ${theme.spacing.xl};
  }
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  color: ${theme.colors.primary};
  text-decoration: none;
  font-size: ${theme.fontSizes.sm};
  margin-bottom: ${theme.spacing.xl};
  transition: color ${theme.transitions.base};

  &:hover {
    color: ${theme.colors.primaryHover};
  }
`;

export const CategoryBadge = styled.span`
  display: inline-block;
  background: ${theme.colors.bgGray};
  color: ${theme.colors.textSecondary};
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.sm};
  margin-bottom: ${theme.spacing.lg};
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.textPrimary};
  margin: 0 0 ${theme.spacing.lg} 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`;

export const MetaInfo = styled.div`
  display: flex;
  gap: ${theme.spacing.xl};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing['2xl']};
  flex-wrap: wrap;
`;

export const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
`;

export const Section = styled.div`
  margin-bottom: ${theme.spacing['2xl']};
`;

export const SectionLabel = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${theme.fontWeights.semibold};
`;

export const Description = styled.p`
  font-size: ${theme.fontSizes.lg};
  line-height: 1.8;
  color: ${theme.colors.textPrimary};
  white-space: pre-wrap;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

export const Tag = styled.span`
  background: ${theme.colors.primary};
  color: ${theme.colors.textWhite};
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.sm};
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

export const Tech = styled.span`
  background: ${theme.colors.bgGray};
  color: ${theme.colors.textSecondary};
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.sm};
`;

export const GithubLink = styled.a`
  display: inline-block;
  background: ${theme.colors.bgDark};
  color: ${theme.colors.textWhite};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.md};
  text-decoration: none;
  font-weight: ${theme.fontWeights.semibold};
  transition: background ${theme.transitions.base};

  &:hover {
    background: #1a1a1a;
  }
`;

export const RecruitSection = styled.div`
  margin-top: ${theme.spacing['2xl']};
  padding: ${theme.spacing.xl};
  background: ${theme.colors.primaryLight};
  border-radius: ${theme.borderRadius.lg};
  border: 2px solid ${theme.colors.primary};
`;

export const RecruitHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing.md};
  }
`;

export const RecruitTitle = styled.h2`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primary};
`;

export const RecruitStatus = styled.span<{ isOpen: boolean }>`
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  background: ${props => props.isOpen ? theme.colors.success : theme.colors.textTertiary};
  color: ${theme.colors.textWhite};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
`;

export const PositionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
`;

export const PositionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.md};
  background: ${theme.colors.bgWhite};
  border-radius: ${theme.borderRadius.md};
  border: 1px solid ${theme.colors.border};
`;

export const PositionName = styled.span`
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.textPrimary};
`;

export const PositionCount = styled.span`
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.primary};
  font-weight: ${theme.fontWeights.semibold};
`;

export const ApplyButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${theme.colors.primary};
  color: ${theme.colors.textWhite};
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    background: ${theme.colors.primaryHover};
    transform: translateY(-2px);
  }

  &:disabled {
    background: ${theme.colors.bgGray};
    color: ${theme.colors.textTertiary};
    cursor: not-allowed;
    transform: none;
  }
`;

export const NotFound = styled.div`
  text-align: center;
  padding: 4rem 2rem;
`;

export const NotFoundIcon = styled.div`
  font-size: 80px;
  margin-bottom: ${theme.spacing.xl};
`;

export const NotFoundText = styled.h2`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.lg};
`;

export const NotFoundLink = styled(Link)`
  display: inline-block;
  background: ${theme.colors.primary};
  color: ${theme.colors.textWhite};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.md};
  text-decoration: none;
  font-weight: ${theme.fontWeights.semibold};
  transition: background ${theme.transitions.base};

  &:hover {
    background: ${theme.colors.primaryHover};
  }
`;
