import Home from "@pages/Home";
import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";
import { useEffect, useState } from "react";

function App() {
  // 현재 URL을 상태로 관리
  const [ currentPath, setCurrentPath ] = useState( location.pathname )

  // 컴포넌트 mount 될 때 이전 이벤트 핸들러 등록
  useEffect(()=> {
    // URL 변경 시 컴포넌트 교체
    const handleLocationChange = () => {
    console.log(location.pathname, "으로 주소 변경됨");
    // APP이 리렌더링 되어야한다
    setCurrentPath( location.pathname )
  };

  // popstate 이벤트가 발생 시, handleLocationChange 호출
  window.addEventListener("popstate", handleLocationChange);

  return ()=> {
    window.removeEventListener('popstate', handleLocationChange)
    }
  },[]); // 빈배열 전달 시, mount/unmount 시 한번만 호출

  // URL에 맞는 컴포넌트를 반환
  const renderComponent = () => {
    switch ( currentPath ) {
      case "/":
      case "/home":
        return <Home />;
      case "/page1":
        return <Page1 />;
      case "/page2":
        return <Page2 />;
      default:
        return <p>404에러</p>;
    }
  };

  return (
    <>
      { renderComponent() }
    </>
  );
}

export default App;