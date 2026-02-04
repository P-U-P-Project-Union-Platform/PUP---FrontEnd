import type { UserProfile, UserRole, AdminStats, ActivityLog, ProjectApprovalStatus } from '../types';
import { mockUsers } from '../mocks/users';
import { mockActivityLogs } from '../mocks/adminStats';
import { mockPendingProjects } from '../mocks/pendingProjects';

export const adminService = {
  // Statistics - 실시간 계산
  getStats: (): AdminStats => {
    const users = Object.values(mockUsers);
    const activeUsers = users.filter(u => u.status === 'active');
    const suspendedUsers = users.filter(u => u.status === 'suspended');

    // 이번 달 가입자 계산 (최근 30일)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const newThisMonth = users.filter(u => {
      const joinDate = new Date(u.joinedAt);
      return joinDate > thirtyDaysAgo;
    }).length;

    return {
      users: {
        total: users.length,
        active: activeUsers.length,
        newThisMonth: newThisMonth,
        suspended: suspendedUsers.length
      },
      projects: {
        total: mockPendingProjects.length,
        pending: mockPendingProjects.filter(p => p.approvalStatus === 'pending').length,
        approved: mockPendingProjects.filter(p => p.approvalStatus === 'approved').length,
        rejected: mockPendingProjects.filter(p => p.approvalStatus === 'rejected').length
      },
      posts: {
        total: 284,
        reported: 3,
        hidden: 1
      }
    };
  },

  // User management
  getAllUsers: (): UserProfile[] => {
    return Object.values(mockUsers);
  },

  updateUserRole: (username: string, role: UserRole): boolean => {
    const user = mockUsers[username];
    if (!user) return false;

    user.role = role;
    return true;
  },

  suspendUser: (username: string): boolean => {
    const user = mockUsers[username];
    if (!user) return false;

    user.status = 'suspended';
    return true;
  },

  activateUser: (username: string): boolean => {
    const user = mockUsers[username];
    if (!user) return false;

    user.status = 'active';
    return true;
  },

  deleteUser: (username: string): boolean => {
    if (!mockUsers[username]) return false;

    delete mockUsers[username];
    return true;
  },

  // Project approval - 실제 데이터 수정
  approveProject: (projectId: string): boolean => {
    const project = mockPendingProjects.find(p => p.id === projectId);
    if (!project) return false;

    project.approvalStatus = 'approved';
    console.log(`Project ${projectId} approved`);
    return true;
  },

  rejectProject: (projectId: string, reason: string): boolean => {
    const project = mockPendingProjects.find(p => p.id === projectId);
    if (!project) return false;

    project.approvalStatus = 'rejected';
    project.rejectionReason = reason;
    console.log(`Project ${projectId} rejected: ${reason}`);
    return true;
  },

  // Project list
  getAllProjects: () => {
    return [...mockPendingProjects];
  },

  // Activity logs
  getActivityLogs: (): ActivityLog[] => {
    return [...mockActivityLogs];
  },

  addActivityLog: (
    adminId: string,
    adminName: string,
    action: string,
    target: string,
    details: string
  ): ActivityLog => {
    const newLog: ActivityLog = {
      id: String(mockActivityLogs.length + 1),
      adminId,
      adminName,
      action,
      target,
      details,
      timestamp: new Date().toISOString()
    };

    mockActivityLogs.unshift(newLog);
    return newLog;
  }
};
