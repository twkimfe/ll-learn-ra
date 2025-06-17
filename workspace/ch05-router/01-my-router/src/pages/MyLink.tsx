import type React from "react";

interface MyLinkProps {
  children: React.ReactNode;
  to: string;
}

function MyLink({ children, to }:MyLinkProps ) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    //브라우저 기본동작(페이지 이동) 취소
    e.preventDefault();

    // History API를 사용, 주소 변경 및 히스토리 추가
    history.pushState(null, '', to);
    
    // URL 변경되었음을 알리는 popstate 이벤트를 수동으로 발생
    // APP 컴포넌트에서 이 이벤트를 감지, URL에 맞는 화면을 리렌더링
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  
  return (
    <a href={to} onClick={ handleClick }>{ children }</a>
  )
}

export default MyLink;