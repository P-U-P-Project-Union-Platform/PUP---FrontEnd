import { createContext, useContext, useState, ReactNode } from 'react';
import type { RecruitPost, CommunityPost } from '../mocks';
import { mockRecruits, mockCommunityPosts } from '../mocks';

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

  // 다크모드
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// 초기 프로필 데이터
const initialProfile: UserProfile = {
  name: '김개발',
  email: 'developer@example.com',
  bio: '풀스택 개발자입니다. 새로운 기술을 배우고 적용하는 것을 좋아합니다.\n함께 성장할 수 있는 프로젝트에 관심이 많습니다.',
  github: 'https://github.com/username',
  blog: 'https://blog.example.com',
  portfolio: 'https://portfolio.example.com'
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [recruits, setRecruits] = useState<RecruitPost[]>(mockRecruits);
  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>(mockCommunityPosts);
  const [userProfile, setUserProfile] = useState<UserProfile>(initialProfile);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

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

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        recruits,
        addRecruit,
        communityPosts,
        addCommunityPost,
        userProfile,
        updateProfile,
        isDarkMode,
        toggleDarkMode
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
