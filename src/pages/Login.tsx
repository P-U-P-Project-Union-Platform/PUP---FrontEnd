import {
  Container,
  Title,
  Section,
  SectionTitle,
  AuthButton,
  IconWrapper,
  Logo,
  LinkText,
  StyledLink,
} from '../styles/pages/authStyles';

export default function Login() {
  const handleGithubLogin = () => {
    console.log("깃허브 로그인 클릭됨!");
  };

  return (
    <Container>
      <Title>로그인</Title>

      <Section>
        <SectionTitle>깃허브로 로그인</SectionTitle>
        <AuthButton onClick={handleGithubLogin}>
          <IconWrapper>
            <Logo src="/github_logo.png" alt="GitHub Logo" />
          </IconWrapper>
          GitHub 계정으로 로그인
        </AuthButton>
        <LinkText>
          계정이 없으신가요? <StyledLink to="/signup">회원가입</StyledLink>
        </LinkText>
      </Section>
    </Container>
  );
}
