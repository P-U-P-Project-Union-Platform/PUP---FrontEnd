import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: var(--color-bg-light);
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  padding-top: 72px; /* Header 높이 보정 */

  @media (max-width: 768px) {
    padding-top: 64px;
  }
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}
