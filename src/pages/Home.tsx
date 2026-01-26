import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { projectService } from '../services/projectService';
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
    const navigate = useNavigate();
    const [projectCount, setProjectCount] = useState(0);
    const totalProjects = projectService.getAll().length;
    const roundedTotal = Math.ceil(totalProjects / 100) * 100;

    useEffect(() => {
        const duration = 500; // 2초
        const steps = 60;
        const stepDuration = duration / steps;
        const increment = roundedTotal / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            if (currentStep >= steps) {
                setProjectCount(roundedTotal);
                clearInterval(timer);
            } else {
                setProjectCount(Math.floor(increment * currentStep));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [roundedTotal]);

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
                        지금 {projectCount.toLocaleString()}+ 개의 프로젝트가 파트너를 기다리고 있습니다.
                    </Description>
                    <ButtonGroup>
                        <Button primary onClick={() => navigate('/projects')}>프로젝트 보기</Button>
                        <Button onClick={() => navigate('/community')}>커뮤니티 보기</Button>
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