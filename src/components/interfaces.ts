import { ReactNode } from "react";

//footer icons
export interface IconProps {
  hovercolor: string;
}

//layout
export interface LayoutProps {
  children: ReactNode;
  title: string;
}

export interface Post {
  id: number;
  attributes: {
    content: string;
    title: string;
    url: string;
    image: Img;
  };
}

export interface Img {
  data: {
    attributes: {
      formats: {
        medium: {
          url: string;
        };
      };
    };
  };
}

export interface Props {
  posts: Post[];
}

//pagination
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export interface ArticleProps {
  post: Post["attributes"];
}

//contact form
export interface FormValues {
  name: string;
  email: string;
  message: string;
}

//course

export interface Course {
  id: number;
  attributes: {
    description: string;
    title: string;
    url: string;
    image: Img;
    price: number;
  };
}

export interface PropsBlog {
  blogs: Course[];
}

//course components
export interface BlogProps {
  blog: Course["attributes"];
}

//modal

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface FormValuesModal {
  name: string;
  birthDate: string;
  email: string;
  address: string;
  city: string;
  cardName: string;
  cardNumber: string;
  expDate: string;
  cvc: string;
}
export interface CardDivProps {
  secondary?: boolean;
  separated?: boolean;
  filler?: boolean;
  primary?: boolean;
}
