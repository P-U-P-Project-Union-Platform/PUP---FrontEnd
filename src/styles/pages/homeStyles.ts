import styled from 'styled-components';
import { float, pulseLine } from '../animations';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: var(--color-bg-light);
    color: var(--color-text-primary);
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

export const Main = styled.main`
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

export const HeroContent = styled.div`
    flex: 1.2; /* 텍스트 공간 확보 */
    @media (max-width: 768px) { width: 100%; text-align: center; }
`;

export const Title = styled.h1`
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

export const Description = styled.p`
    font-size: 1.2rem;
    color: var(--color-text-secondary);
    margin-bottom: 3rem;
    line-height: 1.6;
    @media (max-width: 768px) { margin-bottom: 2rem; }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 1.5rem;
    @media (max-width: 768px) { justify-content: center; }
    @media (max-width: 480px) { flex-direction: column; }
`;

export const Button = styled.button<{ primary?: boolean }>`
    background: ${props => props.primary ? 'var(--color-primary)' : 'var(--color-bg-dark)'};
    border: 1px solid ${props => props.primary ? 'var(--color-primary)' : 'var(--color-border-dark)'};
    color: var(--color-text-white);
    padding: 1.2rem 2.5rem;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background: ${props => props.primary ? 'var(--color-primary-hover)' : 'var(--color-bg-dark-hover)'};
        transform: translateY(-5px);
        box-shadow: ${props => props.primary ? '0 10px 25px rgba(64, 123, 255, 0.4)' : 'var(--shadow-lg)'};
    }
`;

export const HeroVisual = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;
`;

export const Laptop = styled.div`
    width: 550px;
    height: 380px;
    background: var(--color-bg-white);
    border-radius: 20px;
    border: 1px solid var(--color-border);
    padding: 18px;
    position: relative;
    z-index: 1;
    animation: ${float} 6s infinite ease-in-out;
    box-shadow: var(--shadow-xl);

    @media (max-width: 1024px) { width: 450px; height: 310px; }
    @media (max-width: 768px) { width: 100%; max-width: 500px; height: 280px; }
`;

export const Screen = styled.div`
    width: 100%;
    height: 100%;
    background: var(--color-bg-dark);
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
        background: var(--color-bg-dark-hover);
        border-bottom: 1px solid var(--color-border-dark);
    }
`;

export const Line = styled.div<{ width: string; duration: string; delay: string }>`
  height: 10px;
  background: linear-gradient(90deg, var(--color-bg-gray), var(--color-border-dark-hover));
  border-radius: 5px;
  animation: ${pulseLine} ${props => props.duration} infinite ease-in-out;
  animation-delay: ${props => props.delay};
`;

export const StatusBadge = styled.div`
    position: absolute;
    bottom: -20px;
    right: -20px;
    background: var(--color-bg-white);
    backdrop-filter: blur(10px);
    border: 1px solid var(--color-border);
    padding: 1rem 1.5rem;
    border-radius: 16px;
    font-weight: 500;
    color: var(--color-primary);
    box-shadow: var(--shadow-xl);
    z-index: 2;
    @media (max-width: 480px) { display: none; }
`;
