import { useState } from "react";
import ReactionItem from "../ReactionItem/ReactionItem";
import { initialState } from "./notificationData";

export default function NotificationWindow() {
  const [notifications, setNotifications] = useState(initialState);

  const notificationElements = notifications.map((item) => {
    switch (item.type) {
      case "react":
        return <ReactionItem key={item.id} notification={item} />;
      default:
        return <li></li>;
    }
  });

  return (
    <section className="notifications">
      <header className="notifications__header">
        <div>
          <h1 className="notifications__header-title">Notifications</h1>
          <span></span>
        </div>
        <a href="#">Mark all as read</a>
      </header>
      <ul className="notifications__list">{notificationElements}</ul>
    </section>
  );
}
