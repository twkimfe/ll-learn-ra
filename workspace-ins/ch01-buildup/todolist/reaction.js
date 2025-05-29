let _root;
let _stateValue;

const reaction = {
  createElement: (tag, props, ...children) => {
    // 요소 노드 생성
    const elem = document.createElement(tag);
    // 속성 추가
    if(props){
      for(const attrName in props){ // 객체의 모든 속성 반복
        const value = props[attrName];
        if(attrName.toLowerCase().startsWith('on')){
          elem.addEventListener(attrName.toLowerCase().substring(2), value);
        }else{
          elem.setAttribute(attrName, value);
        }
      }
    }
    // 자식 노드 추가
    for(let child of children){
      if(typeof child === 'string' || typeof child === 'number'){
        child = document.createTextNode(child);
      }else if(typeof child === 'function'){
        child = child();
      }

      if(Array.isArray(child)){
        child.forEach(c => elem.appendChild(c));
      }else{
        elem.appendChild(child);
      }
    }
    // 요소 노드 반환
    return elem;
  },

  // 루트 노드를 관리하는 객체를 생성해서 반환
  // Reaction.createRoot(document.getElementById('root')).render(App);
  createRoot: (rootNode) => {
    let _appComponent;
    return _root = {
      // 루트 노드 하위에 지정한 함수를 실행해서 받은 컴포넌트를 렌더링 한다.
      render(appFn){
        _appComponent = _appComponent ?? appFn;
        rootNode.firstChild?.remove();
        rootNode.appendChild(_appComponent());
      }
    };
  },

  // 상태값(데이터) 관리
  useState: (initialValue) => {
    // 최초 호출되었을 경우에만 초기값을 지정하고 이후에 다시 호출되는 경우에는 이전 값을 유지한다.
    // ??: null 병합 연산자
    // 왼쪽 피연사가 null, undefined일 때 오른쪽 값을 사용
    _stateValue = _stateValue ?? initialValue;

    // 상태값을 수정한다.
    function setValue(newValue){
      const oldValue = _stateValue; // 이전 상태값
      _stateValue = newValue; // 현재 상태값

      // 상태가 변경된 경우라면 리렌더링 한다.
      // Object.is(a, b): a와 b가 같은지 여부를 반환
      // 원시형 타입일때는 값만 다르면 false 가 되므로 render() 호출됨
      // 객체일때 객체 내부의 속성값이 바뀌었다고 해도 같은 메모리 주소를 가지고 있으면 true가 되므로 render() 호출 안됨
      if(!Object.is(oldValue, newValue)){
        _root.render();
      }
    }

    // const [count, setCount] = Reaction.useState(0);
    return [_stateValue, setValue];
  }
};
export default reaction;

// const a = [10];
// const b = [10];
// useState(a);
// setValue(b); // 같은 객체가 아니기 때문에 render가 호출된다.

// const a = [10];
// a.push(20); // [10, 20]
// useState(a);
// setValue(a); // 같은 객체이기 때문에 render가 호출안됨

// const a = [10];
// const a2 = [ ...a ];
// a2.push(20); // [10, 20]
// useState(a);
// setValue(a2); // 같은 객체이기 아니리 때문에 render가 호출됨

