import { useState } from 'react';
import {
  FooterContainer,
  FooterLeft,
  FooterRight,
  FooterLink,
  Toggle,
} from '../../styles/components/footerStyles';

export default function Footer() {
  const [isDark, setIsDark] = useState<boolean>(true);

  return (
    <FooterContainer>
      <FooterLeft>
        <FooterLink>후원 / 기부</FooterLink>
      </FooterLeft>
      <FooterRight>
        <FooterLink>제작자정보</FooterLink>
        <FooterLink>다크모드</FooterLink>
        <Toggle active={isDark} onClick={() => setIsDark(!isDark)} />
      </FooterRight>
    </FooterContainer>
  );
}
