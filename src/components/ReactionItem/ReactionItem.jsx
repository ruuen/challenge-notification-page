// Temp image import until data file with http urls is assembled
import imageMark from "../../media/images/avatar-mark-webber.webp";
import { NOTIFICATION_TYPE } from "../NotificationWindow/notificationData";

export default function ReactionItem({ notification }) {
  return (
    <li className="notifications__item">
      <img src={imageMark} className="notifications__item-image" alt="Other user" />
      <div className="notifications__item-body">
        <div className="notifications__body-group">
          <span className="notifications__user">{notification.sourceUser.name}</span>
          <span className="notifications__action">reacted to your recent {notification.data.content}</span>
          <a href={notification.data.url} className="notifications__target">
            {notification.data.title}
          </a>
          {notification.isUnread && <span className="notifications__icon">Unread</span>}
        </div>
        <span className="notifications__timestamp">{notification.timestamp}</span>
        {/* <div className="notifications__private-message">
      </div> */}
      </div>
    </li>
  );
}
