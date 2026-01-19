import {
  HeaderContainer,
  Logo,
  Nav,
  NavLink,
  LoginButton,
  SignupButton,
} from '../../styles/components/headerStyles';

export default function Header() {
  return (
    <HeaderContainer>
      <Logo to="/">C</Logo>
      <Nav>
        <NavLink to="/projects">프로젝트</NavLink>
        <NavLink to="/recruit">인원 모집</NavLink>
        <NavLink to="/community">커뮤니티</NavLink>
        <NavLink to="/mypage">마이페이지</NavLink>
        <SignupButton to="/signup">회원가입</SignupButton>
        <LoginButton to="/login">로그인</LoginButton>
      </Nav>
    </HeaderContainer>
  );
}
