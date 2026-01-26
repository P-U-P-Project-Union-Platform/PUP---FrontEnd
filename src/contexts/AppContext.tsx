import { createContext, useContext, useState, ReactNode } from 'react';
import type { RecruitPost, CommunityPost, UserProfile } from '../mocks';
import { mockRecruits, mockCommunityPosts, mockUsers as initialMockUsers } from '../mocks';

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

  // 사용자 목록
  users: Record<string, UserProfile>;

  // 다크모드
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// 현재 로그인한 사용자 (고정)
const CURRENT_USER = '김개발';
const initialProfile: UserProfile = initialMockUsers[CURRENT_USER];

export function AppProvider({ children }: { children: ReactNode }) {
  const [recruits, setRecruits] = useState<RecruitPost[]>(mockRecruits);
  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>(mockCommunityPosts);
  const [userProfile, setUserProfile] = useState<UserProfile>(initialProfile);
  const [users, setUsers] = useState<Record<string, UserProfile>>(initialMockUsers);
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
    // users 목록도 함께 업데이트
    setUsers(prev => ({
      ...prev,
      [profile.username]: profile
    }));
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
        users,
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
