import { isRouteErrorResponse, useRouteError } from "react-router";

function ErrorPage() {

  const err = useRouteError();
  let message = '예상하지 못한 에러가 발생했습니다.';
  console.error(err);
  if(isRouteErrorResponse(err)) {
    if(err.status === 404) {
      message = '존재하지 않는 페이지입니다.';
    }
  }

  return (
    <div id="main">
      <div className="todo">
        <h2>에러 발생</h2>
        <p>{ message }</p>
      </div>
    </div>
  );
}

export default ErrorPage;