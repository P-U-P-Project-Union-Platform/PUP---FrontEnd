import { createContext, useContext, useState, ReactNode } from 'react';

// 인원 모집 타입
interface RecruitPost {
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

// 커뮤니티 게시글 타입
interface CommunityPost {
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

// 사용자 프로필 타입
interface UserProfile {
  name: string;
  email: string;
  bio: string;
  github: string;
  blog: string;
  portfolio: string;
}

interface AppContextType {
  // 인원 모집
  recruits: RecruitPost[];
  addRecruit: (recruit: Omit<RecruitPost, 'id'>) => void;

  // 커뮤니티
  communityPosts: CommunityPost[];
  addCommunityPost: (post: Omit<CommunityPost, 'id' | 'views' | 'comments' | 'likes'>) => void;

  // 프로필
  userProfile: UserProfile;
  updateProfile: (profile: UserProfile) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// 초기 데이터
const initialRecruits: RecruitPost[] = [
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
  }
];

const initialCommunityPosts: CommunityPost[] = [
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
  }
];

const initialProfile: UserProfile = {
  name: '김개발',
  email: 'developer@example.com',
  bio: '풀스택 개발자입니다. 새로운 기술을 배우고 적용하는 것을 좋아합니다.\n함께 성장할 수 있는 프로젝트에 관심이 많습니다.',
  github: 'https://github.com/username',
  blog: 'https://blog.example.com',
  portfolio: 'https://portfolio.example.com'
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [recruits, setRecruits] = useState<RecruitPost[]>(initialRecruits);
  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>(initialCommunityPosts);
  const [userProfile, setUserProfile] = useState<UserProfile>(initialProfile);

  const addRecruit = (recruit: Omit<RecruitPost, 'id'>) => {
    const newRecruit: RecruitPost = {
      ...recruit,
      id: Date.now()
    };
    setRecruits(prev => [newRecruit, ...prev]);
  };

  const addCommunityPost = (post: Omit<CommunityPost, 'id' | 'views' | 'comments' | 'likes'>) => {
    const newPost: CommunityPost = {
      ...post,
      id: Date.now(),
      views: 0,
      comments: 0,
      likes: 0
    };
    setCommunityPosts(prev => [newPost, ...prev]);
  };

  const updateProfile = (profile: UserProfile) => {
    setUserProfile(profile);
  };

  return (
    <AppContext.Provider
      value={{
        recruits,
        addRecruit,
        communityPosts,
        addCommunityPost,
        userProfile,
        updateProfile
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
