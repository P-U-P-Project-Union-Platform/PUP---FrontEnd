import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background: #0a0a0a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  border-bottom: 1px solid #2a2a2a;
  z-index: 1000;
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #0a0a0a;
  font-size: 20px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

const LoginButton = styled.button`
  background: #2a2a2a;
  border: none;
  color: white;
  padding: 0.7rem 1.8rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #3a3a3a;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>C</Logo>
      <Nav>
        <NavLink to="/projects">프로젝트</NavLink>
        <NavLink to="#">인원 모집</NavLink>
        <NavLink to="#">커뮤니티</NavLink>
        <NavLink to="#">마이페이지</NavLink>
        <LoginButton>로그인</LoginButton>
      </Nav>
    </HeaderContainer>
  );
}
