import { useState } from "react";
import ReactionItem from "../ReactionItem/ReactionItem";
import { initialState } from "./notificationData";
import FollowItem from "../FollowItem/FollowItem";
import GroupItem from "../GroupItem/GroupItem";
import MessageItem from "../MessageItem/MessageItem";
import CommentItem from "../CommentItem/CommentItem";

export default function NotificationWindow() {
  const [notifications, setNotifications] = useState(initialState);

  const notificationElements = notifications.map((item) => {
    switch (item.type) {
      case "react":
        return <ReactionItem key={item.id} notification={item} />;
      case "follow":
        return <FollowItem key={item.id} notification={item} />;
      case "joinGroup":
      case "leaveGroup":
        return <GroupItem key={item.id} notification={item} />;
      case "message":
        return <MessageItem key={item.id} notification={item} />;
      case "comment":
        return <CommentItem key={item.id} notification={item} />;
      default:
        return <></>;
    }
  });

  return (
    <section className="notifications">
      <header className="notifications__header">
        <div>
          <h1 className="notifications__header-title">Notifications</h1>
          <span className="notifications__unread-count">3</span>
        </div>
        <a href="#">Mark all as read</a>
      </header>
      <ul className="notifications__list">{notificationElements}</ul>
    </section>
  );
}
