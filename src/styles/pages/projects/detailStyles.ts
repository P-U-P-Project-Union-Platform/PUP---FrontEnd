import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';

export const Container = styled.div`
  background: var(--color-bg-light);
  min-height: 100vh;
  padding: 80px 40px 60px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 80px 20px 40px;
  }
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: var(--color-bg-white);
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: var(--shadow-lg);
`;

export const Thumbnail = styled.div<{ $hasImage: boolean }>`
  width: 100%;
  height: 400px;
  background: ${(props) =>
    props.$hasImage ? 'var(--color-bg-gray)' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
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
  color: var(--color-primary);
  text-decoration: none;
  font-size: ${theme.fontSizes.sm};
  margin-bottom: ${theme.spacing.xl};
  transition: color ${theme.transitions.base};

  &:hover {
    color: var(--color-primary-hover);
  }
`;

export const CategoryBadge = styled.span`
  display: inline-block;
  background: var(--color-bg-gray);
  color: var(--color-text-secondary);
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.sm};
  margin-bottom: ${theme.spacing.lg};
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: var(--color-text-primary);
  margin: 0 0 ${theme.spacing.lg} 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`;

export const MetaInfo = styled.div`
  display: flex;
  gap: ${theme.spacing.xl};
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-secondary);
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
  color: var(--color-text-secondary);
  margin-bottom: ${theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${theme.fontWeights.semibold};
`;

export const Description = styled.p`
  font-size: ${theme.fontSizes.lg};
  line-height: 1.8;
  color: var(--color-text-primary);
  white-space: pre-wrap;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

export const Tag = styled.span`
  background: var(--color-primary);
  color: var(--color-text-white);
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
  background: var(--color-bg-gray);
  color: var(--color-text-secondary);
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.sm};
`;

export const GithubLink = styled.a`
  display: inline-block;
  background: var(--color-bg-dark);
  color: var(--color-text-white);
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.md};
  text-decoration: none;
  font-weight: ${theme.fontWeights.semibold};
  transition: background ${theme.transitions.base};

  &:hover {
    background: var(--color-bg-dark-hover);
  }
`;

export const RecruitSection = styled.div`
  margin-top: ${theme.spacing['2xl']};
  padding: ${theme.spacing.xl};
  background: var(--color-primary-light);
  border-radius: ${theme.borderRadius.lg};
  border: 2px solid var(--color-primary);
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
  color: var(--color-primary);
`;

export const RecruitStatus = styled.span<{ isOpen: boolean }>`
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  background: ${props => props.isOpen ? 'var(--color-success)' : 'var(--color-text-tertiary)'};
  color: var(--color-text-white);
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
  background: var(--color-bg-white);
  border-radius: ${theme.borderRadius.md};
  border: 1px solid var(--color-border);
`;

export const PositionName = styled.span`
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  color: var(--color-text-primary);
`;

export const PositionCount = styled.span`
  font-size: ${theme.fontSizes.base};
  color: var(--color-primary);
  font-weight: ${theme.fontWeights.semibold};
`;

export const ApplyButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: var(--color-primary);
  color: var(--color-text-white);
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    background: var(--color-primary-hover);
    transform: translateY(-2px);
  }

  &:disabled {
    background: var(--color-bg-gray);
    color: var(--color-text-tertiary);
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
  color: var(--color-text-secondary);
  margin-bottom: ${theme.spacing.lg};
`;

export const NotFoundLink = styled(Link)`
  display: inline-block;
  background: var(--color-primary);
  color: var(--color-text-white);
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.md};
  text-decoration: none;
  font-weight: ${theme.fontWeights.semibold};
  transition: background ${theme.transitions.base};

  &:hover {
    background: var(--color-primary-hover);
  }
`;
