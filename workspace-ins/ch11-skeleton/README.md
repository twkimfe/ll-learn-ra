# Lion Board 앱 개발
* TypeScript
* Next.js
* create-next-app

# 1 개발 준비

## 1.1 샘플 코드 테스트
### 1.1.1 샘플 코드 복사
* 레포지토리 루트 폴더(React)에서 실행
  ```sh
  cp -r sample/06/workspace/ch11-skeleton/lion-board-template workspace/ch11-skeleton/lion-board-template
  ```

### 1.1.2 샘플 코드 실행
* 레포지토리 루트 폴더(React)에서 실행
  ```sh
  cd workspace/ch11-skeleton
  npx live-server lion-board-template
  ```

### 1.1.3 접속 테스트
* http://127.0.0.1:8080

## 1.2 프로젝트 생성
* React/workspace/ch11-skeleton 에서 실행
  ```sh
  npx create-next-app@latest
  ```

* Need to install the following packages:
  - create-next-app@15.3.4
  - Ok to proceed? (y) __✅y__
  - 이미 설치되어 있는 경우 해당 문구가 나오지 않음
* What is your project named? ... lion-board-01
* Would you like to use TypeScript? ... No / __✅Yes__
* Would you like to use ESLint? ... No / __✅Yes__
* Would you like to use Tailwind CSS? ... No / __✅Yes__
* Would you like your code inside a `src/` directory? ... No / __✅Yes__
* Would you like to use App Router? (recommended) ... No / __✅Yes__
* Would you like to use Turbopack for next dev? ... No / __✅Yes__
  - Turbopack: 기존 Webpack 대신 사용하는 고성능 번들러
* Would you like to customize the import alias (@/* by default)? __✅No__ / Yes

## 1.3 불필요한 파일 정리
* ch11-skeleton/lion-board-01/src 하위 파일 정리
  - favicon.ico 삭제
  - layout.tsx 삭제
  - page.tsx 삭제
  - global.css 파일 내용을 tailwindcss import 구문만 남기고 제거
  
    ```css
    @import "tailwindcss";
    ```
* ch11-skeleton/lion-board-01/public 하위 파일 전체 삭제

## 1.4 샘플 복사
* workspace/ch11-skeleton에서 실행
  ```sh
  cp -r lion-board-template/* lion-board-01/src/app
  mv lion-board-01/src/app/images lion-board-01/public
  ```

## 1.5 개발 서버 구동
* workspace/ch11-skeleton/lion-board-01에서 실행
  ```sh
  npm run dev
  ```
* 접속
  - http://localhost:3000

# 2 Step 01 - html 파일을 리액트 컴포넌트로 변환
* HTML 코드를 기반으로 리액트 컴포넌트 생성
* Next.js의 App 라우터 적용
* workspace/ch11-skeleton/lion-board-01

## 2.1 Root Layout, Root Page 개발
### 2.1.1 Root Layout 컴포넌트 작성
* src/app/index.html 파일명을 layout.tsx로 수정후 RootLayout 작성
  ```tsx
  import './globals.css';
  import Link from "next/link";
  import Image from "next/image";

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="ko">
      ...
      </html>
    );
  }
  ```

* `<script src="https://cdn.tailwindcss.com"></script>` 제거

* JSX 문법에 맞춰서 수정
  - `charset` -> `charSet`
  - `class` -> `className`

* Next.js 컴포넌트로 교체
  - `<a>` -> `<Link>`
  - `<img> ` -> `<Image>`
    + `width="32"` 추가
    + `height="32"` 추가

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

* 브라우저 테스트
  - http://localhost:3000

### 2.1.2 Root Page 컴포넌트 작성
* src/app/page.tsx 생성 후 RootPage 작성
  - layout.tsx의 `<main>` 영역을 잘라서 page.tsx로 이동
  - layout.tsx의 잘라낸 자리에는 `{ children }` 작성

  ```tsx
  import Link from "next/link";

  export default async function RootPage() {
    return (
      <main>
      ...
      </main>
    );
  }
  ```

* 브라우저 테스트
  - http://localhost:3000

## 2.2 나머지 Page 컴포넌트 작성
* 각 폴더의 `index.html`을 `page.tsx`로 수정후 각 페이지별 컴포넌트 작성
  - 기존 html 파일의 `<main>` 부분만 컴포넌트의 리턴값으로 추가
  - JSX 문법에 맞춰서 수정

### 2.2.1 게시글 목록 조회
* 파일명 수정
  - info/index.html -> info/page.tsx

* html 코드의 `<main>` 영역을 잘라서 ListPage의 리턴값으로 사용하고 남은 html 코드는 삭제
  ```tsx
  import Link from "next/link";

  export default async function ListPage() {
    return (
      <main>
      ...
      </main>
    );
  }
  ```

* JSX 문법에 맞춰서 수정
  - `class` -> `className`

* Next.js 컴포넌트로 교체
  - `<a>` -> `<Link>`

* 테스트
  - http://localhost:3000/info

### 2.2.2 게시글 상세 조회
* 파일명 수정
  - info/1/index.html -> info/1/page.tsx

* html 코드의 `<main>` 영역을 잘라서 InfoPage의 리턴값으로 사용하고 남은 html 코드는 삭제
  ```tsx
  import Link from "next/link";
  import Image from "next/image";

  export default async function InfoPage() {
    return (
      <main>
      ...
      </main>
    );
  }
  ```

* JSX 문법에 맞춰서 수정
  - `class` -> `className`
  - `datetime` -> `dateTime`
  - `rows="3"` -> `rows={3}`
  - `cols="40"` -> `cols={40}`

* Next.js 컴포넌트로 교체
  - `<a>` -> `<Link>`
  - `<img>` -> `<Image>`
    + `width="32"` 추가
    * `height="32"` 추가

* 테스트
  - http://localhost:3000/info/1

### 2.2.3 게시글 수정
* 파일명 수정
  - info/1/edit/index.html -> info/1/edit/page.tsx

* html 코드의 `<main>` 영역을 잘라서 EditPage의 리턴값으로 사용하고 남은 html 코드는 삭제
  ```tsx
  import Link from "next/link";

  export default async function EditPage() {
    return (
      <main>
      ...
      </main>
    );
  }
  ```

* JSX 문법에 맞춰서 수정
  - `class` -> `className`
  - `rows="15"` -> `rows={15}`
  - `value="리액트란?"` -> `defaultValue="리액트란?"`
  - `<textarea>React는 ...</textarea>` -> `<textarea defaultValue="React는 ..." />`

* Next.js 컴포넌트로 교체
  - `<a>` -> `<Link>`

* 테스트
  - http://localhost:3000/info/1/edit

### 2.2.4 게시글 작성
* 파일명 수정
  - info/new/index.html -> info/new/page.tsx

* html 코드의 `<main>` 영역을 잘라서 NewPage의 리턴값으로 사용하고 남은 html 코드는 삭제
  ```tsx
  import Link from "next/link";

  export default async function NewPage() {
    return (
      <main>
      ...
      </main>
    );
  }
  ```

* JSX 문법에 맞춰서 수정
  - `class` -> `className`
  - `for` -> `htmlFor`
  - `rows="15"` -> `rows={15}`
  
* Next.js 컴포넌트로 교체
  - `<a>` -> `<Link>`

* 테스트
  - http://localhost:3000/info/new

### 2.2.5 로그인
* 파일명 수정
  - user/login/index.html -> user/login/page.tsx

* html 코드의 `<main>` 영역을 잘라서 LoginPage의 리턴값으로 사용하고 남은 html 코드는 삭제
  ```tsx
  import Link from "next/link";

  export default async function LoginPage() {
    return (
      <main>
      ...
      </main>
    );
  }
  ```

* JSX 문법에 맞춰서 수정
  - `class` -> `className`
  - `for` -> `htmlFor`
  
* Next.js 컴포넌트로 교체
  - `<a>` -> `<Link>`

* 테스트
  - http://localhost:3000/user/login

### 2.2.6 회원가입
* 파일명 수정
  - user/signup/index.html -> user/signup/page.tsx

* html 코드의 `<main>` 영역을 잘라서 SignupPage의 리턴값으로 사용하고 남은 html 코드는 삭제
  ```tsx
  import Link from "next/link";

  export default async function SignupPage() {
    return (
      <main>
      ...
      </main>
    );
  }
  ```

* JSX 문법에 맞춰서 수정
  - `class` -> `className`
  - `for` -> `htmlFor`
  
* Next.js 컴포넌트로 교체
  - `<a>` -> `<Link>`

* 테스트
  - http://localhost:3000/user/signup

## 2.3 컴포넌트 분리
* src/components/common 폴더 생성
* 

### 2.3.1 헤더 분리
* src/components/common/Header.tsx 생성
* src/app/layout.tsx의 `<header>...</header>` 태그 복사해서 추가하고 기존 `<header>...</header>` 영역은 `<Header />` 로 교체

#### Header.tsx
```tsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-8 min-w-80 bg-slate-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 transition-color duration-500 ease-in-out">
      ...      
    </header>
  );
}
```

### 2.3.2 푸터 분리
* src/components/common/Footer.tsx 생성
* src/app/layout.tsx의 `<footer>...</footer>` 태그 복사해서 추가하고 기존 `<footer>...</footer>` 영역은 `<Footer />` 로 교체

#### Footer.tsx
```tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 pb-12 w-full border-t border-t-slate-200  dark:border-t-slate-500 dark:bg-gray-600 text-gray-600 dark:text-white transition-color duration-500 ease-in-out">
      <div className="min-w-[320px] flex flex-wrap gap-4 justify-center items-center text-sm text-slate-400">
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">약관</Link>
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">게시판 정책</Link>
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">회사소개</Link>
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">광고</Link>
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">마이비즈니스</Link>
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">제휴 제안</Link>
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">이용약관</Link>
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">개인정보취급방침</Link>
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">청소년보호 정책</Link>
        <Link href="#" className="hover:font-semibold dark:hover:text-gray-200">고객센터</Link>
      </div>
    </footer>
  );
}
```

#### app/layout.tsx
```tsx
import './globals.css';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      ...
      <body className="font-sans">
        <div id="root">
          <div className="flex flex-col min-h-screen dark:bg-gray-700 dark:text-gray-200 transition-color duration-500 ease-in-out">

            <Header />

            { children }
            
            <Footer />

          </div>
        </div>
      </body>
    </html>
  );
}
```

### 2.3.3 게시물 목록 아이템별 분리
* app/info/ListItem.tsx 생성
* app/info/page.tsx에서 1번 게시글 영역 `<tr>...</tr>` 태그 복사해서 추가하고 기존 `<tr>...</tr>` 영역은 두개는 `<ListItem />` 두개로 교체

#### ListItem.tsx
```tsx
import Link from "next/link";

export default function ListItem() {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
      <td className="p-2 text-center">1</td>
      <td className="p-2 truncate indent-4"><Link href="/info/1" className="hover:text-orange-500 hover:underline">React란?</Link></td>
      <td className="p-2 text-center truncate">액션핑</td>
      <td className="p-2 text-center hidden sm:table-cell">22</td>
      <td className="p-2 text-center hidden sm:table-cell">5</td>
      <td className="p-2 truncate text-center hidden sm:table-cell">2025.06.30 17:59:13</td>
    </tr>
  );
}
```

#### app/info/page.tsx
```tsx
import ListItem from "@/app/info/ListItem";
import Link from "next/link";

export default async function ListPage() {
  return (
    ...
    <tbody>
      <ListItem />
      <ListItem />
    </tbody>
    ...
  );
}
```

### 2.3.4 댓글 목록 아이템별 분리
* app/info/1/CommentItem.tsx 생성
* app/info/1/page.tsx에서 첫번째 댓글 영역 `<div className="shadow-md rounded-lg p-4 mb-4">...</div>` 태그 복사해서 추가하고 기존 `<div>...</div>` 영역 두개는 `<CommentItem />` 두개로 교체

#### CommentList.tsx
```tsx
import Image from "next/image";
import Link from "next/link";

export default function CommentItem() {
  return (
    <div className="shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <Image
            className="w-8 mr-2 rounded-full"
            src="https://fesp-api.koyeb.app/market/files/openmarket/user-apeach.png"
            alt="어피치 프로필 이미지"
            width="32"
            height="32"
          />
          <Link href="" className="text-orange-400">어피치</Link>
        </div>
        <time className="text-gray-500" dateTime="2025.06.30 14:11:22">2025.06.30 14:11:22</time>
      </div>
      <div className="flex justify-between items-start mb-2">
        <p className="whitespace-pre-wrap text-sm flex-1">아는 내용이구만...</p>
        <form action="#" className="inline ml-2">
          <button type="submit" className="bg-red-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
        </form>
      </div>
    </div>
  );
}
```

### 2.3.5 신규 댓글 분리
* app/info/1/CommentNew.tsx 생성
* app/info/1/page.tsx에서 댓글 작성 영역 `<div className="p-4 border border-gray-200 rounded-lg">...</div>` 태그 복사해서 추가하고 기존 `<div>...</div>` 영역은 `<CommentNew />` 로 교체

#### CommentNew.tsx
```tsx
export default function CommentNew() {
  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h4 className="mb-4">새로운 댓글을 추가하세요.</h4>
      <form action="#">
        <div className="mb-4">
          <textarea
            rows={3}
            cols={40}
            className="block p-2 w-full text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="내용을 입력하세요."
            name="comment"></textarea>

          <p className="ml-2 mt-1 text-sm text-red-500">
            내용은 필수입니다.
          </p>
          
        </div>
        <button type="submit" className="bg-orange-500 py-1 px-4 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">댓글 등록</button>
      </form>
    </div>
  );
}
```

#### app/info/1/page.tsx
```tsx
...
import Link from "next/link";
import CommentItem from "@/app/info/1/CommentItem";
import CommentNew from "@/app/info/1/CommentNew";

export default async function InfoPage() {
  return (
    ...
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 2개</h4>
      <CommentItem />
      <CommentItem />

      <CommentNew />
    </section>
  );
}
```

### 2.3.6 댓글 목록 분리
* app/info/1/CommentList.tsx 생성
* app/info/1/page.tsx에서 첫번째 댓글 영역 `<section className="mb-8">...</div>` 태그 복사해서 추가하고 기존 `<section>...</div>` 영역은 `<CommentList />` 로 교체

#### CommentList.tsx
```tsx
import CommentItem from "@/app/info/1/CommentItem";
import CommentNew from "@/app/info/1/CommentNew";

export default function CommentList() {
  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 2개</h4>

      <CommentItem />
      <CommentItem />

      <CommentNew />

    </section>
  );
}
```

#### app/info/1/page.tsx
```tsx
import Link from "next/link";
import CommentList from "@/app/info/1/CommentList";

export default async function InfoPage() {
  return (
    <main className="flex-1 container mx-auto mt-4 px-4">
      <section className="mb-8 p-4">
        ...
      </section>
      <CommentList />
    </main>
  );
}
```

# 3 Step 02 - 라우트 정의

* workspace/ch11-skeleton 폴더에서 실행

  ```sh
  # lion-board-01/.next 폴더 삭제
  rm -rf lion-board-01/.next
  # lion-board-01 폴더를 복사해서 lion-board-02 폴더 생성
  cp -r lion-board-01 lion-board-02
  ```

* lion-board-02/src/components/common/Header.tsx 파일 수정
  - `라이언 보드 v.01` -> `라이언 보드 v.02`

## 3.1 동적 라우트 정의
* 폴더명 수정이 되지 않을 경우 개발 서버를 중지한 후 수정
* 테스트시 수정사항이 반영되지 않을 경우 개발 서버 재시작

### 3.1.1 게시물 상세 보기 페이지
* app/info/1 폴더명을 app/info/[_id]로 수정
* app/info/2 폴더 삭제

### 3.1.2 게시물 목록 페이지
* app/info 폴더명을 app/[boardType]으로 수정
* app/free 폴더 삭제

#### 3.1.2.2 게시판 링크 수정
* components/common/Header.tsx 수정

  ```tsx
  <li className="hover:text-amber-500 hover:font-semibold"><Link href="/info">정보공유</Link></li>
  <li className="hover:text-amber-500 hover:font-semibold"><Link href="/free">자유게시판</Link></li>
  <li className="hover:text-amber-500 hover:font-semibold"><Link href="/qna">질문게시판</Link></li>
  ```

#### 3.1.2.3 게시물 목록 조회 페이지에 게시판 타입별 제목 적용
* app/[boardType]/page.tsx 수정
  - 게시판 타입별 제목 적용
  - ListItem에 게시판 타입을 props로 전달

    ```tsx
    ...
    export interface ListPageProps {
      params: Promise<{
        boardType: string;
      }>;
    }

    export default async function ListPage({ params }: ListPageProps) {
      const { boardType } = await params;
      let boardTitle = '';
      switch (boardType) {
        case 'info':
          boardTitle = '정보 공유';
          break;
        case 'free':
          boardTitle = '자유 게시판';
          break;
        case 'qna':
          boardTitle = '질문 게시판';
          break;
      }

      return (
        ...
        <h2 className="pb-4 text-2xl font-bold text-gray-700 dark:text-gray-200">{ boardTitle }</h2>
        ...
        <ListItem boardType={ boardType } />
        <ListItem boardType={ boardType } />
        ...
      );
    }
    ```

#### 3.1.2.4 테스트
* 정보공유, 자유게시판, 질문게시판에 접속했을때 각각의 제목을 잘 표시하는지 확인

### 3.1.3 게시물 관련 링크 수정
* 하드 코딩된 `info` 대신 `boardType` param 값으로 변경

#### 3.1.3.1 메인 페이지
* app/page.tsx 수정
  - 자유 게시판의 링크 `href="/info"` -> `href={"/free"}`
  - 질문 게시판의 링크 `href="/info"` -> `href={"/qna"}`

#### 3.1.3.2 게시물 등록
* app/[boardType]/new/page.tsx 수정

  ```tsx
  interface NewPageProps {
    params: Promise<{
      boardType: string;
    }>;
  }

  export default async function NewPage({ params }: NewPageProps) {
    const { boardType } = await params;
    ...
  }
  ```

  - `action="/info/1"` -> ```action={`/${boardType}`}```
  - `href="/info"` -> ```href={`/${boardType}`}```

#### 3.1.3.3 게시물 목록 조회
* app/[boardType]/page.tsx 수정
  - `href="/info/new"` -> ```href={`/${boardType}/new`}```
  - `href="/info?page=1"` -> ```href={`/${boardType}?page=1`}```
  - `href="/info?page=2"` -> ```href={`/${boardType}?page=2`}```

* app/[boardType]/ListItem.tsx 수정

  ```tsx
  export default async function ListItem({ boardType }: { boardType: string }) {      
    return (
      ...
      <Link href={`/${boardType}/1`} className="hover:text-orange-500 hover:underline">React란?</Link>
      ...
    );
  }
  ```

#### 3.1.3.4 게시물 상세 조회
* app/[boardType]/[_id]/page.tsx 수정

  ```tsx
  interface InfoPageProps {
    params: Promise<{
      boardType: string;
      _id: string;
    }>;
  }

  export default async function InfoPage ({ params }: InfoPageProps) {
    const { boardType, _id } = await params;
    ...
  }
  ```

  + `action="/info"` -> ```action={`/${boardType}`}```
  + `href="/info"` -> ```href={`/${boardType}`}```
  + `href="/info/1/edit"` -> ```href={`/${boardType}/${_id}/edit`}```

#### 3.1.3.5 게시물 수정
* app/[boardType]/[_id]/edit/page.tsx 수정

  ```tsx
  interface EditPageProps {
    params: Promise<{
      boardType: string;
      _id: string;
    }>;
  }

  export default async function EditPage({ params }: EditPageProps) {
    const { boardType, _id } = await params;
  }
  ```

  + `action="/info/1"` -> ```action={`/${boardType}/${_id}`}```
  + `href="/info/1"` -> ```href={`/${boardType}/${_id}`}```

### 3.1.4 테스트
* `자유게시판`에 접속한 후 여러 버튼을 누르면서 페이지를 이동하고 다시 돌아 왔을 때 `자유게시판` 제목이 유지 되는지 확인(또는 주소창에 localhost:3000/free 가 유지 되는지 확인)
  - 자유게시판 > 글작성 > 등록
  - 자유게시판 > 글작성 > 취소
  - 자유게시판 > React란? > 목록
  - 자유게시판 > React란? > 삭제
  - 자유게시판 > React란? > 수정 > 수정 > 목록
  - 자유게시판 > React란? > 수정 > 취소 > 목록

## 3.2 라우트 그룹 정의

#### 3.2.1 로그인과 회원가입 페이지 라우트 그룹으로 지정
* app/user 폴더명을 app/(user)로 수정

#### 3.2.2 로그인, 회원가입 링크 수정
* components/common/Header.tsx 수정
  - `href="/user/login"` -> `href="/login"`
  - `href="/user/signup"` -> `href="/signup"`

* app/(user)/login/page.tsx 수정
  - `href="/user/signup"` -> `href="/signup"`

* 로그인, 회원가입 링크 테스트 

## 3.3 메타 데이터 추가
### 3.3.1 Root Layout
* app/layout.tsx 수정

  ```tsx
  ...
  import { Metadata } from 'next';

  export const metadata: Metadata = {
    // url 관련 metadata 설정시 사용될 기본 경로 지정
    metadataBase: new URL('https://lion-board.vercel.app'),
  };
  ...
  ```

### 3.3.2 게시물 목록 조회 페이지
* app/[boardType]/page.tsx에 추가

  ```tsx
  ...
  import { Metadata } from "next";

  export async function generateMetadata({ params }: ListPageProps): Promise<Metadata>{
    const { boardType } = await params;
    return {
      title: `${boardType} - Lion Board`,
      description: `${boardType} 게시판입니다.`,
      openGraph: {
        title: `${boardType} - Lion Board`,
        description: `${boardType} 게시판입니다.`,
        url: `/${boardType}`,
        images: {
          url: '/images/front-end.png'
        }
      }
    };
  }
  ...
  ```

### 3.3.3 게시물 상세 조회 페이지
* app/[boardType]/[_id]/page.tsx에 추가

  ```tsx
  ...
  import { Metadata } from "next";

  export async function generateMetadata({ params }: InfoPageProps): Promise<Metadata>{
    const { boardType, _id } = await params;
    return {
      title: `${boardType} - React란?`,
      description: `${boardType} - React는 UI를 구성하기 위한 JavaScript 라이브러리로... `,
      openGraph: {
        title: `${boardType} - React란?`,
        description: `${boardType} - React는 UI를 구성하기 위한 JavaScript 라이브러리로... `,
        url: `/${boardType}/${_id}`,
        images: {
          url: '/images/front-end.png'
        }
      }
    };
  }
  ...
  ```

### 3.3.4 게시물 등록 페이지
* app/[boardType]/new/page.tsx에 추가

  ```tsx
  ...
  import { Metadata } from "next";

  export async function generateMetadata({ params }: NewPageProps): Promise<Metadata>{
    const { boardType } = await params;
    return {
      title: `${boardType} - 게시글 등록`,
      description: `${boardType} - 게시글을 등록하세요.`,
      openGraph: {
        title: `${boardType} - 게시글 등록`,
        description: `${boardType} - 게시글을 등록하세요.`,
        url: `/${boardType}/new`,
        images: {
          url: '/images/front-end.png'
        }
      }
    };
  }
  ...
  ```

### 3.3.5 게시물 수정 페이지
* app/[boardType]/[_id]/edit/page.tsx에 추가

  ```tsx
  ...
  import { Metadata } from "next";

  export async function generateMetadata({ params }: EditPageProps): Promise<Metadata>{
    const { boardType, _id } = await params;
    return {
      title: `${boardType} - 게시글 수정`,
      description: `${boardType} - 게시글을 수정하세요.`,
      openGraph: {
        title: `${boardType} - 게시글 수정`,
        description: `${boardType} - 게시글을 수정하세요.`,
        url: `/${boardType}/${_id}/edit`,
        images: {
          url: '/images/front-end.png'
        }
      }
    };
  }
  ...
  ```

### 3.3.6 회원가입 페이지
* app/(user)/signup/page.tsx에 추가

  ```tsx
  import { Metadata } from "next";

  export async function generateMetadata(): Promise<Metadata>{
    return {
      title: `회원가입 - Lion Board`,
      description: `무료 회원 가입후 라이언 보드의 모든 서비스를 이용하세요.`,
      openGraph: {
        title: `회원가입 - Lion Board`,
        description: `무료 회원 가입후 라이언 보드의 모든 서비스를 이용하세요.`,
        url: `/signup`,
        images: {
          url: '/images/front-end.png'
        }
      }
    };
  }
  ...
  ```

### 3.3.7 로그인 페이지
* app/(user)/login/page.tsx에 추가

  ```tsx
  import { Metadata } from "next";
  export const metadata: Metadata = {
    title: '로그인 - 멋사컴',
    openGraph: {
      title: '로그인 - 멋사컴',
      description: '로그인 페이지',
      url: '/user/login'
    }
  }
  ...
  ```

### 3.3.8 테스트
* 각 페이지에 접속해서 브라우저 탭에 title 잘 나오는지 확인

## 3.4 라우팅용 특수 파일 작성

### 3.4.1 loading
* app/loading.tsx 파일 생성

  ```tsx
  export default function Loading() {
    return (
      <main className="flex-1 flex items-center justify-center">
        로딩중...
      </main>
    );
  }
  ```

### 3.4.2 error
#### 공통 에러 컴포넌트 작성
* src/components/common/Error.tsx 파일 생성

* app/error.html 코드의 `<main>` 영역을 잘라서 Error의 리턴값으로 사용하고 남은 html 코드는 삭제

  ```tsx
  import Link from "next/link";

  export default function Error({ message }: { message: string }) {
    return (
      <main className="flex-1 py-20 bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg flex flex-col items-center space-y-2">
        <h2 className="text-xl font-semibold mb-2 text-center">🚧 앗, 무언가 잘못됐네요!</h2>
        <h3 className="text-md font-semibold mb-2 text-center">{ message }</h3>
        <Link href="/" className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">
          ⚙️ 홈으로 이동
        </Link>
      </main>
    );
  }
  ```

  - message props 추가
  - 하드코딩된 "존재하지 않는 페이지입니다." 구문은 `{ message }` props로 변경
  - `<button` -> `<Link href="/"`

#### error 페이지 작성
* 파일명 수정
  - app/error.html -> app/error.tsx

* 기존 html 코드 모두 삭제한 후 다음 코드 작성

  ```tsx
  'use client';
  import Error from "@/components/common/Error";
  export default function ErrorPage({ error }: { error: Error }) {
    console.error(error);
    return (
      <Error message="예상치 못한 오류가 발생했습니다." />
    );
  }
  ```

### 3.4.3 not-found
* app/not-found.tsx 작성

```tsx
import Error from "@/components/common/Error";
export default function NotFoundPage() {
  return (
    <Error message="존재하지 않는 페이지입니다." />
  );
}
```

## 3.5 src 폴더 전체 구조
```
src/
├── app/
│   ├── (user)/
│   │   │── login/
│   │   │   └── page.tsx
│   │   └── signup/
│   │       └── page.tsx
│   │── [boardType]/
│   │   │── [_id]/
│   │   │   │── edit/
│   │   │   │   └── page.tsx
│   │   │   ├── CommentItem.tsx
│   │   │   ├── CommentList.tsx
│   │   │   ├── CommentNew.tsx
│   │   │   └── page.tsx
│   │   ├── new/
│   │   │   └── page.tsx
│   │   ├── ListItem.tsx
│   │   └── page.tsx
│   │── error.tsx
│   │── globals.css
│   │── layout.tsx
│   │── loading.tsx
│   │── not-found.tsx
│   └── page.tsx
│
└── components/
    └── common/
        ├── Error.tsx
        ├── Footer.tsx
        └── Header.tsx
```

# 4 Step 03 - 기능 구현(API 서버 연동)

* workspace/ch11-skeleton 폴더에서 실행

  ```sh
  # lion-board-02/.next 폴더 삭제
  rm -rf lion-board-02/.next
  # lion-board-02 폴더를 복사해서 lion-board-03 폴더 생성
  cp -r lion-board-02 lion-board-03
  ```

* lion-board-03/src/components/common/Header.tsx 파일 수정
  - `라이언 보드 v.03` -> `라이언 보드 v.03`

## 4.1 type 정의
### 4.1.1 유저 타입 정의
* src/types/user.ts 생성

  ```ts
  export interface User {
    _id: number, // 사용자 고유 ID
    email: string, // 이메일 주소
    name: string, // 사용자 이름
    phone?: string, // 전화번호
    address?: string, // 주소
    type: 'user' | 'seller' | 'admin', // 사용자 유형
    loginType?: 'email' | 'kakao' | 'google' | 'github', // 로그인 방식
    image?: string, // 프로필 이미지
    token?: { // 인증 토큰
      accessToken: string, // 액세스 토큰
      refreshToken: string, // 리프레시 토큰
    },
    createdAt: string, // 생성일
    updatedAt: string, // 수정일
  }
  ```

### 4.1.2 게시물 타입 정의
* src/types/post.ts 생성

  ```ts
  import { User } from "@/types/user";

  /**
   * 게시글에 대한 답글(댓글) 정보를 나타내는 인터페이스
   * Pick<T, K>:
   * T 타입에서 K에 해당하는 속성만 선택해 새로운 타입을 만듭니다.
   * 예시: Pick<User, '_id' | 'name' | 'image'>는 User 타입에서 _id, name, image만 포함하는 타입입니다.
   */
  export interface PostReply {
    // 답글의 고유 ID
    _id: number,
    // 답글 작성자 정보 (id, 이름, 이미지)
    user: Pick<User, '_id' | 'name' | 'image'>,
    // 답글 내용
    content: string,
    // 답글의 좋아요 수
    like: number,
    // 답글 생성일
    createdAt: string,
    // 답글 수정일
    updatedAt: string,
  }

  /**
   * 답글 작성 폼에서 사용하는 타입 (content만 포함)
   */
  export type PostReplyForm = Pick<PostReply, 'content'>;

  /**
   * 게시글 정보를 나타내는 인터페이스
   */
  export interface Post {
    // 게시글의 고유 ID
    _id: number,
    // 게시글 타입
    type: string,
    // 게시글 제목
    title: string,
    // 게시글 본문 내용
    content: string,
    // 게시글 작성자 정보 (id, 이름, 이미지)
    user: Pick<User, '_id' | 'name' | 'image'>,
    // 게시글 조회수
    views: number,
    // 댓글 개수
    repliesCount: number,
    // 댓글 목록
    replies?: PostReply[],
    // 게시글 생성일
    createdAt: string,
    // 게시글 수정일
    updatedAt: string,
  }

  /**
   * 게시글 작성/수정 폼에서 사용하는 타입
   * - Partial<Pick<Post, 'type' | 'title' | 'content' | '_id'>>: Post 타입에서 type, title, content, _id만 선택해 모두 옵셔널로 만듦
   * - image, tags는 옵션
   */
  export type PostForm = Partial<Pick<Post, 'type' | 'title' | 'content' | '_id'>> & {
    // 게시글 이미지
    image?: string | string[],
    // 게시글 태그(쉼표로 구분된 문자열)
    tags?: string,
  }
  ```

### 4.1.3 서버 응답 데이터 타입 정의
* src/types/api.ts 작성

  ```ts
  // 데이터 검증 실패 메세지
  export interface ServerValidationError {
    type: string,
    value: string,
    msg: string,
    location: string
  }

  // Record<K, T>: K(key)로 이루어진 객체의 각 속성의 타입을 T로 지정하는 유틸리티 타입
  // Partial<T>: T의 모든 속성을 옵셔널로 지정하는 유틸리티 타입
  // E: 검증에 사용될 속성값을 가지고 있는 타입
  // 예) 검증에 사용될 속성값을 가지고 있는 타입이 { title: string, content: string } 이면, 
  // keyof E의 타입은 "title" | "content"
  export type ServerValidationErrors<E> = Partial<Record<keyof E, ServerValidationError>>;

  // API 서버의 응답
  // E = never: E가 생략되면 errors 속성도 없음
  export type ApiRes<T, E = never> = 
    | { ok: 1; item: T }
    | { ok: 0; message: string, errors?: ServerValidationErrors<E> }

  // 서버 함수에서 반환할 타입(Promise를 반환해야 함)
  export type ApiResPromise<T> = Promise<ApiRes<T>>;
  ```

### 4.1.4 통합 타입 정의
* src/types/index.ts 작성
* 여러 타입을 모아서 하나로 export

  ```ts
  export * from './user';
  export * from './post';
  export * from './api';
  ```

## 4.2 환경 변수 정의
* lion-board-03/.env 파일 생성

  ```
  NEXT_PUBLIC_CLIENT_ID=openmarket
  NEXT_PUBLIC_API_URL=https://fesp-api.koyeb.app/market
  ```

## 4.3 서버 함수 정의
* src/data/functions/post.ts 생성

  ```tsx
  import { ApiResPromise, Post, PostReply } from "@/types";

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

  /**
   * 게시판 타입에 해당하는 게시글 목록을 가져옵니다.
   * @param {string} boardType - 게시판 타입(예: notice, free 등)
   * @returns {Promise<ApiRes<Post[]>>} - 게시글 목록 응답 객체
   */
  export async function getPosts(boardType: string): ApiResPromise<Post[]> {
    try{
      const res = await fetch(`${API_URL}/posts?type=${boardType}`, {
        headers: {
          'Client-Id': CLIENT_ID,
        },
        cache: 'force-cache',
      });
      return res.json();
    }catch(error){ // 네트워크 오류 처리
      console.error(error);
      return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
    }
  }

  /**
   * 특정 게시글의 상세 정보를 가져옵니다.
   * @param {number} _id - 게시글의 고유 ID
   * @returns {Promise<ApiRes<Post>>} - 게시글 상세 정보 응답 객체
   */
  export async function getPost(_id: number): ApiResPromise<Post> {
    try{
      const res = await fetch(`${API_URL}/posts/${_id}`, {
        headers: {
          'Client-Id': CLIENT_ID,
        },
        cache: 'force-cache',
      });
      return res.json();
    }catch(error){ // 네트워크 오류 처리
      console.error(error);
      return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
    }
  }

  /**
   * 특정 게시글의 댓글 목록을 가져옵니다.
   * @param {number} _id - 게시글의 고유 ID
   * @returns {Promise<ApiRes<PostReply[]>>} - 댓글 목록 응답 객체
   */
  export async function getReplies(_id: number): ApiResPromise<PostReply[]> {
    try{
      const res = await fetch(`${API_URL}/posts/${_id}/replies`, {
        headers: {
          'Client-Id': CLIENT_ID,
        },
      });
      return res.json();
    }catch(error){ // 네트워크 오류 처리
      console.error(error);
      return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
    }
  }
  ```


## 4.4 서버 액션 정의
* src/data/actions/post.ts 생성

  ```tsx
  'use server';

  import { ApiRes, ApiResPromise, Post, PostReply } from "@/types";
  import { revalidatePath } from "next/cache";
  import { redirect } from "next/navigation";

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

  /**
   * 게시글을 생성하는 함수
   * @param {ApiRes<Post> | null} state - 이전 상태(사용하지 않음)
   * @param {FormData} formData - 게시글 정보를 담은 FormData 객체
   * @returns {Promise<ApiRes<Post>>} - 생성 결과 응답 객체
   * @throws {Error} - 네트워크 오류 발생 시
   * @description
   * 게시글을 생성하고, 성공 시 해당 게시판으로 리다이렉트합니다.
   * 실패 시 에러 메시지를 반환합니다.
   */
  export async function createPost(state: ApiRes<Post> | null, formData: FormData): ApiResPromise<Post> {
    // FormData를 일반 Object로 변환
    const body = Object.fromEntries(formData.entries());

    let res: Response;
    let data: ApiRes<Post>;

    try{
      res = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Client-Id': CLIENT_ID,
        },
        body: JSON.stringify(body),
      });

      data = await res.json();
      
    }catch(error){ // 네트워크 오류 처리
      console.error(error);
      return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
    }

    // redirect는 예외를 throw 하는 방식이라서 try 문에서 사용하면 catch로 처리되므로 제대로 동작하지 않음
    if (data.ok) {
      revalidatePath(`/${body.type}`);
      redirect(`/${body.type}`);
    }else{
      return data;
    }
  }

  /**
   * 댓글을 생성하는 함수
   * @param {ApiRes<PostReply> | null} state - 이전 상태(사용하지 않음)
   * @param {FormData} formData - 댓글 정보를 담은 FormData 객체
   * @returns {Promise<ApiRes<PostReply>>} - 생성 결과 응답 객체
   * @description
   * 댓글을 생성하고, 성공 시 해당 게시글의 댓글 목록을 갱신합니다.
   */
  export async function createReply(state: ApiRes<PostReply> | null, formData: FormData): ApiResPromise<PostReply> {
    const body = Object.fromEntries(formData.entries());

    let res: Response;
    let data: ApiRes<PostReply>;

    try{
      res = await fetch(`${API_URL}/posts/${body._id}/replies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Client-Id': CLIENT_ID,
        },
        body: JSON.stringify(body),
      });

      data = await res.json();

    }catch(error){ // 네트워크 오류 처리
      console.error(error);
      return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
    }
    
    if (data.ok) {
      revalidatePath(`/${body.type}/${body._id}/replies`);
    }
    
    return data;
  }
  ```


## 4.5 게시물 목록 화면

### 4.5.1 게시물 목록 조회

#### app/[boardType]/ListItem.tsx
* post props 추가해서 전달받은 post로 값 수정

  ```tsx
  import { Post } from "@/types";
  import Link from "next/link";

  export default async function ListItem({ boardType, post }: { boardType: string, post: Post }) {
    return (
      <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
        <td className="p-2 text-center">{ post._id }</td>
        <td className="p-2 truncate indent-4"><Link href={`/${boardType}/${post._id}`} className="hover:text-orange-500 hover:underline">{ post.title }</Link></td>
        <td className="p-2 text-center truncate">{ post.user.name }</td>
        <td className="p-2 text-center hidden sm:table-cell">{ post.views }</td>
        <td className="p-2 text-center hidden sm:table-cell">{ post.repliesCount }</td>
        <td className="p-2 truncate text-center hidden sm:table-cell">{ post.createdAt }</td>
      </tr>
    );
  }
  ```

#### app/[boardType]/page.tsx
* import 추가

  ```tsx
  import { getPosts } from "@/data/functions/post";
  import { Post } from "@/types";
  ```

* 서버 함수 호출

  ```tsx
  export default async function ListPage({ params }: ListPageProps) {
    ...

    const res = await getPosts(boardType);

    return (
      ...
    );
  ```

* 하드코딩한 `<ListItem />` 두개 삭제

* 삭제한 자리에 서버에서 받은 데이터로 추가

  ```tsx
  <tbody>
    { res.ok ? 
      res.item.map((post: Post) => (
        <ListItem key={post._id} boardType={boardType} post={post} />
      )) : 
      <p>{ res.message }</p>
    }
  </tbody>
  ```

* 게시물 목록 조회 테스트
  - 정보공유, 자유게시판, 질문게시판 접속

## 4.6 게시물 등록 화면

### 4.6.1 게시물 등록
#### 클라이언트 컴포넌트 분리
* app/[boardType]/new/RegistForm.tsx 파일 생성

  ```tsx
  'use client';

  import { createPost } from "@/data/actions/post";
  import Link from "next/link";
  import { useActionState } from "react";

  export default function RegistForm({ boardType }: { boardType: string }) {
    const [ state, formAction, isLoading ] = useActionState(createPost, null);
    console.log(isLoading, state);
    
    return (
      
    )
  }
  ```

  - app/[boardType]/new/page.tsx 파일의 `<form>...</form>` 영역 잘라서 리턴 값에 추가 후 수정
  - ```action={`/${boardType}`}``` -> `action={ formAction }`
  - `<form>` 바로 밑줄에 hidden 필드 추가
    + `<input type="hidden" name="type" value={ boardType } />`
  - `제목은 필수입니다.` -> `{ state?.ok === 0 && state.errors?.title?.msg }`
  - `내용은 필수입니다.` -> `{ state?.ok === 0 && state.errors?.content?.msg }`

* app/[boardType]/new/page.tsx 파일의 `<form>`이 있던 자리에 `<RegistForm boardType={ boardType } />` 추가

* 게시물 등록 테스트

## 4.7 게시물 상세 화면

### 4.7.1 게시물 상제 조회
#### app/[boardType]/[_id]/page.tsx
* import 추가

  ```tsx
  import { getPost } from "@/data/functions/post";
  ```

* 게시물 상세조회하는 서버 함수 호출

  ```tsx
  export default async function InfoPage ({ params }: InfoPageProps) {
    const { boardType, _id } = await params;
    const post = await getPost(Number(_id));
    if (!post.ok) {
      return <div>{ post.message }</div>;
    }
    return (
      ...
    )
  }
  ```

* JSX의 하드 코딩한 상세 정보를 서버의 응답 데이터로 수정
  - `React란?` -> `{ post.item?.title }`
  - `액션핑` -> `{ post.item?.user.name }`
  - `2025.06.30 14:00:00` -> `{ post.item?.createdAt }`
  - `React는 UI를 구성하기...` -> `{ post.item?.content }`

* CommentList에 _id prop 전달
  - `<CommentList />` -> `<CommentList _id={_id} />`

### 4.7.2 댓글 목록 조회

#### app/[boardType]/[_id]/CommentList.tsx
* import 추가

  ```tsx
  import { getReplies } from "@/data/functions/post";
  import { PostReply } from "@/types";
  ```

* async, _id props 추가, 댓글 목록 조회하는 서버함수 호출

  ```tsx
  export default async function CommentList({ _id }: { _id: string }) { 
    const res = await getReplies(Number(_id));
    ...
  }
  ```

* `댓글 2개` -> `댓글 { res.ok ? res.item.length : 0 }개`

* `<CommentItem />` 하드 코딩한 두줄 삭제 후 서버에서 받은 데이터로 수정

```tsx
{ res.ok ? 
  res.item.map((reply: PostReply) => (
    <CommentItem key={reply._id} reply={reply} />
  )) : 
  <p>{ res.message }</p>
}
```

* 댓글 등록 화면에 _id를 props로 전달
  - `<CommentNew />` -> `<CommentNew _id={ _id } />`

#### app/[boardType]/[_id]/CommentItem.tsx
* import 추가
* .env 파일의 API_URL, CLIENT_ID 사용
* reply props 추출
* 하드코딩한 정보들을 reply 값으로 수정
  - 프로필 이미지
  - 이름
  - 날짜
  - 내용

```tsx
import { PostReply } from "@/types";
import Image from "next/image";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

export default function CommentItem({ reply }: { reply: PostReply }) {
  return (
    <div className="shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          { reply.user.image && <Image
            className="w-8 mr-2 rounded-full"
            src={`${API_URL}/files/${CLIENT_ID}/${reply.user.image}`}
            alt={`${reply.user.name} 프로필 이미지`}
            width="32"
            height="32"
          /> }
          <Link href="" className="text-orange-400">{ reply.user.name }</Link>
        </div>
        <time className="text-gray-500" dateTime={reply.createdAt}>{ reply.createdAt }</time>
      </div>
      <div className="flex justify-between items-start mb-2">
        <p className="whitespace-pre-wrap text-sm flex-1">{ reply.content }</p>
        <form action="#" className="inline ml-2">
          <button type="submit" className="bg-red-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button>
        </form>
      </div>
    </div>
  );
}
```

* 댓글 목록 조회 테스트
  - http://localhost:3000/qna/1

### 4.7.3 댓글 등록
#### app/[boardList]/[_id]/CommentNew.tsx
* `'use client'` 지시어 추가
* import 추가
* _id props 추가
* useActionState() 호출 추가
* action 속성 수정
* hidden 요소 추가
* textarea의 name 값 수정
* 입력값 검증 메세지 출력

```tsx
'use client';

import { createReply } from "@/data/actions/post";
import { useActionState } from "react";

export default function CommentNew({ _id }: { _id: string }) {

  const [state, formAction, isLoading] = useActionState(createReply, null);
  console.log(isLoading, state);

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h4 className="mb-4">새로운 댓글을 추가하세요.</h4>
      <form action={ formAction }>
        <input type="hidden" name="_id" value={_id} />
        <div className="mb-4">
          <textarea
            rows={3}
            cols={40}
            className="block p-2 w-full text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="내용을 입력하세요."
            name="content"></textarea>

          <p className="ml-2 mt-1 text-sm text-red-500">
            { state?.ok === 0 && state.errors?.content?.msg }
          </p>
          
        </div>
        <button type="submit" className="bg-orange-500 py-1 px-4 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">댓글 등록</button>
      </form>
    </div>
  );
}
```
