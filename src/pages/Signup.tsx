import { useState } from "react";
import {
  Container,
  Title,
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

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const handleGithubSignup = () => {
    console.log("깃허브 회원가입 클릭됨!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    console.log("회원가입 데이터:", { email, password, name });
    alert("회원가입이 완료되었습니다!");
  };

  return (
    <Container>
      <Title>회원가입</Title>

      <Section>
        <SectionTitle>간편 회원가입</SectionTitle>
        <AuthButton onClick={handleGithubSignup}>
          <IconWrapper>
            <Logo src="/github_logo.png" alt="GitHub Logo" />
          </IconWrapper>
          GitHub 계정으로 가입
        </AuthButton>

        <Divider>
          <DividerText>또는</DividerText>
        </Divider>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <Input
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <SubmitButton type="submit">회원가입</SubmitButton>
        </Form>

        <LinkText>
          이미 계정이 있으신가요? <StyledLink to="/login">로그인</StyledLink>
        </LinkText>
      </Section>
    </Container>
  );
}
