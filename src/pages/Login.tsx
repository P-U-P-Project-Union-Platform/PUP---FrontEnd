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

const LoginButton = styled.button`
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

// 흰색 동그라미 배경
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

export default function Login() {
  const handleGithubLogin = () => {
    console.log("깃허브 로그인 클릭됨!");
  };

  return (
    <Container>
      <Title>로그인</Title>

      <Section>
        <SectionTitle>깃허브로 로그인</SectionTitle>
        <LoginButton onClick={handleGithubLogin}>
          <IconWrapper>
            <Logo src="/github_logo.png" alt="GitHub Logo" />
          </IconWrapper>
          GitHub 계정으로 로그인
        </LoginButton>
      </Section>
    </Container>
  );
}
