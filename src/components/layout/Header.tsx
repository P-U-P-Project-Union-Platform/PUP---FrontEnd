import { useNavigate } from 'react-router-dom';
import {
  HeaderContainer,
  Logo,
  Nav,
  NavLink,
  LoginButton,
} from '../../styles/components/headerStyles';
import { useApp } from '../../contexts/AppContext';
import NotificationDropdown from '../common/NotificationDropdown';

export default function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, isAdmin, logout } = useApp();

  const handleLogout = () => {
    const confirmed = window.confirm('로그아웃 하시겠습니까?');
    if (confirmed) {
      logout();
      navigate('/');
    }
  };

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
        {isLoggedIn && <NotificationDropdown />}
        {isLoggedIn ? (
          <LoginButton as="button" onClick={handleLogout}>
            로그아웃
          </LoginButton>
        ) : (
          <LoginButton to="/login">로그인</LoginButton>
        )}
      </Nav>
    </HeaderContainer>
  );
}
