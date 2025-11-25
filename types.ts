import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface Procedure {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  benefits: string[];
  recoveryTime: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[]; // Array of paragraphs for the full article
  date: string;
  author: string;
  imageUrl: string;
  contentImage?: string; // Image to be displayed inside the content body
  category: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}