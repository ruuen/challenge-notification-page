import "./ReactionItem.scss";
import unreadIcon from "../../../media/images/unread-icon.svg";

export default function ReactionItem({ notification, getTimeElapsed }) {
  return (
    <li
      className={`notifications__item notifications__${notification.type} ${
        notification.isUnread && "notifications__item--unread"
      }`}
    >
      <img src={notification.sourceUser.photo} className="notifications__item-image" alt="Other user" />
      <div className="notifications__item-body">
        <div className="notifications__body-group">
          <a href="#" className="notifications__user">
            {notification.sourceUser.name}
          </a>
          <span className="notifications__action">reacted to your recent {notification.data.content}</span>
          <a href="#" className="notifications__target">
            {notification.data.title}
          </a>
          {notification.isUnread && (
            <div className="notifications__icon">
              <img src={unreadIcon} alt="Unread message" />
            </div>
          )}
        </div>
        <span className="notifications__timestamp">{getTimeElapsed(notification.timestamp)}</span>
      </div>
    </li>
  );
}
