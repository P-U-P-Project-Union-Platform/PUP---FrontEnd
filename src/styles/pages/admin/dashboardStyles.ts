import styled from 'styled-components';
import { theme } from '../../theme';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: 700;
  color: var(--color-text-primary);
  margin: ${theme.spacing.xl} 0 ${theme.spacing.lg} 0;
`;

export const ActivityContainer = styled.div`
  background: var(--color-bg-white);
  border-radius: ${theme.borderRadius.lg};
  box-shadow: var(--shadow-md);
  padding: ${theme.spacing.xl};
`;

export const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const ActivityItem = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.lg};
  background: var(--color-bg-light);
  border-radius: ${theme.borderRadius.md};
  transition: transform ${theme.transitions.fast};

  &:hover {
    transform: translateX(4px);
  }
`;

export const ActivityIcon = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.full};
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: ${theme.fontSizes.lg};
`;

export const ActivityContent = styled.div`
  flex: 1;
`;

export const ActivityAction = styled.div`
  font-size: ${theme.fontSizes.base};
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: ${theme.spacing.xs};
`;

export const ActivityDetails = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-secondary);
`;

export const ActivityTime = styled.div`
  font-size: ${theme.fontSizes.xs};
  color: var(--color-text-secondary);
  white-space: nowrap;
`;
