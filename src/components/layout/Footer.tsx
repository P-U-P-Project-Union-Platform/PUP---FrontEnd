import { useState } from 'react';
import { useApp } from '../../contexts/AppContext';
import CreatorInfoModal from './CreatorInfoModal';
import {
  FooterContainer,
  FooterLeft,
  FooterRight,
  FooterLink,
  ModeText,
  Toggle,
} from '../../styles/components/footerStyles';

export default function Footer() {
  const { isDarkMode, toggleDarkMode } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <FooterContainer>
        <FooterLeft>
          <FooterLink
            href="https://example.com/donate"
            target="_blank"
            rel="noopener noreferrer"
          >
            후원 / 기부
          </FooterLink>
        </FooterLeft>
        <FooterRight>
          <FooterLink onClick={() => setIsModalOpen(true)}>
            제작자정보
          </FooterLink>
          <ModeText>{isDarkMode ? '다크 모드' : '라이트 모드'}</ModeText>
          <Toggle active={isDarkMode} onClick={toggleDarkMode} />
        </FooterRight>
      </FooterContainer>

      <CreatorInfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
