import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import General from "../components/general";
import { useUser } from "../hooks/userDetails";

// import Bank from "../components/bank";
// import Documents from "../components/documents";
// import Loan from "../components/loan";
// import Savings from "../components/savings";
// import AppSystem from "../components/appSystem";

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
      <Link to="/" className="user-details__back">
        Back to users
      </Link>

      {/* Header */}
      <div className="user-details__header">
        <h3 className="user-details__title">User Details</h3>
        <button className="user-details__button user-details__button--blacklist">
          Blacklist User
        </button>
        <button className="user-details__button user-details__button--activate">
          Activate User
        </button>
      </div>

      {/* User summary */}
      <div className="user-details__summary">
        <h4 className="user-details__name">{user.fullName}</h4>
        <small className="user-details__id">{user.id}</small>

        <div className="user-details__tier">
          <h6 className="user-details__tier-label">User Tier</h6>
          <p className="user-details__tier-value">{user.tier}</p>
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
              activeTab === t ? "user-details__tab--active" : ""
            }`}
          >
            {t}
          </p>
        ))}
      </div>

      {/* Tab content */}
      <div className="user-details__content">
        {activeTab === "General Details" && <General user={user} />}
        {activeTab === "Bank details" && <Bank user={user} />}
        {activeTab === "Documents" && <Documents user={user} />}
        {activeTab === "Loans" && <Loan user={user} />}
        {activeTab === "Savings" && <Savings user={user} />}
        {activeTab === "App and System" && <AppSystem user={user} />}
      </div>
    </div>
  );
}

export default UserDetails;