import type { UserProfile, UserRole } from '../types';
import { mockUsers } from '../mocks/users';

interface LoginCredentials {
  username: string;
  password: string;
}

// Mock password storage (in real app, this would be backend)
const mockPasswords: Record<string, string> = {
  '김개발': 'admin123',
  '김철수': 'user123',
  '이영희': 'user123',
  '이초보': 'user123',
  '박프론트': 'user123',
  '이코더': 'user123'
};

export const authService = {
  login: (credentials: LoginCredentials): UserProfile | null => {
    const { username, password } = credentials;

    // Check if user exists
    const user = mockUsers[username];
    if (!user) {
      return null;
    }

    // Check password
    if (mockPasswords[username] !== password) {
      return null;
    }

    // Update last login time
    const updatedUser = {
      ...user,
      lastLoginAt: new Date().toISOString()
    };

    return updatedUser;
  },

  logout: (): void => {
    // In real app, clear tokens/session
    localStorage.removeItem('currentUser');
  },

  checkRole: (user: UserProfile | null, requiredRole: UserRole): boolean => {
    if (!user) return false;
    if (requiredRole === 'admin') {
      return user.role === 'admin';
    }
    return true; // 'user' role is allowed for all logged-in users
  },

  isAdmin: (user: UserProfile | null): boolean => {
    return user?.role === 'admin';
  },

  getCurrentUser: (): UserProfile | null => {
    const stored = localStorage.getItem('currentUser');
    return stored ? JSON.parse(stored) : null;
  },

  saveCurrentUser: (user: UserProfile): void => {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
};
