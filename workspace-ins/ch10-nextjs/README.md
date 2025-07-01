# 10장 Next.js
* 코드 실행(GitHub Page): <https://febc-13.github.io/React/workspace-ins/index.html#10>

# 1 Next.js 개요
* 공식 홈페이지: https://nextjs.org
* 한글 번역(비공식): https://nextjs-ko.org

## 1.1 React의 단점과 Next.js의 장점
* 웹 개발의 변천사: https://github.com/FEBC-13/React/tree/main/workspace-ins/ch01-buildup#1-%EC%9B%B9-%EA%B0%9C%EB%B0%9C%EC%9D%98-%EB%B3%80%EC%B2%9C%EC%82%AC

### 1.1.1 React의 단점
* 최초에 로딩할 자바스크립트 용량이 커서 초기 화면을 보여주기까지의 시간이 오래 걸림
* 코드 분할과 성능 최적화를 수동으로 관리해야 함
  - lazy loading 직접 구현
* SEO(검색 엔진 최적화) 어려움
  - 빈 HTML로 초기 응답하므로 검색엔진이 컨텐츠를 읽을 수 없음
* 프론트엔드만 담당하므로 백엔드 API를 별도로 구축해야 함

### 1.1.2 Next.js의 장점
* 서버 사이드 렌더링(SSR)으로 초기 로딩 속도 개선
  - 완성된 HTML을 먼저 응답하므로 즉시 화면 표시 가능
* SEO 최적화
  - 서버에서 완성된 HTML 생성으로 검색엔진이 컨텐츠를 바로 읽을 수 있음
* 파일 시스템 기반 자동 라우팅
  - pages나 app 폴더 구조만으로 라우팅 자동 생성
* 자동 코드 분할 및 성능 최적화
  - 페이지별 자동 번들 분할, 이미지/폰트 최적화 내장
* 풀스택 개발 지원
  - API Routes로 백엔드 기능까지 하나의 프로젝트에서 개발 가능
* 다양한 렌더링 전략 지원
  - SSR(서버 사이드 렌더링), SSG(정적 생성), ISR(증분 정적 재생성) 선택 가능

## 1.2 Next.js란?
- React 기반의 풀스택 웹 애플리케이션을 구축하기 위한 프레임워크
- 프레임워크
  - 소프트웨어 개발에 필요한 공통 구조와 기능 제공
  - 개발 방식이나 프로젝트 구조를 강제하여 자유도가 낮지만, 제공되는 공통 기능을 활용하면 개발 생산성 향상

## 1.3 주요 특징
- 라우팅: 파일 시스템 기반의 라우터 제공
  - 페이지 라우터 (pages): 기존 방식의 라우터
  - 앱 라우터 (app): 서버 컴포넌트, 스트리밍 등 최신 React 기능 지원. Next.js 13.4에서 정식 도입, 페이지 라우터 대신 사용 권장
- 렌더링: 클라이언트 사이드 렌더링(CSR), 서버 사이드 렌더링(SSR) 지원
- 데이터 fetching: 표준 fetch API에 데이터 캐싱, 재검증 등의 기능을 추가
- 스타일링: CSS Module, Tailwind CSS, CSS-in-JS 등 다양한 스타일링 방법 지원
- 최적화: 이미지, 글꼴, 스크립트 등 웹 성능 최적화 지원
- 타입스크립트: 타입스크립트 우선 환경 제공
  - 필요한 패키지 자동 설치 및 설정 구성
  - 사용자 정의 플러그인 및 타입 검사기로 타입스크립트 지원 강화

# 2 개발환경 구성
## 2.1 수동 구성
### 2.1.1 package.json 파일 작성
#### 생성
```sh
cd workspace/ch10-nextjs
mkdir 01-manual
cd 01-manual
npm init -y
```

#### 실행 스크립트 작성
* package.json
  ```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  ```
  - dev: 개발 서버 실행
  - build: 프로덕션 빌드
  - start: 프로덕션 서버 실행
  - lint: ESLint를 이용한 코드 스타일 검사

### 2.1.2 Node 패키지 설치
```sh
npm install next@latest react@latest react-dom@latest
```

### 2.1.3 라우터 디렉토리 생성
* app 디렉토리(권장): App 라우터 사용
* pages 디렉토리: Pages 라우터 사용

  ```sh
  # MAC, Git Bash
  mkdir -p src/app
  # Windows(cmd)
  mkdir src/app
  ```

<img src="https://raw.githubusercontent.com/FEBC-13/React/refs/heads/main/images/nextjs/app-getting-started.png">

### 2.1.4 app/layout.tsx 파일 생성
* 루트 레이아웃

  ```tsx
  export default function RootLayout({ children }) {
    return (
      <html lang="ko">
        <body>{children}</body>
      </html>
    );
  }
  ```

### 2.1.5 app/page.tsx 파일 생성
* 루트 페이지

  ```tsx
  export default function Page() {
    return <h1>Hello, Next.js!</h1>;
  }
  ```

### 2.1.6 개발 서버 실행
```sh
npm run dev
```

### 2.1.7 테스트
* http://localhost:3000

## 2.2 자동 구성
### 2.2.1 create-next-app
```sh
cd workspace/ch10-nextjs
npx create-next-app@latest
```

* Need to install the following packages:
  - create-next-app@15.3.4
  - Ok to proceed? (y) __✅y__
* What is your project named? ... 02-cna
* Would you like to use TypeScript? ... No / __✅Yes__
* Would you like to use ESLint? ... No / __✅Yes__
* Would you like to use Tailwind CSS? ... No / __✅Yes__
* Would you like your code inside a `src/` directory? ... No / __✅Yes__
* Would you like to use App Router? (recommended) ... No / __✅Yes__
* Would you like to use Turbopack for next dev? ... No / __✅Yes__
  - Turbopack: 기존 Webpack 대신 사용하는 고성능 번들러
* Would you like to customize the import alias (@/* by default)? __✅No__ / Yes

### 2.2.2 개발 서버 실행
```sh
cd 02-cna
npm run dev
```

### 2.2.3 테스트
* http://localhost:3000

# 3 프로젝트 구조
## 3.1 루트 폴더
<img src="https://raw.githubusercontent.com/FEBC-13/React/refs/heads/main/images/nextjs/top-level-folders.png">

* `.next/`: Next.js의 빌드 결과물 저장
  - 개발/배포 시 자동 생성
  - 직접 수정할 필요 없음
* `node_modules/`: 프로젝트에서 사용하는 외부 패키지들이 설치되는 폴더  
  - npm install 시 자동 생성
  - 직접 수정할 필요 없음
* `public/`: 정적 파일(이미지, 폰트, favicon 등)을 넣는 폴더  
  - 이 폴더 안의 파일들은 `/` 경로로 바로 접근할 수 있음
* `src/`: 소스 폴더를 따로 관리할 때 사용
  - `app/`: 앱 라우터
  - `pages/`: 페이지 라우터

## 3.2 루트 파일
* `.gitignore`: Git으로 버전 관리에서 제외할 파일/폴더 목록 지정 파일
* `eslint.config.mjs`: ESLint(코드 스타일 및 문법 검사 도구) 설정 파일
* `next-env.d.ts`: Next.js와 TypeScript가 올바르게 동작하도록 도와주는 타입 선언 파일  
  - 자동 생성되며, 직접 수정할 필요 없음
* `next.config.ts`: Next.js의 동작을 커스터마이즈할 수 있는 설정 파일  
  - 환경 변수, 이미지 도메인, 리다이렉트 등 다양한 옵션을 지정할 수 있음
* `package.json`: 프로젝트의 의존성, 스크립트, 메타데이터 등을 정의
* `package-lock.json`: 설치된 npm 패키지의 정확한 버전과 의존성 트리를 기록하는 파일
  - 협업 시 동일한 환경을 보장하기 위해 필요
  - 직접 수정할 필요 없음
* `postcss.config.mjs`: PostCSS 관련 설정 파일
  - Tailwind CSS 등 CSS 전처리기 사용 시 필요
* `tsconfig.json`: TypeScript 컴파일러의 동작 방식을 설정하는 파일
  - 라우트 별칭, strict 옵션 등 다양한 설정을 포함

## 3.3 app 라우터 규칙
* `app` 폴더 하위에 존재하는 파일이나 폴더 규칙

### 3.3.1 라우팅용 특수 파일
* `layout.tsx`: 동일 폴더와 하위 폴더 페이지의 레이아웃을 정의
* `page.tsx`: 페이지 UI
* `loading.tsx`: 페이지 로딩 중에 표시되는 UI
* `not-found.tsx`: 404 오류 페이지
* `error.tsx`: Page의 오류를 처리
* `global-error.tsx`: Root Layout에서 발생하는 오류를 처리
* `route.ts`: API 엔드포인트 정의
* `template.tsx`: 페이지 템플릿을 정의
* `default.tsx`: 대체 UI

### 3.3.2 폴더기반 라우팅
* 폴더명이 라우트 경로가 됨
* `folder`: 라우트 세그먼트
* `folder`/`folder`: 중첩된 라우트 세그먼트

#### 동적 라우팅
* `[folder]`: 동적 세그먼트
  - URL의 해당 위치에 어떤 값이 오더라도 매칭됨
  - 예: `app/posts/[id]/page.tsx` → `/posts/1`, `/posts/abc` 등에서 params.id로 값 접근
  - params 예시: `/posts/123` → `{ id: '123' }`

* `[...folder]`: Catch-all 세그먼트
  - 해당 위치 이후의 모든 하위 경로를 배열로 params에 저장
  - 예: `app/docs/[...slug]/page.tsx` → `/docs/a`, `/docs/a/b/c` 등에서 params.slug로 배열 접근
  - params 예시: `/docs/a/b` → `{ slug: ['a', 'b'] }`

* `[[...folder]]`: Optional Catch-all 세그먼트
  - catch-all과 같지만, 해당 경로가 없어도 매칭됨(옵션)
  - 예: `app/docs/[[...slug]]/page.tsx` → `/docs`, `/docs/a`, `/docs/a/b` 모두 매칭
  - params 예시: `/docs` → `{}` 또는 `{ slug: undefined }`, `/docs/a` → `{ slug: ['a'] }`

#### 라우트 그룹 및 프라이빗 폴더
* `(folder)`: 라우트 그룹
  - URL 경로에는 포함되지 않지만, 내부적으로 폴더를 그룹화하여 레이아웃/구조 관리
  - 예: `app/(user)/login/page.tsx` → 실제 경로는 `/login` (URL에 (user) 없음)
  - 여러 그룹별로 다른 레이아웃 적용 가능

* `_folder`: 프라이빗 폴더
  - 언더스코어(_)로 시작하는 폴더는 라우팅에서 제외됨
  - 예: `app/_components/Button.tsx` → 라우트가 생성되지 않음(공용 컴포넌트 등 내부 용도)

#### 병렬, 인터셉트 라우트
* `@folder`: 병렬 라우트(parallel routes)
  - 여러 UI 영역을 병렬로 렌더링할 때 사용(고급 기능)
  - 예: `app/@modal/(...)` 등

* `(.)folder`, `(..)folder`, `(..)(..)folder`, `(...)folder`: 인터셉트 라우트(intercepting routes)
  - 특정 경로에서 다른 경로의 UI를 인터셉트(가로채기)하여 보여줄 때 사용(고급 기능)
  - 예: `app/(.)chat/page.tsx` → 현재 경로에서 chat의 UI를 오버레이 등으로 보여줄 때

---

# 4 라우팅

## 4.1 용어
* 트리(Tree): 계층 구조를 시각화하기 위한 용어. 부모와 자식 컴포넌트로 이루어진 컴포넌트 트리
* 서브트리(Subtree): 새로운 루트에서 리프까지 트리의 일부
* 루트(Root): 트리나 서브트리에서 첫 번째 노드. 루트 레이아웃, 루트 페이지
* 리프(Leaf): 트리의 마지막 노드이며 자식이 없는 노드. URL 경로의 마지막 세그먼트

<img src="https://raw.githubusercontent.com/FEBC-13/React/refs/heads/main/images/nextjs/terminology-component-tree.png">

* URL 경로(Path): 도메인 이후의 URL 부분
* URL 세그먼트(Segment): 슬래시로 구분된 URL 경로의 일부

<img src="https://raw.githubusercontent.com/FEBC-13/React/refs/heads/main/images/nextjs/terminology-url-anatomy.png">

## 4.2 app 라우터
* 파일 시스템 기반 라우터
  - app 폴더 하위의 폴더명이 URL의 경로가 됨
* page 라우터에서는 지원하지 않는 공유 레이아웃, 중첩 라우팅, 로딩 상태, 에러 처리 등을 지원

## 4.3 라우트 정의
* 경로에 해당하는 폴더 생성

<img src="https://raw.githubusercontent.com/FEBC-13/React/refs/heads/main/images/nextjs/route-segments-to-path-segments.png">

* 생성한 폴더 하위에 라우팅 규칙과 관련된 특수 파일, CSS, 이미지 등의 파일 생성
  - page.tsx: 해당 경로로 접근했을 때 보여줄 페이지 정의
  - page 파일이 없는 폴더는 라우팅 되지 않음

<img src="https://raw.githubusercontent.com/FEBC-13/React/refs/heads/main/images/nextjs/defining-routes.png">

## 4.4 페이지와 레이아웃
### 4.4.1 페이지
* 클라이언트가 요청한 URL과 매칭되는 폴더 하위에 정의
* 클라이언트에 보여줄 화면 정의
* `page.js`, `page.jsx`, `page.ts`, `page.tsx`로 작성

<img src="https://raw.githubusercontent.com/FEBC-13/React/refs/heads/main/images/nextjs/page-special-file.png">

#### 메인 페이지
* app/page.tsx

  ```tsx
  export default function RootPage() {
    return (
      <h1>Home</h1>
    );
  }
  ```

#### About 페이지
* app/about/page.tsx

  ```tsx
  export default function AboutPage() {
    return (
      <h1>About</h1>
    );
  }
  ```

#### 게시물 목록 조회 페이지
* app/posts/page.tsx

  ```tsx
  export default function ListPage() {
    return (
      <h1>목록 조회</h1>
    );
  }
  ```

#### 로그인 페이지
* app/user/login/page.tsx

  ```tsx
  export default function LoginPage() {
    return (
      <h1>로그인</h1>
    );
  }
  ```

#### 회원 가입 페이지
* app/user/signup/page.tsx

  ```tsx
  export default function SignupPage() {
    return (
      <h1>회원 가입</h1>
    );
  }
  ```

#### 게시물 상세 조회 페이지
* app/posts/1/page.tsx

  ```tsx
  export default function InfoPage() {
    return (
      <h1>상세 조회 - 1번 게시물</h1>
    );
  }
  ```

#### 게시글 등록 페이지
* app/posts/new/page.tsx

  ```tsx
  export default function NewPage() {
    return (
      <h1>게시글 등록</h1>
    );
  }
  ```

### 4.4.2 레이아웃
* 레이아웃 파일이 있는 경로와 하위 경로의 page를 보여줄때 사용하는 공통의 UI 정의
  - page 파일을 `{ children }` 으로 래핑
* 하위 폴더의 layout과 중첩됨
* `layout.js`, `layout.jsx`, `layout.ts`, `layout.tsx`로 작성

#### 루트 레이아웃
* app 폴더 하위에 만들어야 하는 필수 layout 파일
  * `app/layout.tsx`
* 모든 경로에 적용할 공통 UI 작성
* 루트 레이아웃에만 html, body 태그 포함 가능
  - `<html>` `<body>` 태그 필수로 작성
* page 컴포넌트를 children prop으로 받음

* `app/layout.tsx`

  ```tsx
  import './globals.css';

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="ko">
        <body className="flex flex-col h-screen">
          <header className="bg-blue-500 text-white p-4">
            <nav>
              <ul className="flex space-x-4">
                <li><a href="/" className={`hover:underline`}>Home</a></li>
                <li><a href="/about" className={`hover:underline`}>About</a></li>
                <li><a href="/posts" className={`hover:underline`}>게시판</a></li>
                <li><a href="/user/login" className={`hover:underline`}>로그인</a></li>
                <li><a href="/user/signup" className={`hover:underline`}>회원가입</a></li>
              </ul>
            </nav>
          </header>

          { children }
          
        </body>
      </html>
    );
  }
  ```

  - `children`은 현재 폴더부터 URL 경로와 일치하는 폴더까지 내려가면서 찾은 layout이 중첩되고 마지막엔 URL 경로에 존재하는 page가 된다.

#### 게시판 레이아웃
* app/posts/layout.tsx

  ```tsx
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-48 bg-gray-800 text-white p-4 lg:w-64">
          <ul className="space-y-2">
            <li><a href="/posts" className="block hover:bg-gray-700 p-2 rounded">목록 조회</a></li>
            <li><a href="/posts/new" className="block hover:bg-gray-700 p-2 rounded">글쓰기</a></li>
          </ul>
        </aside>
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          { children }
        </main>
      </div>
    );
  }
  ```

### 4.4.3 메타데이터
* layout, page에서 metadata 변수나 generateMetadata 함수를 내보내기 하면 메타데이터 정의 가능
  - metadata: 정적인 메타데이터 출력
  - generateMetadata: 동적이 메타데이터 출력

#### 메타데이터와 SEO
* layout, page에서 metadata 변수나 generateMetadata 함수를 내보내기 하면 메타데이터 정의 가능
* 메타데이터는 주로 `<head>` 태그 내에 포함되는 title, description, keyword 등의 정보
* 메타데이터는 SEO(검색 엔진 최적화)에 중요한 역할을 하며, 소셜 미디어 공유 시에도 사용됨
* generateMetadata 함수 내에서 데이터를 fetching하는 경우, Next.js는 이 데이터 fetching이 완료될 때까지 응답을 보내지 않음
* 데이터 fetching이 완료된 후 메타데이터를 최종적으로 생성하고, 이 메타데이터를 포함한 `<head>` 태그를 클라이언트로 스트리밍하기 시작
* 클라이언트는 서버로부터 받은 초기 컨텐츠가 `<head>`를 포함하고 있기 때문에 검색엔진이 자바스크립트를 실행하지 않아도 완전한 메타데이터 확인 가능

* app/page.tsx에 추가

  ```tsx
  import { Metadata } from "next";

  export const metadata: Metadata = {
    title: 'Home',
    description: 'Home 페이지입니다.'
  }
  ```

* app/about/page.tsx에 추가

  ```tsx
  import { Metadata } from "next";

  export const metadata: Metadata = {
    title: 'About',
    description: 'About 페이지입니다.'
  }
  ```

* app/posts/page.tsx에 추가

  ```tsx
  import { Metadata } from "next";

  export const metadata: Metadata = {
    title: '게시물 목록 조회',
    description: '게시물 목록 조회 페이지입니다.'
  }
  ```

* app/posts/1/page.tsx에 추가

  ```tsx
  import { Metadata } from "next";

  export async function generateMetadata(): Promise<Metadata> {
    const data = {
      title: `1번 게시물`,
      content: '게시판 이용 수칙입니다.'
    };

    return {
      title: data.title,
      description: data.content,
    };
  }
  ```

* app/posts/new/page.tsx에 추가

  ```tsx
  import { Metadata } from "next";

  export const metadata: Metadata = {
    title: '게시글 등록',
    description: '게시글 등록 페이지입니다.'
  }
  ```
  
* app/user/login/page.tsx에 추가

  ```tsx
  import { Metadata } from "next";

  export const metadata: Metadata = {
    title: '로그인',
    description: '로그인 페이지입니다.'
  }
  ```
  
* app/user/signup/page.tsx에 추가

  ```tsx
  import { Metadata } from "next";

  export const metadata: Metadata = {
    title: '회원 가입',
    description: '회원 가입 페이지입니다.'
  }
  ```

## 4.5 페이지 이동
### 4.5.1 Link 컴포넌트

* `next/link` 패키지에 있는 컴포넌트
  - `import Link from "next/link"`

* Next.js의 App 라우터의 라우팅 기능을 구현한 컴포넌트

* a 태그 대신 사용
  - Link 컴포넌트는 렌더링 되면 a 태그로 바뀜

#### app/layout.tsx 수정
```tsx
import Link from "next/link";
...
<li><Link href="/" className={`hover:underline`}>Home</Link></li>
<li><Link href="/about" className={`hover:underline`}>About</Link></li>
<li><Link href="/posts" className={`hover:underline`}>게시판</Link></li>
<li><Link href="/user/login" className={`hover:underline`}>로그인</Link></li>
<li><Link href="/user/signup" className={`hover:underline`}>회원가입</Link></li>
...
```

#### app/posts/layout.tsx 수정
```tsx
import Link from "next/link";
...
<li><Link href="/posts" className="block hover:bg-gray-700 p-2 rounded">목록 조회</Link></li>
<li><Link href="/posts/new" className="block hover:bg-gray-700 p-2 rounded">글쓰기</Link></li>
...
```

#### 활성 링크 체크
* `usePathname()` 훅을 이용해서 url 확인 후 href와 비교

* app/globals.css 작성
  ```css
  ...
  /* Tailwind CSS의 커스텀 컴포넌트 클래스 정의 */
  @layer components {
    .cs-active {
      @apply text-orange-500;
    }
  }
  ```

* app/layout.tsx 수정
  ```tsx
  'use client';

  import './globals.css';
  import Link from 'next/link';
  import { usePathname } from 'next/navigation';

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const pathname = usePathname();
    console.log(pathname);
    const isActive = (path: string) => pathname === path ? 'cs-active' : '';

    return (
      <html lang="ko">
        <body className="flex flex-col h-screen">
          <header className="bg-blue-500 text-white p-4">
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="/" className={`hover:underline ${isActive('/')}`}>Home</Link></li>
                <li><Link href="/about" className={`hover:underline ${isActive('/about')}`}>About</Link></li>
                <li><Link href="/posts" className={`hover:underline ${isActive('/posts')}`}>게시판</Link></li>
                <li><Link href="/user/login" className={`hover:underline ${isActive('/user/login')}`}>로그인</Link></li>
                <li><Link href="/user/signup" className={`hover:underline ${isActive('/user/signup')}`}>회원가입</Link></li>
              </ul>
            </nav>
          </header>

          { children }
          
        </body>
      </html>
    );
  }
  ```

### 4.5.2 useRouter 훅
* 프로그래밍 방식으로 페이지 이동 가능
* 페이지 이동 시 SSR, SSG, 데이터 fetching, 전환 효과 등 Next.js의 기능을 활용할 수 있으므로 직접 window.location을 사용하는 것보다 권장됨
* 꼭 필요한 경우가 아니라면 Link 컴포넌트 사용 권장
* 'use client' 지시어가 있는 클라이언트 컴포넌트에서만 사용 가능

  ```tsx
  'use client'
  import { useRouter } from 'next/navigation';
  ```

#### 주요 메서드
- `router.push(url)`: 지정한 경로로 이동(페이지 추가)
- `router.replace(url)`: 지정한 경로로 이동(페이지 교체)
- `router.back()`: 이전 페이지로 이동
- `router.forward()`: 다음 페이지로 이동
- `router.refresh()`: 현재 페이지 새로고침

### 4.5.3 redirect
* 서버측에서 페이지 이동(리디렉션) 시 사용하는 함수
  - 서버 컴포넌트, 서버 함수, 라우트 핸들러 등에서 사용
* 클라이언트 컴포넌트의 렌더링 중에는 사용 가능하지만, 이벤트 핸들러에서는 사용 불가
  - 클라이언트의 이벤트 핸들러에서는 useRouter의 push/replace 사용
* 기본적으로 307 상태 코드로 응답
  - 307 응답 상태코드: Temporary Redirect, 원래 요청 방식과 본문으로 새로운 페이지 요청, 다음번 요청에도 이전 URL 사용
* 서버 함수일 경우(POST 요청의 성공 페이지로 이동할 때) 303 응답 상태 코드로 응답
  - 303 응답 상태코드: See Other, 새로운 페이지로 GET 요청
  
  ```tsx
  import { redirect } from 'next/navigation';
  ```

#### 예시
```tsx
'use server';
import { redirect } from 'next/navigation';

export async function createPost(formData) {
  // 게시글 등록 로직...
  redirect('/posts'); // 등록 후 목록으로 이동
}
```

### 4.5.4 permanentRedirect
* 응답 상태코드가 308인 점만 다르고 redirect와 동일
  - 308 응담 상태 코드: Permanent Redirect, 원래 요청 방식과 본문으로 새로운 페이지 요청, 다음부터는 새로운 URL 사용
  
### 4.5.5 history API
* 브라우저의 history API 사용
  - window.history.pushState
  - window.history.replaceState
* usePathname(), useSearchParams() 훅으로 URL과 파라미터 추출해서 low-level로 URL 변경 가능
* useRouter() 훅을 사용하는게 페이지 전환 시 SSR, SSG, 데이터 fetching, 페이지 전환 효과 등 Next.js 기능을 활용할 수 있으므로 useRouter() 권장

### 4.5.6 next.config.ts의 redirects
* 선언적 redirect

  ```ts
  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    /* config options here */
    async redirects() {
      return [
        {
          source: '/home',
          destination: '/',
          permanent: true,
        },
        {
          source: '/community/:slug',
          destination: '/posts/:slug',
          permanent: true,
        },
      ]
    },
  };

  export default nextConfig;
  ```

### 4.5.7 NextResponse.redirect
* 미들웨어에서 사용
* 사용사례: 로그인되지 않은 사용자를 로그인 페이지로 이동

  ```ts
  import { NextResponse } from 'next/server';
  import { authenticate } from 'auth-provider';
  
  export function middleware(request) {
    const isAuthenticated = authenticate(request);
  
    // 인증된 사용자라면 원래의 요청작업 진행
    if (isAuthenticated) {
      return NextResponse.next();
    }
  
    // 인증되지 않은 사용자라면 로그인 페이지로 이동
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  export const config = {
    matcher: '/posts/new',
  }
  ```

## 4.6 동적 라우트
* 고정된 URL이 아닌 바뀔수 있는 부분에 대해서 라우팅을 정의할 때 폴더명을 대괄호로 묶어서 생성
  - posts/1, posts/2 -> posts/[id]
* 실제 요청한 URL의 동적 라우트 값은 layout, page, route, generateMetadata 함수에 params prop으로 전달됨

### 4.6.1 요청한 URL이 /posts/3일 경우 3을 꺼내는 방법
* app/posts/1 -> app/posts/[id]로 수정
* app/posts/[id]/page.tsx에 추가

  ```tsx
  export default async function InfoPage({ params }: { params: { id: string } }) {
    const { id } = await params; // Next.js 15 부터 params는 비동기 처리 필요
    await new Promise(resolve => setTimeout(resolve, 1000*2));
    return (
      <h1>상세 조회 - { id }번 게시물</h1>
    );
  }
  ```

* app/posts/[id]/page.tsx 파일이 있을때 매칭되는 URL과 params 값
  - /posts/1 -> { id: '1' }
  - /posts/2 -> { id: '2' }
  - /posts/3 -> { id: '3' }
  - ...

* 동적 라우트를 사용해서 특정 게시글에 달린 좋아요 목록, 관심글로 등록한 목록과 좋아요 상세정보, 관심글 상세 정보를 보여줄 때 만들어야 할 파일
  - app/posts/[id]/[slug]/page.tsx
    + /posts/1/likes -> { id: '1', slug: 'likes' }
    + /posts/2/likes -> { id: '2', slug: 'likes' }
    + /posts/2/favorites -> { id: '2', slug: 'favorites' }
  - app/posts/[id]/[slug]/[sid]/page.tsx
    + /posts/3/likes/4 -> { id: '3', slug: 'likes', sid: '4' }
    + /posts/3/favorites/4 -> { id: '3', slug: 'favorites', sid: '4' }

### 4.6.2 Catch-all 세그먼트
* 대괄호 안에 줄임표 `...`를 추가하면 하위 경로가 더 있어도 매칭됨
* 매칭된 값은 전체 하위 경로를 포함해서 params에 배열로 저장됨

* Catch-all 세그먼트를 이용해서 특정 게시글에 달린 좋아요 목록, 관심글로 등록한 목록과 좋아요 상세정보, 관심글 상세 정보를 보여줄 때 만들어야 할 파일과 params 값
  - app/posts/[id]/[...slug]/page.tsx
    + /posts/1 -> 매칭되지 않음
    + /posts/1/likes -> { id: '1', slug: ['likes'] }
    + /posts/2/likes -> { id: '2', slug: ['likes'] }
    + /posts/2/favorites -> { id: '2', slug: ['favorites']}
    + /posts/3/like/4 -> { id: '3', slug: ['likes', '4'] }
    + /posts/3/favorites/4 -> { id: 3', slug: ['favorites', '4'] }

### 4.6.3 Optional Catch-all 세그먼트
* 폴더명을 이중 대괄호로 묶어서 작성하면 Catch-all 세그먼트를 선택사항으로 지정

* 특정 게시글과 댓글 목록, 댓글 상세 정보를 하나의 page로 처리할 경우 params 값
  - app/posts/[id]/[[...slug]]/page.tsx
    + /posts/1 -> { id: '1' }
    + /posts/2 -> { id: '2' }
    + /posts/3/replies -> { id: '3', slug: ['replies'] }
    + /posts/3/replies/2 -> { id: '3', slug: ['replies', '2'] }

### 4.6.3 generateStaticParams() 함수
* 동적 라우트로 구성된 페이지의 params를 미리 지정해서 빌드시 해당 파라미터를 가지는 페이지를 정적으로 생성(SSG)
* 미리 생성할 정적 페이지의 params를 배열로 반환하도록 작성

  ```tsx
  // 이 함수가 반환한 배열만큼 SSG 페이지를 미리 생성
  // 빌드하면 .next/server/app/posts/1.html, 2.html, 3.html
  export function generateStaticParams() {
    // 공지글에 대한 fetch 작업
    const posts = [
      { id: '1', title: '1번 제목' },
      { id: '2', slug: '2', sid: '3', title: '2번 제목' },
      { id: '3', slug: '2', sid: '3', title: '4번 제목' },
    ];

    return posts;
  }

  export default async function Page({ params: { id } }){
    const resJson = await fetchPost(id);
    let data = resJson.ok ? resJson.item : null;
    return (
      ...
    );
  }
  ```
* 빌드 할 때 동작 순서
  1. 빌드시 generateStaticParams() 함수 호출 후 반환 받은 배열의 각 요소를 params로 구성해서 Page 컴포넌트 호출
  2. Page 컴포넌트에서 반환 받은 HTML을 빌드 결과로 저장(posts/1.html, 2.html, 3.html)
  3. 이후 브라우저의 posts/1 요청이 오면 빌드시 만들어둔 정적 라우팅 테이블에서 매칭되는 url이 있는지 확인 후 posts/[id]/page.tsx 파일을 실행하지 않고 posts/1.html을 응답
  4. 브라우저가 posts/4 요청을 보내는 경우 정적 라우팅 테이블에 매칭되는 url이 없으므로 posts/[id]/page.tsx 파일을 실행하여 응답

## 4.7 라우트 그룹 및 프라이빗 폴더
### 4.7.1 라우트 그룹
* app 라우터는 app 하위 폴더가 URL 경로에 매핑됨
* 폴더가 URL 경로에 포함되지 않게 하고 싶을때 라우트 그룹을 생성
* `(폴더명)` 처럼 폴더명에 `()`를 붙여서 작성
* URL에 영향을 주지 않고 여러 페이지를 하나의 폴더에 묶어서 관리
* 다른 라우트 그룹에 동일한 하위 경로 작성시 컴파일 에러 발생

  ```
  project-root/
  ├── app/
  │   ├──(user)/
  │   │   ├── login/
  │   │   │   └── page.tsx
  │   │   ├── signup/
  │   │   │   └── page.tsx
  ```

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Froute-group-organisation.png&w=1920&q=75">

#### user 폴더가 라우트 경로에 포함되는 경우
* login, signup 폴더를 user 폴더 하위로 그룹화 해서 관리하는 경우 경로에 user가 포함됨

  ```
  project-root/
  ├── app/
  │   ├── user/
  │   │   ├── login/
  │   │   │   └── page.tsx
  │   │   ├── signup/
  │   │   │   └── page.tsx
  ```
  - /user/login -> app/user/login/page.tsx
  - /user/signup -> app/user/signup/page.tsx

#### 경로에서 user를 제외하기 위해 폴더를 제거한 경우
* 경로에서 user를 제거하기 위해서 user 폴더를 제거

  ```
  project-root/
  ├── app/
  │   ├── login/
  │   │   └── page.tsx
  │   ├── signup/
  │   │   └── page.tsx
  ```
  - /login -> app/login/page.tsx
  - /signup -> app/signup/page.tsx

#### user 폴더를 제거하지 않고 경로에서 제거하고 싶을 때
* 라우트 그룹으로 관리

  ```
  project-root/
  ├── app/
  │   ├──(user)/
  │   │   ├── login/
  │   │   │   └── page.tsx
  │   │   ├── signup/
  │   │   │   └── page.tsx
  ```
  - /login -> app/(user)/login/page.tsx
  - /signup -> app/(user)/signup/page.tsx

#### 라우트 그룹 하위에 layout 작성시 라우트 그룹 내부 페이지에만 적용
* 동일한 URL depth에 있는 페이지에 다른 layout을 적용하고 싶을 때는 라우트 그룹을 각각 만들고 layout 작성

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Froute-group-multiple-layouts.png&w=1920&q=75">


#### account, cart, checkout 페이지에서 account, cart에만 동일한 layout을 적용하고 싶을 때

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Froute-group-opt-in-layouts.png&w=1920&q=75">

#### 루트 레이아웃을 여러개 정의하고 싶을 때

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Froute-group-multiple-root-layouts.png&w=1920&q=75">

### 4.7.2 프라이빗 폴더
* _로 시작하는 폴더는 page 파일이 있어도 라우팅에서 제외

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fproject-organization-private-folders.png&w=1920&q=75">

* 활용 사례
  - UI 로직과 라우팅 로직 분리
  - 프로젝트 및 Next.js 생태계 전반에 걸쳐 내부 파일을 일관되게 구성
  - 코드 편집기에서 파일 분류 및 그룹화
  
## 4.8 라우팅 작동 방식

### 4.8.1 코드 분할
* 서버 컴포넌트를 사용하면 경로별로 코드를 작은 번들로 분할해서 브라우저가 다운로드하고 실행할 수 있으므로 데이터의 양과 응답시간이 줄어들어 성능 향상
* 빌드 후 `.next/server/app` 폴더에서 확인

### 4.8.2 Prefetching
* `<Link>` 컴포넌트 사용하는 경우 링크를 누르기 전에 페이지를 미리 로드하는 작업
* 프로덕션 환경에서만 활성화 됨

#### `<Link>` 컴포넌트의 prefetch 속성에 따른 동작

* false: prefetch 동작 안함

* null(기본값)
  - 정적 라우트일 경우 링크가 화면에 보일 때(뷰포트에 들어올 때) 전체 페이지가 프리패치되어 캐시됨
  - 동적 라우트일 경우 링크가 화면에 보일 때 렌더링된 컴포넌트 트리에서 첫번째 loading.tsx 파일이 나타날 때까지만 데이터를 미리 가져옴(30초 동안 캐시됨)
    + 실제 페이지를 요청할 때(클릭 할 때) 로딩 상태를 즉시 보여 주고 이후의 내용을 가져옴

* true
  - 링크가 화면에 보이지 않아도(DOM에 존재하기만 하면) 정적 라우트와 동적 라우트 모두 다 전체 페이지를 미리 가져옴(5분 동안 캐시됨)

* 프리패칭된 데이터와 레이아웃은 30초 동안 라우터 캐시에 저장됨
  - 라우터 캐시는 비활성화 시킬 수 없음
  - router.refresh() 호출 시 라우터 캐시 삭제

### 4.8.3 부분 렌더링
* 페이지 이동시 공유 레이아웃은 유지한 채로 변경된 페이지만 렌더링
* /posts/3 -> /posts/2로 이동시 app/layout.tsx, app/posts/layout.tsx는 다시 렌더링 하지 않음

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fpartial-rendering.png&w=1920&q=75">

### 4.8.4 이전/이후 페이지 이동
* 스크롤을 유지하고 라우터 캐시를 재사용

## 4.9 프로젝트 구성 및 라우트 관리
* 라우팅 폴더 내에 page, route 파일이 있는 경우에만 라우팅 됨

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fproject-organization-not-routable.png&w=1920&q=75">

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fproject-organization-routable.png&w=1920&q=75">

* page와 route 파일만 라우팅 됨

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fproject-organization-colocation.png&w=1920&q=75">

### 4.9.1 프로젝트 폴더 구조 전략
* 프로젝트 파일과 폴더를 어떻게 구성할 것인지에 대해서 올바르거나 틀린 방법은 없음
* 여러 전략 중 팀에게 적합한 방식을 선택하고 일관성을 유지해야 함

#### 프로젝트 파일을 app 외부에 저장
* app 폴더는 라우팅으로만 사용하고 나머지 코드는 app 폴더 외부에 저장

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fproject-organization-project-root.png&w=1920&q=75">

#### 프로젝트 파일을 app 내부에 저장
* 모든 코드를 app 폴더 내부에 저장

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fproject-organization-app-root.png&w=1920&q=75">

#### 기능이나 경로별로 파일 분할
* 공용 컴포넌트나 라이브러리를 app 폴더 하위에 작성하고 각 페이지별로 사용할 컴포넌트나 라이브러리는 각 페이지 폴더 하위에 작성

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fproject-organization-app-root-split.png&w=1920&q=75">

# 5 라우팅용 특수 파일
## 5.1 로딩중 페이지와 스트리밍
### 5.1.1 loading
* 내부적으로 React Suspense를 사용하여 컨텐츠가 로드되는 동안 대체할 컴포넌트로 사용됨
  - Page 컴포넌트를 async 함수로 만들면 반환되는 Promise를 이용해서 로딩중인지(pending) 완료되었는지(fulfilled, rejected) 상태를 추적
* 렌더링이 완료되면 완료된 컴포넌트로 자동 교체
* 로딩중 상태에서도 공유 레이아웃 사용 가능

#### app/posts/loading.tsx 작성
```tsx
export default function Loading() {
  return (
    <div>로딩중...</div>
  )
}
```

* loading 파일과 같은 폴더에 있는 layout 파일에 page를 `<Suspense>`로 감싼 것처럼 동작
  ```tsx
  <Suspense fallback={<Loading />}>
    { children }
  </Suspense>
  ```

* app/posts/page.tsx 수정
  ```tsx
  export default async function ListPage() {
    await new Promise((resolve) => setTimeout(resolve, 1000*3));
    return (
      <h1>목록 조회</h1>
    );
  }
  ```

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Floading-overview.png&w=1920&q=75">

### 5.1.2 서스펜스를 이용한 스트리밍
* SSR을 사용하면 서버에서 페이지에 필요한 모든 데이터를 생성한 후 완성된 HTML을 전송하는데 까지 시간이 오래걸림
* `<Suspense>`를 통해 스트리밍을 활성화하면 서버에서 레이아웃이나 중요 데이터를 먼저 전송할 수 있으며 클라이언트는 페이지의 일부를 더 빨리 표시할 수 있음
  - 하나의 response로 나머지 데이터도 이어서 받음
* 시간이 오래 걸리는 작업은 컨포넌트를 분리하고 `<Suspense>`로 감싸서 처리

## 5.2 error
* 컴포넌트 렌더링시 에러가 발생할 경우 error 파일에서 에러 처리 및 에러 UI 보여줌
  - 클라이언트 컴포넌트여야 함
* error 파일과 같은 폴더에 있는 layout 파일에 page를 `<ErrorBoundary>`로 감싼 것처럼 동작
  - React에서는 클래스형 컴포넌트로 ErrorBoundary를 직접 정의하고 componentDidCatch와 getDerivedStateFromError 생명주기 메서드를 오버라이드 해서 에러 처리를 구현해야 함

  ```tsx
  <ErrorBoundary fallback={<Error />}>
    { children }
  </ErrorBoundary>
  ```

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Ferror-overview.png&w=1920&q=75">

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fnested-error-component-hierarchy.png&w=1920&q=75">

* 매개변수
  - error: 에러 객체
  - reset: 에러가 발생한 컴포넌트를 다시 렌더링 하는 함수
    + 네트워크 같은 에러는 일시적인 요인으로 발생하는 경우가 많으므로 reset() 함수를 호출해서 리플래시 없이 해당 컴포넌트를 다시 렌더링 시도할 수 있음

* page에서 에러가 발생할 경우 같은 폴더의 error에서 처리되고 layout에서 에러가 발생할 경우 상위 폴더의 error에서 처리됨

* 루트 레이이웃에서 에러가 발생할 경우 상위 폴더가 없으므로 에러 처리가 안됨
  - 대신 app/global-error.tsx 파일에서 에러 처리
  - 루트 레이아웃에는 `<html>`, `<body>` 태그가 있으므로 에러가 발생할 경우 대신 사용되는 global-error에 `<html>`, `<body>` 태그가 있어야 함
  - global-error.tsx는 프로덕션 환경에서만 동작

* 서버 컴포넌트에서 발생한 에러는 프로덕션 환경일 때 error 객체의 민감한 오류 정보는 제거되고 클라이언트에 전달됨

## 5.3 not-found
* 해당 경로에서 404(페이지를 찾을 수 없음) 오류가 발생했을 때 보여줄 사용자 정의 404 페이지를 구현할 때 사용
* 이 파일이 존재하는 폴더 및 하위 경로에서 라우팅이 실패하거나, 서버 컴포넌트/서버 함수에서 notFound() 함수를 호출하면 자동으로 not-found에 정의된 UI가 렌더링됨
* 사용자에게 친절한 안내 메시지, 홈으로 이동 버튼 등 커스텀 404 화면을 제공하도록 작성
* 일반적으로 글로벌 404 처리를 위해 루트(app) 폴더에 not-found 파일을 둠

## 5.4 라우트 핸들러
* 서버에서 실행되고 데이터를 클라이언트에 반환하는 API 엔드포인트 생성
  - 서버 컴포넌트에서는 직접 백엔드로부터 데이터를 가져오면 되므로 라우트 핸들러를 호출할 필요 없음
* 외부 API를 호출할 때 라우트 핸들러를 통해 호출하면 API 토큰 같은 민감한 정보를 클라이언트에 노출하지 않음
* GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS 메서드 지원
  - 지원되지 않은 메서드 호출 시 405 Method Not Allowed 에러 응답
* route.ts 파일 작성

  ```ts
  export async function GET(request) {
    const res = await fetch('https://api.fesp.shop/posts');
    const data = await res.json();

    return Response.json({ data });
  }
  ```

### 라우트 핸들러의 NextRequest, NextResponse
* Fetch API의 Request, Response를 확장하여 추가적인 편의 메서드 제공

#### NextRequest 주요 기능
```ts
export function GET(request: NextRequest) {
  // URL과 검색 매개변수
  const { nextUrl } = request;
  const searchParams = nextUrl.searchParams;
  const query = searchParams.get('query'); // /api/search?query=hello → "hello"
  
  // 쿠키 접근
  const token = request.cookies.get('token')?.value;
  
  // 헤더 접근
  const userAgent = request.headers.get('user-agent');
  const authorization = request.headers.get('authorization');
  
  // IP 주소 (Edge 런타임에서 사용 가능)
  const ip = request.ip || request.headers.get('x-forwarded-for');
  
  // 지리적 정보 (Edge 런타임에서 사용 가능)
  const country = request.geo?.country;
  const city = request.geo?.city;
  
  return NextResponse.json({ query, token, userAgent, ip, country });
}
```

#### NextResponse 주요 기능
```ts
import { NextResponse } from 'next/server';

export function POST(request: NextRequest) {
  // 1. JSON 응답
  return NextResponse.json({ message: 'Success' }, { status: 201 });
  
  // 2. 리다이렉트
  return NextResponse.redirect(new URL('/login', request.url));
  
  // 3. 헤더 설정
  const response = NextResponse.json({ data: 'example' });
  response.headers.set('X-Custom-Header', 'MyValue');
  response.headers.set('Cache-Control', 'max-age=3600');
  
  // 4. 쿠키 설정
  response.cookies.set('session', 'abc123', {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * 7, // 1주일
  });
  
  // 5. 쿠키 삭제
  response.cookies.delete('old-session');
  
  return response;
}
```

# 6 Data Fetching
* 데이터를 가져오는 방법
  - 서버에서 fetch 함수 사용
  - 서버에서 axios 같은 외부 라이브러리 사용
  - 클라이언트에서 fetch, axios 같은 함수 사용
  - 클라이언트에서 라우트 핸들러 호출

## 6.1 Next.js의 fetch 함수
* fetch API를 확장
  - GET 요청에 대해 URL과 옵션을 메모이제이션하고 여러 컴포넌트에서 호출하는 동일한 요청에 대해서 저장된 응답을 반환
    + 컴포넌트 트리의 여러 컴포넌트가 props을 이용해서 데이터를 전달할 필요 없이 fetch를 각각 호출해도 저장된 값을 사용하므로 성능에 영향이 없음
    + generateMetadata, generateStaticParams, Layout, Page, Server Component에만 적용되고 라우트 핸들러는 컴포넌트 트리의 일부가 아니므로 적용 안됨
    + 메모이제이션된 데이터는 컴포넌트 트리가 렌더링을 완료할 때까지 지속됨
  - 서버 컴포넌트, 라우트 핸들러, 서버 액션에서 async/await와 함께 사용 가능


## 6.2 서버 액션과 서버 함수
* 서버 컴포넌트 뿐만 아니라 클라이언트 컴포넌트에서도 호출할 수 있는 서버 컴포넌트의 함수
* 'use server' 지시어 사용해서 정의

### 6.2.1 서버 함수(Server Functions)
* `use server` 지시어로 정의되는 모든 함수
* 클라이언트 컴포넌트가 서버에서 실행되는 비동기 함수를 호출할 수 있게 해줌
* 프레임워크가 자동으로 서버 함수에 대한 참조를 생성하고 클라이언트에 전달
* 클라이언트에서 호출 시 React가 서버에 요청을 보내고 결과를 반환

### 6.2.2 서버 액션(Server Actions)
* 서버 함수 중에서 action prop으로 전달되거나 action 내부에서 호출되는 함수
  - form의 submit 이벤트로 호출되는 서버 함수
* GET 방식을 제외한 POST, PUT/PATCH, DELETE 작업에 사용(서버의 데이터 변경에 사용)
* React에서 2024.9월에 기존 서버 액션 대신 서버 함수라는 용어를 새로 만들고 서버 액션은 form에서 사용하는 서버의 데이터 변경 목적의 서버 함수를 지칭

### 6.2.3 용어 정리
```
서버에서 실행되는 모든 함수
├── 일반 함수 ('use server' 없음)
│   └── 서버 컴포넌트 내부에서만 사용
└── 서버 함수 ('use server' 있음)
    ├── 서버 액션 (action prop으로 사용)
    │   ├── 폼 액션: <form action={serverFn}>
    │   ├── useActionState와 함께 사용
    │   └── useTransition과 함께 사용
    └── 기타 서버 함수 (직접 호출)
        ├── 클라이언트에서 직접 호출
        └── 서버에서 직접 호출
```

### 6.2.4 사용 예시
```tsx
// actions.ts - 서버 함수 파일
'use server'

export async function fetchPosts() {
  const posts = await db.posts.findMany();
  return posts;
}

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  await db.posts.create({ data: { title } });
  revalidatePath('/posts');
}
```

```tsx
// PostsPage.tsx - 서버 컴포넌트
import { fetchPosts, createPost } from './actions';
import RefreshButton from './RefreshButton';

export default async function PostsPage() {
  const posts = await fetchPosts();
  
  return (
    <div>
      {/* 서버 액션: form action으로 사용 */}
      <form action={createPost}>
        <input name="title" placeholder="제목 입력" />
        <button type="submit">게시글 작성</button>
      </form>
      
      {/* 클라이언트 컴포넌트 - import로 직접 사용 */}
      <RefreshButton />
      
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

```tsx
// RefreshButton.tsx - 클라이언트 컴포넌트
'use client'
import { fetchPosts } from './actions'; // 직접 import

export default function RefreshButton() {
  return (
    <button onClick={async () => {
      const freshPosts = await fetchPosts();
      console.log('새로운 데이터:', freshPosts);
    }}>
      새로고침
    </button>
  );
}
```

### 6.2.5 서버 함수 주요 특징
* 매개변수와 반환값은 직렬화 가능해야 함
  - string, number, bigint, boolean, undefined, null, symbol(Symbol.for로 등록된 global Symbol)
  - String, Array, Map, Set, TypedArray, ArrayBuffer
  - Date
  - FormData
  - Object
  - 서버 함수 참조
  - Promise
  
* 대부분 async 함수로 작성
  - 데이터베이스 작업, API 호출 등 비동기 작업이 일반적
  - 네트워크를 통한 호출이므로 비동기 처리가 자연스러움

* 작동 원리
  - 서버 함수에 대한 참조(reference) 또는 식별자가 클라이언트로 전송
  - 클라이언트에서 호출 시 이 식별자를 통해 서버로 네트워크 요청을 보냄
  - 서버에서 해당 식별자에 매핑된 실제 서버 함수를 실행
  - 빌드 결과에서 확인
    + `.next/server/app/...`에서 액션 매핑 테이블 확인 가능
    + 실제 함수 코드는 서버에만 존재

### 6.2.6 서버 함수 정의

#### 인라인 수준 정의
* 서버 컴포넌트 내부에서 함수별로 'use server' 지시어 추가
* props로 클라이언트 컴포넌트에 전달 가능

  ```tsx
  // ServerComponent.tsx
  export default function ServerComponent() {
    // 인라인 서버 함수
    async function createPost() {
      'use server'
      await db.posts.create({ title: 'New Post' });
    }

    return (
      <div>
        {/* 서버 컴포넌트에서 직접 사용 */}
        <form action={createPost}>
          <button type="submit">Create</button>
        </form>
        
        {/* 클라이언트 컴포넌트에 props로 전달 */}
        <ClientComponent createPost={createPost} />
      </div>
    );
  }
  ```

```tsx
// ClientComponent.tsx
'use client'

export default function ClientComponent({ createPost }) {
  return (
    <button onClick={() => createPost()}>
      Create Post
    </button>
  );
}
```

#### 모듈 수준 정의  
* 파일 첫줄에 'use server' 지시어로 모든 export 함수를 서버 함수로 정의
* props로 클라이언트 컴포넌트에 전달하거나 클라이언트 컴포넌트에서 import 해서 사용

  ```tsx
  // actions.ts
  'use server'

  export async function createPost() {
    await db.posts.create({ title: 'New Post' });
  }

  export async function updatePost(id, data) {
    await db.posts.update({ where: { id }, data });
  }
  ```

  ```tsx
  // ServerComponent.tsx
  import { createPost } from './actions';

  export default function ServerComponent() {
    return (
      <form action={createPost}> {/* import로 직접 사용 */}
        <button type="submit">Create</button>
      </form>
    );
  }
  ```

  ```tsx
  // ClientComponent.tsx
  'use client' // 클라이언트 컴포넌트
  import { createPost, updatePost } from './actions';

  export default function ClientComponent() {
    return (
      <div>
        <button onClick={() => createPost()}>Create</button>
        <button onClick={() => updatePost(1, { title: 'Updated' })}>Update</button>
      </div>
    );
  }
  ```

#### 권장사항
* 모듈 수준 정의를 권장
  - 재사용성이 높음
  - import로 어디서든 사용 가능  
  - props 드릴링 방지
  - 코드 구조가 깔끔함

### 6.2.7 서버 함수 호출
#### form 요소의 action 속성으로 호출
* React는 HTML form 요소를 확장해서 action 속성에 서버 액션 지정 가능
  ```tsx
  'use client'
  
  export default function ClientComponent({ create }) {
    return <form action={ create }>{/* ... */}</form>
  }
  ```
  - 서버 액션이 호출되면 Form 내부의 입력 요소들 값이 저장된 FormData 객체가 자동으로 전달됨
  - 자바스크립트가 로드되기 이전이거나 비활성화 되었어도 폼 제출 가능
    + 자바스크립트가 로드되기 이전에 제출되면 큐에 담은 후 클라이언트 하이드레이션의 우선 순위로 지정됨
  - submit 이후에 새로고침 없음

  ```tsx
  export default function Page() {
    async function createInvoice(formData) {
      'use server'
  
      const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
      }
    }
  
    return <form action={ createInvoice }>...</form>
  }
  ```

* form 데이터에 추가 인자값 전달
  - Function.prototype.bind()를 사용해서 인자값 미리 전달
  - hidden input을 이용

  ```tsx
  'use client'
  
  import { updateUser } from './actions'
  
  export function UserProfile({ userId }) {
    const updateUserWithId = updateUser.bind(null, userId); // bind
  
    return (
      <form action={updateUserWithId}>
        <input type="hidden" name="userId" value={userId} /> // hidden
        <input type="text" name="name" />
        <button type="submit">이름 수정</button>
      </form>
    )
  }
  ```

  ```tsx
  'use server'
  
  export async function updateUser(userId, formData) {
    // ...
  }
  ```

* pending 상태를 표시하려면 리액트의 useActionStatus 훅 사용
  - `<form>` 요소의 자식으로 정의
  - 리액트 훅이므로 클라이언트 컴포넌트에서만 사용 가능

  ```tsx
  import { SubmitButton } from '@/app/submit-button';
  import { createItem } from '@/app/actions';
  
  // 서버 컴포넌트
  export default async function Home() {
    return (
      <form action={createItem}>
        <input type="text" name="field-name" />
        <SubmitButton />
      </form>
    )
  }
  ```

  ```tsx
  // 클라이언트 컴포넌트
  'use client'  
  import { useActionStatus } from 'react-dom'; 
  export function SubmitButton() {
    const { pending } = useActionStatus();
    return (
      <button type="submit" disabled={pending}>추가</button>
    )
  }
  ```

#### form 요소 내부의 formAction 속성으로 호출
* button 같은 폼 내부 요소의 formAction 속성이나 이벤트 핸들러 
  - `<button formAction={}>`
  - `<input type="submit" formAction={}>`
  - `<input type="image" formAction={}>`

#### 프로그래밍 방식으로 호출
* form 요소의 requestSubmit() 함수를 직접 호출
  ```tsx
  'use client'
  
  export function Entry() {
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === 'Enter' || e.key === 'NumpadEnter') // Ctrl + Enter
      ) {
        e.preventDefault()
        e.currentTarget.form?.requestSubmit()
      }
    }
  
    return (
      <div>
        <textarea name="entry" rows={20} required onKeyDown={handleKeyDown} />
      </div>
    )
  }
  ```

#### 이벤트 핸들러에서 호출
```tsx
'use client'

import { incrementLike } from './actions'
import { useState } from 'react'

export default function LikeButton({ initialLikes }) {
  const [likes, setLikes] = useState(initialLikes)

  return (
    <>
      <p>Total Likes: {likes}</p>
      <button
        onClick={async () => {
          const updatedLikes = await incrementLike()
          setLikes(updatedLikes)
        }}
      >
        Like
      </button>
    </>
  )
}
```

#### useEffect에서 호출
* useEffect 훅에서 호출
  - 게시물 상세보기 화면에서 조회수 증가
    ```tsx
    'use client'
    
    import { incrementViews } from './actions'
    import { useState, useEffect } from 'react'
    
    export default function ViewCount({ initialViews }) {
      const [views, setViews] = useState(initialViews)
    
      useEffect(() => {
        const updateViews = async () => {
          const updatedViews = await incrementViews()
          setViews(updatedViews)
        }
    
        updateViews()
      }, [])
    
      return <p>Total Views: {views}</p>
    }
    ```

### 6.2.8 유효성 검사
* 클라이언트측 유효성 검사
  - required, pattern, type="email" 등 HTML의 기본 유효성 검사 사용
* 서버측 유효성 검사
  - zod 같은 라이브러리 사용

  ```tsx
  'use server'
  
  import { z } from 'zod'
  
  const schema = z.object({
    email: z.string({
      invalid_type_error: 'Invalid Email',
    }),
  })
  
  export default async function createUser(formData) {
    const validatedFields = schema.safeParse({
      email: formData.get('email'),
    })
  
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }
  
  }
  ```

* 서버에서 필드를 검증한 후 클라이언트 컴포넌트에서 리액트의 useActionState 훅을 이용해서 사용자에게 메세지를 표시할 수 있음
  ```tsx
  'use server'
  
  export async function createUser(prevState, formData) {
    // ...
    return {
      message: 'Please enter a valid email',
    }
  }
  ```
  ```tsx
  'use client'
  
  import { useFormState } from 'react-dom'
  import { createUser } from '@/app/actions'
  
  const initialState = {
    message: '',
  }
  
  export function Signup() {
    const [state, formAction] = useFormState(createUser, initialState)
  
    return (
      <form action={formAction}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" required />
        {/* ... */}
        <p>
          {state?.message}
        </p>
        <button>Sign up</button>
      </form>
    )
  }
  ```

### 6.2.9 에러 처리
* 에러가 발생하면 가까운 error.tsx나 `<Suspense>` 에서 처리됨
* try/catch로 에러 처리를 권장
  ```tsx
  'use server'
  
  export async function createTodo(prevState, formData) {
    try {
      // 서버 액션 호출

    } catch (e) {
      throw new Error('할일 추가에 실패했습니다.')
    }
  }
  ```

### 6.2.10 데이터 재검증
* 서버 액션 작업이 완료되면 기존 캐시된 GET 요청의 결과를 revalidate 해야 갱신된 데이터로 다시 조회 가능
  - revalidatePath(), revalidateTag()

  ```tsx
  'use server'
  
  import { revalidateTag } from 'next/cache'
  
  export async function createPost() {
    try {
      // ...
    } catch (error) {
      // ...
    }
    revalidatePath('/posts')
    // 또는
    revalidateTag('posts')
  }
  ```

### 6.2.11 리디렉션
* 서버 액션 완료 후 다른 페이지로 이동 시 redirect 사용

  ```tsx
  'use server'
  
  import { redirect } from 'next/navigation'
  import { revalidateTag } from 'next/cache'
  
  export async function createPost(id) {
    try {
      // ...
    } catch (error) {
      // ...
    }
  
    revalidateTag('posts') // Update cached posts
    redirect(`/post/${id}`) // Navigate to the new post page
  }
  ```

### 6.2.12 쿠키 관리
* 서버 액션 내부에서 cookies API의 get, set, delete 사용
  ```tsx
  'use server'
  
  import { cookies } from 'next/headers'
  
  export async function exampleAction() {
    // Get cookie
    const value = cookies().get('name')?.value
  
    // Set cookie
    cookies().set('name', 'Delba')
  
    // Delete cookie
    cookies().delete('name')
  }
  ```

### 6.2.13 클로저와 암호화
* 컴포넌트 내부에 서버 액션을 정의하면 클로저 생성
* 클로저는 컴포넌트 내부의 변수 접근 가능
* 서버 액션이 호출 될 때마다 컴포넌트 내부 변수를 계속 사용해야 하므로 이 변수는 클라이어트와 서버간의 상태와 컨텍스트 유지를 위해 클라이언트로 전송되었다가 서버 액션이 호출되면 다시 서버로 전송되는데 이때 클라이언트에 민감한 값을 노출하지 않도록 자체 암호화되어 관리됨

## 6.3 fetch 패턴과 모범 사례
### 6.3.1 서버 컴포넌트 사용
* 가능한 서버 컴포넌트를 사용해서 데이터 가져오기
  - 백엔드 데이터 리소스(DB 등)에 직접 액세스 가능
  - API 키나 액세스 토큰 같은 민감한 정보가 클라이언트에 노출되지 않음
  - 데이터 처리와 렌더링이 서버에서 발생하고 클라이언트는 HTML을 받기 때문에 렌더링 과정 없이 응답받은 HTML을 화면에 보여주기만 하면 되므로 브라우저의 작업 처리가 줄어듬
  - 클라이언트에서 여러번 요청할 작업을 한번의 요청으로 모든 데이터를 가져올 수 있음
    + 폭포수 현상을 줄임
    + Next.js 서버와 데이터 리소스(DB 등)가 보통 지리적으로 가까운 곳에 있기 때문에 네트워크 지연시간을 줄임
  - fetch API 호출 결과를 서버측에 캐싱하면 여러 클라이언트의 동일한 요청에 대해 데이터 리소스를 다시 가져올 필요 없이 캐시된 컨텐츠를 제공해서 빠름

### 6.3.2 컴포넌트 트리간 동일한 데이터 전달하지 않기
* 트리의 여러 컴포넌트가 동일한 데이터를 사용할 경우 하나의 컴포넌트에서 데이터를 가져온 후 props로 전달할 필요 없이 각 컴포넌트가 필요한 데이터를 직접 가져오도록 구성
  - 동일한 데이터를 여러번 요청해도 fetch의 메모이제이션에 의해 실제로 fetch가 여러번 발생하지 않음

### 6.3.3 스트리밍과 서스펜스 활용
* 서버 컴포넌트와 중첩 레이아웃을 사용하면 데이터가 필요 없는 부분을 즉시 렌더링 하고 데이터를 가져오는 부분에는 로딩중 상태를 표시

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fserver-rendering-with-streaming.png&w=1920&q=75">

### 6.3.4 병렬 및 순차 fetch

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fsequential-parallel-data-fetching.png&w=1920&q=75">

#### 순차적 fetch
* 이전 fetch 작업 후 다음 fetch 작업을 하기 때문에 폭포수 현상 발생
* 다음 데이터를 가져올 때 이전 데이터가 필요한 경우 사용(성능 저하)
* loading.tsx 페이지나 `<Suspense>`를 사용해서 데이터 스트리밍 중에 로딩중 상태를 보여주면 전체가 블로킹 되는 문제를 막을 수 있음

  - 사용자는 이미 로딩된 컨텐츠에 대해서는 인터렉션이 가능
  ```tsx
  // ...

  async function Playlists({ artistID }) {
    // Wait for the playlists
    const playlists = await getArtistPlaylists(artistID)
  
    return (
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>{playlist.name}</li>
        ))}
      </ul>
    )
  }
  
  export default async function Page({
    params: { username },
  }) {
    // 아티스트 정보 조회
    const artist = await getArtist(username)
  
    return (
      <>
        <h1>{artist.name}</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Playlists artistID={artist.id} />
        </Suspense>
      </>
    )
  }
  ```

#### 병렬 fetch
* 데이터 가져오기 작업을 동시에 호출
* 데이터간 종속성이 없을 경우 사용(성능 향상)

```tsx
import Albums from './albums'
 
async function getArtist(username) {
  const res = await fetch(`https://api.example.com/artist/${username}`)
  return res.json()
}
 
async function getArtistAlbums(username) {
  const res = await fetch(`https://api.example.com/artist/${username}/albums`)
  return res.json()
}
 
export default async function Page({
  params: { username },
}) {
  // 데이터 요청을 동시에 수행
  const artistData = getArtist(username)
  const albumsData = getArtistAlbums(username)
 
  // 모든 Promise가 fulfilled 되기를 기다림
  const [artist, albums] = await Promise.all([artistData, albumsData])
 
  return (
    <>
      <h1>{artist.name}</h1>
      <Albums list={albums}></Albums>
    </>
  )
}
```

# 7 서버 컴포넌트와 클라이언트 컴포넌트

## 7.1 클라이언트와 서버

### 7.1.1 렌더링
* 리액트 컴포넌트를 호출해서 HTML 코드를 만드는 작업

### 7.1.2 렌더링 환경
* 클라이언트: 웹 브라우저
* 서버: 클라이언트의 요청을 받아서 응답을 보내는 컴퓨터
* 클라이언트 사이드 렌더링(Client Side Rendering, CSR): 렌더링의 주체가 클라이언트
* 서버 사이드 렌더링(Server Side Rendering, SSR): 렌더링의 주체가 서버

### 7.1.3 요청-응답 수명주기
1. 사용자
  - 주소창에 주소 입력, 링크나 submit 버튼을 클릭하는 액션을 발생시킴
2. 클라이언트
  - 웹 브라우저가 요청 헤더와 바디를 만들어 서버에 HTTP 요청을 보냄
3. 서버
  - 클라이언트의 요청 헤더와 바디를 꺼내고 분석해서 요청을 처리한 결과를 응답헤더와 바디에 포함해서 클라이언트에 보냄 
4. 클라이언트
  - 웹 브라우저는 서버로부터 받은 응답 데이터를 사용자에게 적절한 UI로 보여줌
5. 사용자
  - 페이지와 상호 작용할 수 있는 상태

### 7.1.4 네트워크 경계
* 클라이언트(웹 브라우저), 웹서버, 애플리케이션 서버(Next.js 서버), API 서버, DB 등 서로 다른 환경을 구분하는 개념
* React는 클라이언트 사이드 렌더링으로 동작
* Next.js는 클라이언트, 서버 사이드 렌더링으로 동작

## 7.2 서버 컴포넌트
### 7.2.1 CSR vs. SSR
#### 7.2.1.1 CSR(Client Side Rendering)
* 리액트의 동작 방식
* 클라이언트가 최초로 접속하면 head에 css, js 파일이 정의되어 있고 body가 비어있는 HTML 응답
* index.html
  ```html
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Vite + React + JS</title>
      <script type="module" crossorigin src="/assets/index-BzyLkkVx.js"></script>
      <link rel="stylesheet" crossorigin href="/assets/index-UJILNUew.css">
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>
  ```

* 클라이언트가 HTML을 파싱하면서 css, js 파일을 서버에 추가로 요청하고 다운로드가 완료되면 js 파일을 이용해서 HTML 생성
* 이후 페이지 이동 시 처음에 다운로드 받은 js에 정의된 컴포넌트에서 모든 HTML을 생성하고 동적으로 화면을 바꾸므로 SPA로 동작
  - 초기 js 로딩에 시간이 걸림
  - SEO(Search Engine Optimization) 안됨

#### 7.2.1.2 SSR(Server Side Rendering)
* 초기 페이지 로딩 시간과 SEO를 개선하기 위해 서버에서 HTML을 생성하고 클라이언트에 전송
1. 초기 페이지 로드
  - 사용자가 웹사이트를 처음 접속할 때 서버는 해당 페이지의 HTML을 생성하고(렌더링) 브라우저에 응답(SSR)
2. 자바스크립트 다운로드
  - 브라우저는 서버로부터 받은 HTML을 파싱하면서 현재 페이지의 동작에 필요한 자바스크립트를(클라이언트 컴포넌트) 다운로드 후 실행
3. 정적인 페이지 뷰
  - 자바스크립트 다운로드 중이라도 HTML 파싱이 완료되면 즉, DOM 생성 후 화면이 출력되면 정적인 상태의 화면을 사용자가 볼 수 있음
  - 전체 내용이 로드되기 전이라도 사용자가 링크를 클릭해서 다른 페이지로 이동을 할 수 있음
4. 하이드레이션
  - 다운로드 받은 자바스크립트를 이용해서 가상 DOM을 만들고 브라우저 DOM과 동기화 시키고 이벤트 추가 등의 작업이 끝나면 사용자와 상호작용 가능한 상태가 됨
5. 리액트 앱으로 동작
  - 하이드레이션이 끝나면 일반적인 리액트 앱으로 동작(CSR)

* SSR을 지원하는 리액트 프레임워크로 Getsby, Remix, Next.js 등이 있음

#### 7.2.1.3 SSR의 장점
* 첫 페이지 로딩이 빨라짐
  - CSR은 자바스크립트를 다운로드 한 후 리액트 컴포넌트로 렌더링되어야 화면에 보임
  - SSR은 일단 HTML 먼저 응답하므로 정적인 레이아웃을 바로 보여줄 수 있음
* 효율적인 SEO 가능
  - 정적으로 응답한 HTML에 검색엔진에 필요한 정보를 포함시키기 때문에 검색엔진이 자바스크립트를 실행하지 않더라도 필요한 정보를 바로 확인 가능

### 7.2.2 SSR vs. RSC(React Server Component)
* SSR은 페이지 단위, RSC는 컴포넌트 단위
* Next.js의 page 라우터가 SSR 방식, app 라우터가 RSC 방식
* SSR은 page 단위에서만 서버 관련 함수 사용
  - getServerSideProps 내에서 데이터를 받아오고 데이터를 렌더링할 컴포넌트에는 props로 전달
* RSC는 데이터를 렌더링할 컴포넌트에서 직접 서버 관련 함수 사용
  - 관심사 분리: page 컴포넌트는 UI, 데이터는 하위 컴포넌트에서 직접 생성
  - props 드릴링 없음
  - 컴포넌트 단위로 SSR 전략을 선택할 수 있음
    + SSR(Server Side Rendering)
      - SSG(Static Site Generation)    
      - ISR(Incremental Static Regeneration)
* 페이지 내에서 자주 바뀌는 컴포넌트가 하나 있으면 SSR은 해당 페이지에 접속할 때 매번 모든 컴포넌트를 동적으로 서버에서 렌더링 함
  - RSC는 해당 컴포넌트만 동적으로 렌더링 함

#### 6.3.2.1 Next.js RSC의 장점
* 백엔드 데이터 리소스(DB 등)에 직접 액세스 가능
  - 백엔드 개발 가능
  - RSC가 없던 Next.js 13 이전에는 페이지 루트에서만 백엔드 접근이 가능했었지만 RSC는 컴포넌트 단위의 백엔드 접근이 가능
* 클라이언트에서 여러번 데이터 요청을 하지 않고 한번의 요청으로 모든 데이터를 가져올 수 있음
  - 폭포수 현상을 줄임
  - Next.js 서버와 데이터 리소스(DB 등)가 보통 지리적으로 가까운 곳에 있기 때문에 네트워크 지연시간을 줄임
* API 키나 액세스 토큰 같은 민감한 정보가 클라이언트에 노출되지 않음
* Next.js에서 기능을 추가한 fetch API의 캐싱을 이용하면 여러 클라이언트의 동일한 요청에 대해 데이터 리소스에서 다시 가져올 필요 없이 캐시된 컨텐츠를 제공해서 빠르고 서버 자원 낭비가 줄어듬
* 클라이언트로 번들링되어 전송되는 자바스크립트 크기가 줄어듬
  - 서버에서만 실행되기 때문에 클라이언트로 JS 코드를 전송할 필요 없음(로직, 라이브러리)
* FCP(First Contentful Paint)가 단축됨
  - FCP: 페이지 로딩이 시작된 후 첫 번째 콘텐츠가 화면에 그려지는 시점을 측정하는 지표
  - HTML을 서버에서 만들어 주기때문에 인터렉션에 필요한 자바스크립트를 실행하기 전이라도 화면에 보여줄 수 있음
  - 구글 등 검색엔진의 페이지 순위 결정 요소 중 하나
* SEO에 유리
* 렌더링 작업을 청크로 분할해서 스트리밍하면 클라이언트는 전체 HTML을 다 받기전에도 페이지의 일부를 보여줄 수 있음
* 코드 자동 분할

### 7.2.3 서버 컴포넌트 vs. 클라이언트 컴포넌트
#### 7.2.3.1 서버 컴포넌트
* 오직 서버에서만 실행되는 컴포넌트
* Next.js의 app 라우터를 사용하면 모든 컴포넌트는 기본으로 서버 컴포넌트가 됨

##### 서버 컴포넌트의 렌더링
1. 라우트 세그먼트를 기준으로 각 세그먼트의 렌더링 작업 시작
  - /posts/3일 경우 /posts, /3 두개의 세그먼트로 나뉨
2. 각 라우트 세그먼트의 대상 컴포넌트는 렌더링에 필요한 데이터를 만들고(fetch) RSC Payload 생성
  - loading.tsx 파일이 있거나 `<Suspense>`가 있다면 해당 위치에 fallback UI를 렌더링
    + 이후 데이터 fetching이 완료되면 추가 데이터를 스트리밍 방식으로 전송
  - RSC Payload: 서버에서 렌더링된 컴포넌트 트리 구조(클라이언트 컴포넌트가 들어갈 자리 표시), 클라이언트에서 사용할 자바스크립트 파일 경로, 서버 컴포넌트에서 클라이언트 컴포넌트에 전달하는 props 데이터를 표현한 특수한 포맷의 데이터
3. RSC Payload를 기반으로 HTML 생성
  - 초기 접속이나 새로고침 등으로 페이지가 로드될 때 HTML 생성 및 전송
  - 이후 페이지 이동시에는 RSC Payload만 생성해서 전송
4. HTML과 RSC Payload를 클라이언트에 전송
  - HTML은 브라우저 자체의 렌더링으로 빠르게 화면 표시
  - HTML만 가지고 화면을 보여줬기 때문에 사용자와의 인터렉션이 되지 않는 상태
5. 인터렉션을 위한 하이드레이션 시작
  - 클라이언트 컴포넌트 다운로드
  - 리엑트 앱으로 동작시키기 위해 RSC Payload 정보를 이용해서 Virtual DOM을 생성, 브라우저 DOM과 동기화 시키고 이벤트 핸들러를 등록해서 사용자와 인터렉션이 가능한 상태로 만듬

#### 7.2.3.2 클라이언트 컴포넌트
* 서버와 클라이언트에서 실행되는 컴포넌트
* 파일의 첫줄에 'use client' 지시어 추가
* 서버에서 먼저 실행된 후 결과와(HTML) 컴포넌트 자체를(JS) 클라이언트로 전송
* 이후 클라이언트에서도 실행되는 컴포넌트로, 브라우저에서만 할 수 있는 작업이 필요한 경우 클라이언트 컴포넌트로 만들어야 함
  - 이벤트 처리, DOM 직접 핸들링
  - useState, useEffect 등 상태와 라이프사이클 관련 기능
  - 브라우저 API(window, document, localStorage, geolocation 등) 사용
* 클라이언트 컴포넌트가 import해서 사용하는 모든 자식 컴포넌트는 암묵적으로 클라이언트 컴포넌트가 되고 자바스크립트 번들에 포함되어 클라이언트로 전송됨
* 클라이언트 컴포넌트가 서버 컴포넌트를 직접 import 할 수는 없지만 children으로 포함하는건 가능
  - 서버 컴포넌트는 서버에서 실행되어야 하기 때문에 브라우저에서 실행되는 클라이언트 컴포넌트에서 직접 import 해서 호출하는건 불가능
  - 서버 컴포넌트를 자식 컴포넌트로 포함하면 서버에서 먼저 실행된 후 결과가 자식 컴포넌트에 추가되므로 가능

##### 클라이언트 컴포넌트의 렌더링
* 페이지 로드일 경우
  - 초기 접속이나 새로고침 등으로 페이지가 로드될 때
  - 서버는 서버 컴포넌트와 클라이언트 컴포넌트 모두 렌더링해서 HTML 생성 후 응답
  - 접속한 페이지에서 필요한 클라이언트 컴포넌트는 페이지별로 분할 되어서 제공되고 필요한 컴포넌트만 JS 번들로 다운로드
* 페이지 이동시
  - 이동한 페이지에서 필요한 클라이언트 컴포넌트 번들만 추가로 다운로드
  - 이전에 다운받았다면 브라우저 캐시에서 재사용
* 페이지는 변경되지 않고 리렌더링 되는 경우
  - 새로고침 없이 클라이언트에서 렌더링

### 7.2.4 Next.js의 RSC(React Server Component) 렌더링 방식

#### 7.2.4.1 정적 렌더링(Static Rendering)
* SSG(Static Site Generation)
* 빌드 시점에 서버측에서 HTML을 생성하고 클라이언트 요청시 미리 생성된 HTML을 바로 응답하므로 빠름
* 데이터가 바뀌지 않는 정적인 페이지에 사용

#### 7.2.4.2 동적 렌더링(Dynamic Rendering)
* 클라이언트 요청시 매번 HTML을 생성해서 응답하므로 느림
* 최신 데이터를 반영해야 하거나 사용자 맞춤형 데이터가 있는 동적인 페이지에 사용

#### 7.2.4.3 스트리밍(Streaming)
* 서버의 작업이 완료되지 않더라도 응답이 여러 청크로 분할되어 클라이언트로 스트리밍 됨
* 클라이언트는 전체 렌더링이 완료되기 전에 페이지의 일부를 즉시 볼 수 있음
* 앱 라우터를 사용하면 기본으로 동작

#### 7.2.4.4 ISR(Imcremental Static Regeneration)
* 정적으로 렌더링 된 이후에 일정 시간이 지나면 다시 서버에서 렌더링 됨
  - revalidate 옵션 사용

## 7.3 Edge와 Node.js 런타임
* Edge는 Node.js의 경량화 버전으로 빠르지만 Node.js의 fs 모듈 같은 일부 npm 패키지를 지원하지 않음
* 빠른 시작을 위해 최소한의 리소스를 사용하므로 패키지 파일 사이즈가 제한될 수 있음
* Static Rendering 지원 안함
* layout이나 page에서 정의

  ```tsx
  export const runtime = 'edge' // 'nodejs' (default) | 'edge'
  ```

* 배포하는 클라우드 업체가 Edge 런타임을 제공해야 함
  - Vercel Edge Functions
    + 배포할 때 자동으로 Edge 서비스에 배포
  - Netlify Edge Functions
    + 설정 필요
  - Cloudflare Workers
    + 직접 배포 필요

# 8 캐싱
* Next.js는 성능 최적화를 위해 4가지 주요 캐싱 메커니즘을 제공

## 8.1 Data Cache
* 위치: 서버측 (파일 시스템, CDN 등)
* 대상: fetch 요청, 외부 API 호출 결과를 개별 데이터 단위로 캐시
* 목적: 동일한 데이터 요청을 여러 클라이언트가 보낼 때 빠른 응답
* 지속 시간: 명시적으로 무효화하기 전까지 유지
* 방법: fetch 호출 시 cache 옵션 설정, next.tags로 태그 지정, revalidateTag()로 재검증

  ```tsx
  // 캐시됨 (Next.js 14)
  const res = await fetch('https://api.example.com/posts');

  // Next.js 15에서는 명시적 설정 필요
  const res = await fetch('https://api.example.com/posts', { cache: 'force-cache' });
  ```

## 8.2 Full Route Cache
* 위치: 서버측
* 대상: 렌더링된 페이지(SSG), Route Handler 결과(API 응답 전체)
* 목적: 정적으로 생성된 페이지의 빠른 제공(SSG), 빠른 API 응답 제공
* 지속 시간: 재배포 또는 재검증까지 유지
* 방법: generateStaticParams() 함수 작성, export const dynamic 설정, revalidatePath()로 재검증

  ```tsx
  // 정적 페이지 생성 (SSG)
  export async function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }];
  }

  export default async function Page({ params }) {
    // 빌드 타임에 HTML 생성 후 캐시됨
    return <div>Post {params.id}</div>;
  }
  ```

  ```tsx
  // Route Handler 정적 캐시
  export const dynamic = 'force-static';

  export async function GET() {
    // 이 응답이 빌드 타임에 생성되어 캐시됨
    return Response.json({ message: 'Static response' });
  }
  ```

## 8.3 Router Cache
* 위치: 클라이언트측 (브라우저 메모리)
* 대상: 방문한 페이지의 RSC Payload
* 목적: 페이지 간 이동 시 빠른 탐색
* 지속 시간: 세션 동안 또는 설정된 시간까지
* 방법: next.config.ts에서 staleTimes 설정, Link 컴포넌트의 prefetch 속성 조정, router.refresh() 호출

  ```tsx
  // next.config.ts - 라우터 캐시 설정
  module.exports = {
    experimental: {
      staleTimes: {
        dynamic: 30,  // 동적 페이지 30초 캐시
        static: 300,  // 정적 페이지 5분 캐시
      },
    },
  };
  ```

## 8.4 Request Memoization
* 위치: 서버측 (렌더링 중)
* 대상: 동일한 렌더링 사이클 내의 중복 fetch 요청
* 목적: 컴포넌트 트리에서 중복 요청 방지
* 지속 시간: 하나의 렌더링 완료까지만
* 방법: 특별한 설정 불필요, 동일한 URL과 옵션으로 fetch 호출하면 자동으로 메모이제이션

  ```tsx
  // 같은 렌더링 사이클에서 동일 요청은 메모이제이션됨
  function ComponentA() {
    const data = await fetch('https://api.example.com/user'); // 실제 요청
  }

  function ComponentB() {
    const data = await fetch('https://api.example.com/user'); // 메모이제이션된 결과 사용
  }
  ```

## 8.5 Next.js 15의 캐싱 주요 변경사항
* 기본값 변경
  - Data Cache: 기본적으로 `no-store` (캐시 안됨)
  - Route Handler Cache: 기본적으로 캐시 안됨
  - Router Cache: Page 컴포넌트 기본 `staleTime`이 0초

* Next.js 14 vs 15 비교
```tsx
// Next.js 14: 자동으로 캐시됨
const res = await fetch('https://api.example.com/posts');

// Next.js 15: 캐시 안됨 (명시적 설정 필요)
const res = await fetch('https://api.example.com/posts'); // cache: 'no-store' 기본값

// Next.js 15에서 캐시하려면 명시적 설정 필요
const res = await fetch('https://api.example.com/posts', { cache: 'force-cache' });
```

### 캐시를 명시적으로 설정해도 여전히 캐시가 안되는 경우
* 미들웨어에서는 캐시 안됨
* Fetch가 아니라 Request 객체를 사용하는 경우
* GET 이외의 HTTP 메서드 사용 (POST, PUT, DELETE 등)
* cookies() 또는 headers() 함수 사용
  - header나 cookie를 꺼내는 작업은 동적으로 실행되어야 하므로 해당 컴포넌트는 동적 렌더링이 됨
* 라우트 세그먼트에서 `dynamic = 'force-dynamic'` 설정
* 서버 액션 내부의 fetch 요청

  ```tsx
  // 이런 경우들은 cache: 'force-cache'를 설정해도 캐시 안됨
  export default async function Page() {
    const cookieStore = cookies(); // 동적 함수 사용
    const res = await fetch('https://api.example.com/posts', { 
      cache: 'force-cache' // 설정해도 캐시 안됨!
    });
  }

  export const dynamic = 'force-dynamic'; // 이 설정이 있으면 모든 fetch가 캐시 안됨
  ```

## 8.6 data cache
### 8.6.1 Next.js의 fetch API
* fetch의 반환값을 서버의 데이터 캐시에 자동으로 캐시하도록 구성할 수 있음
  - 빌드시, 요청시 데이터를 캐시하고 재사용

    ```ts
    // Next.js 14 기본값: 'force-cache'
    // Next.js 15 기본값: 'no-store'
    fetch('https://api.fesp.shop/posts', { cache: 'force-cache' });
    ```

  - layout, page의 라우트 세그먼트 설정 옵션을 사용하면 layout이나 page 내의 모든 요청에 적용됨
    ```tsx
    export const dynamic = 'force-dynamic'; // 외부 라이브러리에서도 캐시 안하도록 설정됨
    ```

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fdata-cache.png&w=1920&q=75">

### 8.6.2 데이터 캐시와 fetch 메모이제이션의 차이점
  - 둘다 프로덕션에서만 동작
  - 데이터 캐시는 여러 요청에서 재사용 됨
  - 메모이제이션은 컴포넌트 트리가 렌더링 되는 동안에만 재사용 됨
    + 렌더링 될때 호출되는 여러 컴포넌트가 동일한 URL과 옵션으로 fetch 요청을 보내면 최초 요청의 응답을 저장하고 이후의 요청에는 저장된 응답이 사용된 후 렌더링이 끝나면 삭제됨
  - 데이터 캐시는 비활성화 하거나 재검증 시 서버에 다시 요청
  - 메모이제이션은 임시 캐시이므로 다음 렌더링 작업이 발생하면 항상 서버에 다시 요청
  - 메모이제이션 -> 데이터 캐시 -> 데이터 소스 순으로 확인

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Frequest-memoization.png&w=1920&q=75">

### 8.6.3 캐시 재검증
* 데이터 캐시를 제거하고 최신 데이터를 다시 가져오는 프로세스
* 재검증 시도시 오류가 발생하면 마지막 성공한 데이터 캐시를 사용하고 다음 요청에서 재검증을 다시 시도

#### 시간 기반 재검증
* next.revalidate 옵션으로 초단위 시간 설정
```tsx
fetch('https://api.fesp.shop/posts', { next: { revalidate: 3600 } });
```

* 라우트 세그먼트 설정 옵션의 revalidate 값을 지정
```tsx
export const revalidate = 3600;
```

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Ftime-based-revalidation.png&w=1920&q=75">

#### 요청시 재검증
* revalidateTag()
  - 지정한 태그의 서버 데이터 캐시 무효화
* revalidatePath()
  - 지정한 경로의 서버 데이터 캐시 무효화

```tsx
// /posts/page.tsx
const res = await fetch(`https://api.fesp.shop/posts?type=qna`, {
  next: { tags: ['posts', 'qna'] }
});
revalidateTag('posts'); // posts 태그가 붙어있는 캐시 삭제
revalidateTag('qna'); // qna 태그가 붙어있는 캐시 삭제
revalidatePath('/posts'); // /posts URL의 캐시 삭제
```

<img src="https://nextjs.org/_next/image?url=https%3A%2F%2Fh8DxKfmAPhn8O0p3.public.blob.vercel-storage.com%2Fdocs%2Flight%2Fon-demand-revalidation.png&w=1920&q=75">


# 9 최적화
* 애플리케이션의 속도와 응답성을 향상시키기 위해 설계된 자양한 내장 최적화 기능을 제공

## 9.1 이미지
* 자동으로 이미지 최적화 기능을 갖춘 Image 컴포넌트
* 크기 최적화
  - 각 장치에 맞는 올바른 크기의 이미지를 자동으로 제공
  - WebP, AVIF 같은 현대 이미지 포맷을 사용
* 시각적 안정성
  - 이미지가 로딩될 때 발생하는 레이아웃 이동 현상 방지(width, height 속성 명시)
* 더 빠른 페이지 로드
  - 이미지가 뷰포트에 들어올 때 로드
  - 선택적인 blurDataURL 속성으로 블러업 플레이스 홀드 지정
* 유연성
  - 원격 서버의 이미지를 요청에 따라 크기 조정

* 외부 이미지 로딩시 next.config.ts 설정 추가
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fesp-api.koyeb.app',
        port: '',
        pathname: '/market/files/**',
      },
    ],
  },
};

export default nextConfig;
```

## 9.2 스크립트
### 9.2.1 외부 스크립트 로딩
* layout이나 page에서 외부 스크립트 로딩
* layout에서 외부 스크립트 로딩시 동일 레이아웃 내의 여러 페이지 이동에도 한번만 로딩됨
* app/map/layout.tsx
```tsx
import Script from 'next/script';

export default function DashboardLayout({
  children,
}) {
  return (
    <>
      <section>{children}</section>
      <Script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=abc123" />
    </>
  )
}
```

### 9.2.2 인라인 스크립트
* 스크립트를 추적하고 최적화 하기 위해서 id 속성 부여
```tsx
<Script id="show-banner">
  {`document.getElementById('banner').classList.remove('hidden')`}
</Script>
```

## 9.3 정적 컨텐츠
* public 폴더 아래에 위치
* public 폴더는 코드에서 '/'로 접근

# 10 인증
## 10.1 Authentication, 인증
* 신원 확인
* 아이디, 비밀번호로 로그인
* 구글, 네이버, 카카오 로그인

### 10.1.1 전략
* OAuth/OpenID Connect(OIDC)
  - 소셜 로그인, Single Sign-On(SSO)
* 로그인(이메일 + 비밀번호)
  - 일반적인 웹 애플리케이션의 인증 방법
* 비밀번호 없는 토큰 기반 인증
  - 일회성 이메일 링크나 SMS 링크 등을 통해서 인증
  - 비밀번호 재설정 링크
* Passkeys/WebAuthn
  - 안전하지만 구현 복잡

### 10.1.2 인증 구현
* 로그인 페이지
```tsx
import { authenticate } from '@/app/lib/actions'
 
export default function Page() {
  return (
    <form action={authenticate}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  )
}
```

* 인증 공급자의 API 호출
```ts
'use server'
 
import { signIn } from '@/auth'
 
export async function authenticate(_currentState, formData) {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}
```

* 결과 처리
```tsx
'use client'
 
import { authenticate } from '@/app/lib/actions'
import { useFormState, useFormStatus } from 'react-dom'
 
export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)
 
  return (
    <form action={dispatch}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
      <LoginButton />
    </form>
  )
}
 
function LoginButton() {
  const { pending } = useFormStatus()
 
  const handleClick = (event) => {
    if (pending) {
      event.preventDefault()
    }
  }
 
  return (
    <button aria-disabled={pending} type="submit" onClick={handleClick}>
      Login
    </button>
  )
}
```

## 10.2 Authorization, 인가: 권한 확인
* 인증 받은 사용자가 특정 작업에 대해 수행이 가능한지 여부를 확인
  - 게시묵 목록, 상세 조회는 누구나 가능
  - 게시물 수정, 삭제는 본인의 게시물에 한해서만 가능
  - 판매 회원만 상품 등록 가능
* Next.js의 미들웨어를 이용해서 구현

### 10.2.1 미들웨어 구현 방법
#### 미들웨어 설정
* 루트 디렉토리에 middleware.tsx 파일 생성
* 토큰 확인 등을 통해 사용자 엑세스를 승인하는 로직 작성

#### 보호된 경로 정의
* 미들웨어의 matcher 옵션으로 인가가 필요하지 않은 경로를 지정

#### 미들웨어 로직 작성
* 인증 여부를 확인하는 로직 작성

#### 무단 접근 처리
* 승인되지 않은 사용자는 오류 페이지를 보여주거나 로그인 페이지로 이동

```tsx
import type { NextRequest } from 'next/server'
 
export function middleware(request) {
  const currentUser = request.cookies.get('currentUser')?.value
 
  if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
    return Response.redirect(new URL('/dashboard', request.url))
  }
 
  if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/login', request.url))
  }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
```

```tsx
import { redirect } from 'next/navigation'
 
export default function Page() {
  // Logic to determine if a redirect is needed
  const accessDenied = true
  if (accessDenied) {
    redirect('/login')
  }
 
  // Define other routes and logic
}
```

### 10.2.2 리소스 보호
#### 서버 액션
```tsx
'use server'
 
// ...
 
export async function serverAction() {
  const session = await getSession()
  const userRole = session?.user?.role
 
  // Check if user is authorized to perform the action
  if (userRole !== 'admin') {
    throw new Error('Unauthorized access: User does not have admin privileges.')
  }
 
  // Proceed with the action for authorized users
  // ... implementation of the action
}
```

#### 라우트 핸들러
```tsx
export async function GET() {
  // User authentication and role verification
  const session = await getSession()
 
  // Check if the user is authenticated
  if (!session) {
    return new Response(null, { status: 401 }) // User is not authenticated
  }
 
  // Check if the user has the 'admin' role
  if (session.user.role !== 'admin') {
    return new Response(null, { status: 403 }) // User is authenticated but does not have the right permissions
  }
 
  // Data fetching for authorized users
}
```

#### 서버 컴포넌트
```tsx
export default async function Dashboard() {
  const session = await getSession()
  const userRole = session?.user?.role // Assuming 'role' is part of the session object
 
  if (userRole === 'admin') {
    return <AdminDashboard /> // Component for admin users
  } else if (userRole === 'user') {
    return <UserDashboard /> // Component for regular users
  } else {
    return <AccessDenied /> // Component shown for unauthorized access
  }
}
```

## 10.3 Auth.js
* 예전에는 NextAuth.js 였다가 5.0부터 Auth.js로 명칭 변경
  - OAuth2.0, OIDC 등을 지원

### 10.3.1 설치
```sh
npm install next-auth@beta
```

### 10.3.2 AUTH_SECRET 환경 변수 생성
* .env.local 파일에 AUTH_SECRET 환경변수 생성됨
```sh
npx auth secret
# openssl rand -base64 33 명령으로 생성하는 효과
```

### 10.3.3 Auth.js 구성 파일 생성
* src/auth.ts
```ts
import NextAuth from "next-auth";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
})
```

#### NextAuth() 인자값
* providers: Credentials, Google, GitHub 등의 인증 공급자를 지정
* session: 세션 관리 방식을 지정
* pages: 사용자 정의 페이지 경로를 지정하며, 로그인 페이지의 기본값은 /auth/signin
* callbacks: 인증 및 세션 관리 중 호출되는 각 핸들러를 지정
  - signIn: 사용자 로그인을 시도했을 때 호출되며, true를 반환하면 로그인 성공, false를 반환하면 로그인 실패로 처리
  - redirect: 페이지 이동 시 호출되며, 반환하는 값은 리다이렉션될 URL
  - jwt: JWT가 생성되거나 업데이트될 때 호출되며, 반환하는 값은 암호화되어 쿠키에 저장됨
  - session: jwt 콜백이 반환하는 token을 받아, 세션이 확인될 때마다 호출되며, 반환하는 값은 클라이언트에서 확인할 수 있음(2번 이상 호출될 수 있음)

#### callbacks 핸들러 호출 순서
* 로그인: signIn > redirect > jwt > session
* 세션 업데이트: jwt > session
* 세션 확인: session

#### NextAuth() 리턴값
* handlers: 프로젝트의 인증 관리를 위한 API 라우트(GET, POST 함수) 객체
* signIn: 사용자 로그인을 시도하는 비동기 함수
* signOut: 사용자 로그아웃을 시도하는 비동기 함수
* auth: 세션 정보를 반환하는 비동기 함수

### 10.3.4 구글 로그인
* <https://next-auth.js.org/providers/google> 참고

#### 키발급
##### 구글 클라우드의 API 서비스로 이동
* https://console.cloud.google.com/apis

##### OAuth 동의 화면
* User Type: 외부
* 앱 이름: 멋사컴즈
* 범위 추가 또는 삭제
  - userinfo.email
  - userinfo.profile
  - openid

##### 사용자 인증 정보
* 사용자 인증 정보 만들기 > OAuth 클라이언트 ID
  - 애플리케이션 유형: 웹 애플리케이션
  - 이름: 멋사컴즈
  - 승인된 JavaScript 원본 > URL 추가
    + http://localhost:3000
  - 승인된 리디렉션 URL
    + http://localhost:3000/api/auth/callback/google

#### 코드 수정
* .env에 client_id와 client_secret 추가
```
GOOGLE_CLIENT_ID=abc123
GOOGLE_CLIENT_SECRET=123ddd
```

* src/auth.ts에 추가
```ts
import google from "next-auth/providers/google";
...
providers: [ 
  google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
  ...
]
```

* src/data/actions/authAction.ts에 추가
```ts
export async function signInWithGoogle(){
  await signIn('google', { redirectTo: '/' });
}
```

* src/app/(community)/(user)/login/page.tsx 추가
```tsx
import { signInWithCredentials, signInWithGoogle } from "@/data/actions/authAction";
...
<Submit formAction={signInWithCredentials}>로그인</Submit>
<Submit formAction={signInWithGoogle}>구글</Submit>
```

* next.config.ts에 추가
```ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        pathname: '**',
      },
    ],
  },
};
```

### 10.3.5 깃허브 로그인
* <https://next-auth.js.org/providers/github> 참고

#### 키발급
##### 깃허브 개발자 설정으로 이동
* https://github.com/settings/developers

* New OAuth App
  - Application name: 멋사컴즈
  - Homepage URL: http://localhost:3000
  - Authorization callback URL: http://localhost:3000/api/auth/callback/github
  - Register application

#### 코드 수정
* .env에 client_id와 client_secret 추가
```
GITHUB_CLIENT_ID=aaabb12
GITHUB_CLIENT_SECRET=033a8ef1eadf
```

* src/auth.ts에 추가
```ts
import github from "next-auth/providers/github";
...
providers: [ 
  github({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  }),
  ...
]
```

* src/data/actions/authAction.ts에 추가
```ts
export async function signInWithGithub(){
  await signIn('github', { redirectTo: '/' });
}
```

* src/app/(community)/(user)/login/page.tsx 추가
```tsx
import { signInWithCredentials, signInWithGithub } from "@/data/actions/authAction";
...
<Submit formAction={signInWithCredentials}>로그인</Submit>
<Submit formAction={signInWithGithub}>깃허브</Submit>
```

* next.config.ts에 추가
```ts
const nextConfig = {
  images: {
    remotePatterns: [
      ...
      {
        protocol: 'https',
        hostname: '*.githubusercontent.com',
        pathname: '**',
      },
    ],
  },
};
```
