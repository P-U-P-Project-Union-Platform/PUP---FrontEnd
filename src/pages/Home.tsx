import {
    Container,
    Main,
    HeroContent,
    Title,
    Description,
    ButtonGroup,
    Button,
    HeroVisual,
    Laptop,
    Screen,
    Line,
    StatusBadge
} from '../styles/pages/homeStyles';

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