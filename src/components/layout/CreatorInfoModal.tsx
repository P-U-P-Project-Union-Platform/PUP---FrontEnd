import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  InfoSection,
  InfoLabel,
  InfoValue,
  Divider,
} from '../../styles/components/creatorInfoModalStyles';

interface CreatorInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreatorInfoModal({ isOpen, onClose }: CreatorInfoModalProps) {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>제작자 정보</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>

        <ModalBody>
          <InfoSection>
            <InfoLabel>프로젝트명</InfoLabel>
            <InfoValue>PUP - Project Union Platform</InfoValue>
          </InfoSection>

          <Divider />

          <InfoSection>
            <InfoLabel>제작자</InfoLabel>
            <InfoValue>팀명 또는 개인명</InfoValue>
          </InfoSection>

          <Divider />

          <InfoSection>
            <InfoLabel>이메일</InfoLabel>
            <InfoValue>contact@example.com</InfoValue>
          </InfoSection>

          <Divider />

          <InfoSection>
            <InfoLabel>GitHub</InfoLabel>
            <InfoValue>
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/your-repo
              </a>
            </InfoValue>
          </InfoSection>

          <Divider />

          <InfoSection>
            <InfoLabel>버전</InfoLabel>
            <InfoValue>v1.0.0</InfoValue>
          </InfoSection>

          <Divider />

          <InfoSection>
            <InfoLabel>설명</InfoLabel>
            <InfoValue>
              프로젝트 협업을 위한 통합 플랫폼입니다.
              개발자들이 함께 프로젝트를 만들어가고,
              지식을 공유하며 성장할 수 있는 공간을 제공합니다.
            </InfoValue>
          </InfoSection>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}
