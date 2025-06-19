# 4장 리액트 훅
* 코드 실행(GitHub Page): <https://febc-13.github.io/React/workspace-ins/index.html#04>

## 리액트 훅이란?

* 컴포넌트가 렌더링되는 동안에만 사용할 수 있는 특별한 함수
* 리액트 16.8 버전에 추가됨
* 훅을 사용하면 클래스 컴포넌트에서만 가능했던 상태 관리와 생명 주기 이벤트를 함수형 컴포넌트에서도 사용할 수 있게 됨  
* 이로 인해 함수형 컴포넌트의 활용도가 높아졌으며, 클래스 컴포넌트보다 코드가 간결하고 유지보수가 용이해 함수형 컴포넌트 사용이 일반화됨
* 참고: https://ko.react.dev/reference/react/hooks

## useState
* 상태값(컴포넌트에서 관리하는 데이터)을 추가하기 위한 훅

### API
```jsx
const [state, setState] = useState(initialState);
```

#### 매개변수
* `initialState`: 상태값의 초기값(초기 렌더링 후 무시됨)

#### 리턴값
* `state`: 저장된 상태값
* `setState`: 상태값을 변경하는 setter 함수
  - setter를 통해 상태가 변경되면 해당 컴포넌트는 다시 렌더링됨

## useEffect
* 컴포넌트 생명주기 이벤트를 등록하기 위한 훅
* 클래스 기반 컴포넌트에서는 아래 메소드를 오버라이드해서 구현
  - `componentDidMount()`: 컴포넌트가 마운트 완료되고 브라우저 DOM 트리에 반영된 후 호출
  - `componentDidUpdate()`: 브라우저 DOM 업데이트 완료 후 호출
  - `componentWillUnmount()`: 컴포넌트가 삭제되기 직전에 호출
  - ...
* useEffect에서 주로 구현하는 기능
  - 컴포넌트의 렌더링 작업 외의 부가적인 작업
    + 타이머 설정
    + 로깅
  - 컴포넌트의 렌더링 이후에 처리할 작업
    + DOM 수동 조작
  - side effect가 발생하는 작업(컴포넌트를 순수 함수로 유지)
    + 데이터 fetching

### API
```jsx
useEffect(setup, dependencies?);
```

#### 매개변수
* `setup`: 컴포넌트가 마운트(1-4), 업데이트(2-5), 제거(3-1) 될 때 호출되는 함수
  - `setup`이 함수를 리턴하면, 리턴한 함수를 `cleanup`이라고 부르며, 컴포넌트가 업데이트되거나 언마운트 될 때 호출됨 (cleanup이 먼저 실행되고 setup이 뒤에 실행됨)
  
* `dependencies` (선택): 의존 객체 배열
  - 컴포넌트가 업데이트될 때 `setup` 함수를 호출할지 말지 여부를 결정하는데 사용
  - 컴포넌트가 마운트될 때는 `dependencies` 여부와 상관없이 `setup`이 호출됨
  - `dependencies`를 생략하면, 컴포넌트가 업데이트될 때 항상 `setup`이 호출됨
  - `dependencies`에 빈 배열을 지정하면 업데이트에서는 호출되지 않음
  - `dependencies`를 지정하면, 해당 값들이 변경될 때만 `setup` 함수가 호출됨  

## useReducer

* `useState`와 비슷하지만, 상태 관리가 더 복잡한 경우에 사용
* `useState`를 사용할 때 컴포넌트 내부에서 상태 변경 로직을 구현해야 하기 때문에 컴포넌트가 복잡해짐
* 컴포넌트 외부에서 상태 관리를 하고 싶을 때 유용
* 여러 컴포넌트가 유사한 상태 관련 로직을 사용할 경우 기능을 공유할 수 있음
* `state` 값은 불변성이 있어 상태 변경의 내역을 추적할 수 있음
* 리듀서는 순수 함수로 만들어야 함
  - 입력 값이 동일하면 출력 값도 동일
  - 외부 값에 영향을 주거나 받으면 안 됨
* 리듀서를 사용하여 애플리케이션 전역 수준의 상태를 관리하는 라이브러리가 `Redux`

### API
```jsx
function reducer(state, action){ ... }
const [state, dispatch] = useReducer(reducer, initialArg, init?);
```

#### 매개변수
* `reducer`: `state`와 `action`을 인자로 받아 새로운 `state`를 반환하는 함수  
  - `state`: 리듀서에 전달되는 상태값  
  - `action`: `dispatch`에 전달한 인자값으로, 수행할 작업의 종류와 필요한 인자값을 포함한 객체
* `initialArg`: 초기 상태로 지정할 값
* `init`(선택): `initialArg`를 인자로 받고, 리턴한 값이 초기 상태로 지정되는 함수

#### 리턴값
* `state`: 상태값이 저장된 getter
* `dispatch`: 상태값을 변경하는 setter 함수. `dispatch`에 전달한 인자값이 `reducer`의 두번째 인자값(`action`)으로 전달됨

### 상태 관리: useState vs. useReducer

#### 코드 크기
* `useReducer`를 사용하면 `reducer` 함수와 `dispatch` 액션을 작성해야 하기 때문에 기본적으로 코드 크기가 `useState`를 사용할 때보다 많아짐
  ```jsx
  const TodoReducer = function(state, action) {
    // 상태 변경 로직
  };
  itemListDispatch({ type: 'TOGGLE', item: { _id }});
  ```

* 여러 이벤트 핸들러가 비슷한 상태 관리 로직을 가지고 있다면 `reducer` 함수에 공통으로 작성해서 코드를 줄일 수 있음
  ```jsx
  const TodoReducer = function(state, action){
    const index = state.findIndex(item => item._id === action.item._id);
    switch(action.type){
      case 'TOGGLE':
        return produce(state, draft => {
          draft[index].done = !draft[index].done;
        });
      default:
      case 'DELETE':
        return produce(state, draft => {
          draft.splice(index, 1);
        });
    }
  };
  ```

#### 가독성
* 상태 변경 로직이 복잡하고 여러 이벤트 핸들러에서 비슷한 로직을 사용해야 한다면, `useState`로 상태를 직접 관리하기보다는 `useReducer`에 상태 변경 로직을 집중시키고 컴포넌트와 분리하면 컴포넌트를 단순화할 수 있음

#### 디버깅
* `useState`는 상태 변경 도중 오류가 발생하면 여러 이벤트 핸들러를 확인해야 하지만, `useReducer`는 상태 변경 로직이 한 곳에 있기 때문에 디버깅이 편함

#### 테스트
* `reducer` 함수는 컴포넌트와 독립적인 순수 함수이기 때문에 따로 테스트가 가능함

#### 타입 안정성
* action의 타입을 명확하게 정의

#### 개인 선호도에 따름

## useRef

* 컴포넌트가 다시 렌더링되더라도 기존 상태값을 유지하는 변수를 생성
* 함수 내부에 정의하는 지역 변수는 컴포넌트가 다시 렌더링되면(함수 재호출) 값이 초기화 됨
* `useState`는 값이 변경되면 컴포넌트가 다시 렌더링되지만 `useRef`는 값이 변경되어도 컴포넌트가 다시 렌더링되지 않음
* JSX 태그에 `ref` 속성을 추가하면 브라우저 DOM 엘리먼트에 직접 접근 가능
  - 포커스, 미디어 재생, 애니메이션 실행 등과 같은 작업은 `useRef`를 사용해 브라우저 DOM에 직접 접근하여 제어해야 함

### API
```jsx
const ref = useRef(initialValue);
```

#### 매개변수
* `initialValue`: 초기값

#### 리턴값
* `current`라는 상태값 또는 DOM 요소가 있는 속성 하나가 정의된 객체

### input 요소의 값 지정: useState vs. useRef
#### useState 사용
* value 속성으로 상태값 지정
* 리액트에서 직접 상태관리를 하는 제어 컴포넌트를 구현
* input 값이 변경되는 즉시 리렌더링 되어야 할때
  - 리렌더링이 자주 되므로 오버헤드 발생

##### 예시
```jsx
function App(){
  const [msg, setMsg] = useState('');
  return (
    <>
      <h1>01 useState - 상태 관리</h1>
      <div>
        <input type="text" value={ msg } onChange={ e => setMsg(e.target.value) } />
        <br/>
        <span>입력 메세지: { msg }</span>
      </div>
    </>
  );
}
```

#### useRef 사용
* defaultValue 속성으로 초기값 지정
* 브라우저에서 입력값을 관리하는 비제어 컴포넌트를 구현
* input 값이 변경 되어도 리렌더링 될 필요가 없을때
  - 리렌더링이 되지 않으므로 성능 최적화

##### 예시
```jsx
function Counter() {
  const step = useRef(1);

  return (
    <div id="counter">
      <input type="number" defaultValue={ step.current } onChange={ e => step.current = Number(e.target.value) } />
      <Button color="red">-</Button>
      <Button>0</Button>
      <Button color="blue">+</Button>
      <span>0</span>
    </div>
  );
}
```

## useMemo
* 지정한 함수를 호출하여 반환받은 결과값을 내부에 저장(캐싱)하는 함수

### API
```jsx
const calculateValue = function(){ ... };
const cachedValue = useMemo(calculateValue, dependencies);
```

#### 매개변수
* `calculateValue`: 캐싱할 값을 계산하여 반환하는 순수 함수
* `dependencies`: 의존 객체 배열
  - 계산 결과에 영향을 주는 `calculateValue` 함수의 인자값
  - 이 배열의 값이 하나라도 변경되면 `calculateValue` 함수를 다시 호출하고, 변경되지 않으면 캐시된 값을 반환
  - 빈 배열을 지정하면 의존성이 없으므로 매번 캐시된 값을 반환

#### 리턴값
* `calculateValue` 함수를 호출한 결과값
* 다음 렌더링 중에는 `dependencies`가 변경되지 않으면 캐시된 결과를, 변경되었으면 `calculateValue` 함수를 다시 호출한 결과값

### React.memo

* 컴포넌트를 memoize한 후 리렌더링 될 때 props가 변경되지 않으면 memoize된 컴포넌트를 반환
* 컴포넌트가 리렌더링될 때 props가 변경되지 않으면 최종적으로 브라우저 DOM에 쓰기 작업이 이루어지지 않지만, 가상 DOM 생성과 비교 작업에도 리소스가 사용되므로, memoize된 컴포넌트는 성능 향상에 도움을 줄 수 있음
* 리렌더링 될때 눈에띄게 지연이 발생하는 경우 사용

#### API
```jsx
const MemoizedComponent = React.memo(SomeComponent, arePropsEqual?)
```

##### 매개변수
* `SomeComponent`: memoize할 대상 컴포넌트
* `arePropsEqual`(선택): memoize된 컴포넌트를 반환할지, 컴포넌트를 다시 호출할지를 결정하는 함수
  - 컴포넌트의 이전 props 및 새로운 props를 인자로 받는 함수
  - `true`를 반환하면 memoize된 컴포넌트를 사용하고, `false`를 반환하면 컴포넌트를 다시 호출한 결과값을 사용
  - 생략 시 이전 props와 새로운 props를 얕게 비교하여 같으면 `true`, 다르면 `false`를 반환하는 기본 동작

##### 리턴값
* memoize된 `SomeComponent`

### React.memo 사용 시점

* 컴포넌트 호출 시 시간이 오래 걸리는 연산 작업이 있는 경우  
  - memoize된 컴포넌트를 재사용하면 컴포넌트 호출 횟수를 줄일 수 있음
* 리렌더링될 때 props가 자주 변경되지 않는 컴포넌트
  - props가 자주 변경되는 컴포넌트에는 props를 비교하는 로직이 불필요하게 동작하므로, 오히려 성능에 좋지 않음

---

### 고차 함수 (Higher-Order Function)

#### 정의  
* 함수를 인자로 전달받거나 함수를 반환하는 함수.

#### 예시  
* `Array.prototype.forEach`, `Array.prototype.map`, `Array.prototype.findIndex`, `Array.prototype.filter` 등.  

* 리액트에서의 활용  
  - 컴포넌트(함수)를 인자로 받아 공통 로직을 추가한 새로운 컴포넌트를 반환.
  - 중복되는 로직을 고차 함수에 정의하여 컴포넌트별로 재사용 가능.
  - `React.memo`가 대표적인 고차 함수.

## useCallback

* 컴포넌트 내부에서 정의한 함수를 캐시
* 컴포넌트가 다시 렌더링되더라도 함수가 다시 생성되지 않고 캐시된 함수를 사용
* 부모가 정의한 이벤트 리스너를 자식에게 props로 전달할 때, 부모가 리렌더링되는 경우 자식도 리렌더링되지만, 이때 props가 바뀌지 않으면 자식은 기존 DOM을 재사용하도록 메모이제이션할 수 있음
  - 이벤트 리스너를 컴포넌트 내부에서 정의하면 부모가 리렌더링될 때 리스너 함수도 새로 생성되므로 자식에 전달하는 props가 바뀌어 메모이제이션이 되지 않고 자식도 리렌더링이 발생
  - `useCallback()`을 사용하면 부모 컴포넌트가 재호출되어도 리스너가 수정되지 않고 유지되므로 자식도 기존 DOM을 재사용하여 성능이 향상됨

### API
```jsx
const cachedFn = useCallback(fn, dependencies);
```

#### 매개변수
* `fn`: 캐싱할 함수
* `dependencies`: 의존 객체 배열
  - 캐싱된 함수에서 컴포넌트의 변수를 사용할 경우 함수 생성 당시의 값을 참조하고 있기 때문에 이 값이 바뀌면 함수도 다시 생성해야 함. 이 값을 의존성으로 지정하면 의존성이 바뀔 때마다 새로운 함수를 생성하여 반환
  - 빈 배열을 지정하면 의존성이 없으므로 매번 캐시된 함수를 반환

#### 리턴값
* 최초에는 `fn` 함수를 반환하고, 다음 렌더링부터는 `dependencies`가 변하지 않았다면 이전에 반환한 캐시된 함수를, `dependencies`가 변했다면 새로 생성된 `fn` 함수를 반환

### useMemo vs. React.memo vs. useCallback
* `useMemo`는 함수를 인자로 전달하고, 전달된 함수의 실행 결과(리턴값)를 memoize 함
* `React.memo`는 컴포넌트를 인자로 전달하고, 전달된 컴포넌트를 memoize 함
* `useCallback`은 함수를 인자로 전달하고, 전달된 함수를 memoize 함
* 차이점: 함수의 리턴 값 vs. 컴포넌트 vs. 함수 자체

## Custom Hook
* 개발자가 직접 작성하는 리액트 훅으로, 리액트의 내장 훅(`useState`, `useEffect` 등)을 이용해 특정 로직을 재사용 가능하게 만든 함수
* 여러 컴포넌트에서 공통으로 사용할 수 있는 상태 관리나 사이드 이펙트 로직을 하나의 훅으로 묶을 수 있음
* 리액트의 내장 훅은 일반 함수에서는 사용할 수 없으므로, 내장 훅을 활용하려면 커스텀 훅을 작성해야 함
* 커스텀 훅의 이름은 리액트 훅임을 명시적으로 나타내기 위해 `useXXX` 형태로 작성하는 것이 권장됨
  - 예: `useFetch`, `useLocalStorage` 등

### Custom Hook의 장점

1. 코드 재사용성: 여러 컴포넌트에서 동일한 로직을 재사용할 수 있음
2. 관심사 분리: 비즈니스 로직을 컴포넌트에서 분리하여 컴포넌트를 더 단순하게 만듦
3. 테스트 용이성: 로직을 독립적으로 테스트할 수 있음
4. 유지보수성: 로직이 한 곳에 모여있어 수정이 용이함
5. 추상화: 복잡한 로직을 간단한 인터페이스로 추상화할 수 있음

## 훅 사용 시 주의사항
* 클래스 기반 컴포넌트에서는 훅을 사용할 수 없음
  - 훅은 함수형 컴포넌트 전용이며, 상태 관리 및 생명 주기 관련 기능을 함수형 컴포넌트 내에서만 사용할 수 있음
* 훅은 함수 컴포넌트의 최상위에서만 호출해야 함
  - 훅을 반복문, 조건문, 중첩 함수 내에서 호출하면 컴포넌트가 렌더링될 때마다 호출 순서가 달라져서 문제를 일으킬 수 있음
  - 훅의 호출 순서가 바뀌면 리액트는 훅의 상태를 추적할 수 없어서 에러가 발생할 수 있음
* 훅은 항상 동일한 순서로 호출되어야 함
  - 각 렌더링마다 동일한 순서로 훅이 호출되어야 하므로, 조건문이나 반복문 내에서 훅을 호출하는 패턴을 피해야 함

# 리액트 컴파일러

* 리액트 컴파일러 참고
  - https://ko.react.dev/learn/react-compiler

## 리액트 컴파일러란?

* 리액트 19와 함께 공개된 자동 최적화 도구로, 빌드 시점에 컴포넌트를 분석하여 자동으로 메모이제이션을 적용
* 개발자가 수동으로 `useMemo`, `useCallback`, `React.memo`를 사용하지 않아도 최적화된 코드를 생성
* Meta의 instagram.com을 비롯한 여러 서비스에서 사용 중

## 리액트 컴파일러의 목적

### 기존 리액트의 한계
* 리액트는 상태가 변경될 때마다 컴포넌트를 리렌더링하는 반응적(reactive) 특성을 가짐
* 이로 인해 불필요한 리렌더링이 자주 발생하여 성능 저하 문제가 생김
* 개발자가 수동으로 메모이제이션 API를 사용해야 하는 부담

### 해결 방안
* 의미 있는 변화가 있을 때만 리렌더링 수행
* 객체 참조 변경이 아닌 실제 값의 변화를 감지하여 최적화

## 주요 기능

### 1. 자동 메모이제이션
* `useMemo`, `useCallback`, `React.memo`를 자동으로 적용
* 의존성 배열 관리를 컴파일러가 자동으로 처리
* 불필요한 재계산 및 재생성 방지

### 2. 정밀한 의존성 추적
* 객체 전체가 아닌 실제 사용되는 속성만 추적
* 불필요한 반응성 제거
* 더 정확한 최적화 적용

### 3. JSX 레벨 최적화
* JSX 요소들을 개별적으로 캐싱
* 각 요소가 자신의 의존성에만 반응하도록 최적화
* 컴포넌트 트리의 계단식 리렌더링 방지

## 컴파일러 동작 원리

### 컴파일 전 코드 예시
```jsx
function TodoList({ visibility, themeColor }) {
  const [todos, setTodos] = useState(initialTodos);
  const handleChange = todo => setTodos(todos => getUpdated(todos, todo));
  const filtered = getFiltered(todos, visibility);

  return (
    <div>
      <ul>
        {filtered.map(todo => (
          <Todo key={todo.id} todo={todo} onChange={handleChange} />
        ))}
      </ul>
      <AddTodo setTodos={setTodos} themeColor={themeColor} />
    </div>
  );
}
```

### 컴파일 후 코드 개념
```jsx
function TodoList({ visibility, themeColor }) {
  const $ = useMemoCache(16); // 캐시 배열 생성
  const [todos, setTodos] = useState(initialTodos);
  
  // handleChange 함수 메모이제이션
  let handleChange;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    handleChange = todo => setTodos(todos => getUpdated(todos, todo));
    $[0] = handleChange;
  } else {
    handleChange = $[0];
  }
  
  // filtered 값 메모이제이션
  let filtered;
  if ($[1] !== todos || $[2] !== visibility) {
    filtered = getFiltered(todos, visibility);
    $[1] = todos;
    $[2] = visibility;
    $[3] = filtered;
  } else {
    filtered = $[3];
  }
  
  // JSX 요소들 개별 메모이제이션
  // ... 각 JSX 요소가 자신의 의존성에 따라 캐싱됨
  
  return (/* 최적화된 JSX */);
}
```

## 최적화 대상
1. 컴포넌트의 계단식 리렌더링 방지: 부모 컴포넌트 변경 시 자식들의 불필요한 리렌더링 방지
2. 비용이 큰 계산 건너뛰기: 값이 변경되지 않은 경우 expensive 연산 생략
3. useEffect 훅의 의존성 메모이제이션: useEffect 등의 무한 루프 방지

## 설치 및 사용법

### 패키지 설치
```bash
# 리액트 19+
npm install -D babel-plugin-react-compiler@rc

# 리액트 17, 18
npm install react-compiler-runtime
npm install -D babel-plugin-react-compiler@rc
```

### Vite 설정
```js
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler", {
            // React 17, 18 사용 시
            runtimeModule: "react-compiler-runtime"
          }]
        ]
      }
    })
  ],
  // ...
});
```

## 리액트 컴파일러를 적용하지 않는 방법
* "use no memo" 지시어 추가
  - "use no memo"는 React 컴파일러에 의해 컴파일되지 않도록 컴포넌트와 Hooks를 선택적으로 제외하는 지시어

## 사용 시 주의사항

### 리액트의 규칙 준수 필요
* 컴포넌트와 Hook은 순수함수여야 함
* Hook은 최상위에서만 호출
* 조건문, 반복문, 중첩 함수 내에서 Hook 호출 금지
* 렌더링 중 DOM 조작 금지
* 리액트의 규칙 참고: https://ko.react.dev/reference/rules

## 개발 도구 지원

### ESLint 통합
```bash
npm install -D eslint-plugin-react-hooks@^6.0.0-rc.1
```

```js
// eslint.config.js
import * as reactHooks from 'eslint-plugin-react-hooks';
// ...

export default tseslint.config(
  // ...
  {
    // ...
    plugins: {
      'react-hooks': reactHooks,
      // ...
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // ...
    },
  },
)
```

### React DevTools
* 브라우저 개발자 도구의 Components 탭에서 컴파일러로 최적화된 컴포넌트는 "Memo ✨" 배지로 표시
* 메모이제이션 상태를 시각적으로 확인 가능

# 리액트 19 새로운 훅들

리액트 19에서는 서버 컴포넌트와 폼 처리를 위한 새로운 훅들이 추가됨

## use

* Promise와 Context를 조건부로 읽을 수 있는 새로운 API
* 기존 훅과 달리 조건문 안에서도 사용 가능
* Suspense와 연동하여 비동기 데이터 처리를 간소화

### API
```jsx
const value = use(resource);
```

#### 매개변수
* `resource`: Promise 또는 Context 객체
  - Promise인 경우: 해당 Promise가 완료될 때까지 컴포넌트를 중단(suspend)
  - Context인 경우: Context의 현재 값을 반환

#### 리턴값
* Promise의 결과값 또는 Context의 값

### 예시
```jsx
function UserProfile({ userPromise }) {
  const user = use(userPromise); // Promise가 완료될 때까지 기다림
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

// 조건부 사용도 가능
function ConditionalData({ condition, dataPromise }) {
  if (condition) {
    const data = use(dataPromise);
    return <div>{data}</div>;
  }
  return <div>조건이 맞지 않음</div>;
}
```

## useActionState

* 폼 액션의 상태를 관리하는 훅
* 폼 제출 후 결과와 pending 상태를 쉽게 관리
* 서버 액션과 함께 사용하여 폼 처리를 간소화

### API
```jsx
const [state, formAction, isPending] = useActionState(action, initialState, permalink?);
```

#### 매개변수
* `action`: 폼이 제출되거나 버튼이 클릭될 때 호출될 함수
* `initialState`: 초기 상태값
* `permalink` (선택): SEO를 위한 고유 페이지 URL

#### 리턴값
* `state`: 현재 상태값
* `formAction`: 폼의 action 속성에 전달할 함수
* `isPending`: 액션이 실행 중인지 여부

### 예시
```jsx
async function updateName(previousState, formData) {
  try {
    const name = formData.get('name');
    // 서버에 이름 업데이트 요청
    await updateUserName(name);
    return { message: '이름이 성공적으로 업데이트되었습니다.' };
  } catch (error) {
    return { message: '오류가 발생했습니다.' };
  }
}

function UserForm() {
  const [state, formAction, isPending] = useActionState(updateName, { message: '' });

  return (
    <form action={formAction}>
      <input type="text" name="name" required />
      <button type="submit" disabled={isPending}>
        {isPending ? '저장 중...' : '저장'}
      </button>
      {state.message && <p>{state.message}</p>}
    </form>
  );
}
```

## useFormStatus

* 상위 form 요소의 상태 정보를 제공하는 훅
* 폼이 제출 중인지, 어떤 데이터가 제출되었는지 등을 확인
* 자식 컴포넌트에서 부모 폼의 상태에 접근할 때 유용

### API
```jsx
const { pending, data, method, action } = useFormStatus();
```

#### 매개변수
* 매개변수 없음

#### 리턴값
* `pending`: 상위 form이 제출 중인지 여부 (boolean)
* `data`: 제출된 FormData 객체
* `method`: HTTP 메소드 ('GET' 또는 'POST')
* `action`: form의 action 속성에 전달된 함수 참조

### 예시
```jsx
function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? '제출 중...' : '제출'}
    </button>
  );
}

function MyForm() {
  async function handleSubmit(formData) {
    // 폼 제출 로직
    await submitData(formData);
  }

  return (
    <form action={handleSubmit}>
      <input type="text" name="username" />
      <SubmitButton /> {/* 자식 컴포넌트에서 폼 상태 접근 */}
    </form>
  );
}
```

## useOptimistic

* 비동기 요청 중 낙관적 UI 업데이트를 제공하는 훅
* 서버 응답을 기다리지 않고 UI를 먼저 업데이트하여 더 나은 사용자 경험 제공
* 요청이 실패할 경우 자동으로 이전 상태로 롤백

### API
```jsx
const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);
```

#### 매개변수
* `state`: 실제 상태값
* `updateFn`: 낙관적 업데이트를 위한 함수 `(currentState, optimisticValue) => newState`

#### 리턴값
* `optimisticState`: 낙관적으로 업데이트된 상태값
* `addOptimistic`: 낙관적 업데이트를 트리거하는 함수

### 예시
```jsx
function LikeButton({ postId, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (currentLikes, amount) => currentLikes + amount
  );

  async function handleLike() {
    // 즉시 UI 업데이트 (낙관적)
    addOptimisticLike(1);
    
    try {
      // 서버에 실제 요청
      const newLikes = await likePost(postId);
      setLikes(newLikes);
    } catch (error) {
      // 실패 시 자동으로 이전 상태로 롤백됨
      console.error('좋아요 실패:', error);
    }
  }

  return (
    <button onClick={handleLike}>
      ❤️ {optimisticLikes}
    </button>
  );
}
```

### 새로운 훅들의 특징

* 서버 컴포넌트 지원: 리액트 19의 새로운 훅들은 서버 컴포넌트와 함께 작동하도록 설계됨
* 향상된 폼 처리: `useActionState`와 `useFormStatus`는 폼 제출과 상태 관리를 크게 개선
* 더 나은 UX: `useOptimistic`은 즉각적인 피드백으로 사용자 경험을 향상
* 조건부 사용: `use` 훅은 조건부로 사용할 수 있어 더 유연한 데이터 로딩 가능

