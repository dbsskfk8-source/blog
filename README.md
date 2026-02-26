📝 Next.js Personal Blog
최신 Next.js App Router를 활용한 고성능 개인 블로그 서비스입니다.

🏗️ 시스템 아키텍처

graph TD
    User((방문자)) -->|접속| AppRouter[@app]
    AppRouter -->|UI 렌더링| Components[@components]
    AppRouter -->|콘텐츠 로딩| Supabase[@supabase]
📂 핵심 코드 가이드

페이지 라우팅: @app 폴더 내부에 파일 기반 라우팅 로직이 구현되어 있습니다.

공통 컴포넌트: @components에서 버튼, 레이아웃 등 재사용 가능한 UI 조각들을 관리합니다.

백엔드 서비스: @supabase를 통해 포스트 저장 및 댓글 기능을 처리합니다.
