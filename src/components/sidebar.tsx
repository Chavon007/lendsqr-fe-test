import { FaBriefcase, FaHome } from "react-icons/fa";
import { Businesses, settings, customers } from "../data/sidebarData";
import { MdOutlineLogout } from "react-icons/md";
import { NavLink } from "react-router-dom"; // use NavLink instead of Link
import { RiArrowDropDownFill } from "react-icons/ri";
import "../styles/sidebar.scss";

function SiderBar() {
  // Optional: active style
  const activeClass = "sidebar__item sidebar__item--active";

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <NavLink to="/" className="sidebar__switch">
          <p className="sidebar__switch-icon">
            <FaBriefcase />
          </p>
          <h3 className="sidebar__switch-text">
            <span> Switch Organization</span>{" "}
            <span className="sidebar__switch-dropdown">
              <RiArrowDropDownFill />
            </span>
          </h3>
        </NavLink>
        
        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "sidebar__dashboard sidebar__item--active" : "sidebar__dashboard"
          }
        >
          <p className="sidebar__dashboard-icon">
            <FaHome />
          </p>
          <h3 className="sidebar__dashboard-text">Dashboard</h3>
        </NavLink>

        {/* Customers */}
        <div className="sidebar__section">
          <h4 className="sidebar__section-title">Customers</h4>
          {customers.map((c, index) => (
            <NavLink
              to={c.path}
              key={index}
              className={({ isActive }) =>
                isActive ? activeClass : "sidebar__item"
              }
            >
              <p className="sidebar__item-icon">
                <c.icon />
              </p>
              <h5 className="sidebar__item-text">{c.title}</h5>
            </NavLink>
          ))}
        </div>

        {/* Businesses */}
        <div className="sidebar__section">
          <h4 className="sidebar__section-title">Businesses</h4>
          {Businesses.map((b, index) => (
            <NavLink
              to={b.path}
              key={index}
              className={({ isActive }) =>
                isActive ? activeClass : "sidebar__item"
              }
            >
              <p className="sidebar__item-icon">
                <b.icon />
              </p>
              <h5 className="sidebar__item-text">{b.title}</h5>
            </NavLink>
          ))}
        </div>

        {/* Settings */}
        <div className="sidebar__section">
          <h4 className="sidebar__section-title">Settings</h4>
          {settings.map((s, index) => (
            <NavLink
              to={s.path}
              key={index}
              className={({ isActive }) =>
                isActive ? activeClass : "sidebar__item"
              }
            >
              <p className="sidebar__item-icon">
                <s.icon />
              </p>
              <h5 className="sidebar__item-text">{s.title}</h5>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="sidebar__footer">
        <NavLink to="/logout" className="sidebar__logout">
          <p className="sidebar__logout-icon">
            <MdOutlineLogout />
          </p>
          <h6 className="sidebar__logout-text">Logout</h6>
        </NavLink>

        <div className="sidebar__version">
          <small className="sidebar__version-text">v1.2.0</small>
        </div>
      </div>
    </div>
  );
}

export default SiderBar;
