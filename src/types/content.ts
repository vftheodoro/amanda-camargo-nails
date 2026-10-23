export type ServiceCategory =
  | "alongamento-de-unhas"
  | "banho-de-gel"
  | "manicure"
  | "pedicure";

export interface Service {
  id: string;
  name: string;
  price: number;
  category?: ServiceCategory;
  duration?: string;
  unit?: string;
  description: string;
}

export interface ServicePage {
  slug: ServiceCategory;
  name: string;
  eyebrow: string;
  headline: string;
  description: string;
  detail: string;
  image: string;
  imageAlt: string;
  benefits: readonly string[];
  faqs: readonly { question: string; answer: string }[];
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  title: string;
  tag: "Francesinha" | "Nail art" | "Cores & clássicos" | "Pedicure";
  source: string;
}

export interface Business {
  name: string;
  domain: string;
  phone: string;
  displayPhone: string;
  bookingUrl: string;
  instagramUrl: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    postalCode: string;
  };
}
