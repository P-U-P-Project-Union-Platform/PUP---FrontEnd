import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import type { UserProfile, UserRole, AdminStats, ActivityLog, Project } from '../types';
import { adminService } from '../services/adminService';
import { useApp } from './AppContext';

interface AdminContextType {
  // Statistics
  stats: AdminStats;
  refreshStats: () => void;

  // User management
  users: UserProfile[];
  refreshUsers: () => void;
  updateUserRole: (username: string, role: UserRole) => void;
  suspendUser: (username: string) => void;
  activateUser: (username: string) => void;
  deleteUser: (username: string) => void;

  // Project approval
  projects: Project[];
  refreshProjects: () => void;
  approveProject: (projectId: string) => void;
  rejectProject: (projectId: string, reason: string) => void;

  // Activity logs
  activityLogs: ActivityLog[];
  refreshActivityLogs: () => void;
  addActivityLog: (action: string, target: string, details: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const { userProfile } = useApp();
  const [stats, setStats] = useState<AdminStats>(adminService.getStats());
  const [users, setUsers] = useState<UserProfile[]>(adminService.getAllUsers());
  const [projects, setProjects] = useState<Project[]>(adminService.getAllProjects());
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>(adminService.getActivityLogs());

  const refreshStats = () => {
    setStats(adminService.getStats());
  };

  const refreshUsers = () => {
    setUsers(adminService.getAllUsers());
  };

  const refreshProjects = () => {
    setProjects(adminService.getAllProjects());
  };

  const refreshActivityLogs = () => {
    setActivityLogs(adminService.getActivityLogs());
  };

  const updateUserRole = (username: string, role: UserRole) => {
    if (adminService.updateUserRole(username, role)) {
      refreshUsers();
      refreshStats(); // 통계 새로고침
      addActivityLog(
        '사용자 역할 변경',
        username,
        `역할을 ${role}로 변경했습니다`
      );
    }
  };

  const suspendUser = (username: string) => {
    if (adminService.suspendUser(username)) {
      refreshUsers();
      refreshStats(); // 통계 새로고침
      addActivityLog(
        '계정 정지',
        username,
        '계정을 정지했습니다'
      );
    }
  };

  const activateUser = (username: string) => {
    if (adminService.activateUser(username)) {
      refreshUsers();
      refreshStats(); // 통계 새로고침
      addActivityLog(
        '계정 활성화',
        username,
        '계정을 활성화했습니다'
      );
    }
  };

  const deleteUser = (username: string) => {
    if (adminService.deleteUser(username)) {
      refreshUsers();
      refreshStats(); // 통계 새로고침
      addActivityLog(
        '사용자 삭제',
        username,
        '사용자를 삭제했습니다'
      );
    }
  };

  const approveProject = (projectId: string) => {
    if (adminService.approveProject(projectId)) {
      refreshProjects();
      refreshStats(); // 통계 새로고침
      addActivityLog(
        '프로젝트 승인',
        `프로젝트 #${projectId}`,
        '프로젝트를 승인했습니다'
      );
    }
  };

  const rejectProject = (projectId: string, reason: string) => {
    if (adminService.rejectProject(projectId, reason)) {
      refreshProjects();
      refreshStats(); // 통계 새로고침
      addActivityLog(
        '프로젝트 거부',
        `프로젝트 #${projectId}`,
        `거부 사유: ${reason}`
      );
    }
  };

  const addActivityLog = (action: string, target: string, details: string) => {
    if (!userProfile) return;

    const newLog = adminService.addActivityLog(
      userProfile.username,
      userProfile.name,
      action,
      target,
      details
    );

    setActivityLogs(prev => [newLog, ...prev]);
  };

  // Refresh data periodically
  useEffect(() => {
    const interval = setInterval(() => {
      refreshStats();
    }, 30000); // Refresh every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <AdminContext.Provider
      value={{
        stats,
        refreshStats,
        users,
        refreshUsers,
        updateUserRole,
        suspendUser,
        activateUser,
        deleteUser,
        projects,
        refreshProjects,
        approveProject,
        rejectProject,
        activityLogs,
        refreshActivityLogs,
        addActivityLog
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
