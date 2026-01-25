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

export const MaxWidthWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProfileSection = styled.div`
  background: var(--color-bg-white);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['2xl']};
  margin-bottom: ${theme.spacing.xl};
  box-shadow: var(--shadow-md);

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl};
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: ${theme.borderRadius.full};
  background: linear-gradient(135deg, var(--color-primary), #764ba2);
  color: var(--color-text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes['4xl']};
  font-weight: ${theme.fontWeights.bold};
  flex-shrink: 0;
`;

export const ProfileInfo = styled.div`
  flex: 1;
`;

export const Name = styled.h1`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: var(--color-text-primary);
  margin-bottom: ${theme.spacing.sm};
`;

export const Email = styled.p`
  font-size: ${theme.fontSizes.base};
  color: var(--color-text-secondary);
  margin-bottom: ${theme.spacing.md};
`;

export const Bio = styled.p`
  font-size: ${theme.fontSizes.base};
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

export const EditButton = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
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

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.lg};
  padding-top: ${theme.spacing.xl};
  border-top: 1px solid var(--color-border-light);

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.md};
  }
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatValue = styled.div`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.bold};
  color: var(--color-primary);
  margin-bottom: ${theme.spacing.xs};
`;

export const StatLabel = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-secondary);
`;

export const TabSection = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

export const TabList = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  border-bottom: 2px solid var(--color-border-light);
  margin-bottom: ${theme.spacing.xl};
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-border-light);
    border-radius: ${theme.borderRadius.full};
  }
`;

export const Tab = styled.button<{ active?: boolean }>`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  color: ${props => props.active ? 'var(--color-primary)' : 'var(--color-text-secondary)'};
  background: transparent;
  border: none;
  border-bottom: 2px solid ${props => props.active ? 'var(--color-primary)' : 'transparent'};
  margin-bottom: -2px;
  cursor: pointer;
  transition: all ${theme.transitions.base};
  white-space: nowrap;

  &:hover {
    color: var(--color-primary);
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

export const Card = styled.div`
  background: var(--color-bg-white);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: var(--shadow-sm);
  transition: all ${theme.transitions.base};
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }
`;

export const CardTitle = styled.h3`
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.semibold};
  color: var(--color-text-primary);
  margin-bottom: ${theme.spacing.sm};
`;

export const CardDescription = styled.p`
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-tertiary);
  padding-top: ${theme.spacing.md};
  border-top: 1px solid var(--color-border-light);
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing['3xl']} ${theme.spacing.xl};
  background: var(--color-bg-white);
  border-radius: ${theme.borderRadius.lg};
  color: var(--color-text-tertiary);
  font-size: ${theme.fontSizes.lg};
`;
