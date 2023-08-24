// Chat history should look like this

function generateUniqueId() {
  const randomPart = Math.random().toString(36).substr(2, 9);
  return `${Date.now().toString()}-${randomPart}`;
}

export const chatHostory = [
  {
    id: generateUniqueId(),
    chatTitle: "Give me a JavaScript",
    createdAt: new Date(),
    updatedAt: new Date(),
    history: [
      {
        id: 1,
        role: "assistant",
        message: "Hey there! How can I be of assistance?",
      },
      {
        id: 2,
        role: "user",
        message:
          "What is Lesan.AI, and when it was launched? Please give a detailed description about it.",
      },
      {
        id: generateUniqueId(),
        message: `From the search results, it seems that Lesan AI is a machine translation startup company that aims to provide fast, reliable and accurate translation services for low resource languages like Tigrinya, Amharic, and English. The company was founded with the objective of making information accessible for people who speak low-resource languages and to eliminate language barriers globally. Lesan AI has developed AI-powered tools and frameworks to support their translation services, leveraging natural language processing (NLP) techniques to improve accuracy and speed .

The company has also launched an Amharic translator for public use and recently added Tigrinya to their language portfolio. Lesan AI has partnered with Timnit Gebru's AI research institute to study and develop open-source natural language processing for low-resource languages .

It appears that Lesan AI has made significant strides in improving access to information and breaking down language barriers using artificial intelligence technologies. However, there is not enough information to determine if Lesan.AI has launched any new product or service recently, other than the Tigrinya language addition.`,
        role: "assistant",
      },
    ],
  },
  {
    id: generateUniqueId(),
    chatTitle: "Give me a JavaScript",
    createdAt: new Date(),
    updatedAt: new Date(),
    history: [
      {
        id: 1,
        role: "assistant",
        message: "Hey there! How can I be of assistance?",
      },
      {
        id: 2,
        role: "user",
        message: "Give me a JavaScript code that returns sum of an array?",
      },
    ],
  },
  {
    id: generateUniqueId(),
    chatTitle: "What is chatGPT",
    createdAt: new Date(),
    updatedAt: new Date(),
    history: [
      {
        id: 1,
        role: "assistant",
        message: "Hey there! How can I be of assistance?",
      },
      {
        id: 2,
        role: "user",
        message: "WHat is ChatGPT and when it is launched?",
      },
    ],
  },
];
