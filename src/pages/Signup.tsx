import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #111827;
`;

const Section = styled.section`
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #1f2937;
`;

const SignupButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: 80%;
  padding: 12px 16px;

  border: none;
  border-radius: 8px;
  background-color: #111827;
  color: white;

  font-size: 16px;
  font-weight: 500;

  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #374151;
  }
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 80%;
  margin: 16px 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e5e7eb;
  }
`;

const DividerText = styled.span`
  color: #9ca3af;
  font-size: 14px;
`;

const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #4f46e5;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: #4f46e5;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #4338ca;
  }
`;

const LinkText = styled.p`
  margin-top: 16px;
  font-size: 14px;
  color: #6b7280;
`;

const StyledLink = styled(Link)`
  color: #4f46e5;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

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
        <SignupButton onClick={handleGithubSignup}>
          <IconWrapper>
            <Logo src="/github_logo.png" alt="GitHub Logo" />
          </IconWrapper>
          GitHub 계정으로 가입
        </SignupButton>

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
