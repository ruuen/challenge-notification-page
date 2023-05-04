import "./GroupItem.scss";
import unreadIcon from "../../../media/images/unread-icon.svg";

export default function GroupItem({ notification, getTimeElapsed }) {
  const isJoinGroup = notification.type === "joinGroup" ? true : false;

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
          <span className="notifications__action">{isJoinGroup ? `has joined your group` : `left the group`}</span>
          <a href={notification.data.url} className="notifications__target">
            {notification.data.title}
          </a>
          {notification.isUnread && (
            <div className="notifications__icon">
              <img src={unreadIcon} alt="Unread message" />
            </div>
          )}
        </div>
        <span className="notifications__timestamp">{getTimeElapsed(notification.timestamp)}</span>
        {/* <div className="notifications__private-message">
          </div> */}
      </div>
    </li>
  );
}
