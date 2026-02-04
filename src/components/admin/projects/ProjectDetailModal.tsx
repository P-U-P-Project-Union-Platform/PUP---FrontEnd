import type { Project } from '../../../types';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  UserDetailGrid,
  DetailRow,
  DetailLabel,
  DetailValue
} from '../../../styles/pages/admin/userManagementStyles';
import {
  ProjectDetailSection,
  ProjectTechStack,
  TechBadge
} from '../../../styles/pages/admin/projectManagementStyles';
import { Badge } from '../../../styles/components/admin/dataTableStyles';

interface ProjectDetailModalProps {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
  onApprove: (projectId: string) => void;
  onReject: (projectId: string) => void;
}

export default function ProjectDetailModal({
  isOpen,
  project,
  onClose,
  onApprove,
  onReject
}: ProjectDetailModalProps) {
  if (!project) return null;

  const getApprovalBadge = (status?: string) => {
    switch (status) {
      case 'approved': return 'success';
      case 'rejected': return 'danger';
      case 'pending': return 'warning';
      default: return 'info';
    }
  };

  const getApprovalText = (status?: string) => {
    switch (status) {
      case 'approved': return '승인됨';
      case 'rejected': return '거부됨';
      case 'pending': return '대기중';
      default: return '미정';
    }
  };

  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>프로젝트 상세 정보</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>

        <UserDetailGrid>
          <ProjectDetailSection>
            <DetailRow>
              <DetailLabel>제목</DetailLabel>
              <DetailValue>{project.title}</DetailValue>
            </DetailRow>
          </ProjectDetailSection>

          <ProjectDetailSection>
            <DetailRow>
              <DetailLabel>설명</DetailLabel>
              <DetailValue style={{ lineHeight: '1.6' }}>{project.description}</DetailValue>
            </DetailRow>
          </ProjectDetailSection>

          <DetailRow>
            <DetailLabel>작성자</DetailLabel>
            <DetailValue>{project.author.name}</DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>카테고리</DetailLabel>
            <DetailValue>{project.category}</DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>태그</DetailLabel>
            <DetailValue>{project.tags.join(', ')}</DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>기술 스택</DetailLabel>
            <ProjectTechStack>
              {project.techStack.map((tech, index) => (
                <TechBadge key={index}>{tech}</TechBadge>
              ))}
            </ProjectTechStack>
          </DetailRow>

          <DetailRow>
            <DetailLabel>GitHub</DetailLabel>
            <DetailValue>
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                 style={{ color: 'var(--color-primary)', wordBreak: 'break-all' }}>
                {project.github}
              </a>
            </DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>생성일</DetailLabel>
            <DetailValue>{new Date(project.createdAt).toLocaleString('ko-KR')}</DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>승인 상태</DetailLabel>
            <DetailValue>
              <Badge variant={getApprovalBadge(project.approvalStatus)}>
                {getApprovalText(project.approvalStatus)}
              </Badge>
            </DetailValue>
          </DetailRow>

          {project.rejectionReason && (
            <DetailRow>
              <DetailLabel>거부 사유</DetailLabel>
              <DetailValue style={{ color: 'var(--color-error)' }}>
                {project.rejectionReason}
              </DetailValue>
            </DetailRow>
          )}
        </UserDetailGrid>

        {project.approvalStatus === 'pending' && (
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <button
              onClick={() => {
                onApprove(project.id);
                onClose();
              }}
              style={{
                flex: 1,
                padding: '0.75rem',
                border: 'none',
                borderRadius: '8px',
                background: '#22c55e',
                color: 'white',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              승인
            </button>
            <button
              onClick={() => {
                onReject(project.id);
              }}
              style={{
                flex: 1,
                padding: '0.75rem',
                border: 'none',
                borderRadius: '8px',
                background: '#ef4444',
                color: 'white',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              거부
            </button>
          </div>
        )}
      </ModalContent>
    </ModalOverlay>
  );
}
