import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { Outlet } from "react-router-dom";
import "../src/styles/layout.scss"
import { useState } from "react";
function Layout() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div className="layout">
      <header className="layout__header">
        <Header onMenuClick={() => setIsSidebarOpen((p) => !p)} />
      </header>

      <div className="layout__body">
        <aside className={`layout__sidebar ${isSidebarOpen? "open": ""}`}>
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
