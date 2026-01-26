import styled from 'styled-components';
import { theme } from '../theme';

export const Container = styled.div`
  background: var(--color-bg-light);
  min-height: 100vh;
  padding: 80px 40px 60px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 80px 20px 40px;
  }
`;

export const Header = styled.div`
  max-width: 1000px;
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
  color: var(--color-text-primary);
  margin-bottom: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`;

export const Description = styled.p`
  font-size: ${theme.fontSizes.base};
  color: var(--color-text-secondary);
`;

export const WriteButton = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing['2xl']};
  background: var(--gradient-blue);
  color: var(--color-text-white);
  border: none;
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.base};
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
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left ${theme.transitions.slow};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg), var(--shadow-glow);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

export const CategorySection = styled.div`
  max-width: 1000px;
  margin: 0 auto 30px;
  display: flex;
  gap: ${theme.spacing.sm};
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing.xs};
  }
`;

export const CategoryButton = styled.button<{ active?: boolean }>`
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.full};
  border: 2px solid ${props => props.active ? 'var(--color-primary)' : 'var(--color-border)'};
  background: ${props => props.active ? 'var(--gradient-blue)' : 'var(--color-bg-white)'};
  color: ${props => props.active ? 'var(--color-text-white)' : 'var(--color-text-secondary)'};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  box-shadow: ${props => props.active ? 'var(--shadow-md)' : 'var(--shadow-sm)'};

  &:hover {
    background: ${props => props.active ? 'var(--gradient-blue)' : 'var(--color-bg-gray)'};
    transform: translateY(-2px);
    box-shadow: ${props => props.active ? 'var(--shadow-lg), var(--shadow-glow)' : 'var(--shadow-md)'};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const PostList = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const PostCard = styled.div`
  background: var(--color-bg-white);
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['2xl']};
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
  transition: all ${theme.transitions.base};
  cursor: pointer;

  &:hover {
    box-shadow: var(--shadow-xl);
    transform: translateY(-4px);
    border-color: var(--color-primary);
  }
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: ${theme.spacing.md};
  gap: ${theme.spacing.md};
`;

export const PostTitle = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: var(--color-text-primary);
  margin-bottom: ${theme.spacing.xs};
  flex: 1;
`;

export const CategoryBadge = styled.span`
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  background: var(--color-primary-light);
  color: var(--color-primary);
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.bold};
  white-space: nowrap;
  border: 1px solid var(--color-primary);
`;

export const PostContent = styled.p`
  font-size: ${theme.fontSizes.base};
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: ${theme.spacing.lg};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${theme.spacing.lg};
  margin-top: ${theme.spacing.md};
  border-top: 1px solid var(--color-border);
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

export const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: ${theme.borderRadius.full};
  background: var(--gradient-purple);
  color: var(--color-text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.sm};
  box-shadow: var(--shadow-sm);
`;

export const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.span`
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  color: var(--color-text-primary);
`;

export const PostDate = styled.span`
  font-size: ${theme.fontSizes.xs};
  color: var(--color-text-tertiary);
`;

export const PostStats = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  align-items: center;
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background: var(--color-bg-gray);
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.medium};
  color: var(--color-text-secondary);
  transition: all ${theme.transitions.base};

  &:hover {
    background: var(--color-border);
    transform: translateY(-1px);
  }

  /* 첫 번째 자식 (이모지)에 스타일 적용 */
  span:first-child {
    font-size: ${theme.fontSizes.sm};
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing['3xl']} ${theme.spacing.xl};
  color: var(--color-text-tertiary);
  font-size: ${theme.fontSizes.lg};
`;
