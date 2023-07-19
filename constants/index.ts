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

export const reasonsToUseYou = [
  {
    id: 0,
    iconName: icons.time,
    title: "Your Time",
    description:
      "The multi-dimensional interface with horizontal and vertical scrolling lets you discover more in less time.",
    imageSrc: "/your-time.png",
  },

  {
    id: 1,
    iconName: icons.windows,
    title: "Your Sources",
    description:
      "Personalize your search with 150+ apps like StackOverflow, Medium, Amazon and Twitter.",
    imageSrc: "/your-source.png",
  },

  {
    id: 2,
    iconName: icons.shieldCheck,
    title: "Your Privacy",
    description:
      "Protect your data while you browse the web. A search engine free of tracking and invasive ads.",
    imageSrc: "/your-privacy.png",
  },
];

export const footerLinks = [
  {
    id: 0,
    header: "Learn more",
    items: [
      {
        id: 0,
        title: "Getting started",
        href: "https://about.you.com/hc-category/getting-started/",
      },
      {
        id: 1,
        title: "Blog",
        href: "https://blog.you.com/",
        target: "_blank",
      },
      {
        id: 2,
        title: "Help Center",
        href: "https://about.you.com/",
      },
      {
        id: 3,
        title: "FQA",
        href: "https://about.you.com/hc-category/faq/",
        target: "_blank",
      },
      {
        id: 4,
        title: "iOS App",
        href: "https://apps.apple.com/us/app/you-com-search-and-browser/id1600782099",
        target: "_blank",
      },
      {
        id: 5,
        title: "Android App",
        href: "https://play.google.com/store/apps/details?id=com.you.browser",
        target: "_blank",
      },
      {
        id: 6,
        title: "Developer Portal",
        href: "https://you.com/developers",
      },
    ],
  },

  {
    id: 1,
    header: "Contact us",
    items: [
      {
        id: 0,
        title: "Send feedback",
        href: "https://yousearch.canny.io/",
        target: "_blank",
      },
      {
        id: 1,
        title: "Join Community",
        href: "http://you.club/",
        target: "_blank",
      },
      {
        id: 2,
        title: "Terms",
        href: "https://you.com/legal/terms",
        target: "_blank",
      },
      {
        id: 3,
        title: "Privacy",
        href: "https://you.com/legal/privacy",
        target: "_blank",
      },
      {
        id: 4,
        title: "We are hiring",
        href: "https://jobs.lever.co/you",
        target: "_blank",
      },
    ],
  },

  {
    id: 2,
    header: "Features",
    items: [
      {
        id: 0,
        title: "YouChat",
        href: "https://about.you.com/youchat/",
      },
      {
        id: 1,
        title: "YouPro",
        href: "https://about.you.com/youpro/",
      },
      {
        id: 2,
        title: "Private search",
        href: "https://about.you.com/private-search",
        target: "_blank",
      },
      {
        id: 3,
        title: "App Store",
        href: "https://you.com/apps",
        target: "_blank",
      },
      {
        id: 4,
        title: "YouCode",
        href: "https://you.com/code",
      },

      {
        id: 5,
        title: "YouStudy",
        href: "https://you.com/study",
      },

      {
        id: 6,
        title: "YouSocial",
        href: "https://you.com/social",
      },

      {
        id: 7,
        title: "Bangs",
        href: "https://about.you.com/bangs/",
        target: "_blank",
      },
    ],
  },
];

export const socialMediaLinks = [
  {
    id: 0,
    icon: "/logo_round_discord.svg",
    href: "http://you.club/",
  },
  {
    id: 1,
    icon: "/logo_round_youtube.svg",
    href: "https://youtu.be/lUvN1EfmIU0",
  },
  {
    id: 2,
    icon: "/logo_round_facebook.svg",
    href: "https://www.facebook.com/YouSearchEngine/",
  },
  {
    id: 3,
    icon: "/logo_round_reddit.svg",
    href: "https://www.reddit.com/r/YouSearch/",
  },
  {
    id: 4,
    icon: "/logo_round_twitter.svg",
    href: "https://twitter.com/Negasihaile3",
  },
  {
    id: 5,
    icon: "/logo_round_linkedin.svg",
    href: "https://www.linkedin.com/in/negasi-h-abadi-173690210/",
  },
];

export const chatHistory = [
  {
    text: "Greetings! What can I do for you today?",
    role: "assistant",
    res: {},
  },
  {
    text: "What is Lesan.AI, and it is launched? Please give a detailed description about it.",
    role: "user",
  },

  {
    text: `From the search results, it seems that Lesan AI is a machine translation startup company that aims to provide fast, reliable and accurate translation services for low resource languages like Tigrinya, Amharic, and English. The company was founded with the objective of making information accessible for people who speak low-resource languages and to eliminate language barriers globally. Lesan AI has developed AI-powered tools and frameworks to support their translation services, leveraging natural language processing (NLP) techniques to improve accuracy and speed .

The company has also launched an Amharic translator for public use and recently added Tigrinya to their language portfolio. Lesan AI has partnered with Timnit Gebru's AI research institute to study and develop open-source natural language processing for low-resource languages .

It appears that Lesan AI has made significant strides in improving access to information and breaking down language barriers using artificial intelligence technologies. However, there is not enough information to determine if Lesan.AI has launched any new product or service recently, other than the Tigrinya language addition.`,
    role: "assistant",
  },
  {
    text: "Greetings! What can I do for you today?",
    role: "assistant",
    res: {},
  },
  {
    text: "What is Lesan.AI, and it is launched? Please give a detailed description about it.",
    role: "user",
  },

  {
    text: `From the search results, it seems that Lesan AI is a machine translation startup company that aims to provide fast, reliable and accurate translation services for low resource languages like Tigrinya, Amharic, and English. The company was founded with the objective of making information accessible for people who speak low-resource languages and to eliminate language barriers globally. Lesan AI has developed AI-powered tools and frameworks to support their translation services, leveraging natural language processing (NLP) techniques to improve accuracy and speed .

The company has also launched an Amharic translator for public use and recently added Tigrinya to their language portfolio. Lesan AI has partnered with Timnit Gebru's AI research institute to study and develop open-source natural language processing for low-resource languages .

It appears that Lesan AI has made significant strides in improving access to information and breaking down language barriers using artificial intelligence technologies. However, there is not enough information to determine if Lesan.AI has launched any new product or service recently, other than the Tigrinya language addition.`,
    role: "assistant",
  },
  {
    text: "Greetings! What can I do for you today?",
    role: "assistant",
    res: {},
  },
  {
    text: "What is Lesan.AI, and it is launched? Please give a detailed description about it.",
    role: "user",
  },

  {
    text: `From the search results, it seems that Lesan AI is a machine translation startup company that aims to provide fast, reliable and accurate translation services for low resource languages like Tigrinya, Amharic, and English. The company was founded with the objective of making information accessible for people who speak low-resource languages and to eliminate language barriers globally. Lesan AI has developed AI-powered tools and frameworks to support their translation services, leveraging natural language processing (NLP) techniques to improve accuracy and speed .

The company has also launched an Amharic translator for public use and recently added Tigrinya to their language portfolio. Lesan AI has partnered with Timnit Gebru's AI research institute to study and develop open-source natural language processing for low-resource languages .

It appears that Lesan AI has made significant strides in improving access to information and breaking down language barriers using artificial intelligence technologies. However, there is not enough information to determine if Lesan.AI has launched any new product or service recently, other than the Tigrinya language addition.`,
    role: "assistant",
  },
  {
    text: "Greetings! What can I do for you today?",
    role: "assistant",
    res: {},
  },
  {
    text: "What is Lesan.AI, and it is launched? Please give a detailed description about it.",
    role: "user",
  },

  {
    text: `From the search results, it seems that Lesan AI is a machine translation startup company that aims to provide fast, reliable and accurate translation services for low resource languages like Tigrinya, Amharic, and English. The company was founded with the objective of making information accessible for people who speak low-resource languages and to eliminate language barriers globally. Lesan AI has developed AI-powered tools and frameworks to support their translation services, leveraging natural language processing (NLP) techniques to improve accuracy and speed .

The company has also launched an Amharic translator for public use and recently added Tigrinya to their language portfolio. Lesan AI has partnered with Timnit Gebru's AI research institute to study and develop open-source natural language processing for low-resource languages .

It appears that Lesan AI has made significant strides in improving access to information and breaking down language barriers using artificial intelligence technologies. However, there is not enough information to determine if Lesan.AI has launched any new product or service recently, other than the Tigrinya language addition.`,
    role: "assistant",
  },
  {
    text: "Greetings! What can I do for you today?",
    role: "assistant",
    res: {},
  },
  {
    text: "What is Lesan.AI, and it is launched? Please give a detailed description about it.",
    role: "user",
  },

  {
    text: `From the search results, it seems that Lesan AI is a machine translation startup company that aims to provide fast, reliable and accurate translation services for low resource languages like Tigrinya, Amharic, and English. The company was founded with the objective of making information accessible for people who speak low-resource languages and to eliminate language barriers globally. Lesan AI has developed AI-powered tools and frameworks to support their translation services, leveraging natural language processing (NLP) techniques to improve accuracy and speed .

The company has also launched an Amharic translator for public use and recently added Tigrinya to their language portfolio. Lesan AI has partnered with Timnit Gebru's AI research institute to study and develop open-source natural language processing for low-resource languages .

It appears that Lesan AI has made significant strides in improving access to information and breaking down language barriers using artificial intelligence technologies. However, there is not enough information to determine if Lesan.AI has launched any new product or service recently, other than the Tigrinya language addition.`,
    role: "assistant",
  },
];
