import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import {
  Container,
  FormWrapper,
  Header,
  Title,
  Description,
  FormCard,
  Section,
  SectionTitle,
  AuthButton,
  IconWrapper,
  Logo,
  Divider,
  DividerText,
  Form,
  InputWrapper,
  Input,
  PasswordToggleButton,
  SubmitButton,
  LinkText,
  StyledLink,
} from '../styles/pages/authStyles';
import eyeOpen from '../assets/비밀번호_보기.png';
import eyeClosed from '../assets/비밀번호_안보기.png';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useApp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const success = login(email, password);
    if (success) {
      navigate('/');
    } else {
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  const handleGithubLogin = () => {
    console.log("깃허브 로그인 클릭됨!");
  };

  return (
    <Container>
      <FormWrapper>
        <Header>
          <Title>로그인</Title>
          <Description>프로젝트 협업 플랫폼에 오신 것을 환영합니다</Description>
        </Header>

        <FormCard>
          <Section>
            <SectionTitle>이메일로 로그인</SectionTitle>
            <Form onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="이메일 (예: admin@example.com)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <InputWrapper>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  style={{ paddingRight: '3rem' }}
                  required
                />
                <PasswordToggleButton
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
                >
                  <img
                    src={showPassword ? eyeOpen : eyeClosed}
                    alt={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
                    style={{ width: '20px', height: '20px' }}
                  />
                </PasswordToggleButton>
              </InputWrapper>
              {error && (
                <div style={{ color: 'var(--color-error)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                  {error}
                </div>
              )}
              <SubmitButton type="submit">로그인</SubmitButton>
            </Form>
          </Section>

          <Divider>
            <DividerText>또는</DividerText>
          </Divider>

          <Section>
            <SectionTitle>간편 로그인</SectionTitle>
            <AuthButton onClick={handleGithubLogin}>
              <IconWrapper>
                <Logo src="/github_logo.png" alt="GitHub Logo" />
              </IconWrapper>
              GitHub 계정으로 로그인
            </AuthButton>
          </Section>

          <LinkText>
            계정이 없으신가요? <StyledLink to="/signup">회원가입</StyledLink>
          </LinkText>
        </FormCard>
      </FormWrapper>
    </Container>
  );
}
