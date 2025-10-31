import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #0a0a0a;
  color: white;
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8rem 4rem;
  max-width: 1400px;
  margin: 0 auto;
  gap: 4rem;
  
  @media (max-width: 1024px) {
    padding: 6rem 2rem;
    gap: 3rem;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 4rem 1.5rem 8rem;
    gap: 3rem;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 3rem 0;
  
  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin: 0 0 2rem 0;
  }
  
  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin: 0 0 1.5rem 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Button = styled.button`
  background: #2a2a2a;
  border: none;
  color: white;
  padding: 1.2rem 2.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  
  &:hover {
    background: #3a3a3a;
    transform: translateY(-2px);
  }
  
  @media (max-width: 1024px) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem 1.5rem;
  }
`;

const HeroVisual = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Laptop = styled.div`
  width: 550px;
  height: 380px;
  background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
  border-radius: 16px;
  border: 1px solid #2a2a2a;
  padding: 18px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
  
  @media (max-width: 1024px) {
    width: 450px;
    height: 310px;
    padding: 15px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    height: 280px;
  }
  
  @media (max-width: 480px) {
    height: 220px;
    padding: 12px;
  }
`;

const Screen = styled.div`
  width: 100%;
  height: 100%;
  background: #0a0a0a;
  border-radius: 8px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    padding: 2rem;
    gap: 1.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    gap: 1rem;
  }
`;

const Line = styled.div<{ width: string }>`
  height: 14px;
  background: #2a2a2a;
  border-radius: 7px;
  width: ${props => props.width};
  
  @media (max-width: 1024px) {
    height: 12px;
  }
  
  @media (max-width: 480px) {
    height: 10px;
  }
`;

export default function Home() {

  return (
    <Container>
      <Main>
        <HeroContent>
          <Title>
            당신의 아이디어,<br />
            함께 현실로
          </Title>
          <ButtonGroup>
            <Button>프로젝트 보기</Button>
            <Button>인원 모집 보기</Button>
          </ButtonGroup>
        </HeroContent>

        <HeroVisual>
          <Laptop>
            <Screen>
              <Line width="75%" />
              <Line width="90%" />
              <Line width="65%" />
              <Line width="85%" />
              <Line width="70%" />
            </Screen>
          </Laptop>
        </HeroVisual>
      </Main>
    </Container>
  );
}