import UserCard from "../../components/card";
import Users from "../../components/userslist";

import "../../styles/mainUser.scss";

function MainUsers() {
  return (
    <div className="users-page">
      <div className="users-page__header">
        <h3 className="users-page__title">Users</h3>
      </div>

      <div className="users-page__content">
        <span className="users-page__stats">
          <UserCard />
        </span>

        <span className="users-page__table">
          <Users />
        </span>
      </div>
    </div>
  );
}

export default MainUsers;
