import styled from 'styled-components';
import { theme } from '../../theme';

export const StatCardContainer = styled.div<{ gradient: string }>`
  background: ${props => props.gradient};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.md};
  transition: all ${theme.transitions.base};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translate(30%, -30%);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`;

export const StatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.md};
`;

export const StatTitle = styled.h3`
  font-size: ${theme.fontSizes.sm};
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
`;

export const StatIcon = styled.div`
  font-size: ${theme.fontSizes['2xl']};
  opacity: 0.9;
`;

export const StatValue = styled.div`
  font-size: ${theme.fontSizes['4xl']};
  font-weight: 700;
  color: white;
  margin-bottom: ${theme.spacing.xs};
  position: relative;
  z-index: 1;
`;

export const StatChange = styled.div<{ isPositive: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  font-size: ${theme.fontSizes.sm};
  color: ${props => props.isPositive ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)'};
  font-weight: 500;

  &::before {
    content: '${props => props.isPositive ? '↗' : '↘'}';
    font-size: ${theme.fontSizes.lg};
  }
`;
