// 프로젝트 카테고리 정의
export const PROJECT_CATEGORIES = [
  { id: 'web', label: '웹 개발', icon: '🌐' },
  { id: 'mobile', label: '모바일 앱', icon: '📱' },
  { id: 'ai-ml', label: 'AI/ML', icon: '🤖' },
  { id: 'game', label: '게임 개발', icon: '🎮' },
  { id: 'design', label: 'UI/UX 디자인', icon: '🎨' },
  { id: 'backend', label: '백엔드/인프라', icon: '⚙️' },
  { id: 'data', label: '데이터 분석', icon: '📊' },
  { id: 'etc', label: '기타', icon: '📦' },
] as const;

export type ProjectCategory = typeof PROJECT_CATEGORIES[number]['id'];

// 인기 태그 (추천용)
export const POPULAR_TAGS = [
  '초보환영',
  '팀프로젝트',
  '사이드프로젝트',
  '오픈소스',
  '포트폴리오',
  '스터디',
  '해커톤',
  '실전프로젝트',
  '빠른진행',
  '장기프로젝트',
  '리모트',
  '오프라인',
];

// 프로젝트 상태
export type ProjectStatus = 'in_progress' | 'recruiting' | 'completed';

// 프로젝트 승인 상태
export type ProjectApprovalStatus = 'pending' | 'approved' | 'rejected';

// 프로젝트 인터페이스
export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string | null; // Base64 문자열
  category: ProjectCategory;
  tags: string[]; // ['#초보환영', '#팀프로젝트']
  techStack: string[]; // ['React', 'TypeScript']
  github: string;
  createdAt: string; // ISO 8601
  updatedAt: string;
  author: {
    id: string;
    name: string;
  };
  views: number;
  likes: number;
  status: ProjectStatus; // 프로젝트 상태
  positions?: { name: string; count: string }[]; // 모집 포지션 (선택)
  approvalStatus?: ProjectApprovalStatus; // 관리자 승인 상태
  rejectionReason?: string; // 거부 사유
}

// 프로젝트 등록 폼 데이터
export interface ProjectFormData {
  title: string;
  description: string;
  thumbnail: string | null;
  category: ProjectCategory | null;
  tags: string[];
  techStack: string[];
  github: string;
  positions?: { name: string; count: string }[];
  status?: ProjectStatus;
  author?: {
    id: string;
    name: string;
  };
}

// 검색 필터
export interface SearchFilters {
  search?: string;
  category?: ProjectCategory;
  tags?: string[];
}
