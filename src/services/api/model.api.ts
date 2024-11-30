import { IConversation, IRecord } from "@/types";
import instance from "./axios";

type QuestionType = {
  question: string;
  answers: string[];
  conversationId: string;
  version: number;
};

const getAnswerByUser = (data: QuestionType) => {
  return instance.post("/user/question", data);
};

const getAnswerByCustomer = (data: QuestionType) => {
  return instance.post("/customer/question", data);
};

const getConversationUser = () => {
  return instance.get<IConversation[]>("/user/conversation");
};

const getConversationContent = (id: string) => {
  return instance.get(`/user/conversation/${id}`);
};

const ratingConversationContent = (id: string, feedback: string) => {
  return instance.post(`/user/content/${id}/rate`, {
    feedback,
  });
};

export const ModelApi = {
  getAnswerByUser,
  getAnswerByCustomer,
  getConversationUser,
  getConversationContent,
  ratingConversationContent,
};
