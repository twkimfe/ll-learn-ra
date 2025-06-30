import BoardInfo from "@/pages/board/BoardInfo";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={ <p>게시물 상세 정보 로딩중... with Suspense</p> }>
      <BoardInfo />
    </Suspense>
  );
}

export default App
