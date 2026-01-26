import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';

export const Card = styled(Link)`
  display: block;
  background: var(--color-bg-white);
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

export const Thumbnail = styled.div<{ $hasImage: boolean }>`
  width: 100%;
  height: 180px;
  background: ${(props) =>
    props.$hasImage ? 'var(--color-bg-gray)' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: ${theme.spacing.lg};
`;

export const CategoryBadge = styled.span`
  display: inline-block;
  background: var(--color-bg-gray);
  color: var(--color-text-secondary);
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.xs};
  margin-bottom: ${theme.spacing.md};
`;

export const Title = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  margin: 0 0 ${theme.spacing.sm} 0;
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Description = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-secondary);
  margin: 0 0 ${theme.spacing.md} 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.5;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
`;

export const Tag = styled.span`
  background: var(--color-primary);
  color: var(--color-text-white);
  padding: 3px 8px;
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.xs};
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

export const Tech = styled.span`
  background: var(--color-bg-gray);
  color: var(--color-text-secondary);
  padding: 3px 8px;
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.fontSizes.xs};
`;
