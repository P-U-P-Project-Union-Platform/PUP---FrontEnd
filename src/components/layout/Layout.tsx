import styled from "styled-components";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Wrapper = styled.div`
  height: 100vh;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #111827;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #374151;
  z-index: 1100;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  &:hover {
    opacity: 0.8;
  }
`;

const Main = styled.main<{ isSidebarOpen: boolean; isHover: boolean }>`
  padding: 24px;
  padding-top: 60px;
  margin-left: ${({ isSidebarOpen, isHover }) =>
    isSidebarOpen || isHover ? "240px" : "0px"};
  background-color: #f9f9f9;
  height: calc(100vh - 60px);
  overflow-y: auto;
  transition: margin-left 0.3s ease-in-out;
`;


export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <Wrapper>
      <Header>
        <Title
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {isSidebarOpen ? "닫기" : "메뉴"}
        </Title>
      </Header>

      <Sidebar
        onMouseEnter={() => setIsHover(true)} 
        onMouseLeave={() => setIsHover(false)}
        isOpen={isSidebarOpen}
        isHover={isHover}
      />
      <Main isSidebarOpen={isSidebarOpen} isHover={isHover}>
        {children}
      </Main>
    </Wrapper>
  );
}
