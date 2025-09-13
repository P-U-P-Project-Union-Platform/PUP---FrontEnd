import styled from "styled-components";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Wrapper = styled.div<{ isSidebarOpen: boolean }>`
  display: flex;
  height: 100vh;
`;

const Main = styled.main<{ isSidebarOpen: boolean }>`
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  background-color: #f9f9f9;
  margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? "240px" : "0px")};
  transition: margin-left 0.3s ease-in-out;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Wrapper isSidebarOpen={isSidebarOpen}>
      <Sidebar onToggle={setIsSidebarOpen} />
      <Main isSidebarOpen={isSidebarOpen}>{children}</Main>
    </Wrapper>
  );
}
