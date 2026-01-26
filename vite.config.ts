import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        // 1. 외부(ngrok 등)에서 내 로컬 서버로 접속할 수 있게 허용
        host: '0.0.0.0',
        // 2. 포트 번호 고정 (원하는 포트가 있다면 변경 가능)
        port: 5173,
        // 3. CORS 헤더를 모든 Origin에 대해 허용
        cors: true,
        // 4. ngrok 사용 시 'Invalid Host Header' 에러 방지
        allowedHosts: true,
    },
})