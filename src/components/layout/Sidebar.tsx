import { useState } from "react";
import styled from "styled-components";

const SidebarContainer = styled.aside<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ isOpen }) => (isOpen ? "240px" : "0px")}; 
  background-color: #1f2937;
  color: white;
  overflow: hidden;
  z-index: 1000;
  transition: width 0.3s ease-in-out;
  display: flex;
  flex-direction: column;

  & > * {
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transition: opacity 0.3s;
  }
`;

const Header = styled.div`
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid #374151;
  white-space: nowrap;
`;

const Nav = styled.nav`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 6px;
  color: white;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background: #374151;
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #111827;
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 6px;
  cursor: pointer;
  z-index: 1100;

  &:hover {
    background: #374151;
  }
`;

export default function Sidebar({ onToggle }: { onToggle?: (isOpen: boolean) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onToggle?.(!isOpen);
  };

  return (
    <>
      <ToggleButton onClick={handleToggle}>{isOpen ? "닫기" : "메뉴"}</ToggleButton>

      <SidebarContainer isOpen={isOpen}>
        <Header>PUP</Header>
        <Nav>
          <NavItem href="/">홈</NavItem>
          <NavItem href="/project">프로젝트</NavItem>
          <NavItem href="/project/my">내 프로젝트</NavItem>
        </Nav>
      </SidebarContainer>
    </>
  );
}
