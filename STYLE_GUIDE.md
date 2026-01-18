# 스타일 가이드

## 📁 폴더 구조

```
src/styles/
├── theme.ts              # 공통 테마 (색상, 폰트, 간격 등)
├── common.ts             # 공통 컴포넌트 스타일
└── components/
    └── headerStyles.ts   # Header 컴포넌트 스타일
```

## 🎨 테마 사용법

### 색상
```typescript
import { theme } from './styles/theme';

const Button = styled.button`
  background: ${theme.colors.primary};        // #4f46e5
  color: ${theme.colors.textWhite};          // #ffffff

  &:hover {
    background: ${theme.colors.primaryHover}; // #4338ca
  }
`;
```

### 간격
```typescript
const Container = styled.div`
  padding: ${theme.spacing.xl};              // 2rem (32px)
  margin-bottom: ${theme.spacing.lg};        // 1.5rem (24px)
`;
```

### Border Radius
```typescript
const Card = styled.div`
  border-radius: ${theme.borderRadius.lg};   // 12px
`;
```

### Transition
```typescript
const Link = styled.a`
  transition: color ${theme.transitions.base}; // 0.2s ease
`;
```

### 브레이크포인트
```typescript
const Nav = styled.nav`
  @media (max-width: ${theme.breakpoints.tablet}) {  // 768px
    flex-direction: column;
  }
`;
```

## 🧩 공통 컴포넌트 사용법

```typescript
import { Button, Input, Card, Title } from './styles/common';

function MyPage() {
  return (
    <Card>
      <Title>제목</Title>
      <Input placeholder="입력하세요" />
      <Button variant="primary">확인</Button>
    </Card>
  );
}
```

## 📝 스타일 분리 예제

### Before (기존 방식)
```typescript
// MyComponent.tsx
import styled from 'styled-components';

const Container = styled.div`
  background: #f9f9f9;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #1a1a1a;
`;

export default function MyComponent() {
  return (
    <Container>
      <Title>Hello</Title>
    </Container>
  );
}
```

### After (권장 방식)
```typescript
// styles/components/myComponentStyles.ts
import styled from 'styled-components';
import { theme } from '../theme';

export const Container = styled.div`
  background: ${theme.colors.bgLight};
  padding: ${theme.spacing.xl};
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes['3xl']};
  color: ${theme.colors.textPrimary};
`;
```

```typescript
// MyComponent.tsx
import { Container, Title } from '../styles/components/myComponentStyles';

export default function MyComponent() {
  return (
    <Container>
      <Title>Hello</Title>
    </Container>
  );
}
```

## 🎯 스타일 통일 가이드

### 1. 색상은 항상 theme 사용
❌ 나쁜 예:
```typescript
background: #4f46e5;
color: #666;
```

✅ 좋은 예:
```typescript
background: ${theme.colors.primary};
color: ${theme.colors.textSecondary};
```

### 2. 간격은 theme.spacing 사용
❌ 나쁜 예:
```typescript
padding: 20px;
margin: 15px;
```

✅ 좋은 예:
```typescript
padding: ${theme.spacing.lg};    // 24px
margin: ${theme.spacing.md};     // 16px
```

### 3. 폰트 크기는 theme.fontSizes 사용
❌ 나쁜 예:
```typescript
font-size: 16px;
font-size: 1.5rem;
```

✅ 좋은 예:
```typescript
font-size: ${theme.fontSizes.base};  // 1rem
font-size: ${theme.fontSizes.xl};    // 1.25rem
```

### 4. Transition은 theme.transitions 사용
❌ 나쁜 예:
```typescript
transition: all 0.2s;
transition: color 200ms ease;
```

✅ 좋은 예:
```typescript
transition: all ${theme.transitions.base};
transition: color ${theme.transitions.base};
```

## 📋 남은 작업 (선택사항)

필요시 아래 스타일 파일들을 생성하여 분리할 수 있습니다:

### 컴포넌트 스타일
- `styles/components/footerStyles.ts`
- `styles/components/projects/imageUploaderStyles.ts`
- `styles/components/projects/categorySelectorStyles.ts`
- `styles/components/projects/tagInputStyles.ts`
- `styles/components/projects/projectCardStyles.ts`
- `styles/components/projects/searchBarStyles.ts`

### 페이지 스타일
- `styles/pages/homeStyles.ts`
- `styles/pages/loginStyles.ts`
- `styles/pages/signupStyles.ts`
- `styles/pages/projects/registerStyles.ts`
- `styles/pages/projects/listStyles.ts`
- `styles/pages/projects/detailStyles.ts`

## 🚀 빠른 시작

1. 새 컴포넌트를 만들 때는 항상 `theme`을 사용
2. 재사용 가능한 스타일은 `common.ts`에 추가
3. 복잡한 컴포넌트는 별도 스타일 파일로 분리
4. 모든 하드코딩된 값 대신 theme 값 사용

이렇게 하면 전체 프로젝트의 스타일을 일관되게 유지하고, 테마 변경도 쉽게 할 수 있습니다!
