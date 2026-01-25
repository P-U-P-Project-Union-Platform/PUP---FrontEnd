ximport styled from 'styled-components';
import { theme } from './theme';

// 공통 컨테이너
export const PageContainer = styled.div`
  background: ${theme.colors.bgLight};
  min-height: 100vh;
  padding: 80px 40px 60px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 80px 20px 40px;
  }
`;

// 공통 버튼
export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'outline' }>`
  padding: 12px 24px;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  border: none;

  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return `
          background: ${theme.colors.primary};
          color: ${theme.colors.textWhite};
          &:hover {
            background: ${theme.colors.primaryHover};
          }
        `;
      case 'secondary':
        return `
          background: ${theme.colors.bgGray};
          color: ${theme.colors.textPrimary};
          &:hover {
            background: #e5e5e5;
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.primary};
          &:hover {
            background: ${theme.colors.primaryLight};
          }
        `;
    }
  }}
`;

// 공통 입력 필드
export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.base};
  outline: none;
  transition: border-color ${theme.transitions.base};
  background: ${theme.colors.bgWhite};
  color: ${theme.colors.textPrimary};

  &:focus {
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.textTertiary};
  }
`;

// 공통 카드
export const Card = styled.div`
  background: ${theme.colors.bgWhite};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.md};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.lg};
  }
`;

// 공통 제목
export const Title = styled.h1`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.textPrimary};
  margin-bottom: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`;

export const SubTitle = styled.h2`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.textPrimary};
  margin-bottom: ${theme.spacing.md};
`;

// 공통 라벨
export const Label = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${theme.fontWeights.semibold};
`;

// 공통 태그
export const Tag = styled.span<{ variant?: 'primary' | 'secondary' }>`
  display: inline-block;
  padding: 6px 14px;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};

  ${({ variant = 'primary' }) =>
    variant === 'primary'
      ? `
    background: ${theme.colors.primary};
    color: ${theme.colors.textWhite};
  `
      : `
    background: ${theme.colors.bgGray};
    color: ${theme.colors.textSecondary};
  `}
`;

// 공통 링크
export const StyledLink = styled.a`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: ${theme.fontWeights.medium};
  transition: color ${theme.transitions.base};

  &:hover {
    color: ${theme.colors.primaryHover};
    text-decoration: underline;
  }
`;
