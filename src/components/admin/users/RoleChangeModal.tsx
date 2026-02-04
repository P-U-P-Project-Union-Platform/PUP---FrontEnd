import type { UserRole } from '../../../types';
import ConfirmModal from '../common/ConfirmModal';

interface RoleChangeModalProps {
  isOpen: boolean;
  username: string;
  currentRole: UserRole;
  newRole: UserRole;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function RoleChangeModal({
  isOpen,
  username,
  currentRole,
  newRole,
  onConfirm,
  onCancel
}: RoleChangeModalProps) {
  return (
    <ConfirmModal
      isOpen={isOpen}
      title="역할 변경 확인"
      message={`${username}의 역할을 ${currentRole}에서 ${newRole}로 변경하시겠습니까?`}
      confirmText="변경"
      cancelText="취소"
      variant="primary"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}
