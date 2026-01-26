import { cardDetails } from "../data/card";
import "../styles/card.scss";

function UserCard() {
  return (
    <div className="user-card">
      {cardDetails.map((c, index) => (
        <div key={index} className="user-card__item">
          <p
            className="user-card__image"
            style={{ backgroundColor: c.bgColor }}
          >
            <c.icon
              className="user-card__icon"
              style={{ color: c.iconColor }}
            />
          </p>
          <h4 className="user-card__title">{c.title}</h4>
          <p className="user-card__amount">{c.amount.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
export default UserCard;
