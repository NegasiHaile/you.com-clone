import { icons } from "@/assets/icons";

export const QuickSettings = [
  {
    name: "Customize search",
    preIcon: icons.search,
    postIcon: "",
    onClick: () => null,
    subMenu: ["A", "B", "C"],
  },
  {
    name: "Private mode",
    preIcon: icons.disabled,
    postIcon: icons.downward,
    onClick: () => null,
    subMenu: ["A", "B", "C"],
  },
  {
    name: "Safe search: Moderate",
    preIcon: icons.search,
    postIcon: icons.downward,
    onClick: () => null,
    subMenu: ["A", "B", "C"],
  },

  {
    name: "Region",
    preIcon: icons.map,
    postIcon: icons.downward,
    onClick: () => null,
    subMenu: ["A", "B", "C"],
  },
  {
    name: "Activity",
    preIcon: icons.more,
    postIcon: icons.downward,
    onClick: () => null,
    subMenu: ["A", "B", "C"],
  },
  {
    name: "Recency",
    preIcon: icons.send,
    postIcon: icons.downward,
    onClick: () => null,
    subMenu: ["A", "B", "C"],
  },
  {
    name: "All settings",
    preIcon: icons.settings,
    postIcon: icons.downward,
    onClick: () => null,
    subMenu: ["A", "B", "C"],
  },
  {
    name: "Log out",
    preIcon: icons.upload,
    postIcon: "",
    onClick: () => null,
    subMenu: ["A", "B", "C"],
  },
];

export const Connects = [
  {
    name: "Send feedback",
    preIcon: icons.news,
    postIcon: "",
    onClick: () => null,
    subMenu: ["A", "B", "C"],
  },
  {
    name: "Join community",
    preIcon: icons.users,
    postIcon: icons.downward,
    onClick: () => null,
    subMenu: ["A", "B", "C"],
  },
  {
    name: "Download app",
    preIcon: icons.download,
    postIcon: icons.downward,
    onClick: () => null,
    subMenu: ["A", "B", "C"],
  },

  {
    name: "Help",
    preIcon: icons.help,
    postIcon: icons.downward,
    onClick: () => null,
    subMenu: ["A", "B", "C"],
  },
];

export const leftNavItems = [
  {
    href: "/chat",
    title: "Chat",
    icon: icons.chat,
  },
  {
    href: "/all",
    title: "All",
    icon: icons.search,
  },
  {
    href: "/images",
    title: "Images",
    icon: icons.image,
  },
  {
    href: "/videos",
    title: "Videos",
    icon: icons.video,
  },
  {
    href: "/news",
    title: "News",
    icon: icons.news,
  },
  {
    href: "/maps",
    title: "Maps",
    icon: icons.map,
  },
  {
    href: "/social",
    title: "Social",
    icon: icons.users,
  },
];

export const rightNavItems = [
  {
    href: "/join",
    title: "Join",
    icon: icons.search,
  },
  {
    href: "https://chrome.google.com/webstore/detail/youcom-search-chat-and-cr/fhplnehgjpmohhldfnjhibanpbiedofi",
    title: "Install",
    icon: icons.chat,
  },
];
