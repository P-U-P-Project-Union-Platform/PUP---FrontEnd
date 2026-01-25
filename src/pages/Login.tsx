import { useState } from 'react';
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
  Input,
  SubmitButton,
  LinkText,
  StyledLink,
} from '../styles/pages/authStyles';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("로그인 데이터:", { email, password });
    alert("로그인되었습니다!");
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
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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
