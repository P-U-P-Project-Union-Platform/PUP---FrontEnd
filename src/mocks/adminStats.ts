import type { AdminStats, ActivityLog } from '../types';

export const mockAdminStats: AdminStats = {
  users: {
    total: 156,
    active: 142,
    newThisMonth: 23,
    suspended: 2
  },
  projects: {
    total: 48,
    pending: 5,
    approved: 40,
    rejected: 3
  },
  posts: {
    total: 284,
    reported: 3,
    hidden: 1
  }
};

export const mockActivityLogs: ActivityLog[] = [
  {
    id: '1',
    adminId: '김개발',
    adminName: '김개발',
    action: '프로젝트 승인',
    target: 'AI 챗봇 프로젝트',
    details: '프로젝트를 승인했습니다',
    timestamp: '2026-02-04T09:45:00Z'
  },
  {
    id: '2',
    adminId: '김개발',
    adminName: '김개발',
    action: '사용자 역할 변경',
    target: '박프론트',
    details: '역할을 user에서 admin으로 변경했습니다',
    timestamp: '2026-02-04T08:30:00Z'
  },
  {
    id: '3',
    adminId: '김개발',
    adminName: '김개발',
    action: '계정 정지',
    target: '스팸계정123',
    details: '스팸 활동으로 계정을 정지했습니다',
    timestamp: '2026-02-03T16:20:00Z'
  },
  {
    id: '4',
    adminId: '김개발',
    adminName: '김개발',
    action: '프로젝트 거부',
    target: '부적절한 프로젝트',
    details: '커뮤니티 가이드라인 위반으로 거부했습니다',
    timestamp: '2026-02-03T14:15:00Z'
  },
  {
    id: '5',
    adminId: '김개발',
    adminName: '김개발',
    action: '게시글 숨김',
    target: '신고된 게시글 #42',
    details: '부적절한 내용으로 게시글을 숨김 처리했습니다',
    timestamp: '2026-02-03T10:00:00Z'
  }
];
