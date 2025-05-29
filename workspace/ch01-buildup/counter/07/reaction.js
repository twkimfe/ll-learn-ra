let _root;
let _stateValue;

const reaction = {
  createElement: (tag, props, ...children) => {
    // 여기서 props도 여러 개 있지만, key-value로 따로 나뉘기 때문에 하나만 넣어도 된다
    // 요소 노드 생성
    const elem = document.createElement(tag);

    // 속성 추가
    if (props) {
      for (const attrName in props) {
        // 객체의 모든 속성 반복
        const value = props[attrName];
        if (attrName.toLowerCase().startsWith("on")) {
          elem.addEventListener(attrName.toLowerCase().substring(2), value);
        } else {
          elem.setAttribute(attrName, value);
        }
      }
    }

    // 자식 노드 추가
    for (let child of children) {
      if (typeof child === "string" || typeof child === "number") {
        child = document.createTextNode(child);
      } else if (typeof child === "function") {
        child = child();
      }
      elem.appendChild(child);
    }

    // 요소 노드 반환
    return elem;
  },

  //로트 노드를 관리하는 객체 생성 및 반환
  //Reaction.createRoot(document.getElementById('root')).render(App);
  createRoot: (rootNode) => {
    let _appComponent;

    return (_root = {
      //루트 노드 하위에 지정한 함수를 실행해서 받은 컴포넌트를 랜더링 한다
      render(appFn) {
        _appComponent = _appComponent ?? appFn;
        rootNode.firstChild?.remove();
        rootNode.appendChild(_appComponent());
      },
    });
  },

  // useState(10) -> 10 반환
  // setValue(20) -> 20 반환
  // useState(30) -> 20 반환 -> 해당 변수는 적용 안 됨

  //상태값 (데이터) 관리
  useState: (initialValue) => {
    //최초 호출되었을 경우에만 초기값을 지정, 이후에 재호출 시 이전 값 유지
    //??: null 병합 연산자
    //왼쪽 피연산자가 null, undefined일 때 오른쪽 값을 사용
    _stateValue = _stateValue ?? initialValue;

    //상태값을 수정한다.
    function setValue(newValue) {
      const oldValue = _stateValue; //이전 상태값
      _stateValue = newValue; //현재 상태값

      //상태 변경 시, 리렌더링 한다
      //Object.is(a, b): a와 b가 같은 지 여부 반환
      //원시형 타입일 때, 값만 다르면 false 반환, render() 호출 됨
      //객체일 때 객체 내부 속성값이 바뀌어도 같은 메모리 주소를 가지고 있으면, 객체 내부 true가 되서, render() 호출 안됨
      if (!Object.is(oldValue, newValue)) {
        _root.render();
      }
    }

    //구조분해할당 문법 사용
    //const [count, setCount] = Reaction.useState(0)
    return [_stateValue, setValue];
  },
};

export default reaction;
