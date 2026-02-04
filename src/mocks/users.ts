import type { UserProfile } from '../types';

export const mockUsers: Record<string, UserProfile> = {
  '김철수': {
    username: '김철수',
    name: '김철수',
    initial: '김',
    bio: 'AI와 머신러닝에 관심이 많은 풀스택 개발자입니다. 새로운 기술을 배우고 적용하는 것을 좋아합니다.',
    email: 'kimcs@example.com',
    github: 'https://github.com/kimchulsu',
    blog: 'https://blog.kimchulsu.dev',
    portfolio: 'https://kimchulsu.dev',
    role: 'user' as const,
    status: 'active' as const,
    stats: {
      projects: 8,
      posts: 15,
      likes: 124,
      followers: 45
    },
    joinedAt: '2023-01-15',
    lastLoginAt: '2026-02-03T14:23:00Z'
  },
  '이영희': {
    username: '이영희',
    name: '이영희',
    initial: '이',
    bio: '지속 가능한 서비스를 만드는 것에 관심이 많은 백엔드 개발자입니다. 클린 코드와 좋은 아키텍처를 추구합니다.',
    email: 'leeyh@example.com',
    github: 'https://github.com/leeyounghee',
    role: 'user' as const,
    status: 'active' as const,
    stats: {
      projects: 6,
      posts: 22,
      likes: 89,
      followers: 38
    },
    joinedAt: '2023-03-20',
    lastLoginAt: '2026-02-02T09:15:00Z'
  },
  '김개발': {
    username: '김개발',
    name: '김개발',
    initial: '김',
    bio: '시스템 관리자',
    email: 'admin@example.com',
    github: 'https://github.com/kimdev',
    blog: 'https://dev.to/kimdev',
    role: 'admin' as const,
    status: 'active' as const,
    stats: {
      projects: 12,
      posts: 45,
      likes: 230,
      followers: 89
    },
    joinedAt: '2022-11-05',
    lastLoginAt: '2026-02-04T10:00:00Z'
  },
  '이초보': {
    username: '이초보',
    name: '이초보',
    initial: '이',
    bio: '개발을 시작한 지 1년 된 주니어 개발자입니다. 열심히 배우고 있습니다!',
    email: 'leechobo@example.com',
    github: 'https://github.com/leechobo',
    role: 'user' as const,
    status: 'active' as const,
    stats: {
      projects: 3,
      posts: 8,
      likes: 42,
      followers: 15
    },
    joinedAt: '2023-10-10',
    lastLoginAt: '2026-02-01T16:45:00Z'
  },
  '박프론트': {
    username: '박프론트',
    name: '박프론트',
    initial: '박',
    bio: 'React와 TypeScript를 사랑하는 프론트엔드 개발자입니다. UI/UX에 관심이 많습니다.',
    email: 'parkfront@example.com',
    github: 'https://github.com/parkfront',
    portfolio: 'https://parkfront.vercel.app',
    role: 'user' as const,
    status: 'active' as const,
    stats: {
      projects: 10,
      posts: 28,
      likes: 178,
      followers: 62
    },
    joinedAt: '2023-02-14',
    lastLoginAt: '2026-02-04T08:30:00Z'
  },
  '이코더': {
    username: '이코더',
    name: '이코더',
    initial: '이',
    bio: '깔끔한 코드와 좋은 설계를 지향하는 개발자입니다. 코드 리뷰를 좋아합니다.',
    email: 'leecoder@example.com',
    github: 'https://github.com/leecoder',
    role: 'user' as const,
    status: 'active' as const,
    stats: {
      projects: 7,
      posts: 19,
      likes: 145,
      followers: 52
    },
    joinedAt: '2023-04-22',
    lastLoginAt: '2026-01-30T11:20:00Z'
  }
};

export const getUserProfile = (username: string): UserProfile | null => {
  return mockUsers[username] || null;
};

export const getAllUsers = (): UserProfile[] => {
  return Object.values(mockUsers);
};
