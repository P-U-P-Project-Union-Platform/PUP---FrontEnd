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

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: transparent;
  color: var(--color-text-secondary);
  border: none;
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  margin-bottom: ${theme.spacing.xl};
  transition: all ${theme.transitions.base};
  border-radius: ${theme.borderRadius.md};
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    color: var(--color-text-primary);
    background: var(--color-bg-gray);
  }
`;

export const ProfileSection = styled.div`
  max-width: 1000px;
  margin: 0 auto ${theme.spacing['2xl']};
  background: var(--color-bg-white);
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['3xl']};
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border);

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing['2xl']};
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing['2xl']};
  padding-bottom: ${theme.spacing['2xl']};
  border-bottom: 1px solid var(--color-border);

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: ${theme.borderRadius.full};
  background: var(--gradient-blue);
  color: var(--color-text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes['4xl']};
  box-shadow: var(--shadow-xl);
  flex-shrink: 0;
`;

export const ProfileInfo = styled.div`
  flex: 1;
`;

export const UserName = styled.h1`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: var(--color-text-primary);
  margin-bottom: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`;

export const UserBio = styled.p`
  font-size: ${theme.fontSizes.base};
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: ${theme.spacing.lg};
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
`;

export const InfoLabel = styled.span`
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semibold};
  color: var(--color-text-secondary);
  min-width: 100px;
`;

export const InfoValue = styled.span`
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-primary);
`;

export const InfoLink = styled.a`
  font-size: ${theme.fontSizes.sm};
  color: var(--color-primary);
  text-decoration: none;
  font-weight: ${theme.fontWeights.medium};
  transition: all ${theme.transitions.base};

  &:hover {
    color: var(--color-primary-hover);
    text-decoration: underline;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StatCard = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};
  background: var(--color-bg-gray);
  border-radius: ${theme.borderRadius.lg};
  transition: all ${theme.transitions.base};
  border: 1px solid var(--color-border);

  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
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
  font-weight: ${theme.fontWeights.medium};
`;

export const ContentSection = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background: var(--color-bg-white);
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['3xl']};
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border);

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing['2xl']};
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  color: var(--color-text-primary);
  margin-bottom: ${theme.spacing.xl};
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing['3xl']};
  color: var(--color-text-tertiary);
  font-size: ${theme.fontSizes.base};
`;
