import { useState } from "react";
import { initialState } from "./notificationData";
import "./NotificationWindow.scss";
import "../NotificationItems/NotificationItem.scss";
import ReactionItem from "../NotificationItems/ReactionItem/ReactionItem";
import FollowItem from "../NotificationItems/FollowItem/FollowItem";
import GroupItem from "../NotificationItems/GroupItem/GroupItem";
import MessageItem from "../NotificationItems/MessageItem/MessageItem";
import CommentItem from "../NotificationItems/CommentItem/CommentItem";
import { DateTime, Settings } from "luxon";

export default function NotificationWindow() {
  Settings.throwOnInvalid = true;

  const [notifications, setNotifications] = useState(initialState);

  const notificationElements = notifications.map((item) => {
    switch (item.type) {
      case "react":
        return <ReactionItem key={item.id} notification={item} getTimeElapsed={getTimeElapsed} />;
      case "follow":
        return <FollowItem key={item.id} notification={item} getTimeElapsed={getTimeElapsed} />;
      case "joinGroup":
      case "leaveGroup":
        return <GroupItem key={item.id} notification={item} getTimeElapsed={getTimeElapsed} />;
      case "message":
        return <MessageItem key={item.id} notification={item} getTimeElapsed={getTimeElapsed} />;
      case "comment":
        return <CommentItem key={item.id} notification={item} getTimeElapsed={getTimeElapsed} />;
      default:
        return <></>;
    }
  });

  function getUnreadCount() {
    const unreadNotifications = notifications.filter((item) => item.isUnread === true);
    return unreadNotifications.length;
  }

  function handleMarkAsRead() {
    setNotifications((prevState) => {
      return prevState.map((item) => {
        return {
          ...item,
          isUnread: false,
        };
      });
    });
  }

  function getTimeElapsed(ISOString) {
    let eventDateTime;
    try {
      eventDateTime = DateTime.fromISO(ISOString);
    } catch (error) {
      throw error;
    }
    const diff = DateTime.now().diff(eventDateTime, ["years", "months", "weeks", "days", "hours", "minutes"]);
    const { years, months, weeks, days, hours, minutes } = diff.values;

    if (years > 0) return `${Math.round(years)} ${years === 1 ? "year" : "years"} ago`;
    if (months > 0) return `${Math.round(months)} ${months === 1 ? "month" : "months"} ago`;
    if (weeks > 0) return `${Math.round(weeks)} ${weeks === 1 ? "week" : "weeks"} ago`;
    if (days > 0) return `${Math.round(days)} ${days === 1 ? "day" : "days"} ago`;
    if (hours > 0) return `${Math.round(hours)}hr ago`;
    if (minutes > 0) return `${Math.round(minutes)}m ago`;
    return `just now`;
  }

  return (
    <section className="notifications">
      <header className="notifications__header">
        <div className="notifications__header-group">
          <h1 className="notifications__header-title">Notifications</h1>
          <span className="notifications__unread-count">{getUnreadCount()}</span>
        </div>
        <button className="notifications__header-btn" onClick={handleMarkAsRead}>
          Mark all as read
        </button>
      </header>
      <ul className="notifications__list">{notificationElements}</ul>
    </section>
  );
}
