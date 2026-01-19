import { keyframes } from 'styled-components';

// 노트북 부유 애니메이션 (그림자 동기화 포함)
export const float = keyframes`
    0% { transform: translateY(0px); box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6); }
    50% { transform: translateY(-20px); box-shadow: 0 50px 80px rgba(64, 123, 255, 0.2); }
    100% { transform: translateY(0px); box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6); }
`;

export const pulseLine = keyframes`
    0% { width: 40%; opacity: 0.3; }
    50% { width: 95%; opacity: 0.8; background: #407bff; } /* 중간에 색상이 변하며 강조됨 */
    100% { width: 40%; opacity: 0.3; }
`;
