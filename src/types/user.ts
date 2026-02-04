export type UserRole = 'admin' | 'user';

export interface UserProfile {
  username: string;
  name: string;
  initial: string;
  bio: string;
  email?: string;
  github?: string;
  blog?: string;
  portfolio?: string;
  avatar?: string;
  role: UserRole;
  status: 'active' | 'suspended' | 'inactive';
  stats: {
    projects: number;
    posts: number;
    likes: number;
    followers: number;
  };
  joinedAt: string;
  lastLoginAt?: string;
}
