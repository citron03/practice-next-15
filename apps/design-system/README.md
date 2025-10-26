## Design System / Component Library

이 폴더는 Next.js 15 기반의 디자인 시스템(컴포넌트 라이브러리) 샘플 프로젝트입니다. 목적은 재사용 가능한 UI 컴포넌트, 디자인 토큰, 문서화(Storybook), 접근성 및 배포 파이프라인을 포함한 실무 수준의 라이브러리를 만드는 것입니다.

핵심 목표

- 재사용 가능한 React + TypeScript 컴포넌트 세트 제공
- 디자인 토큰(색상, 폰트, 스페이싱) 관리
- Storybook 문서화 및 visual regression 테스트 준비
- A11y(axe-core) 기반 검증과 E2E 테스트 통합
- npm/GitHub Packages로 배포 가능한 패키지 구조

권장 스택

- Next.js 15 (app router) — 데모/문서용 앱
- React + TypeScript
- pnpm 워크스페이스 + Turborepo(옵션)
- Storybook + Chromatic(옵션)
- TailwindCSS or CSS-in-JS(예: stitches / vanilla-extract)
- Testing Library + Playwright + axe-core

빠른 시작 (초기 세팅 가이드)

1. 루트에서 종속성 설치

```bash
# repo 루트에서
pnpm install
```

2. (나중에) `apps/design-system` 내부에 `package.json`과 개발 스크립트를 추가한다

```json
// 예시 (apps/design-system/package.json)
{
  "name": "@your-scope/design-system",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "storybook dev -p 6006",
    "build": "build-storybook",
    "lint": "eslint . --ext .ts,.tsx",
    "test": "vitest"
  }
}
```

3. Storybook 실행 (추가 설정 후)

```bash
cd apps/design-system
pnpm dev
```

권장 폴더 구조 (예시)

```
apps/design-system/
├─ package.json
├─ tsconfig.json
├─ src/
│  ├─ index.ts            # 패키지 진입점 (export 모음)
│  ├─ tokens/
│  │  └─ tokens.ts       # 디자인 토큰(color, spacing, typography)
│  ├─ components/
│  │  ├─ Button/
│  │  │  ├─ Button.tsx
│  │  │  └─ Button.stories.tsx
│  │  └─ ...
│  └─ utils/
└─ .storybook/
   ├─ main.ts
   └─ preview.ts
```

초기 마일스톤(6주)

- W1: 디자인 토큰 정의 + 프로젝트/monorepo 설정
- W2: 버튼·입력·라디오 등 기본 컴포넌트와 Storybook 문서화
- W3: 폼 컴포넌트·아이콘·타이포 컴포넌트 확장
- W4: 모달·드롭다운·토스트 같은 복합 컴포넌트 구현
- W5: A11y 통합(axe), 유닛/이2E 테스트 추가
- W6: 번들/퍼포먼스 최적화, 배포(패키지 레지스트리) 준비

개발 규칙(권장)

- TypeScript 엄격 모드 사용
- 컴포넌트는 프리젠테이셔널 + 컨테이너 분리
- 접근성(키보드, ARIA) 문서화
- Storybook 스토리마다 시각 테스트 케이스 추가

기여 가이드

- 이 저장소의 `apps/design-system`에 새로운 컴포넌트를 추가할 때:
  1. `src/components/<Component>` 폴더 생성
  2. 컴포넌트 코드, 스타일, Story 파일 추가
  3. 유닛/스냅샷 테스트 추가
  4. PR 템플릿에 A11y 체크 항목을 채움

다음 단계

- 원하면 여기서 바로 `apps/design-system` 디렉터리를 scaffold(패키지 생성, Storybook 기본 설정 포함) 해줄게. 어느 정도까지 자동화할까? (간단한 README만 원해 / 초기 패키지 + Storybook까지 셋업)

라이선스

- 기본적으로 `MIT` 권장 (원하면 다른 라이선스로 변경 가능)
