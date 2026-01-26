import type { Project } from '../types/project';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: '실시간 채팅 애플리케이션',
    description:
      'Socket.io를 활용한 실시간 채팅 애플리케이션입니다. 개인 채팅, 그룹 채팅, 파일 전송 기능을 지원합니다.',
    thumbnail: null,
    category: 'web',
    tags: ['#팀프로젝트', '#초보환영', '#리모트'],
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/example/chat-app',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z',
    author: { id: '1', name: '김개발' },
    views: 120,
    likes: 15,
  },
  {
    id: '2',
    title: 'AI 기반 이미지 분류 서비스',
    description:
      'TensorFlow를 사용한 이미지 분류 모델을 웹 서비스로 구현했습니다. 실시간 이미지 분석이 가능합니다.',
    thumbnail: null,
    category: 'ai-ml',
    tags: ['#오픈소스', '#실전프로젝트', '#장기프로젝트'],
    techStack: ['Python', 'TensorFlow', 'Flask', 'React'],
    github: 'https://github.com/example/ai-classifier',
    createdAt: '2026-01-14T15:30:00Z',
    updatedAt: '2026-01-14T15:30:00Z',
    author: { id: '2', name: '김철수' },
    views: 230,
    likes: 42,
  },
  {
    id: '3',
    title: '모바일 쇼핑몰 앱',
    description:
      'React Native로 개발한 크로스 플랫폼 쇼핑몰 앱입니다. 결제, 장바구니, 리뷰 시스템을 포함합니다.',
    thumbnail: null,
    category: 'mobile',
    tags: ['#사이드프로젝트', '#포트폴리오'],
    techStack: ['React Native', 'TypeScript', 'Firebase'],
    github: 'https://github.com/example/shopping-app',
    createdAt: '2026-01-13T09:00:00Z',
    updatedAt: '2026-01-13T09:00:00Z',
    author: { id: '3', name: '이영희' },
    views: 180,
    likes: 28,
  },
  {
    id: '4',
    title: '데이터 시각화 대시보드',
    description:
      '대용량 데이터를 실시간으로 시각화하는 대시보드입니다. D3.js와 Chart.js를 활용했습니다.',
    thumbnail: null,
    category: 'data',
    tags: ['#빠른진행', '#스터디'],
    techStack: ['Vue.js', 'D3.js', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/example/data-dashboard',
    createdAt: '2026-01-12T14:20:00Z',
    updatedAt: '2026-01-12T14:20:00Z',
    author: { id: '4', name: '박민수' },
    views: 95,
    likes: 12,
  },
  {
    id: '5',
    title: '2D 플랫포머 게임',
    description:
      'Unity로 제작한 2D 플랫포머 게임입니다. 다양한 스테이지와 보스전이 있습니다.',
    thumbnail: null,
    category: 'game',
    tags: ['#팀프로젝트', '#해커톤'],
    techStack: ['Unity', 'C#'],
    github: 'https://github.com/example/platformer-game',
    createdAt: '2026-01-11T11:45:00Z',
    updatedAt: '2026-01-11T11:45:00Z',
    author: { id: '5', name: '최지훈' },
    views: 310,
    likes: 56,
  },
  {
    id: '6',
    title: 'UI/UX 디자인 시스템',
    description:
      '재사용 가능한 컴포넌트 라이브러리와 디자인 가이드를 포함한 디자인 시스템입니다.',
    thumbnail: null,
    category: 'design',
    tags: ['#오픈소스', '#포트폴리오'],
    techStack: ['Figma', 'Storybook', 'React', 'Styled Components'],
    github: 'https://github.com/example/design-system',
    createdAt: '2026-01-10T16:00:00Z',
    updatedAt: '2026-01-10T16:00:00Z',
    author: { id: '6', name: '정수아' },
    views: 145,
    likes: 22,
  },
  {
    id: '7',
    title: 'Kubernetes 클러스터 관리 도구',
    description:
      'K8s 클러스터를 웹 UI로 관리할 수 있는 도구입니다. 배포, 모니터링, 로그 조회 기능을 제공합니다.',
    thumbnail: null,
    category: 'backend',
    tags: ['#실전프로젝트', '#장기프로젝트'],
    techStack: ['Go', 'Kubernetes', 'Docker', 'React'],
    github: 'https://github.com/example/k8s-manager',
    createdAt: '2026-01-09T08:30:00Z',
    updatedAt: '2026-01-09T08:30:00Z',
    author: { id: '7', name: '강동욱' },
    views: 200,
    likes: 35,
  },
  {
    id: '8',
    title: '온라인 코딩 교육 플랫폼',
    description:
      '실시간 코드 에디터와 자동 채점 시스템을 갖춘 코딩 교육 플랫폼입니다.',
    thumbnail: null,
    category: 'web',
    tags: ['#팀프로젝트', '#사이드프로젝트', '#오프라인'],
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'MySQL'],
    github: 'https://github.com/example/coding-platform',
    createdAt: '2026-01-08T13:15:00Z',
    updatedAt: '2026-01-08T13:15:00Z',
    author: { id: '1', name: '김개발' },
    views: 275,
    likes: 48,
  },
  {
    id: '9',
    title: '음성 인식 비서 앱',
    description:
      'Google Speech API를 활용한 음성 인식 비서 앱입니다. 일정 관리, 알림, 메모 기능을 지원합니다.',
    thumbnail: null,
    category: 'mobile',
    tags: ['#초보환영', '#빠른진행'],
    techStack: ['Flutter', 'Dart', 'Firebase'],
    github: 'https://github.com/example/voice-assistant',
    createdAt: '2026-01-07T10:50:00Z',
    updatedAt: '2026-01-07T10:50:00Z',
    author: { id: '9', name: '임재현' },
    views: 88,
    likes: 9,
  },
  {
    id: '10',
    title: '블록체인 기반 투표 시스템',
    description:
      'Ethereum 스마트 컨트랙트를 사용한 탈중앙화 투표 시스템입니다. 투명성과 보안성을 보장합니다.',
    thumbnail: null,
    category: 'etc',
    tags: ['#오픈소스', '#해커톤', '#실전프로젝트'],
    techStack: ['Solidity', 'Web3.js', 'React', 'Truffle'],
    github: 'https://github.com/example/blockchain-voting',
    createdAt: '2026-01-06T12:00:00Z',
    updatedAt: '2026-01-06T12:00:00Z',
    author: { id: '10', name: '송민재' },
    views: 165,
    likes: 31,
  },
];

/**
 * 개발 모드에서만 Mock 데이터 초기화
 * LocalStorage에 데이터가 없을 때만 주입
 */
export function initializeMockData() {
  if (import.meta.env.DEV) {
    const existing = localStorage.getItem('pup_projects');
    if (!existing) {
      localStorage.setItem('pup_projects', JSON.stringify(mockProjects));
      console.log('✅ Mock 프로젝트 데이터가 초기화되었습니다.');
    }
  }
}
