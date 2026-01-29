import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { Outlet } from "react-router-dom";
import "../src/styles/layout.scss"

function Layout() {
  return (
    <div className="layout">
      <header className="layout__header">
        <Header />
      </header>

      <div className="layout__body">
        <aside className="layout__sidebar">
          <Sidebar />
        </aside>

        <main className="layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
