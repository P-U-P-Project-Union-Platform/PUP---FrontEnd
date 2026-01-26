import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  background: var(--color-bg-light);
  min-height: 100vh;
  padding: 80px 40px 60px;
  animation: ${fadeIn} 0.4s ease-out;

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
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: ${theme.fontSizes.sm};
  margin-bottom: ${theme.spacing.lg};
  transition: color ${theme.transitions.base};

  &:hover {
    color: var(--color-primary);
  }
`;

export const CategoryBadge = styled.span`
  display: inline-block;
  background: var(--color-primary-light);
  color: var(--color-primary);
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  margin-bottom: ${theme.spacing.md};
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: var(--color-text-primary);
  margin-bottom: ${theme.spacing.md};
  line-height: 1.2;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`;

export const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.lg};
  padding: ${theme.spacing.md} 0;
  border-bottom: 1px solid var(--color-border-light);
  margin-bottom: ${theme.spacing.xl};
`;

export const MetaItem = styled.span`
  color: var(--color-text-secondary);
  font-size: ${theme.fontSizes.sm};
`;

export const Section = styled.div`
  margin-bottom: ${theme.spacing['2xl']};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionLabel = styled.h2`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: var(--color-text-primary);
  margin-bottom: ${theme.spacing.md};
`;

export const Description = styled.p`
  font-size: ${theme.fontSizes.base};
  color: var(--color-text-secondary);
  line-height: 1.8;
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
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.sm};
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
`;

export const Tech = styled.span`
  background: var(--color-bg-gray);
  color: var(--color-text-primary);
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
`;

export const GithubLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: var(--color-bg-dark);
  color: var(--color-text-white);
  text-decoration: none;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  transition: all ${theme.transitions.base};

  &:hover {
    background: var(--color-bg-dark-hover);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`;

export const RecruitSection = styled.div`
  background: var(--color-bg-gray);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  margin-top: ${theme.spacing['2xl']};
`;

export const RecruitHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};
`;

export const RecruitTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: var(--color-text-primary);
`;

export const RecruitStatus = styled.span<{ isOpen: boolean }>`
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  background: ${props => props.isOpen ? 'var(--color-success)' : 'var(--color-text-tertiary)'};
  color: var(--color-text-white);
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
`;

export const PositionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
`;

export const PositionItem = styled.div<{ selected?: boolean }>`
  padding: ${theme.spacing.md};
  background: var(--color-bg-white);
  border: 2px solid ${props => props.selected ? 'var(--color-primary)' : 'var(--color-border)'};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    border-color: var(--color-primary);
    transform: translateX(4px);
  }
`;

export const PositionName = styled.span<{ selected?: boolean }>`
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  color: ${props => props.selected ? 'var(--color-primary)' : 'var(--color-text-primary)'};
`;

export const PositionCount = styled.span<{ selected?: boolean }>`
  font-size: ${theme.fontSizes.sm};
  color: ${props => props.selected ? 'var(--color-primary)' : 'var(--color-text-secondary)'};
  font-weight: ${theme.fontWeights.semibold};
`;

export const ApplyButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.md};
  background: var(--color-primary);
  color: var(--color-text-white);
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover:not(:disabled) {
    background: var(--color-primary-hover);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  &:disabled {
    background: var(--color-bg-gray);
    color: var(--color-text-tertiary);
    cursor: not-allowed;
  }
`;

export const AuthorSection = styled.div`
  margin-bottom: ${theme.spacing['2xl']};
`;

export const AuthorHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};
  padding: ${theme.spacing.lg};
  background: var(--color-bg-gray);
  border-radius: ${theme.borderRadius.lg};
`;

export const AuthorAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${theme.borderRadius.full};
  background: linear-gradient(135deg, var(--color-primary), #764ba2);
  color: var(--color-text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  flex-shrink: 0;
  cursor: pointer;
  transition: transform ${theme.transitions.base};

  &:hover {
    transform: scale(1.1);
  }
`;

export const AuthorInfo = styled.div`
  flex: 1;
`;

export const AuthorName = styled.div`
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.semibold};
  color: var(--color-text-primary);
  margin-bottom: ${theme.spacing.xs};
`;

export const AuthorBio = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-secondary);
  margin-bottom: ${theme.spacing.sm};
`;

export const AuthorLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
`;

export const AuthorLink = styled.a`
  font-size: ${theme.fontSizes.sm};
  color: var(--color-primary);
  text-decoration: none;
  transition: color ${theme.transitions.base};

  &:hover {
    color: var(--color-primary-hover);
    text-decoration: underline;
  }
`;

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
`;

export const NotFoundIcon = styled.div`
  font-size: 80px;
  margin-bottom: ${theme.spacing.lg};
`;

export const NotFoundText = styled.p`
  font-size: ${theme.fontSizes.xl};
  color: var(--color-text-primary);
  margin-bottom: ${theme.spacing.md};
`;

export const NotFoundLink = styled(Link)`
  color: var(--color-primary);
  text-decoration: none;
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};

  &:hover {
    text-decoration: underline;
  }
`;
