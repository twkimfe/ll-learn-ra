import { Link } from "react-router";

function Header() {
  return (
    <header>
      <h1>02 리액트 라우터 사용</h1>
      <Link to="/home">home</Link>
      <br/>
      <Link to="/page1">page1</Link>
      <br/>
      <Link to="/page2">page2</Link>
    </header>
  );
}

export default Header;