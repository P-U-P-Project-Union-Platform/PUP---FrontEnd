import styled from "styled-components";

const SidebarWrapper = styled.aside<{ isOpen: boolean; isHover: boolean }>`
  position: fixed;
  top: 60px; 
  left: 0;
  width: 240px; 
  height: calc(100vh - 60px);
  background-color: #1f2937;
  color: white;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;

  transform: ${({ isOpen, isHover }) => (isOpen || isHover ? "translateX(0)" : "translateX(-240px)")};
`;

const SidebarHeader = styled.div`
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid #374151;
  white-space: nowrap;
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
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

type SidebarProps = {
  isOpen: boolean;
  isHover: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export default function Sidebar({
  isOpen,
  isHover,
  onMouseEnter,
  onMouseLeave,
}: SidebarProps) {
  return (
    <SidebarWrapper
      isOpen={isOpen}
      isHover={isHover}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <SidebarHeader>PUP</SidebarHeader>
      <Nav>
        <NavItem href="/">홈</NavItem>
        <NavItem href="/project">프로젝트</NavItem>
        <NavItem href="/project/my">내 프로젝트</NavItem>
      </Nav>
    </SidebarWrapper>
  );
}
