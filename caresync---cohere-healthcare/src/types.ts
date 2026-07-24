export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
}

export interface GpuModel {
  name: string;
  vram: string;
  architecture: string;
  throughput: string;
  latency: string;
  pricePerHour: string;
  recommendedFor: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviewsCount: number;
  availableSlot: string;
  avatar: string;
}

export interface CalorieData {
  day: string;
  consumed: number;
  goal: number;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  ageGroup: string;
  subject: string;
  message: string;
  subscribeNewsletter: boolean;
}
