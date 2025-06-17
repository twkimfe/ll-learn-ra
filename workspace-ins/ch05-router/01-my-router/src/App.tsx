import Home from "@pages/Home";
import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";
import { useEffect, useState } from "react";

function App() {
  // 현재 URL을 상태로 관리
  const [ currentPath, setCurrentPath ] = useState(location.pathname);

  // 컴포넌트가 마운트되면 이벤트 핸들러를 등록
  useEffect(() => {
    // URL이 변경되면 컴포넌트를 교체한다.
    const handleLocationChange = () => {
      console.log(location.pathname, '으로 주소 변경됨.');
      // APP리 리렌더링 되어야한다.
      setCurrentPath(location.pathname);
    };

    // popstate 이벤트가 발생하면 handleLocationChange 호출
    window.addEventListener('popstate', handleLocationChange);

    // 컴포넌트가 언마운트되면 이벤트 핸들러를 등록
    return () => { 
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []); // 빈 배열을 전달해서 마운트/언마운트 될때 호출

  // URL에 맞는 컴포넌트를 반환
  const renderComponent = () => {
    switch(currentPath) {
      case '/':
      case '/home':
        return <Home />;
      case '/page1':
        return <Page1 />;
      case '/page2':
        return <Page2 />
      default:
        return <p>404에러</p>
    }
  };

  return (
    <>
      { renderComponent() }
    </>
  );
}

export default App
