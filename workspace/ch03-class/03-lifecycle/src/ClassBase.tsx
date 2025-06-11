import { Component } from "react";

interface ClickMeProps {
  level?: number;
}

interface ClickMeState {
  count: number;
}

class Parent extends Component {
  render() {
    return (
    <div>
      <h1>03 클래스 컴포넌트 - 컴포넌트의 라이프 사이클</h1>
      <ClickMe level={5} />
    </div>
    );
  }
}

class ClickMe extends Component<ClickMeProps, ClickMeState> {
  // 1-1 mounting 단계
  state = { count : 0 };

  constructor(props: ClickMeProps) {
    console.log('1-1 constructor 호출됨');
    super(props);
    this.state = { count: props.level || 1 };
  }

  // 1-2/2-1
  static getDerivedStateFromProps(props: ClickMeProps, state: ClickMeState) {
    //static는 인스턴스 없어, 생성자 함수의 호출을 바로 할 수 있다, static 은 생성자의 프로토타입 메서드, 메서드 정의 함수는 인스턴스 메서드
    console.log('1-2/2-1 getDerivedStateFromProps 호출됨');
    console.log('\tprops', props);
    console.log('\tstate', state);

    if (state.count / ( props.level || 1 ) > 10) {
      return { count: (props.level || 1) * 10 }; // 새로운 값으로 state 업데이트
    }
    return null; //\ state 업데이트 하지 않음
  }

  // 2-2
  shouldComponentUpdate(nextProps: ClickMeProps, nextState: ClickMeState) {
    console.log('2-2 shouldComponentUpdate 호출됨');
    console.log('\t현재값', this.props, this.state);
    console.log('\t다음값', nextProps, nextState);
    if(this.state.count === nextState.count) {
      return false; //\ render 호출 X
    } else {
      return true; //\ render 호출 O
    }

  }

  increase = () => {
    this.setState({ count: this.state.count + ( this.props.level ?? 1 )});
  }

  // 1-3/2-3
  render() {
    console.log('1-3/2-3 render 호출됨');
    console.log(document.querySelector('button')?.textContent);
    //\ render()가 안된 상태에서 querySelector를 사용해서 'button' 관련을 호출하려면 호출이 안됨

    // API 서버로 부터 데이터 페칭 불가(X)
    return (
      <div>
        클릭 횟수 X { this.props.level || 1 }: { this.state.count }
        <button onClick= { this.increase }>클릭</button>
      </div>
    );
  }
  
  // 1-4
  componentDidMount(){
    // 함수형 컴포넌트에서는 userEffect()라는 훅이 이 역할을 함
    // API 서버로부터 데이터 패칭과 같은 side effect가 발생하는 작업은 이곳에서 발생
    console.log('1-4 componentDidMount 호출됨');
    console.log(document.querySelector('button')?.textContent);
    //\ render()가 된 다음, componentDidMount()에서 querySelector를 사용해서 'button' 관련을 호출하면 호출 가능
  }
  
  // 2-4
  getSnapshotBeforeUpdate(prevProps: ClickMeProps, prevState: ClickMeState) {
    console.log('2-4 getSnapshotBeforeUpdate 호출됨');
    return 'hello'
  }
  
  // 2-5
  componentDidUpdate(prevProps: ClickMeProps, prevState: ClickMeState, snapshot: string) {
    console.log('2-5 componentDidUpdate 호출됨');
    console.log('\t이전값', prevProps, prevState);
    console.log('\t현재값', this.props, this.state);
    console.log('\tsnapshot', snapshot);
  }

  // 3-1
  componentWillUnmount(): void {
    console.log('3-1 componentWillUnmount 호출됨');
  }
}

export default Parent