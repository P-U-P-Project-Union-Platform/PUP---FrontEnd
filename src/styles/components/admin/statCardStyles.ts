import styled from 'styled-components';

export const StatCardContainer = styled.div<{ $gradient: string }>`
  background: ${props => props.$gradient};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.md};
  transition: transform ${props => props.theme.transitions.base}, box-shadow ${props => props.theme.transitions.base};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: ${props => props.theme.decorationSizes.circle};
    height: ${props => props.theme.decorationSizes.circle};
    background: ${props => props.theme.opacity.decorationBg};
    border-radius: 50%;
    transform: translate(30%, -30%);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

export const StatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const StatTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 500;
  color: ${props => props.theme.opacity.textPrimary};
  margin: 0;
`;

export const StatIcon = styled.div`
  font-size: ${props => props.theme.fontSizes['2xl']};
  opacity: 0.9;
`;

export const StatValue = styled.div`
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: 700;
  color: white;
  margin-bottom: ${props => props.theme.spacing.xs};
  position: relative;
  z-index: 1;
`;

export const StatChange = styled.div<{ $isPositive: boolean }>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.$isPositive ? props.theme.opacity.textPrimary : props.theme.opacity.textSecondary};
  font-weight: 500;

  &::before {
    content: '${props => props.$isPositive ? '↗' : '↘'}';
    font-size: ${props => props.theme.fontSizes.lg};
  }
`;
