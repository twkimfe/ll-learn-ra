import { Component } from 'react'; // 노드 패키지
// import ChildComponent from '../src/FunctionBase'; // 사용자 정의 모듈
import ChildComponent from './FunctionBase'; // 사용자 정의 모듈

class App extends Component {
  render() {
    return (
      <ChildComponent />
    );
  }
}

export default App
