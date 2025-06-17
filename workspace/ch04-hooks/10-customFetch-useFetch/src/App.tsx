import useFetch from "@hooks/useFetch";

function App() {
  const { isLoading, error, data } = useFetch({ url: '/todolist?delay=1000' })

  console.log('App 렌더링', isLoading, error, data);

  return (
    <>
      <h1>10 customHook - useFetch, useAxios 커스텀 훅 사용</h1>
      <h2>할일 목록</h2>

      {/* 로딩중일 때 로딩중 메시지 표시 */}
      { isLoading && 
        <p>로딩중...</p>
      }

      {/* 에러가 있을 경우 빨간색으로 에러 메시지 표시 */}
      { error && <p style={{ color: 'red' }}>{ error.message }</p> }

      {/* Todo 목록을 리스트로 렌더링 */}
      <ul>
        { data?.items.map((item) => (
          <li key={item._id}>{item.title}</li>
        )) }
      </ul>
    </>
  );
}

export default App
