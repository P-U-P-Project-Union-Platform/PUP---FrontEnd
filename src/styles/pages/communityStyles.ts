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
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: var(--color-primary);
  color: var(--color-text-white);
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    background: var(--color-primary-hover);
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
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.full};
  border: 1px solid ${props => props.active ? 'var(--color-primary)' : 'var(--color-border)'};
  background: ${props => props.active ? 'var(--color-primary)' : 'var(--color-bg-white)'};
  color: ${props => props.active ? 'var(--color-text-white)' : 'var(--color-text-secondary)'};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${theme.transitions.base};

  &:hover {
    background: ${props => props.active ? 'var(--color-primary-hover)' : 'var(--color-bg-gray)'};
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
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: var(--shadow-sm);
  transition: all ${theme.transitions.base};
  cursor: pointer;

  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
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
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background: var(--color-primary-light);
  color: var(--color-primary);
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.semibold};
  white-space: nowrap;
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
  padding-top: ${theme.spacing.md};
  border-top: 1px solid var(--color-border-light);
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: ${theme.borderRadius.full};
  background: var(--color-primary);
  color: var(--color-text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.fontWeights.semibold};
  font-size: ${theme.fontSizes.sm};
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
  gap: ${theme.spacing.lg};
  align-items: center;
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-tertiary);
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing['3xl']} ${theme.spacing.xl};
  color: var(--color-text-tertiary);
  font-size: ${theme.fontSizes.lg};
`;
