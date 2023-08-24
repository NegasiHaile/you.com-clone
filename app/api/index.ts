import { chatHostory } from "@/mock/chat-history";

export const requestAnswer = async (input: string) => {
  return await {
    id: new Date().toDateString(),
    chatTitle: " This is new chat",
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
  };
};

export const getChatHistory = async () => {
  return await chatHostory;
};
