export interface CommunityPost {
  id: number;
  title: string;
  content: string;
  category: string;
  author: string;
  authorInitial: string;
  date: string;
  views: number;
  comments: number;
  likes: number;
}

export const mockCommunityPosts: CommunityPost[] = [
  {
    id: 1,
    title: '프로젝트 협업 시 커뮤니케이션 팁 공유합니다',
    content: '프로젝트를 진행하면서 팀원들과의 원활한 소통이 정말 중요하다는 걸 느꼈어요. 제가 사용했던 방법들을 공유해드립니다...',
    category: '정보',
    author: '김개발',
    authorInitial: '김',
    date: '2024-01-18',
    views: 152,
    comments: 23,
    likes: 45
  },
  {
    id: 2,
    title: 'React vs Vue, 어떤 걸 선택하셨나요?',
    content: '새로운 프로젝트를 시작하려고 하는데 프론트엔드 프레임워크 선택에 고민이 많습니다.',
    category: '질문',
    author: '이초보',
    authorInitial: '이',
    date: '2024-01-17',
    views: 89,
    comments: 17,
    likes: 12
  },
  {
    id: 3,
    title: 'TypeScript 마이그레이션 후기',
    content: '기존 JavaScript 프로젝트를 TypeScript로 마이그레이션한 경험을 공유합니다. 생각보다 쉬웠어요!',
    category: '후기',
    author: '박프론트',
    authorInitial: '박',
    date: '2024-01-16',
    views: 203,
    comments: 31,
    likes: 68
  },
  {
    id: 4,
    title: 'Git 브랜치 전략 어떻게 사용하시나요?',
    content: '팀 프로젝트에서 Git Flow, GitHub Flow 등 여러 전략이 있는데 어떤 걸 사용하시는지 궁금합니다.',
    category: '질문',
    author: '이코더',
    authorInitial: '이',
    date: '2024-01-15',
    views: 124,
    comments: 28,
    likes: 35
  },
  {
    id: 5,
    title: '첫 해커톤 참가 후기',
    content: '처음으로 해커톤에 참가했는데 정말 값진 경험이었습니다. 36시간 동안의 치열했던 개발기를 공유합니다.',
    category: '후기',
    author: '김철수',
    authorInitial: '김',
    date: '2024-01-14',
    views: 178,
    comments: 19,
    likes: 52
  },
  {
    id: 6,
    title: 'Docker 초보자를 위한 가이드',
    content: 'Docker를 처음 시작하시는 분들을 위해 제가 공부하면서 정리한 내용을 공유합니다.',
    category: '정보',
    author: '이영희',
    authorInitial: '이',
    date: '2024-01-13',
    views: 295,
    comments: 42,
    likes: 87
  }
];
