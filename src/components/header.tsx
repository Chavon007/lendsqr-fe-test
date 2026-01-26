import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../assets/Union.png";
import lendsqr from "../assets/lendsqr.png";
import profile from "../assets/profile.png";
import "../styles/header.scss";
function Header() {
  return (
    <div className="header">
      {/* logo */}
      <div className="logo">
        <img src={logo} alt="logo" className="logo__icon" />
        <img src={lendsqr} alt="lendsqr" className="logo__lendsqr" />
      </div>
      {/* search */}
      <div className="search">
        <div className="search__border">
          <input
            type="text"
            placeholder="Search for anything"
            className="search__input"
          />
          <div className="search__icon">
            <CiSearch className="search__icon1" />
          </div>
        </div>
      </div>

      {/* notfication */}
      <div className="notification">
        <div className="notification__doc">
          <Link className="notification__link" to="">
            Doc
          </Link>
        </div>

        <div className="notification__bell">
          <GoBell className="notification__bell1" />
        </div>

        <div className="notification__profile1">
          <div className="notification__image">
            {" "}
            <img src={profile} alt="adedeji" className="notification__image1" />
          </div>
          <div className="notification__text">
            {" "}
            <p className="notification__name">
              <span  className="notification__name1">Adedeji</span>
              <span className="notification__name2">
                <IoMdArrowDropdown />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
