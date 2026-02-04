import type { UserProfile } from '../../../types';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  UserDetailGrid,
  DetailRow,
  DetailLabel,
  DetailValue,
  StatsGrid,
  StatItem,
  StatValue,
  StatLabel
} from '../../../styles/pages/admin/userManagementStyles';
import { Badge } from '../../../styles/components/admin/dataTableStyles';

interface UserDetailModalProps {
  isOpen: boolean;
  user: UserProfile | null;
  onClose: () => void;
}

export default function UserDetailModal({ isOpen, user, onClose }: UserDetailModalProps) {
  if (!user) return null;

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

  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>사용자 상세 정보</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>

        <UserDetailGrid>
          <DetailRow>
            <DetailLabel>사용자명</DetailLabel>
            <DetailValue>{user.username}</DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>이름</DetailLabel>
            <DetailValue>{user.name}</DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>이메일</DetailLabel>
            <DetailValue>{user.email || '미등록'}</DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>역할</DetailLabel>
            <DetailValue>
              <Badge variant={getRoleBadge(user.role)}>
                {user.role}
              </Badge>
            </DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>계정 상태</DetailLabel>
            <DetailValue>
              <Badge variant={getStatusBadge(user.status)}>
                {user.status === 'active' ? '활성' : user.status === 'suspended' ? '정지됨' : '비활성'}
              </Badge>
            </DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>소개</DetailLabel>
            <DetailValue>{user.bio}</DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>가입일</DetailLabel>
            <DetailValue>{new Date(user.joinedAt).toLocaleDateString('ko-KR')}</DetailValue>
          </DetailRow>

          {user.lastLoginAt && (
            <DetailRow>
              <DetailLabel>마지막 로그인</DetailLabel>
              <DetailValue>{new Date(user.lastLoginAt).toLocaleString('ko-KR')}</DetailValue>
            </DetailRow>
          )}

          <DetailRow>
            <DetailLabel>통계</DetailLabel>
            <StatsGrid>
              <StatItem>
                <StatValue>{user.stats.projects}</StatValue>
                <StatLabel>프로젝트</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>{user.stats.posts}</StatValue>
                <StatLabel>게시글</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>{user.stats.likes}</StatValue>
                <StatLabel>좋아요</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>{user.stats.followers}</StatValue>
                <StatLabel>팔로워</StatLabel>
              </StatItem>
            </StatsGrid>
          </DetailRow>

          {user.github && (
            <DetailRow>
              <DetailLabel>GitHub</DetailLabel>
              <DetailValue>
                <a href={user.github} target="_blank" rel="noopener noreferrer"
                   style={{ color: 'var(--color-primary)' }}>
                  {user.github}
                </a>
              </DetailValue>
            </DetailRow>
          )}

          {user.blog && (
            <DetailRow>
              <DetailLabel>블로그</DetailLabel>
              <DetailValue>
                <a href={user.blog} target="_blank" rel="noopener noreferrer"
                   style={{ color: 'var(--color-primary)' }}>
                  {user.blog}
                </a>
              </DetailValue>
            </DetailRow>
          )}
        </UserDetailGrid>
      </ModalContent>
    </ModalOverlay>
  );
}
