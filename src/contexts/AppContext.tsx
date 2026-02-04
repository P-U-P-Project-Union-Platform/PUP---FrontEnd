import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import type { RecruitPost, CommunityPost } from '../mocks';
import type { UserProfile, UserRole } from '../types';
import { mockRecruits, mockCommunityPosts, mockUsers as initialMockUsers } from '../mocks';
import { authService } from '../services/authService';

interface AppContextType {
  // 인원 모집
  recruits: RecruitPost[];
  addRecruit: (recruit: Omit<RecruitPost, 'id'>) => void;

  // 커뮤니티
  communityPosts: CommunityPost[];
  addCommunityPost: (post: Omit<CommunityPost, 'id' | 'views' | 'comments' | 'likes'>) => void;

  // 프로필
  userProfile: UserProfile | null;
  updateProfile: (profile: UserProfile) => void;

  // 사용자 목록
  users: Record<string, UserProfile>;

  // 다크모드
  isDarkMode: boolean;
  toggleDarkMode: () => void;

  // 인증
  isLoggedIn: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  checkRole: (requiredRole: UserRole) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [recruits, setRecruits] = useState<RecruitPost[]>(mockRecruits);
  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>(mockCommunityPosts);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [users, setUsers] = useState<Record<string, UserProfile>>(initialMockUsers);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  // Initialize user from localStorage only (no auto-login for production-ready setup)
  useEffect(() => {
    const savedUser = authService.getCurrentUser();
    if (savedUser) {
      setUserProfile(savedUser);
    }
    // 백엔드 연동 시 자동 로그인 제거
  }, []);

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

  const login = (email: string, password: string): boolean => {
    const user = authService.login({ email, password });
    if (user) {
      setUserProfile(user);
      authService.saveCurrentUser(user);
      return true;
    }
    return false;
  };

  const logout = (): void => {
    authService.logout();
    setUserProfile(null);
  };

  const checkRole = (requiredRole: UserRole): boolean => {
    return authService.checkRole(userProfile, requiredRole);
  };

  const isLoggedIn = userProfile !== null;
  const isAdmin = authService.isAdmin(userProfile);

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
        toggleDarkMode,
        isLoggedIn,
        isAdmin,
        login,
        logout,
        checkRole
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
