import { useState } from 'react';
import type { UserProfile, UserRole } from '../../../types';
import DataTable from '../common/DataTable';
import { ActionButtons, ActionButton, Badge } from '../../../styles/components/admin/dataTableStyles';
import UserDetailModal from './UserDetailModal';
import RoleChangeModal from './RoleChangeModal';
import ConfirmModal from '../common/ConfirmModal';

interface UserTableProps {
  users: UserProfile[];
  onRoleChange: (username: string, role: UserRole) => void;
  onSuspend: (username: string) => void;
  onActivate: (username: string) => void;
}

export default function UserTable({ users, onRoleChange, onSuspend, onActivate }: UserTableProps) {
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null);
  const [roleChangeUser, setRoleChangeUser] = useState<UserProfile | null>(null);
  const [suspendUser, setSuspendUser] = useState<UserProfile | null>(null);

  const getRoleBadge = (role: string) => {
    return role === 'admin' ? 'danger' : 'info';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active': return 'success';
      case 'suspended': return 'danger';
      default: return 'warning';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return '활성';
      case 'suspended': return '정지됨';
      default: return '비활성';
    }
  };

  const handleRoleChange = (user: UserProfile) => {
    const newRole: UserRole = user.role === 'admin' ? 'user' : 'admin';
    onRoleChange(user.username, newRole);
    setRoleChangeUser(null);
  };

  const handleSuspend = (user: UserProfile) => {
    if (user.status === 'active') {
      onSuspend(user.username);
    } else {
      onActivate(user.username);
    }
    setSuspendUser(null);
  };

  const columns = [
    {
      key: 'name',
      label: '이름',
      width: '15%',
      render: (user: UserProfile) => user.name
    },
    {
      key: 'username',
      label: '사용자명',
      width: '15%',
      render: (user: UserProfile) => user.username
    },
    {
      key: 'email',
      label: '이메일',
      width: '20%',
      render: (user: UserProfile) => user.email || '-'
    },
    {
      key: 'role',
      label: '역할',
      width: '10%',
      render: (user: UserProfile) => (
        <Badge variant={getRoleBadge(user.role)}>
          {user.role}
        </Badge>
      )
    },
    {
      key: 'status',
      label: '상태',
      width: '10%',
      render: (user: UserProfile) => (
        <Badge variant={getStatusBadge(user.status)}>
          {getStatusText(user.status)}
        </Badge>
      )
    },
    {
      key: 'joinedAt',
      label: '가입일',
      width: '15%',
      render: (user: UserProfile) => new Date(user.joinedAt).toLocaleDateString('ko-KR')
    },
    {
      key: 'actions',
      label: '작업',
      width: '15%',
      render: (user: UserProfile) => (
        <ActionButtons onClick={(e) => e.stopPropagation()}>
          <ActionButton
            variant="secondary"
            onClick={() => setSelectedUser(user)}
          >
            상세
          </ActionButton>
          <ActionButton
            variant="primary"
            onClick={() => setRoleChangeUser(user)}
          >
            역할
          </ActionButton>
          <ActionButton
            variant={user.status === 'active' ? 'danger' : 'primary'}
            onClick={() => setSuspendUser(user)}
          >
            {user.status === 'active' ? '정지' : '활성화'}
          </ActionButton>
        </ActionButtons>
      )
    }
  ];

  return (
    <>
      <DataTable
        columns={columns}
        data={users}
        emptyMessage="사용자가 없습니다"
      />

      <UserDetailModal
        isOpen={!!selectedUser}
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />

      {roleChangeUser && (
        <RoleChangeModal
          isOpen={!!roleChangeUser}
          username={roleChangeUser.username}
          currentRole={roleChangeUser.role}
          newRole={roleChangeUser.role === 'admin' ? 'user' : 'admin'}
          onConfirm={() => handleRoleChange(roleChangeUser)}
          onCancel={() => setRoleChangeUser(null)}
        />
      )}

      {suspendUser && (
        <ConfirmModal
          isOpen={!!suspendUser}
          title={suspendUser.status === 'active' ? '계정 정지' : '계정 활성화'}
          message={
            suspendUser.status === 'active'
              ? `${suspendUser.username}의 계정을 정지하시겠습니까?`
              : `${suspendUser.username}의 계정을 활성화하시겠습니까?`
          }
          confirmText={suspendUser.status === 'active' ? '정지' : '활성화'}
          cancelText="취소"
          variant={suspendUser.status === 'active' ? 'danger' : 'primary'}
          onConfirm={() => handleSuspend(suspendUser)}
          onCancel={() => setSuspendUser(null)}
        />
      )}
    </>
  );
}
