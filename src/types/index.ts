import { HTMLInputTypeAttribute } from 'react';
import { IconType } from 'react-icons';

export type Route = {
  path: string;
  name: string;
};

export type Content = {
  id: string;
  heading: string;
  description: string;
  icon?: IconType;
};

export type Faq = {
  question: string;
  answer: string;
  id: string;
};

export type ContactInput = {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute | 'textarea';
  required?: boolean;
};

export type TUIContext = {
  isContactModalVisible: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
};

export type Project = {
  _id: string;
  name: string;
  description: string;
  liveUrl: string;
  imageUrl: string;
  points: string[];
  createdAt: string;
  updatedAt: string;
};
