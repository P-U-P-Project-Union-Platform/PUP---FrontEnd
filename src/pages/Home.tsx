import styled, { keyframes } from 'styled-components';

// 1. 노트북 부유 애니메이션 (그림자 동기화 포함)
const float = keyframes`
    0% { transform: translateY(0px); box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6); }
    50% { transform: translateY(-20px); box-shadow: 0 50px 80px rgba(64, 123, 255, 0.2); }
    100% { transform: translateY(0px); box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6); }
`;

const pulseLine = keyframes`
    0% { width: 40%; opacity: 0.3; }
    50% { width: 95%; opacity: 0.8; background: #407bff; } /* 중간에 색상이 변하며 강조됨 */
    100% { width: 40%; opacity: 0.3; }
`;

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #0a0a0a;
    color: white;
    overflow: hidden;
    position: relative;

    /* 배경 디자인: 왼쪽 상단과 오른쪽 하단에 은은한 광원 추가 */
    &::before {
        content: '';
        position: absolute;
        top: -10%; left: -10%;
        width: 40%; height: 40%;
        background: radial-gradient(circle, rgba(64, 123, 255, 0.1) 0%, transparent 70%);
        pointer-events: none;
    }
`;

const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8rem 4rem;
    max-width: 1400px;
    margin: 0 auto;
    gap: 4rem;
    position: relative;
    z-index: 2;

    @media (max-width: 1024px) { padding: 6rem 2rem; gap: 3rem; }
    @media (max-width: 768px) { flex-direction: column; padding: 4rem 1.5rem 8rem; gap: 3rem; }
`;

const HeroContent = styled.div`
    flex: 1.2; /* 텍스트 공간 확보 */
    @media (max-width: 768px) { width: 100%; text-align: center; }
`;

const Title = styled.h1`
    font-size: 4.5rem;
    font-weight: 800;
    line-height: 1.2;
    margin: 0 0 1.5rem 0;
    letter-spacing: -0.02em;

    /* '아이디어' 부분 강조 */
    span {
        background: linear-gradient(90deg, #407bff, #00d2ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 1024px) { font-size: 3.5rem; }
    @media (max-width: 768px) { font-size: 2.8rem; }
`;

const Description = styled.p`
    font-size: 1.2rem;
    color: #888;
    margin-bottom: 3rem;
    line-height: 1.6;
    @media (max-width: 768px) { margin-bottom: 2rem; }
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 1.5rem;
    @media (max-width: 768px) { justify-content: center; }
    @media (max-width: 480px) { flex-direction: column; }
`;

const Button = styled.button<{ primary?: boolean }>`
    background: ${props => props.primary ? '#407bff' : '#1a1a1a'};
    border: 1px solid ${props => props.primary ? '#407bff' : '#333'};
    color: white;
    padding: 1.2rem 2.5rem;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background: ${props => props.primary ? '#2d6ae0' : '#2a2a2a'};
        transform: translateY(-5px);
        box-shadow: ${props => props.primary ? '0 10px 25px rgba(64, 123, 255, 0.4)' : '0 10px 20px rgba(0,0,0,0.4)'};
    }
`;

const HeroVisual = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;
`;

const Laptop = styled.div`
    width: 550px;
    height: 380px;
    background: linear-gradient(145deg, #1e1e1e, #111);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 18px;
    position: relative;
    z-index: 1;
    animation: ${float} 6s infinite ease-in-out;

    @media (max-width: 1024px) { width: 450px; height: 310px; }
    @media (max-width: 768px) { width: 100%; max-width: 500px; height: 280px; }
`;

const Screen = styled.div`
    width: 100%;
    height: 100%;
    background: #000;
    border-radius: 12px;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow: hidden;
    position: relative;

    /* 노트북 화면 상단 바 느낌 추가 */
    &::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 25px;
        background: #111;
        border-bottom: 1px solid #222;
    }
`;

const Line = styled.div<{ width: string; duration: string; delay: string }>`
  height: 10px;
  background: linear-gradient(90deg, #2a2a2a, #333);
  border-radius: 5px;
  animation: ${pulseLine} ${props => props.duration} infinite ease-in-out;
  animation-delay: ${props => props.delay};
`;

const StatusBadge = styled.div`
    position: absolute;
    bottom: -20px;
    right: -20px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1rem 1.5rem;
    border-radius: 16px;
    font-weight: 500;
    color: #407bff;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    z-index: 2;
    @media (max-width: 480px) { display: none; }
`;

export default function Home() {
    return (
        <Container>
            <Main>
                <HeroContent>
                    <Title>
                        당신의 <span>아이디어,</span><br />
                        함께 현실로
                    </Title>
                    <Description>
                        함께 성장할 팀원을 찾고 프로젝트를 성공으로 이끄세요.<br />
                        지금 1,200+ 개의 프로젝트가 파트너를 기다리고 있습니다.
                    </Description>
                    <ButtonGroup>
                        <Button primary>프로젝트 보기</Button>
                        <Button>인원 모집 보기</Button>
                    </ButtonGroup>
                </HeroContent>

                <HeroVisual>
                    <Laptop>
                        <Screen>
                            <Line width="75%" duration="4s" delay="0s" />
                            <Line width="90%" duration="5.5s" delay="0.5s" />
                            <Line width="65%" duration="3.8s" delay="1.2s" />
                            <Line width="85%" duration="4.8s" delay="0.8s" />
                            <Line width="70%" duration="5.2s" delay="0.2s" />
                        </Screen>
                    </Laptop>
                    <StatusBadge>● Recuiting Now</StatusBadge>
                </HeroVisual>
            </Main>
        </Container>
    );
}