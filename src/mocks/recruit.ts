export interface RecruitPost {
  id: number;
  projectTitle: string;
  description: string;
  thumbnail: string;
  positions: { name: string; count: string }[];
  tags: string[];
  author: string;
  date: string;
  status: 'recruiting' | 'closed';
}

export const mockRecruits: RecruitPost[] = [
  {
    id: 1,
    projectTitle: 'AI 기반 학습 플랫폼 개발',
    description: 'AI를 활용한 맞춤형 학습 플랫폼을 개발하고 있습니다. 교육과 기술의 융합에 관심 있는 분들을 찾습니다.',
    thumbnail: '',
    positions: [
      { name: '프론트엔드 개발자', count: '2' },
      { name: 'AI 엔지니어', count: '1' },
      { name: 'UI/UX 디자이너', count: '1' }
    ],
    tags: ['React', 'Python', 'TensorFlow', 'Figma'],
    author: '김철수',
    date: '2024-01-15',
    status: 'recruiting'
  },
  {
    id: 2,
    projectTitle: '친환경 배달 서비스 앱',
    description: '환경을 생각하는 배달 서비스 플랫폼입니다. 지속 가능한 서비스를 함께 만들어갈 팀원을 찾습니다.',
    thumbnail: '',
    positions: [
      { name: '백엔드 개발자', count: '2' },
      { name: '모바일 개발자', count: '2' }
    ],
    tags: ['Node.js', 'React Native', 'MongoDB'],
    author: '이영희',
    date: '2024-01-14',
    status: 'recruiting'
  },
  {
    id: 3,
    projectTitle: '소셜 네트워킹 서비스',
    description: '새로운 소셜 네트워크 서비스를 함께 만들 팀원을 모집합니다.',
    thumbnail: '',
    positions: [
      { name: '풀스택 개발자', count: '3' },
      { name: 'DevOps 엔지니어', count: '1' }
    ],
    tags: ['TypeScript', 'Next.js', 'AWS', 'Docker'],
    author: '박프론트',
    date: '2024-01-13',
    status: 'recruiting'
  }
];

// 프로젝트별 인원 모집 상세 정보
export const recruitDetails: { [key: string]: any } = {
  '1': {
    isRecruiting: true,
    positions: [
      { name: '프론트엔드 개발자', current: 1, total: 2 },
      { name: 'AI 엔지니어', current: 0, total: 1 },
      { name: 'UI/UX 디자이너', current: 1, total: 1 }
    ]
  },
  '2': {
    isRecruiting: true,
    positions: [
      { name: '백엔드 개발자', current: 0, total: 2 },
      { name: '모바일 개발자', current: 1, total: 2 }
    ]
  }
};
