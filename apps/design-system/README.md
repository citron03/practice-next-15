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

구현할 UI 컴포넌트 목록 (권장 우선순위)

아래는 이 디자인 시스템에서 구현하면 좋을 컴포넌트 목록입니다. MVP(핵심), Secondary(일반적), Tertiary(마이너/고급)로 나누어 우선순위를 표시했습니다.

1. 기본 컴포넌트 (MVP)

- Button: 다양한 변형(primary/secondary/ghost/icon)과 사이즈
- TextInput / Textarea: 레이블, 에러, 헬퍼 텍스트 포함
- Select / MultiSelect: 접근성 및 키보드 지원
- Checkbox / Radio / Switch
- Typography: H1~H6, Body, Caption 스타일

2. 폼 & 레이아웃 (MVP → Secondary)

- FormField / FormLayout: 레이블-입력 결합 레이아웃
- Grid / Stack / Box 유틸리티 컴포넌트
- Icon / IconButton

3. 내비게이션 (Secondary)

- Tabs (keyboard focus 관리)
- Breadcrumbs
- Pagination
- Mega Menu / Navbar (responsive)

4. 데이터 표시(Secondary)

- Table: 정렬, 필터, 페이징, 컬럼 리사이즈(간단 버전)
- Card / List / Avatar
- Badge / Tag

5. 피드백 & 모달(Secondary)

- Modal / Dialog (focus trap, aria 적용)
- Tooltip (포지셔닝, 접근성)
- Toast / Notification (stacking, pause on hover)
- Spinner / ProgressBar / Skeleton

6. 복합/고급 컴포넌트 (Secondary → Tertiary)

- Dropdown / ContextMenu (포커스/키보드 지원)
- DatePicker / DateRangePicker (시간대 고려)
- TimePicker
- FileUploader (drag&drop, resumable 업로드 옵션)
- ImageCropper (간단한 크롭/리사이징)

7. 마이너하지만 유용한 컴포넌트들 (Tertiary — 차별화 포인트)

- Command Palette (빠른 액션 검색, 키보드 네비게이션)
- TokenInput / MentionInput (태그 입력, '@' 멘션 지원)
- ColorPicker (accessible 색상 선택 및 팔레트)
- TreeView (폴더/계층 데이터 표시)
- VirtualizedList (variable row height 지원 포함)
- Calendar Heatmap (GitHub 스타일 activity map)
- Tour / Walkthrough (첫 사용자가이드)
- Resizable Split Pane

8. 접근성 관련 유틸리티

- VisuallyHidden 컴포넌트
- FocusRing / SkipLink

각 컴포넌트에 대해 Storybook 스토리(variations, accessibility 사례, edge cases)를 작성하고, 우선순위가 높은 것부터 차례로 구현하세요. 마이너한 컴포넌트들은 프로젝트의 차별화 포인트로 활용하면 좋습니다.

다음 단계

- 원하면 여기서 바로 `apps/design-system` 디렉터리를 scaffold(패키지 생성, Storybook 기본 설정 포함) 해줄게. 어느 정도까지 자동화할까? (간단한 README만 원해 / 초기 패키지 + Storybook까지 셋업)

라이선스

- 기본적으로 `MIT` 권장 (원하면 다른 라이선스로 변경 가능)
