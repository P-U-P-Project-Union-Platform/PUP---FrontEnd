ximport styled from 'styled-components';
import { theme } from './theme';

// 공통 컨테이너
export const PageContainer = styled.div`
  background: var(--color-bg-light);
  min-height: 100vh;
  padding: 80px 40px 60px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 80px 20px 40px;
  }
`;

// 공통 버튼 - 감각적인 디자인
export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'outline' | 'gradient' }>`
  padding: 12px 28px;
  border-radius: ${theme.borderRadius.lg};
  font-size: ${theme.fontSizes.base};
  font-weight: ${theme.fontWeights.semibold};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  border: none;
  position: relative;
  overflow: hidden;

  &:active {
    transform: scale(0.98);
  }

  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return `
          background: var(--gradient-blue);
          color: var(--color-text-white);
          box-shadow: var(--shadow-md);

          &:hover {
            box-shadow: var(--shadow-lg), var(--shadow-glow);
            transform: translateY(-2px);
          }
        `;
      case 'secondary':
        return `
          background: var(--color-bg-gray);
          color: var(--color-text-primary);
          box-shadow: var(--shadow-sm);

          &:hover {
            background: var(--color-border);
            box-shadow: var(--shadow-md);
            transform: translateY(-2px);
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: var(--color-primary);
          border: 2px solid var(--color-primary);

          &:hover {
            background: var(--color-primary);
            color: var(--color-text-white);
            transform: translateY(-2px);
          }
        `;
      case 'gradient':
        return `
          background: var(--gradient-purple);
          color: var(--color-text-white);
          box-shadow: var(--shadow-md);

          &:hover {
            box-shadow: var(--shadow-lg);
            transform: translateY(-2px) scale(1.02);
          }
        `;
    }
  }}
`;

// 공통 입력 필드 - 개선된 스타일
export const Input = styled.input`
  width: 100%;
  padding: 14px 18px;
  border: 2px solid var(--color-border);
  border-radius: ${theme.borderRadius.lg};
  font-size: ${theme.fontSizes.base};
  outline: none;
  transition: all ${theme.transitions.base};
  background: var(--color-bg-white);
  color: var(--color-text-primary);

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px var(--color-primary-light);
  }

  &:hover {
    border-color: var(--color-border-dark-hover);
  }

  &::placeholder {
    color: var(--color-text-tertiary);
  }
`;

// 공통 카드 - 글래스모피즘 효과
export const Card = styled.div`
  background: var(--color-bg-white);
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['2xl']};
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border);
  transition: all ${theme.transitions.base};

  &:hover {
    box-shadow: var(--shadow-xl);
    transform: translateY(-2px);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl};
  }
`;

// 공통 제목 - 그라데이션 텍스트 옵션
export const Title = styled.h1<{ gradient?: boolean }>`
  font-size: ${theme.fontSizes['3xl']};
  font-weight: ${theme.fontWeights.bold};
  color: var(--color-text-primary);
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.2;

  ${({ gradient }) =>
    gradient &&
    `
    background: var(--gradient-blue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `}

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`;

export const SubTitle = styled.h2`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: var(--color-text-primary);
  margin-bottom: ${theme.spacing.md};
  line-height: 1.3;
`;

// 공통 라벨
export const Label = styled.div`
  font-size: ${theme.fontSizes.sm};
  color: var(--color-text-secondary);
  margin-bottom: ${theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: ${theme.fontWeights.semibold};
`;

// 공통 태그 - 더 세련된 스타일
export const Tag = styled.span<{ variant?: 'primary' | 'secondary' | 'gradient' }>`
  display: inline-block;
  padding: 8px 16px;
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  transition: all ${theme.transitions.base};

  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return `
          background: var(--color-primary);
          color: var(--color-text-white);
          box-shadow: var(--shadow-sm);

          &:hover {
            box-shadow: var(--shadow-md);
            transform: translateY(-1px);
          }
        `;
      case 'secondary':
        return `
          background: var(--color-bg-gray);
          color: var(--color-text-secondary);

          &:hover {
            background: var(--color-border);
            color: var(--color-text-primary);
          }
        `;
      case 'gradient':
        return `
          background: var(--gradient-purple);
          color: var(--color-text-white);
          box-shadow: var(--shadow-sm);

          &:hover {
            box-shadow: var(--shadow-md);
            transform: translateY(-1px) scale(1.05);
          }
        `;
    }
  }}
`;

// 공통 링크
export const StyledLink = styled.a`
  color: var(--color-primary);
  text-decoration: none;
  font-weight: ${theme.fontWeights.medium};
  transition: all ${theme.transitions.base};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background: var(--gradient-blue);
    transition: width ${theme.transitions.base};
  }

  &:hover {
    color: var(--color-primary-hover);

    &::after {
      width: 100%;
    }
  }
`;
