import { useState } from "react";
import styled from "styled-components";

interface ToggleProps {
  active: boolean;
}

const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0a0a0a;
  color: rgba(255, 255, 255, 0.6);
  border-top: 1px solid #2a2a2a;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  gap: 1rem;
`;

const FooterRight = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.95rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

const Toggle = styled.div<ToggleProps>`
  width: 48px;
  height: 24px;
  background: ${({ active }) => (active ? "#4a4a4a" : "#2a2a2a")};
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  transition: background 0.2s;

  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: ${({ active }) => (active ? "26px" : "2px")};
    transition: left 0.2s;
  }
`;

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
