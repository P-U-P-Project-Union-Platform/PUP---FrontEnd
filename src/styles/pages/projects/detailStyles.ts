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
  background: var(--color-primary-light);
  color: var(--color-primary);
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: ${theme.spacing.lg};
  border: 2px solid var(--color-primary);
  box-shadow: var(--shadow-sm);
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
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background: var(--color-bg-gray);
  border-radius: ${theme.borderRadius.full};
  font-weight: ${theme.fontWeights.medium};
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
  background: var(--gradient-purple);
  color: var(--color-text-white);
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  box-shadow: var(--shadow-sm);
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

export const Tech = styled.span`
  background: var(--color-bg-gray);
  color: var(--color-text-secondary);
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  border: 1px solid var(--color-border);
  transition: all ${theme.transitions.base};

  &:hover {
    background: var(--color-border);
    transform: translateY(-1px);
  }
`;

export const GithubLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background: #24292e;
  color: #ffffff;
  padding: ${theme.spacing.md} ${theme.spacing['2xl']};
  border-radius: ${theme.borderRadius.full};
  text-decoration: none;
  font-weight: ${theme.fontWeights.bold};
  transition: all ${theme.transitions.base};
  box-shadow: var(--shadow-md);
  border: 2px solid #24292e;

  &:hover {
    background: #2c3237;
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const RecruitSection = styled.div`
  margin-top: ${theme.spacing['3xl']};
  padding: ${theme.spacing['2xl']};
  background: var(--color-primary-light);
  border-radius: ${theme.borderRadius.xl};
  border: 2px solid var(--color-primary);
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-blue);
  }
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
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  background: ${props => props.isOpen ? 'var(--color-success)' : 'var(--color-text-tertiary)'};
  color: var(--color-text-white);
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.bold};
  box-shadow: var(--shadow-sm);
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};

  &::before {
    content: '${props => props.isOpen ? '●' : '○'}';
    font-size: ${theme.fontSizes.xs};
  }
`;

export const PositionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
`;

export const PositionItem = styled.div<{ selected?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.lg};
  background: ${props => props.selected ? 'var(--gradient-blue)' : 'var(--color-bg-white)'};
  border-radius: ${theme.borderRadius.lg};
  border: 2px solid ${props => props.selected ? 'var(--color-primary)' : 'var(--color-border)'};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  box-shadow: ${props => props.selected ? 'var(--shadow-md)' : 'var(--shadow-sm)'};

  &:hover {
    border-color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const PositionName = styled.span<{ selected?: boolean }>`
  font-size: ${theme.fontSizes.base};
  font-weight: ${props => props.selected ? theme.fontWeights.bold : theme.fontWeights.medium};
  color: ${props => props.selected ? 'var(--color-text-white)' : 'var(--color-text-primary)'};
  transition: all ${theme.transitions.base};
`;

export const PositionCount = styled.span<{ selected?: boolean }>`
  font-size: ${theme.fontSizes.base};
  color: ${props => props.selected ? 'var(--color-text-white)' : 'var(--color-primary)'};
  font-weight: ${theme.fontWeights.bold};
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  background: ${props => props.selected ? 'rgba(255,255,255,0.2)' : 'transparent'};
  border-radius: ${theme.borderRadius.full};
  transition: all ${theme.transitions.base};
`;

export const ApplyButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  background: var(--gradient-blue);
  color: var(--color-text-white);
  border: none;
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left ${theme.transitions.slow};
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg), var(--shadow-glow);

    &::before {
      left: 100%;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background: var(--color-bg-gray);
    color: var(--color-text-tertiary);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;

    &::before {
      display: none;
    }
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

// 작성자 프로필 섹션
export const AuthorSection = styled.div`
  margin-top: ${theme.spacing['3xl']};
  padding: ${theme.spacing['2xl']};
  background: var(--color-bg-gray);
  border-radius: ${theme.borderRadius.xl};
  border: 1px solid var(--color-border);
`;

export const AuthorHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const AuthorAvatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: ${theme.borderRadius.full};
  background: var(--gradient-purple);
  color: var(--color-text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes['2xl']};
  box-shadow: var(--shadow-lg);
  cursor: pointer;
  transition: all ${theme.transitions.base};
  flex-shrink: 0;

  &:hover {
    transform: scale(1.1);
    box-shadow: var(--shadow-xl);
  }
`;

export const AuthorInfo = styled.div`
  flex: 1;
`;

export const AuthorName = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  color: var(--color-text-primary);
  margin-bottom: ${theme.spacing.xs};
`;

export const AuthorBio = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};
`;

export const AuthorLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
`;

export const AuthorLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  background: var(--color-bg-white);
  border: 1px solid var(--color-border);
  border-radius: ${theme.borderRadius.full};
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  transition: all ${theme.transitions.base};

  &:hover {
    background: var(--color-primary);
    color: var(--color-text-white);
    border-color: var(--color-primary);
    transform: translateY(-2px);
  }
`;
