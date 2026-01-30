import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import General from "../components/general";
import { useUser } from "../hooks/userDetails";
import "../styles/useDetails.scss";
import { IoIosArrowRoundBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";



const tabs = [
  "General Details",
  "Documents",
  "Bank details",
  "Loans",
  "Savings",
  "App and System",
];

function UserDetails() {
  const { id } = useParams();
  const { user, loading } = useUser(id);
  const [activeTab, setActiveTab] = useState("General Details");

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div className="user-details">
      {/* Back */}
      <Link to="/users" className="user-details__back">
        <span className="user-details__icon">
          <IoIosArrowRoundBack />
        </span>
        <span className="user-details__text">Back to users</span>
      </Link>

      {/* Header */}
      <div className="user-details__header">
        <div className="user-details__title">
          {" "}
          <h3 className="user-details__text1">User Details</h3>
        </div>

        <div className="user-details__button">
          <button className=" user-details__button--blacklist">
            Blacklist User
          </button>
          <button className=" user-details__button--activate">
            Activate User
          </button>
        </div>
      </div>

      {/* User summary */}
      <div className="user-details__summary">
        <div className="user-details__pro">
          <div className="user-details__pro1">
            <div className="user-details__image">
              <CgProfile className="user-details__image1" />
            </div>
            <div className="user-details__name1">
              <h4 className="user-details__name">{user.fullName}</h4>
              <small className="user-details__id">{user.id.slice(-15)}</small>
            </div>
          </div>

          <div className="user-details__tier">
            <h6 className="user-details__tier-label">User Tier</h6>

           <p className="user-details__tier-value">
  {[1, 2, 3].map((star) =>
    star <= user.tier ? (
      <AiFillStar key={star} color="#e9b200" size={16} />
    ) : (
      <AiOutlineStar key={star} color="#e0e0e0" size={16} />
    )
  )}
</p>
          </div>

          <div className="user-details__account">
            <h6 className="user-details__balance">{user.accountBalance}</h6>
            <p className="user-details__account-info">
              {user.accountNumber}/{user.bankName}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="user-details__tabs">
          {tabs.map((t) => (
            <p
              key={t}
              onClick={() => setActiveTab(t)}
              className={`user-details__tab ${
                activeTab === t ? "user-details__tab--active" : "user-details__tab--noactive"
              }`}
            >
              {t}
            </p>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="user-details__content">
        {activeTab === "General Details" && <General user={user} />}
       
      </div>
    </div>
  );
}

export default UserDetails;
