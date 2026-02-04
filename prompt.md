지금 프로젝트의 브라우저 콘솔 에러들을 해결하기 위해 아래 가이드대로 코드를 수정해줘.

1. StatsOverview.tsx (TypeError 해결)
- 에러: Cannot read properties of undefined (reading 'blue')
- 원인: theme.ts에 'blue' 속성이 없는데 스타일에서 참조 중.
- 수정: theme.colors.info를 사용하거나 객체 접근 시 옵셔널 체이닝(?.)을 적용해줘.

2. Transient Props 적용 ($ 접두사)
- 에러: unknown prop "primary", "active", "isPositive", "gradient" 등
- 원인: 스타일용 속성이 HTML 태그까지 전달됨.
- 수정: 아래 파일들의 속성명 앞에 '$'를 붙여서 DOM 전달을 차단해줘.
    - src/styles/components/admin/statCardStyles.ts: gradient -> $gradient, isPositive -> $isPositive
    - src/components/admin/common/StatCard.tsx: 호출부 속성명 변경
    - src/components/common/PageTransition.tsx: duration -> $duration, delay -> $delay

3. Login.tsx (HTML 경고 해결)
- 수정: 비밀번호 인풋 태그에 autoComplete="current-password" 속성을 추가해줘.

위 내용에 맞춰 관련 파일들을 한꺼번에 수정해줘.


추가로 아래 내용들도 함께 수정해서 코드의 질을 높여줘.

1. 데이터 안정성: StatsOverview.tsx에서 stats 객체 접근 시 Optional Chaining(?.)과 기본값(|| 0)을 사용해줘.
2. 테마 구조 개선: 스타일 파일에서 theme을 직접 import 하지 말고, ThemeProvider의 props를 사용하도록 변경해줘.
3. 성능 최적화: statCardStyles.ts의 'transition: all'을 필요한 속성(transform, box-shadow)만 지정하도록 구체화해줘.
4. 매직 넘버 제거: 스타일 파일에 직접 입력된 100px, rgba값 등을 theme.ts의 공통 속성으로 옮겨서 관리해줘.