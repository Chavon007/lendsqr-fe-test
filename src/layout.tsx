import Header from "./components/header";
import SiderBar from "./components/sidebar"; // Make sure the import name matches your file
import { Outlet, useNavigate } from "react-router-dom";
import "../src/styles/layout.scss";
import { useState } from "react";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    
    // Redirect to login page
    navigate("/");
    
    // Optional: Close sidebar on mobile after logout
    setIsSidebarOpen(false);
  };

  return (
    <div className="layout">
      <header className="layout__header">
        <Header 
          onMenuClick={() => setIsSidebarOpen((p) => !p)} 
          isMenuOpen={isSidebarOpen}
        />
      </header>

      <div className="layout__body">
        <aside className={`layout__sidebar ${isSidebarOpen ? "open" : ""}`}>
          <SiderBar onLogout={handleLogout} />
        </aside>

        <main className="layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;