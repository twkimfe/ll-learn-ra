# React 프로그래밍
* 멋쟁이 사자처럼 FrontEnd BootCamp 13기
* 예제 테스트(GitHub Page): <https://febc-13.github.io/React/workspace-ins>

# 1. 수업 목차

## 1장 리액트 빌드업
* [ch01-buildup](./workspace-ins/ch01-buildup)

## 2장 리액트 시작하기
* [ch02-start](./workspace-ins/ch02-start)

## 3장 클래스 컴포넌트와 컴포넌트의 라이프 사이클
* [ch03-class](./workspace-ins/ch03-class)

## 4장 리액트 훅
* [ch04-hooks](./workspace-ins/ch04-hooks)

## 5장 리액트 라우터
* [ch05-router](./workspace-ins/ch05-router)

## 6장 컨텍스트 API
* [ch06-contextapi](./workspace-ins/ch06-contextapi)

## 7장 전역 상태 관리
* [ch07-globalstate](./workspace-ins/ch07-globalstate)

## 8장 리액트에서 CSS 사용
* [ch08-css](./workspace-ins/ch08-css)

## 9장 HTTP 통신과 Ajax
* [ch09-ajax](./workspace-ins/ch09-ajax)

## 10장 Next.js
* [ch10-nextjs](./workspace-ins/ch10-nextjs)

## 11장 프로젝트 준비
* [ch11-skeleton](./workspace-ins/ch11-skeleton)

## 12장 React App
* [ch12-app](./workspace-ins/ch12-app)

# 2. 개발 환경 구축

## 2.1 프로그램 설치
* 본인의 OS에 맞는 버전 다운로드 후 설치
  - Nodejs 설치 <https://nodejs.org/en/download/>
  - Visual Studio Code 설치 <https://code.visualstudio.com/download>
  - Git 설치 <https://git-scm.com/downloads>
  - API 클라이언트 설치
    - Postman <https://www.postman.com/downloads>
    - Bruno <https://www.usebruno.com/downloads>

## 2.2 실습 준비
### 2.2.1 Github 저장소 복사
1. 리액트 실습 Github 저장소
    * `https://github.com/FEBC-13/React.git`
    
2. 터미널 프로그램 실행 후 개발 수업에 사용할 폴더 생성 후 이동
    * 예시
    ```sh
    mkdir febc13
    cd febc13
    ```

3. 리액트 수업에 사용할 폴더 생성 후 이동
    ```sh
    mkdir 03_react
    cd 03_react
    ```
    
4. 실습 저장소를 로컬에 clone
    ```sh
    git clone https://github.com/FEBC-13/React.git
    ```

### 2.2.2 실습 저장소의 변경사항 동기화
* github 저장소의 변경사항을 가져올 때
    ```sh
    git pull origin main
    ```

* 충돌 발생시 임시로 필요한 코드만 복사
    - 현재 폴더 하위에 sample/02 폴더만 복사하는 예시
    ```sh
    npx degit https://github.com/FEBC-13/React/sample/02 sample/02 
    ```

### 2.2.3 Visual Studio Code 설정
1. VSCode 실행
2. 프로젝트 선택
    * File > Open Folder... > febc13/03_react/React 선택
3. File > Preferences > Settings
    * "Files: Auto Save": onFocusChange
    * "Editor: Font Size": 각자 맞춰서 조절
    * "Editor: Tab Size": 2
    * "Editor: Detect Indentation": 체크 해제
    * Workspace 탭 > "Files: Readonly Include"
      - Readonly Include가 보이지 않을 경우 VSCode를 최신 버전(1.79 이상)으로 업데이트
      - Add Pattern > `workspace-ins/**` 입력한 후 OK 선택
      - Add Pattern > `sample/**` 입력한 후 OK 선택

### 2.2.4 React 개발용 웹브라우저 플러그인

#### React Developer Tools
* 리액트 컴포넌트 트리를 확인하고 컴포넌트 내부 데이터를 한눈에 볼 수 있어서 디버깅에 도움
* Chrome: 크롬 웹스토어에서 React developer tools로 검색 후 설치
  - <https://chromewebstore.google.com/search/react%20developer%20tools>
* 설치하면 크롬 개발자 도구에 Components 탭이 추가됨

### sample 폴더 복사
* sample/01/workspace 폴더를 복사해서 프로젝트 루트에 붙여넣기
* 완성된 강사의 코드는 workspace-ins 폴더에서 확인

## 2.3 실습 테스트
### 2.3.1 웹 서버 구동
1. VSCode의 터미널로 이동
    * VSCode 하단의 TERMINAL이 보이지 않으면 View > Terminal

2. Live Server 구동
    * 프로젝트 루트에서 실행
    ```sh
    npx live-server workspace
    ```

### 2.3.2 테스트
* 웹 브라우저로 접속
  - <http://127.0.0.1:8080>
  - <http://localhost:8080>

* 각 예제 클릭해서 테스트
  - .js: Javascript 문법 관련 실습은 브라우저 개발자 도구 > 콘솔 탭에서 결과 확인
  - .html: DOM, Ajax 관련 실습은 새로운 화면으로 이동 후 테스트
  - Vite로 생성한 프로젝트는 안내 화면을 참고해서 Node.js 환경에서 테스트

# 3. 팁
## 3.1 VSCode에서 소스코드 비교
* 비교할 두개의 파일을 VSCode에서 오픈(예시, student.js, ins.js)
* student.js 파일이 활성화 되어있는 상태에서
* View > Command Palette (단축키 F1) > File: Compare Active File With... 선택
* 비교할 대상 파일 선택(ins.js)
* student.js <-> ins.js 파일의 차이점 쉽게 확인 가능

# 4. 수업 진도
## 1주차 (2025.05.27 화 ~ 2025.05.30 금, 4일)
### 1일차(2025.05.27 화)
#### 오전(3시간)
* 🧑‍💻 [개발 환경 구축](./README.md#2-개발-환경-구축)
* 🔊 [1장 리액트 빌드업](./workspace-ins/ch01-buildup)
  - 🔊 [1. 웹 개발의 변천사](./workspace-ins/ch01-buildup#1%EC%9E%A5-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%B9%8C%EB%93%9C%EC%97%85)
  - 🔊 [2. 리액트 개발에 자주 사용하는 자바스크립트 문법](./workspace-ins/ch01-buildup#2-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EC%97%90-%EC%9E%90%EC%A3%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AC%B8%EB%B2%95)

#### 오후(3시간)
* 01 전통적인 방식의 Todo List 테스트(서버에서 완성된 HTML 응답) 
  - 🧑‍💻 [01 Todo List](https://todo.fesp.shop)
* 02 SPA(Single Page Application)
  * Todo List 작성(HTML + vanillaJS)
    - 🧑‍💻 [01 목록 조회](./workspace-ins/ch01-buildup/todolist/01/index.html)
      + workspace/ch01-buildup/todolist/sample 폴더 복사해서 01 폴더 생성
    - 🧑‍💻 [02 등록](./workspace-ins/ch01-buildup/todolist/02/index.html)
      + workspace/ch01-buildup/todolist/01 폴더 복사해서 02 폴더 생성
    - 🧑‍💻 [03 수정](./workspace-ins/ch01-buildup/todolist/03/index.html)
      + workspace/ch01-buildup/todolist/02 폴더 복사해서 03 폴더 생성

### 2일차(2025.05.28 수)
#### 오전(3시간)
* 02 SPA(Single Page Application)
  * Todo List 작성(HTML + vanillaJS)
    - 🧑‍💻 [04 삭제, 완성](./workspace-ins/ch01-buildup/todolist/04/index.html)
      + workspace/ch01-buildup/todolist/03 폴더 복사해서 04 폴더 생성
    - 🧑‍💻 [05 데이터를 기반으로 화면 리렌더링](./workspace-ins/ch01-buildup/todolist/05/index.html)
      + workspace/ch01-buildup/todolist/04 폴더 복사해서 05 폴더 생성
  * Counter(라이브리리 개발) 작성
    - 🧑‍💻 [01 HTML + JS](./workspace-ins/ch01-buildup/counter/01/index.html)
      + workspace/ch01-buildup/counter/sample 폴더 복사해서 01 폴더 생성
    - 🧑‍💻 [02 HTML 대신 JS로 UI 구성](./workspace-ins/ch01-buildup/counter/02/index.html)
      + workspace/ch01-buildup/counter/01 폴더 복사해서 02 폴더 생성

#### 오후(3시간)
* 02 SPA(Single Page Application)
  * Counter(라이브리리 개발) 작성
    - 🧑‍💻 [03 createElement() 함수 만들기](./workspace-ins/ch01-buildup/counter/03/index.html)
      + workspace/ch01-buildup/counter/02 폴더 복사해서 03 폴더 생성
    - 🧑‍💻 [04 createElement() 함수 하나로 통합](./workspace-ins/ch01-buildup/counter/04/index.html)
      + workspace/ch01-buildup/counter/03 폴더 복사해서 04 폴더 생성
    - 🧑‍💻 [05 createRoot(), render() 함수 만들기](./workspace-ins/ch01-buildup/counter/05/index.html)
      + workspace/ch01-buildup/counter/04 폴더 복사해서 05 폴더 생성
    - 🧑‍💻 [06 UI 구성 요소별 각각의 함수로 분리(컴포넌트로 만들기)](./workspace-ins/ch01-buildup/counter/06/index.html)
      + workspace/ch01-buildup/counter/05 폴더 복사해서 06 폴더 생성

### 3일차(2025.05.29 목)
#### 오전(3시간)
* 02 SPA(Single Page Application)
  * Counter(라이브리리 개발) 작성
    - 🧑‍💻 [07 상태(데이터) 변경시 자동으로 UI 리렌더링](./workspace-ins/ch01-buildup/counter/07/index.html)
      + workspace/ch01-buildup/counter/06 폴더 복사해서 07 폴더 생성

#### 오후(4시간)
* 02 SPA(Single Page Application)
  * Todo List 작성(vanillaJS + Lib)
    - 🧑‍💻 [06 Reaction.createElement() 사용해서 UI 구성](./workspace-ins/ch01-buildup/todolist/06/index.html)
    - 🧑‍💻 [07 UI 구성 요소별 각각의 함수로 분리(컴포넌트로 만들기)](./workspace-ins/ch01-buildup/todolist/07/index.html)
      + workspace/ch01-buildup/todolist/06 폴더 복사해서 07 폴더 생성 

### 4일차(2025.05.30 금)
#### 오전(3시간)
* 02 SPA(Single Page Application)
  * Todo List 작성(vanillaJS + Lib)
    - 🧑‍💻 [08 상태(데이터) 변경시 화면 리렌더링](./workspace-ins/ch01-buildup/todolist/08/index.html)
      + workspace/ch01-buildup/todolist/07 폴더 복사해서 08 폴더 생성

#### 오후(3시간)
* 03 React
  - 🧑‍💻 [01 Counter - React로 구현(React.createElement)](./workspace-ins/ch01-buildup/react/01/index.html)
    + workspace/ch01-buildup/react/sample/counter 폴더 복사해서 workspace/ch01-buildup/react/01 폴더 생성
  - 🧑‍💻 [02 Counter - React로 구현(JSX)](./workspace-ins/ch01-buildup/react/02/index.html)
    + workspace/ch01-buildup/react/01 폴더 복사해서 workspace/ch01-buildup/react/02 폴더 생성
  - 🧑‍💻 [03 Todo List - React로 UI 구성(JSX)](./workspace-ins/ch01-buildup/react/03/index.html)
    + workspace/ch01-buildup/react/02 폴더 복사해서 03 폴더 생성

## 2주차 (2025.06.02 월 ~ 2025.06.05 목, 3일)
### 5일차(2025.06.02 월)
#### 오전(3시간)
* 03 React
  - 🧑‍💻 [04 Todo List - React 컴포넌트 분리](./workspace-ins/ch01-buildup/react/04/index.html)
    + workspace/ch01-buildup/react/03 폴더 복사해서 04 폴더 생성
  - 🧑‍💻 [05 Todo List - React 기능 추가](./workspace-ins/ch01-buildup/react/05/index.html)
    + workspace/ch01-buildup/react/04 폴더 복사해서 05 폴더 생성

#### 오후(3시간)
* 02 SPA(Single Page Application)
  * Counter(라이브리리 개발) 작성
    - 🧑‍💻 [08 컴포넌트를 모듈로 분리](./workspace-ins/ch01-buildup/counter/08/index.html)
      + workspace/ch01-buildup/counter/07 폴더 복사해서 08 폴더 생성
  * Todo List 작성(vanillaJS + Lib)
    - 🧑‍💻 [09 컴포넌트를 모듈로 분리](./workspace-ins/ch01-buildup/todolist/09/index.html)
      + workspace/ch01-buildup/todolist/08 폴더 복사해서 09 폴더 생성

### 6일차(2025.06.04 수)
#### 오전(3시간)
* 03 React
  - 🧑‍💻 [06 Todo List - React 컴포넌트를 모듈로 분리](./workspace-ins/ch01-buildup/react/06)
    + workspace/ch01-buildup/react 폴더에서 다음 명령 실행
    ```sh
    npm init vite@latest
      Project name: 06
      Select a fremerork: React
      Select a variant: TypeScript
    cd 06
    npm i
    npm run dev
    ```

#### 오후(3시간)
* 🔊 [2장 React 시작하기](./workspace-ins/ch02-start)
  - 🔊 [1. React란?](./workspace-ins/ch02-start#1-react란)

* 2-1 리액트란?
  * Hello React
    - 🧑‍💻 [01 Hello HTML](./workspace-ins/ch02-start/hello/01.html)
    - 🧑‍💻 [02 Hello DOM](./workspace-ins/ch02-start/hello/02.html)
    - 🧑‍💻 [03 Hello React](./workspace-ins/ch02-start/hello/03.html)
      + workspace/ch02-start/hello/02.html 복사해서 03.html 생성
    - 🧑‍💻 [04 Hello JSX with babel](./workspace-ins/ch02-start/hello/04.html)
      + workspace/ch02-start/hello/03.html 복사해서 04.html 생성
  * Simple Todo List
    - 🧑‍💻 [05 Simple Todo List - HTML](./workspace-ins/ch02-start/todo/05.html)
    - 🧑‍💻 [06 Simple Todo List - React](./workspace-ins/ch02-start/todo/06.html)
    - 🧑‍💻 [07 Simple Todo List - React Component](./workspace-ins/ch02-start/todo/07.html)
      + workspace/ch02-start/todo/06.html 복사해서 07.html 생성
    - 🧑‍💻 [08 Simple Todo List - React Props](./workspace-ins/ch02-start/todo/08.html)
      + workspace/ch02-start/todo/07.html 복사해서 08.html 생성

* 🔊 [2. React 개발 환경 구축](./workspace-ins/ch02-start#2-react-개발-환경-구축)
* 🔊 [3. React 애플리케이션 배포](./workspace-ins/ch02-start#3-react-애플리케이션-배포)

### 7일차(2025.06.05 목)
#### 오전(3시간)
* 2-2 리액트 개발 환경 구축
  - 🧑‍💻 [09 Vite로 개발 환경 구축 및 빌드, 배포](./workspace-ins/ch02-start/vite/09)
    + workspace/ch02-start/vite 폴더에서 다음 명령 실행
    ```sh
    npm init vite@latest
      Project name: 09
      Select a fremerork: React
      Select a variant: TypeScript
    cd 09
    npm i
    npm run dev
    ```

#### 오후(3시간)
* 🔊 [4. JSX](./workspace-ins/ch02-start#4-jsx)
* 🔊 [5. 속성 (Props)](./workspace-ins/ch02-start#5-속성-props)

* 2-3 Props
  - 🧑‍💻 [10 Button 컴포넌트에 Props 전달](./workspace-ins/ch02-start/props/10)
    + workspace/ch02-start/props 폴더에서 다음 명령 실행
    ```sh
    npm init vite@latest
      Project name: 10
      Select a fremerork: React
      Select a variant: TypeScript
    cd 10
    npm i # workspace/package.json에서 npm i 한 상태라면 생략
    npm run dev
    ```
    + workspace/ch01-buildup/react/02/index.html에서 컴포넌트 복사

* 🔊 [6. 상태 (State)](./workspace-ins/ch02-start#6-상태-state)
  - 🔊 [6.1 React.useState()](./workspace-ins/ch02-start#61-reactusestate)

## 3주차 (2025.06.09 월 ~ 2025.06.13 금, 5일)

### 8일차(2025.06.09 월)
#### 오전(3시간)
* 2-4 State
  - 🧑‍💻 [11 state 대신 컴포넌트 외부의 변수 사용시 문제점](./workspace-ins/ch02-start/state/11)
    + workspace/ch02-start/state 폴더에서 vite 프로젝트 생성(11)
    + workspace/ch02-start/state/sample/11.html 참고해서 컴포넌트 생성
* 🔊 [6.2 상태 사용시 유의사항](./workspace-ins/ch02-start#62-상태-사용시-유의사항)
  - 🧑‍💻 [12 이벤트 핸들러에서 state 값을 여러번 변경했을 때 문제점](./workspace-ins/ch02-start/state/12)
    + workspace/ch02-start/state 폴더에서 vite 프로젝트 생성(12)
    + workspace/ch02-start/state/sample/12.html 참고해서 컴포넌트 생성
  - 🧑‍💻 [13 상태관리 대상이 객체일 경우 주의 사항](./workspace-ins/ch02-start/state/13)
    + workspace/ch02-start/state 폴더에서 vite 프로젝트 생성(13)
    + workspace/ch02-start/state/sample/13.html 참고해서 컴포넌트 생성

#### 오후(3시간)
* 🧑‍💻 workspace/vite-template 프로젝트 생성
  - `npm init vite@latest vite-template`
  - [vite.config.js 파일 수정](./workspace-ins/ch02-start#viteconfigjs)
  - 불필요한 파일 삭제
* 🔊 [6.3 상태의 불변성 (immutability)](./workspace-ins/ch02-start#63-상태의-불변성-immutability)
  - 🧑‍💻 [14 상태관리 대상이 복합 객체일 경우 불변성 (feat. immer)](./workspace-ins/ch02-start/state/14)
    + workspace/vite-template 폴더 복사해서 14 폴더 생성
    + workspace/ch02-start/state/sample/14.html 참고해서 컴포넌트 생성
    + workspace 폴더에서 immer 라이브러리 설치
      - `npm i immer`

### 9일차(2025.06.10 화)
#### 오전(3시간)
* 🔊 [7. 유효성 검증](./workspace-ins/ch02-start#7-유효성-검증)
  - 🧑‍💻 [15 회원가입 입력값 상태 관리](./workspace-ins/ch02-start/state/15)
    + workspace/vite-template 폴더 복사해서 15 폴더 생성
    + workspace/ch02-start/state/sample/15.html 참고해서 컴포넌트 생성

#### 오후(3시간)
  - 🧑‍💻 [16 회원가입 입력값 검증 (feat. react-hook-form)](./workspace-ins/ch02-start/state/16)
    + workspace/ch02-start/state/15 폴더 복사해서 16 폴더 생성
    + workspace 폴더에서 react-hook-form 라이브러리 설치
      - `npm i react-hook-form`
* 🔊 [3장 클래스 컴포넌트와 컴포넌트의 라이프 사이클](./workspace-ins/ch03-class)
  - 🧑‍💻 [01 클래스 컴포넌트](./workspace-ins/ch03-class/01-classbase)

### 10일차(2025.06.11 수)
#### 오전(3시간)
* 🔊 [3장 클래스 컴포넌트와 컴포넌트의 라이프 사이클](./workspace-ins/ch03-class#3장-클래스-컴포넌트와-컴포넌트의-라이프-사이클)
  - 🧑‍💻 [02 클래스 컴포넌트 - 함수형 컴포넌트와 같이 사용](./workspace-ins/ch03-class/02-functionbase)
  - 🧑‍💻 [03 클래스 컴포넌트 - 컴포넌트의 라이프 사이클](./workspace-ins/ch03-class/03-lifecycle)

#### 오후(3시간)
* 🔊 [4장 리액트 훅](./workspace-ins/ch04-hooks#4장-리액트-훅)
  - 🔊 [useState](./workspace-ins/ch04-hooks#usestate)
    + 🧑‍💻 [01 useState - 상태 관리](./workspace-ins/ch04-hooks/01-useState)
  - 🔊 [useEffect](./workspace-ins/ch04-hooks#useeffect)
    + 🧑‍💻 [02 useEffect - side effect 관리](./workspace-ins/ch04-hooks/02-useEffect)

### 11일차(2025.06.12 목)
#### 오전(3시간)
- 🔊 [useReducer](./workspace-ins/ch04-hooks#usereducer)
  + 🧑‍💻 [03 useReducer - 상태 관리 로직을 한곳에](./workspace-ins/ch04-hooks/03-useReducer)

#### 오후(3시간)
- 🔊 [useRef](./workspace-ins/ch04-hooks#useref)
  + 🧑‍💻 [04 useRef - 값이 유지되는 데이터 관리, DOM 엘리먼트 참조](./workspace-ins/ch04-hooks/04-useRef)

### 12일차(2025.06.13 금)
#### 오전(3시간)
- 🔊 [useMemo](./workspace-ins/ch04-hooks#usememo)
  + 🧑‍💻 [05 useMemo - 함수의 반환값을 memoize](./workspace-ins/ch04-hooks/05-useMemo)
- 🔊 [useCallback](./workspace-ins/ch04-hooks#usecallback)
  + 🧑‍💻 [06 useCallback(함수 자체를 memoize), React.memo(컴포넌트를 memoize)](./workspace-ins/ch04-hooks/06-useCallback)

#### 오후(3시간 반)
- 🔊 [리액트 컴파일러](./workspace-ins/ch04-hooks#리액트-컴파일러)
  + 🧑‍💻 [07 React Compiler를 사용한 메모이제이션](./workspace-ins/ch04-hooks/07-useCallback-RC)
* 12장 앱 개발
  * 12-1 Todo List
    - 🧑‍💻 [01 기본 Todo List](./workspace-ins/ch12-app/todolist/01-basic)
    - 🧑‍💻 [02 컨테이너 컴포넌트 추가](./workspace-ins/ch12-app/todolist/02-container)

### 13일차(2025.06.16 월)
#### 오전(3시간)
* 12장 앱 개발
  * 12-1 Todo List
    - 🧑‍💻 [03 useRef, useReducer로 상태 관리](./workspace-ins/ch12-app/todolist/03-hooks)
    - 🧑‍💻 [04 React.memo, useCallback으로 메모이제이션](./workspace-ins/ch12-app/todolist/04-memo)
* 4장 리액트 훅
  * 🔊 [Custom Hook](./workspace-ins/ch04-hooks#custom-hook)
    - 🧑‍💻 [08 customHook - useCounter 커스텀 훅 사용](./workspace-ins/ch12-app/todolist/08-customCounter)

#### 오후(3시간)
* 4장 리액트 훅
  * Custom Hook
    - 🧑‍💻 [09 customHook - 커스텀 훅 없이 fetch API 사용](./workspace-ins/ch12-app/todolist/09-fetch)
    - 🧑‍💻 [10 customHook - useFatch, useAxios 커스텀 훅 사용](./workspace-ins/ch04-hooks/10-customFetch)
    
### 14일차(2025.06.17 화)
#### 오전(3시간)
* 4장 리액트 훅
  * Custom Hook
    - 🧑‍💻 [10 customHook - useFatch, useAxios 커스텀 훅 사용](./workspace-ins/ch04-hooks/10-customFetch)

#### 오후(3시간)
* 🔊 [5장 리액트 라우터](./workspace-ins/ch05-router#5장-리액트-라우터)
  * 🔊 [1. 클라이언트 측 라우팅이란?](./workspace-ins/ch05-router#1-클라이언트-측-라우팅이란)
    - 🧑‍💻 [01 클라이언트 라우팅 직접 구현](./workspace-ins/ch05-router/01-my-router)
  * 🔊 [2. 리액트 라우터란?](./workspace-ins/ch05-router#2-리액트-라우터란)
  * 🔊 [3. 리액트 라우터가 제공하는 라우터](./workspace-ins/ch05-router#3-리액트-라우터가-제공하는-라우터)
  * 🔊 [4. 리액트 라우터가 제공하는 컴포넌트](./workspace-ins/ch05-router#4-리액트-라우터가-제공하는-컴포넌트)
    - 🧑‍💻 [02 리액트 라우터 사용](./workspace-ins/ch05-router/02-react-router)
    
### 15일차(2025.06.18 수)
#### 오전(3시간)
* 12장 앱 개발
  * 12-1 Todo List
    - 🧑‍💻 [05 리액트 라우터 적용](./workspace-ins/ch12-app/todolist/05-router)

#### 오후(3시간)
* 5장 리액트 라우터
  * 🔊 [5. 리액트 라우터가 제공하는 기능](./workspace-ins/ch05-router#5-리액트-라우터가-제공하는-기능)
  * 🔊 [6. 리액트 라우터가 제공하는 Hook](./workspace-ins/ch05-router#6-리액트-라우터가-제공하는-hook)
* 12장 앱 개발
  * 12-1 Todo List
    - 🧑‍💻 [05 리액트 라우터 적용](./workspace-ins/ch12-app/todolist/05-router)
    
### 16일차(2025.06.19 목)
#### 오전(3시간)
* 12장 앱 개발
  * 12-1 Todo List
    - 🧑‍💻 [05 리액트 라우터 적용](./workspace-ins/ch12-app/todolist/05-router)

#### 오후(3시간)
* 🔊 [9장 HTTP 통신과 Ajax](./workspace-ins/ch09-ajax#9장-http-통신과-ajax)
  * 🔊 [1. HTTP](./workspace-ins/ch09-ajax#1-http)
  * 🔊 [2.2 Todo List API 테스트](./workspace-ins/ch09-ajax#22-todo-list-api-테스트)
    - 🧑‍💻 [06 API 서버 연동](./workspace-ins/ch12-app/todolist/06-api)

### 17일차(2025.06.23 월)
#### 오전(3시간)
* 9장 HTTP 통신과 Ajax
  * 🔊 [2.3 Open Market API 테스트](./workspace-ins/ch09-ajax#23-open-market-api-테스트)

#### 오후(3시간)
* 9장 HTTP 통신과 Ajax
  * 🔊 [3.3 fetch API](./workspace-ins/ch09-ajax#33-fetch-api)
    - 🧑‍💻 [01 Fetch API](./workspace-ins/ch09-ajax/01-board-fetch)
    
### 18일차(2025.06.24 화)
#### 오전(3시간)
* 9장 HTTP 통신과 Ajax
  * 🔊 [3.4 axios 라이브러리](./workspace-ins/ch09-ajax#34-axios-라이브러리)
    - 🧑‍💻 [02 Axios 라이브러리](./workspace-ins/ch09-ajax/01-board-axios)

#### 오후(3시간)
  * 🔊 [3.5 React Query(TanStack Query)](./workspace-ins/ch09-ajax#35-react-querytanstack-query)
    - 🧑‍💻 [03 React Query 라이브러리](./workspace-ins/ch09-ajax/03-board-reactquery)
    
# 5. 참고 사이트

## 초보자를 위한 리액트
* <https://react.vlpt.us>

## 온라인 코드 편집기(HTML, CSS, JS)
* CodePen: <https://codepen.io>

## 웹 기반 React 개발
* Codesandbox: <https://codesandbox.io>
* Stackblitz: <https://stackblitz.com>

## 바벨 REPL
* <https://babeljs.io/repl>

## React 공식 문서
* <https://ko.react.dev>

## JSX 변환기 (HTML을 JSX로 변환)
* <https://transform.tools/html-to-jsx>

## 객체 불변성 라이브러리 immer
* <https://immerjs.github.io/immer>

## props의 타입 검증을 위한 PropTypes
* <https://www.npmjs.com/package/prop-types>

## Form 입력값 검증을 위한 react-hook-form
* <https://react-hook-form.com>

## 정규표현식 테스트
* <https://regexr.com>

## Recoil
* <https://recoiljs.org/ko>

## Zustand
* <https://zustand.docs.pmnd.rs>

## Redux (한국어)
* <https://ko.redux.js.org>

## React Redux
* <https://react-redux.js.org>

## Redux Toolkit
* <https://redux-toolkit.js.org>

## API Client
### Postman
* 홈페이지: <https://www.postman.com>
* 다운로드: <https://www.postman.com/downloads>
* 문서: <https://learning.postman.com/docs>

### Bruno
* 홈페이지: <https://www.usebruno.com>
* 다운로드: <https://www.usebruno.com/downloads>
* 문서: <https://docs.usebruno.com/introduction>