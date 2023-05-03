export default function FollowItem({ notification }) {
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
          <span className="notifications__action">followed you</span>
          {notification.isUnread && (
            <span className="notifications__icon">Unread</span>
          )}
        </div>
        <span className="notifications__timestamp">
          {notification.timestamp}
        </span>
      </div>
    </li>
  );
}
