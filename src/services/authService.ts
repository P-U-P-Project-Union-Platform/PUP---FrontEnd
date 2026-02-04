import type { UserProfile, UserRole } from '../types';
import { getUserByEmail } from '../mocks/users';

interface LoginCredentials {
  email: string;
  password: string;
}

// Mock password storage (email 기반, 백엔드 연동 시 삭제 예정)
const mockPasswords: Record<string, string> = {
  // 관리자 계정
  'admin@example.com': 'admin123',

  // 일반 사용자 계정
  'kimcs@example.com': 'user123',
  'leeyh@example.com': 'user123',
  'leechobo@example.com': 'user123',
  'parkfront@example.com': 'user123',
  'leecoder@example.com': 'user123'
};

export const authService = {
  login: (credentials: LoginCredentials): UserProfile | null => {
    const { email, password } = credentials;

    // Check if user exists
    const user = getUserByEmail(email);
    if (!user) {
      return null;
    }

    // Check password
    if (mockPasswords[email] !== password) {
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
    try {
      const stored = localStorage.getItem('currentUser');
      if (!stored || stored === 'undefined' || stored === 'null') {
        return null;
      }
      return JSON.parse(stored);
    } catch (error) {
      console.error('Failed to parse user from localStorage:', error);
      localStorage.removeItem('currentUser');
      return null;
    }
  },

  saveCurrentUser: (user: UserProfile): void => {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
};
