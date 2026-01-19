import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #0a0a0a;
  color: white;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  padding-top: 64px; /* Header 높이 보정 */
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
