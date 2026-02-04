export interface AdminStats {
  users: {
    total: number;
    active: number;
    newThisMonth: number;
    suspended: number;
  };
  projects: {
    total: number;
    pending: number;
    approved: number;
    rejected: number;
  };
  posts: {
    total: number;
    reported: number;
    hidden: number;
  };
}

export type ProjectApprovalStatus = 'pending' | 'approved' | 'rejected';

export interface ActivityLog {
  id: string;
  adminId: string;
  adminName: string;
  action: string;
  target: string;
  details: string;
  timestamp: string;
}
