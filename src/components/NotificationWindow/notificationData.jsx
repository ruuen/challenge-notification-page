// temp imports until http urls can be specified
import imageMark from "../../media/images/avatar-mark-webber.webp";

export const initialState = [
  {
    id: Date.now(),
    isUnread: true,
    timestamp: Date.now(),
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
];
