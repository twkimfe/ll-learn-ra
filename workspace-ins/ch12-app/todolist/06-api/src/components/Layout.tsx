import Footer from "@components/Footer";
import Header from "@components/Header";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="todoapp">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;