import {
  HeaderContainer,
  Logo,
  Nav,
  NavLink,
  LoginButton,
} from '../../styles/components/headerStyles';
import { useApp } from '../../contexts/AppContext';

export default function Header() {
  const { isAdmin } = useApp();

  return (
    <HeaderContainer>
      <Logo to="/">C</Logo>
      <Nav>
        <NavLink to="/projects">프로젝트</NavLink>
        <NavLink to="/recruit">인원 모집</NavLink>
        <NavLink to="/community">커뮤니티</NavLink>
        <NavLink to="/mypage">마이페이지</NavLink>
        {isAdmin && (
          <NavLink to="/admin" style={{ color: '#ef4444', fontWeight: '600' }}>
            ⚙️ 관리자
          </NavLink>
        )}
        <LoginButton to="/login">로그인</LoginButton>
      </Nav>
    </HeaderContainer>
  );
}
