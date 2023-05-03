export default function MessageItem({ notification }) {
  return (
    <li className="notifications__item">
      <img
        src={notification.sourceUser.photo}
        className="notifications__item-image"
        alt="Other user"
      />
      <div className="notifications__item-body">
        <div className="notifications__body-group">
          <span className="notifications__user">
            {notification.sourceUser.name}
          </span>
          <span className="notifications__action">
            sent you a private message
          </span>
          {notification.isUnread && (
            <span className="notifications__icon">Unread</span>
          )}
        </div>
        <span className="notifications__timestamp">
          {notification.timestamp}
        </span>
        <div className="notifications__pm-box">
          <span className="notifications__pm-text">
            {notification.data.privateMessage}
          </span>
        </div>
      </div>
    </li>
  );
}
