import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import ConfirmModal from '../common/ConfirmModal';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton
} from '../../../styles/pages/admin/userManagementStyles';
import { TextArea } from '../../../styles/pages/admin/projectManagementStyles';

const ActionButton = styled.button<{ variant: 'approve' | 'reject' }>`
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSizes.sm};
  font-weight: 600;
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  background: ${props => props.variant === 'approve' ? theme.colors.success : theme.colors.error};
  color: white;

  &:hover {
    opacity: 0.9;
  }
`;

interface ApprovalActionsProps {
  projectId: string;
  onApprove: (projectId: string) => void;
  onReject: (projectId: string, reason: string) => void;
}

export default function ApprovalActions({ projectId, onApprove, onReject }: ApprovalActionsProps) {
  const [showApproveConfirm, setShowApproveConfirm] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectReason, setRejectReason] = useState('');

  const handleApprove = () => {
    onApprove(projectId);
    setShowApproveConfirm(false);
  };

  const handleReject = () => {
    if (rejectReason.trim()) {
      onReject(projectId, rejectReason);
      setShowRejectModal(false);
      setRejectReason('');
    }
  };

  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <ActionButton
        variant="approve"
        onClick={() => setShowApproveConfirm(true)}
      >
        승인
      </ActionButton>
      <ActionButton
        variant="reject"
        onClick={() => setShowRejectModal(true)}
      >
        거부
      </ActionButton>

      <ConfirmModal
        isOpen={showApproveConfirm}
        title="프로젝트 승인"
        message="이 프로젝트를 승인하시겠습니까?"
        confirmText="승인"
        cancelText="취소"
        variant="primary"
        onConfirm={handleApprove}
        onCancel={() => setShowApproveConfirm(false)}
      />

      <ModalOverlay isOpen={showRejectModal} onClick={() => setShowRejectModal(false)}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <ModalTitle>프로젝트 거부</ModalTitle>
            <CloseButton onClick={() => setShowRejectModal(false)}>×</CloseButton>
          </ModalHeader>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: 'var(--color-text-secondary)'
            }}>
              거부 사유를 입력해주세요
            </label>
            <TextArea
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              placeholder="프로젝트가 거부된 이유를 작성자에게 설명해주세요..."
            />
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
            <button
              onClick={() => setShowRejectModal(false)}
              style={{
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '8px',
                background: 'var(--color-bg-light)',
                color: 'var(--color-text-primary)',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              취소
            </button>
            <button
              onClick={handleReject}
              disabled={!rejectReason.trim()}
              style={{
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '8px',
                background: theme.colors.error,
                color: 'white',
                fontWeight: '600',
                cursor: rejectReason.trim() ? 'pointer' : 'not-allowed',
                opacity: rejectReason.trim() ? 1 : 0.5
              }}
            >
              거부
            </button>
          </div>
        </ModalContent>
      </ModalOverlay>
    </div>
  );
}
