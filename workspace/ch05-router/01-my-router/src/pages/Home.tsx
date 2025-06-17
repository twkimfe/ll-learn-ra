import Header from "@pages/components/Header";

function Home() {
  // URL 변경 시 컴포넌트 교체
  const handleLocationChange = () => {
    console.log(location.pathname, '으로 주소 변경됨');
  }

  // popstate 이벤트가 발생 시, handleLocationChange 호출
  window.addEventListener('popstate', handleLocationChange)

  return (
    <>
      <Header />
      <h2>SPA Home</h2>
    </>
  );
}

export default Home;