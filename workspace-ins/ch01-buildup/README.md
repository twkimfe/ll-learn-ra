# 1장 리액트 빌드업
* 코드 실행(GitHub Page): <https://febc-13.github.io/React/workspace-ins/index.html#01>

# 1. 웹 개발의 변천사

## 1.1 전통적인 웹 애플리케이션
* JSP, Servlet, ASP, PHP 등으로 개발
* 브라우저는 서버에 페이지 단위로 요청을 보내며 웹서버는 완성된 페이지를(HTML) 응답
* 화면(View, UI)을 만드는 역할은 백엔드의 웹서버와 애플리케이션 서버가 담당
* 자바스크립트는 폼 데이터 검증 등의 기본적인 기능만 담당
* 브라우저 화면의 일부만 갱신이 필요한 경우에도 페이지 전체를 서버에 요청해서 받아오므로 매번 리플래시가 발생해서 UX에 좋지 않음

## 1.2 멀티 페이지 애플리케이션(MPA, Multi Page Application)
* Ajax, jQuery 등 클라이언트 자바스크립트 API 사용
* 브라우저는 서버에 페이지 단위로 요청을 보내며 웹서버는 완성된 페이지를(HTML) 응답
* 화면(View, UI)을 만드는 역할은 백엔드의 웹서버와 애플리케이션 서버가 담당
* 화면 로딩 후 사용자와 상호작용에 의해서 발생하는 부분 갱신은 프론트엔드의 JS가 담당
* 브라우저는 서버에 페이지 단위로 요청을 보내지만 같은 페이지 내에서의 컨텐츠 갱신은 Ajax를 이용해서 서버로부터 데이터를 받아온 후 DOM API로 화면 갱신
* 브라우저 화면의 일부만 갱신이 필요한 경우 전체 화면 리플래시가 줄어들어서 UX에 좋음

## 1.3 단일 페이지 애플리케이션(SPA, Single Page Application)
* 하나의 HTML 페이지에서 애플리케이션의 모든 화면과 기능 제공
* 장점
  - 전체 페이지를 다시 불러오지 않고 필요한 데이터만 로딩해서 빠른 화면 전환
  - 깜빡임 없는 화면 전환, 앱 같은 UX 구현
  - 서버 부담이 감소되며 클라이언트 중심으로 개발 가능
* 단점
  - 모든 기능을 한 페이지에서 다 구현하다 보니 상태(데이터, 변수) 관리가 어려움
  - 자바스크립트에서 HTML 코드를 생성해야 하므로 개발 생산성 저하
  - 브라우저의 DOM을 자주 갱신하다보면 성능 저하 발생
* Angular, React, Vue.js 등이 대표적으로 SPA 개발을 지원하는 프레임워크, 라이브러리
* React의 특징
  - 내장된 상태 관리 기능과 서드파티 라이브러리가 많음
  - JSX를 이용해서 HTML 생산성이 높음
  - 가상 DOM을 이용해서 성능 저하 최소

# 2. 리액트 개발에 자주 사용하는 자바스크립트 문법
## 2.1 화살표 함수 (Arrow Function)
* 함수 표현식의 대안으로 간결하게 함수 정의
* 익명 함수로만 정의 가능
* 실행할 코드가 하나만 있다면 함수 본문의 중괄호 생략 가능
* 함수 본문의 중괄호가 생략될 경우 함수의 코드가 자동으로 리턴값으로 사용됨
* 매개 변수가 하나만 있다면 매개변수의 괄호 생략 가능

### 예시
* 매개변수가 없는 함수
```js
// 기존 함수
const add = function(x, y) {
  return x + y;
};
// 화살표 함수
const add = (x, y) => {
  return x + y;
}
// 화살표 함수 본문의 중괄호 생략
const add = (x, y) => x + y;
```

* 매개변수가 있는 함수
```js
// 기존 함수
const add10 = function(x) {
  return x + 10;
};
// 화살표 함수
const add10 = (x) => {
  return x + 10;
}
// 화살표 함수 매개변수의 괄호와 본문의 중괄호 생략
const add10 = x => x + 10;
```

## 2.2 구조 분해 할당 (Destructuring assignment)
* 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있는 표현식

### 예시
* 배열 구조 분해
```js
const foo = ['yellow', 'green', 'blue'];
const [one, two, three] = foo;
console.log(one, two, three); // yellow green blue
```

* 객체 구조 분해
```js
const kim = { userName: '구분핑', userAge: 35 };
const { userName, userAge: age } = kim;
console.log(userName, age); // 구분핑 35
```

## 2.3 나머지 매개변수 (Rest parameters)
* 정해지지 않은 수의 매개변수를 배열로 전달 받음
* 함수의 마지막 매개변수 앞에 `...` 을 붙임

### 예시
```js
function fn(a, b, ...args) {
  console.log(a, b, args);
}

fn(); // undefined undefined []
fn(1); // 1 undefined []
fn(2, 3); // 2 3 []
fn(4, 5, 6); // 4 5 [6]
fn(7, 8, 9, 10, 11); // 7 8 [9, 10, 11]
```

## 2.4 전개 구문 (Spread syntax)
* 배열이나 객체의 요소, 속성을 분해해서 배열, 객체, 함수에 전달
* 배열, 객체의 리터럴이나 함수의 인자값 변수 앞에 `...` 을 붙임
* `나머지 매개변수`는 여러 매개변수를 하나의 배열로 모아서 처리 하는 반면 `전개 연산자`는 하나의 배열, 객체를 여러개의 요소, 속성으로 분해해서 전달
* 이터러블 객체(배열, 객체 등)를 손쉽게 복사

### 예시
```js
const state = [ 'orange', 'yellow', 'green' ];
const newState = [ ...state ]; // 복사된 배열 ['orange', 'yellow', 'green']
```

```js
const state = { name: '전구핑', age: 30 };
const newState = { ...state }; // 복사된 객체 { name: '전구핑', age: 30 }
```

```js
function sum(x, y) {
  return x + y;
}
const numbers = [ 1, 2 ];
console.log(sum(...numbers)); // 3
```
  
## 2.5 삼항 연산자 (조건부 연산자)
* 조건에 따라 값을 선택하는 연산자
* 조건 ? 참일 때의 값 : 거짓일 때의 값

### 예시
```js
var num = 10;
var result = num % 2 === 0 ? '짝수' : '홀수';
console.log(result);  // '짝수'
```

```js
var num = 15;
var result = num % 2 === 0 ? '짝수' : '홀수';
console.log(result);  // '홀수'
```

## 2.6 ESM (ECMAScript Modules)
* 코드를 파일 단위로 분리하고, 불필요한 전역 오염 없이 재사용할 수 있게 해줌
* 파일 자체가 독립된 스코프를 가지므로 모듈내에서 선언한 변수는 전역변수가 아닌 모듈변수로써 모듈 내부에서만 접근 가능 
* 모듈 구성 요소(변수, 함수, 클래스, 타입 별칭, 인터페이스 등)를 명시적으로 내보내기(export) 하면 다른 모듈에서 사용 가능
* 다른 모듈에서 `export`한 값을 참조하려면 `import` 구문을 사용
* 브라우저에서 모듈을 사용하려면 `<script>` 태그에 `type="module"` 속성을 추가

### 2.6.1 `export` 키워드
* 모듈 구성 요소(변수, 함수, 클래스, 타입 별칭, 인터페이스 등)를 외부로 내보내 다른 모듈에서 사용할 수 있게 해주는 키워드

#### Named Export
* 내보내기할 각 구성 요소 앞에 `export` 키워드를 지정하거나 `export { plus, minus }` 형태로 선언과 분리해서 따로 작성 가능
* `export`는 여러번 사용 가능
* `import`시 중괄호 안에 정확한 구성 요소명을 사용

#### Default Export
* 내보내기할 구성 요소 앞에 `export default` 키워드 지정
* `export default`는 모듈 내에서 한번만 사용 가능
* `import`시 이름은 자유롭게 지정 가능

### 2.6.2 `import` 키워드
* 다른 모듈에서 `export`한 구성 요소를 가져올 때 사용하는 키워드

#### Named Import
* `export`로 내보낸 구성 요소를 중괄호로 감싸서 가져옴
* 이름이 정확히 일치 해야 하며 필요한 것만 선택해서 `import` 가능
* 별칭 사용 가능

#### Default Import
* `export default`로 내보낸 구성 요소는 중괄호 없이 자유롭게 이름을 지정해서 `import` 가능

#### Mixed Import
* Named Import와 Default Import를 같이 사용 (일관성과 가독성 저하로 권장하지 않음)

#### Type Import
* 타입 별칭이나 인터페이스를 `export` 했을 경우 `import` 시 `type` 키워드 추가 (생략 가능)

### 2.6.3 예시 
* math.ts
```ts
// Named Export
export function plus(a: number, b: number) {
  return a + b;
}

// Named Export
export function minus(a: number, b: number) {
  return a - b;
}

// Default Export
export default { plus, minus }
```

* index.ts
```ts
// Named Import
import { plus as add, minus } from './math.js';
// Default Import
import MyMath from './math.js'; // { plus, minus }
add(2, 3);
minus(2, 3);
MyMath.plus(2, 3);
MyMath.minus(2, 3);
```

* index.html
```html
<script type="module" src="index.js"></script>
```

## 2.7 Promise
* 비동기 작업의 성공 또는 실패 결과를 나중에 전달하기 위한 객체(ES2015에 추가)
* 어떤 함수가 Promise 객체를 반환한다면 현재 작업을 처리 중이며 작업이 처리 완료되는 미래에 어떤 값을 준비해서 전달할 것이라는 약속

### 2.7.1 Promise 생성자 함수
* Promise 객체 생성에 사용

* `executor`: 비동기로 처리할 작업을 가진 함수
* `resolve`: 작업이 성공적으로 완료 되었을 때 호출할 함수. 인자값은 작업 결과를 전달하는데 사용
* `reject`: 작업이 실패 했을 때 호출할 함수. 인자값은 실패 사유를 전달하는데 사용
```ts
new Promise<T>(
  executor: (
    resolve: (value: T) => void,
    reject: (reason?: any) => void
  ) => void
)
```

### 2.7.2 Promise 객체 반환
* Promise 객체를 반환하는 함수는 비동기 함수가 됨

### 2.7.3 Promise 생성자 함수의 `executor` 함수 작성
* `executor` 함수에서 처리할 작업 구현
* 작업 성공 시 `resolve()`를 호출하고 인자값으로 작업 결과 전달
* 작업 실패 시 `reject()`를 호출하고 인자값으로 실패 사유 전달
```ts
function f1(){
  return new Promise<string>((resolve, reject) => {
    const delay = Math.random()*1000*10;
    setTimeout(() => {
      console.log('f1 작업 완료.', delay);
      if(delay < 5000) {
        resolve('f1의 작업 결과.');
      }else{
        reject('f1 작업중 에러 발생.');
      }
    }, delay);
  });
}
```

### 2.7.4 Promise 객체의 메서드
* `then(onfulfilled?: value => (void | Promise), onrejected?: reason => (void | Promise)): Promise`
  - `onfulfilled`: resolve()가 호출될 때 실행되는 함수
  - `value`: 비동기 함수에서 작업 성공 시 호출한 resolve()에 전달한 인자값
  - `onrejected`: reject()가 호출될 때 실행되는 함수
  - `reason`: 비동기 함수에서 작업 실패 시 호출한 reject()에 전달한 인자값
  - 리턴값: 새로운 Promise가 반환되어 체인 방식으로 호출이 가능
  - `onfulfilled`나 `onrejected` 가 `Promise`를 반환하는 함수일 경우 여러 비동기 함수를 순차적으로 호출하는데 사용
  ```ts
  function test(){
    f1().then((result) => {
      console.log('f1의 작업이 완료된 후 호출.', result);
    }, (reason) => {
      console.error('f1의 작업이 실패한 후 호출.', reason);
    }).then(()=>{}).then(()=>{}).then(()=>{});
  }
  ```
* `catch(onrejected?: reason => (void | Promise)): Promise`
  - `onrejected`: `then()`의 `onrejected`와 동일
  - `then()`의 두번째 인자인 `onrejected`에서 처리하지 않은 에러는 `catch()`에서 처리됨

* `finally(onfinally?: () => void): Promise`
  - `onfinally`: Promise의 성공 실패와 상관없이 항상 호출되는 함수
  ```ts
  function test(){
    f1().then((result) => {
      console.log('4. 첫번째 f1의 작업이 완료된 후 호출.', result);
    }).then(f1).then((result) => {
      console.log('5. 두번째 f1의 작업이 완료된 후 호출.', result);
    }).catch((reason) => {
      console.error('f1의 작업이 실패한 후 호출.', reason);
    }).finally(() => {
      console.log('f1의 성공, 실패와 상관없이 항상 호출.');
    });
  }
  ```

## 2.8 async/await
* Promise를 쉽게 다루기 위해 ES2017에 추가된 문법
* 콜백헬이나 `then()`의 복잡한 체인 방식을 사용하지 않고도 비동기 함수의 순차적인 호출이 가능해서 비동기 코드를 마치 동기 코드처럼 작성할 수 있음

### 2.8.1 `async` 키워드
* 함수 선언부에 붙이는 키워드
* `async` 키워드가 붙은 함수는 자동으로 Promise 객체를 반환
* `async` 함수가 리턴한 값은 Promise의 `resolve()`에 값을 전달하는 효과
* `async` 함수가 throw한 값은 Promise의 `reject()`에 값을 전달하는 효과
```ts
function p1(){ // Promise
  return new Promise((resolve) => {
    resolve('p1 결과');
  });
}
async function a1(){ // async
  return 'a1 결과';
}
```

### 2.8.2 `await` 키워드
* Promise 객체 앞에 붙여서, Promise가 처리될 때까지(settled) 기다렸다가, 그 결과값을 반환해주는 키워드
* `async` 함수 안에서만 사용 가능
* 코드의 흐름이 동기함수를 호출하는 것과 비슷해서 가독성이 좋아짐
```ts
function test(){
  p1().then(result => {
    console.log('p1의 작업 결과.', result);
  }).then(a1).then(result => {
    console.log('a1의 작업 결과.', result);
  }).then(p2).then(result => {
    console.log('p2의 작업 결과.', result);
  }).then(a2).then(result => {
    console.log('a2의 작업 결과.', result);
  }).catch(error => {
    console.log('에러 발생.', error);
  });
}
```

```ts
async function test(){
  try {
    const result1 = await p1();
    console.log('p1의 작업 결과.', result1);
    const result2 = await a1();
    console.log('a1의 작업 결과.', result2);
    const result3 = await p2();
    console.log('p2의 작업 결과.', result3);
    const result4 = await a2();
    console.log('a2의 작업 결과.', result4);
  } catch(error) {
    console.log('에러 발생.', error);
  }
}
```

## 2.9 배열 메서드
### 2.9.1 push, pop
* `push(...items): number`
  - 배열의 마지막 위치에 items 요소들을 추가하고 새로운 배열 길이를 반환

* `pop(): any | undefined`
  - 배열의 마지막 요소를 제거하고 반환

#### 예시
```ts
const fruits = ['사과', '바나나'];

const newLength = fruits.push('오렌지');
console.log(newLength, fruits);    // 3 ['사과', '바나나', '오렌지']

fruits.push('딸기', '포도');
console.log(fruits);    // ['사과', '바나나', '오렌지', '딸기', '포도']

let lastFruit = fruits.pop();
console.log(lastFruit, fruits);   // 포도 ['사과', '바나나', '오렌지', '딸기']

lastFruit = fruits.pop();
console.log(lastFruit, fruits);   // 딸기 ['사과', '바나나', '오렌지']
```

### 2.9.2 unshife, shift
* `unshift(...items): number`
  - 배열의 맨앞에 items 요소들을 삽입하고 새로운 배열 길이를 반환

* `shift(): any | undefined`
  - 배열의 첫 번째 요소를 제거하고 반환

#### 예시
```ts
const fruits = ['사과', '바나나'];

const newLength = fruits.unshift('딸기');
console.log(newLength, fruits); // 3 ['딸기', '사과', '바나나']

fruits.unshift('딸기', '포도');
console.log(fruits); // ['딸기', '포도', '딸기', '사과', '바나나']

let firstFruit = fruits.shift();
console.log(firstFruit, fruits); // 딸기 ['포도', '딸기', '사과', '바나나']
  
firstFruit = fruits.shift();
console.log(firstFruit,  fruits); // 포도 ['딸기', '사과', '바나나']
```

### 2.9.3 indexOf, lastIndexOf
* `indexOf(searchElement, fromIndex?: number): number`
  - 배열의 요소 중 `searchElement`와 일치하는 첫 번째 요소의 인덱스를 반환. 일치하는 요소가 없으면 -1 반환
  - `fromIndex`에 지정한 인덱스부터 탐색을 시작 (기본값 0)

* `lastIndexOf(searchElement, fromIndex?: number): number`
  - 배열의 요소 중 `searchElement`와 일치하는 마지막 요소의 인덱스를 반환. 일치하는 요소가 없으면 -1 반환
  - `fromIndex`에 지정한 인덱스부터 탐색을 시작 (기본값 0)

#### 예시
```ts
const arr = [1, 3, 5, 8, 9, 3, 4, 5];
console.log('첫번째 3의 위치', arr.indexOf(3)); // 1
console.log('마지막 3의 위치', arr.lastIndexOf(3)); // 5
```

### 2.9.4 includes, concat
* `includes(searchElement, fromIndex?: number): boolean`
  - 배열의 요소 중 `searchElement` 값이 있는지 여부를 반환
  - `fromIndex`에 지정한 인덱스부터 탐색을 시작 (기본값 0)
  
* `concat(...items)`
  - items 배열들을 병합한 새로운 배열을 반환

#### 예시
```ts
const arr = ['오렌지', '딸기', '레몬'];
console.log(arr.includes('레몬')); // true
console.log(arr.includes('사과')); // false

const arr2 = arr.concat(['사과', '바나나'], ['포도']);
console.log(arr2.includes('사과')); // true

console.log(arr); // [ '오렌지', '딸기', '레몬' ]
console.log(arr2); // [ '오렌지', '딸기', '레몬', '사과', '바나나', '포도' ]
```

### 2.9.5 splice
* `splice(start: number, deleteCount?: number, ...items)`
  - 배열에서 요소를 추가, 제거 또는 교체 한다.
  - `start`: 시작 인덱스
  - `deleteCount`: 제거할 요소 수
  - `items`: 삽입할 요소 목록

#### 예시
```ts
const arr1 = ['한놈', '두식이', '석삼', '너구리', '오징어', '육개장', '칠뜨기'];

let arr2 = arr1.splice(1, 2); // 인덱스 1부터 2개 추출
console.log(arr1, arr2); // ['한놈','너구리','오징어','육개장','칠뜨기'] ['두식이','석삼']

arr2 = arr1.splice(2, 2); // 인덱스 2부터 2개 추출
console.log(arr1, arr2); // ['한놈', '너구리', '칠뜨기'] ['오징어', '육개장']

arr2 = arr1.splice(2); // 인덱스 2부터 끝까지 추출
console.log(arr1, arr2); // ['한놈', '너구리'] ['칠뜨기']

arr2 = arr1.splice(1, 1, '두식이', '석삼'); // 인덱스 1부터 1개 추출하고 두식이, 석삼 추가
console.log(arr1, arr2); // ['한놈', '두식이', '석삼'] ['너구리']
```

### 2.9.6 slice
* `slice(start?: number, end?: number)`
  - 배열의 지정한 범위를 복사해서 새 배열로 반환
  - `start`: 시작 인덱스 (기본값 0)
  - `end`: 종료 인덱스 (기본값 length)

#### 예시
```ts
const arr1 = ['한놈', '두식이', '석삼', '너구리', '오징어', '육개장', '칠뜨기'];

let arr2 = arr1.slice(1, 3); // 인덱스 1부터 3 앞까지 복사
console.log(arr2); // ['두식이', '석삼']

arr2 = arr1.slice(2, 2); // 인덱스 2부터 2 앞까지 복사
console.log(arr2); // []

arr2 = arr1.slice(5); // 인덱스 5부터 끝까지 복사
console.log(arr2); // ['육개장', '칠뜨기']

arr2 = arr1.slice(-2); // 인덱스 -2부터 끝까지 복사
console.log(arr2); // ['육개장', '칠뜨기']

console.log(arr1); // ['한놈', '두식이', '석삼', '너구리', '오징어', '육개장', '칠뜨기'];
```

### 2.9.7 forEach
* `forEach(callbackFn: (currentValue, index, array), thisArg?): void`
  - 배열의 각 요소에 대해 `callbackFn` 함수를 실행한다.
  - 콜백 함수의 `currentValue`에는 배열의 요소가, `index`에는 전달되는 요소의 인덱스가, `array`에는 원본 배열이 전달된다.
  - `thisArg`는 콜백 함수에서 `this`로 사용할 객체를 전달
  
#### 예시
```ts
const arr = [10, 20, 30];

let newArr: number[] = [];
// 배열의 각 요소를 순회하며 실행
arr.forEach((elem, i) => {
  newArr.push(elem ** 2);
});

console.log('forEach', newArr); // [100, 400, 900]
```

### 2.9.8 map
* `map(callbackfn: (currentValue, index, array), thisArg?): any[]`
  - forEach와 동일
  - forEach는 리턴값이 없지만 map은 콜백 함수에서 리턴한 값을 새로운 배열로 만들어서 반환한다.
  
#### 예시
```ts
const arr = [10, 20, 30];

// 배열의 각 요소를 순회하며 반환받은 값으로 새로운 배열 생성
const newArr = arr.map(function(elem, i) {
  // 요소의 제곱값 반환
  return elem ** 2;
});

console.log('map', newArr); // [100, 400, 900]
```

### 2.9.9 find, findIndex, filter
* `find(callbackFn: (currentValue, index, array), thisArg?): any | undefined`
  - 배열의 각 요소에 대해 `callbackFn` 함수가 호출된다.
  - `true`를 반환한 첫 콜백 함수에 전달된 엘리먼트가 `find`의 결과로 반환된다.
  - `true`를 반환한 콜백 함수가 없을 경우 `undefined`가 반환된다. 

* `findIndex(callbackFn: (currentValue, index, array), thisArg?): number`
  - 배열의 각 요소에 대해 `callbackFn` 함수가 호출된다.
  - `true`를 반환한 첫 콜백 함수에 전달된 인덱스가 `find`의 결과로 반환된다.
  - `true`를 반환한 콜백 함수가 없을 경우 `0`이 반환된다.

* `filter(callbackFn: (currentValue, index, array), thisArg?): any | undefined`
  - 배열의 각 요소에 대해 `callbackFn` 함수가 호출된다.
  - `true`를 반환한 콜백 함수에 전달된 요소만 모아서 새로운 배열로 반환
  - `true`를 반환한 콜백 함수가 없을 경우 `undefined`가 반환된다.

#### 예시
```ts
const arr = [1, 3, 5, 8, 9, 3, 4, 5];

console.log(arr.find(num => num % 2 === 0)); // 8, 배열의 첫번째 짝수 찾기
console.log(arr.findIndex(num => num % 2 === 0)); // 3, 배열의 첫번째 짝수의 인덱스 찾기
console.log(arr.filter(n => n % 2 === 0)); // [8, 4], 배열의 모든 짝수를 찾기
```

### 2.9.10 some, every
* `some(callbackfn: (currentValue, index, array), thisArg?): boolean`
  - 배열의 각 요소에 대해 `callbackFn` 함수가 호출된다. 
  - 콜백 함수 중 하나라도 `true`를 반환하면 `some`은 `true`를 반환한다.
  - 콜백 함수 전부 `true`를 반환하지 않으면 `some`은 `false`를 반환한다.

* `every(callbackfn: (currentValue, index, array), thisArg?): boolean`
  - 배열의 각 요소에 대해 `callbackFn` 함수가 호출된다. 
  - 콜백 함수 전부 `true`를 반환하면 `every`는 `true`를 반환한다.
  - 콜백 함수 중 하나라도 `true`를 반환하지 않으면 `every`는 `false`를 반환한다.

#### 예시
```ts
const arr = [1, 2, 3];

const hasEven = arr.some(n => n % 2 === 0); // true, 짝수가 하나로도 있는가?
const isAllEven = arr.every(n => n % 2 === 0); // false, 모두 짝수인가?ㄴ

console.log(hasEven, isAllEven);
```

### 2.9.11 reduce
* `reduce(reducerfn: (previousValue, currentValue, index, array), initialValue?): any`
  - 배열의 각 요소에 대해 제공한 `reducerfn`을 실행
  - 이전 `reducerfn`의 반환값이 다음 `reducerfn`의 인자값으로 전달되며 최종적으로 하나의 결과값을 반환
  - `reducerfn`이 처음 실행되면 "이전 리듀서의 반환값"이 없으므로 `reduce` 함수의 두번째 인자로 전달하는 `initialValue` 값을 사용하거나 두번째 인자가 생략될 경우 배열의 `첫번째 index` 값이 지정되고 배열의 `두번째 요소`부터 리듀서가 실행
  - 함수형 스타일로 개발
  
#### 예시
* `forEach` 함수 사용
```ts
const arr = [1, 2, 3, 4];

let sum = 0;
arr.forEach(function(value) {
  sum += value;
});

console.log(sum); // 0 + 1 + 2 + 3 + 4
```

* `reduce` 함수 사용
```ts
const arr = [1, 2, 3, 4];

const sum = arr.reduce(function(accumulator, currentValue){
  return accumulator + currentValue;
}, 0);

console.log(sum); // 0 + 1 + 2 + 3 + 4
```

## 2.10 메모이제이션
* 이전의 계산 결과를 기억하는 기능을 갖춘 함수
* 함수는 객체이기 때문에 함수의 속성값으로 계산 결과 캐시
* 함수에 종속된 속성을 이용하기 때문에 외부에 노출하지 않고 함수 자체적으로 구현 가능

### 2.10.1 장점
* 이미 수행한 복잡한 연산을 반복하지 않도록 함으로서 성능을 향상
* 사용자가 알 수 없게 내부적으로만 동작

### 2.10.2 단점
* 캐시에 필요한 메모리 사용량 증가
* 비즈니스 로직과 캐싱 기능의 혼재
* 부하 테스트(Load test)나 알고리즘의 성능 테스트가 어려워짐

### 2.10.3 예시
* 함수에서 직접 구현
```js
// 지정한 수가 소수인지 여부를 반환
const isPrime = function(num){ // num = 5
  // 캐시를 위한 코드
  isPrime._cache = isPrime._cache || {};
  if(isPrime._cache[num] !== undefined){ // num에 대해서 계산이 끝나고 캐시된 경우
    return isPrime._cache[num];
  }

  // 소수 판별 코드
  let prime = true;
  for(let i=2; i<=Math.sqrt(num); i++){
    if(num % i === 0){
      prime = false;
      break;
    }
  }

  // 캐시를 위한 코드
  isPrime._cache[num] = prime; // isPrime._cache[5] = true;
  
  return prime;
};

console.time('소요시간');
console.log('3 -> ', isPrime(3));
console.log('4 -> ', isPrime(4));
console.log('1000000007 -> ', isPrime(1000000007));
console.log('1000000007 -> ', isPrime(1000000007));
console.timeEnd('소요시간');
```

* 클로저 활용
```js
// 모든 함수에 메모이제이션 기능 추가
Function.prototype.memo = function(key){
  this._cache = this._cache || {};
  if(this._cache[key] !== undefined){
    return this._cache[key];
  }else{
    return this._cache[key] = this(key);
  }
};
```

```js
// 지정한 수가 소수인지 여부를 반환(순수 함수)
const isPrime = function(num){
  // 소수 판별 코드
  let prime = true;
  for(let i=2; i<=num; i++){
    if(num % i === 0){
      prime = false;
      break;
    }
  }
  return prime;
};

console.time('소요시간');
console.log('3 -> ', isPrime(3));
console.log('4 -> ', isPrime(4));
console.log('1000000007 -> ', isPrime.memo(1000000007));
console.log('1000000007 -> ', isPrime.memo(1000000007));
console.timeEnd('소요시간');
```

