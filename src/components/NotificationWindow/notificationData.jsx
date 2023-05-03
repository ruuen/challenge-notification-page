// temp imports until http urls can be specified
import imageMark from "../../media/images/avatar-mark-webber.webp";
import imageAngela from "../../media/images/avatar-angela-gray.webp";
import imageJacob from "../../media/images/avatar-jacob-thompson.webp";
import imageRizky from "../../media/images/avatar-rizky-hasanuddin.webp";
import imageKimberly from "../../media/images/avatar-kimberly-smith.webp";
import imageChess from "../../media/images/image-chess.webp";

export const initialState = [
  {
    id: 1,
    isUnread: true,
    timestamp: new Date().toJSON(),
    type: "react",
    sourceUser: {
      name: "Mark Webber",
      photo: imageMark,
    },
    data: {
      content: "post",
      title: "My first tournament today!",
      url: "#",
      // title
      // photo
      // privateMessage
    },
  },
  {
    id: 2,
    isUnread: true,
    timestamp: new Date().toJSON(),
    type: "follow",
    sourceUser: {
      name: "Angela Gray",
      photo: imageAngela,
    },
    data: {},
  },
  {
    id: 3,
    isUnread: true,
    timestamp: new Date().toJSON(),
    type: "joinGroup",
    sourceUser: {
      name: "Jacob Thompson",
      photo: imageJacob,
    },
    data: {
      content: "group",
      title: "Chess Club",
      url: "#",
      // photo:
      // privateMessage:
    },
  },
  {
    id: 4,
    isUnread: false,
    timestamp: new Date().toJSON(),
    type: "message",
    sourceUser: {
      name: "Rizky Hasanuddin",
      photo: imageRizky,
    },
    data: {
      // content:
      // title:
      // url:
      // photo:
      privateMessage:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
  },
  {
    id: 5,
    isUnread: false,
    timestamp: new Date().toJSON(),
    type: "comment",
    sourceUser: {
      name: "Kimberly Smith",
      photo: imageKimberly,
    },
    data: {
      content: "picture",
      // title:
      url: "#",
      photo: imageChess,
      // privateMessage:
    },
  },
];
