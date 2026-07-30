export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  tag: string;
  aspectRatio?: string;
  gridSpan?: string;
}

export interface HighlightItem {
  number: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  index: string;
  year: string;
  category: string;
  title: string;
  tagline: string;
  story: string;
  contribution: string;
  role: string;
  team: string;
  skills: string[];
  achievement?: {
    badge: string;
    title: string;
    description: string;
  };
  heroImage: {
    url: string;
    caption: string;
  };
  gallery: GalleryImage[];
  highlights: HighlightItem[];
  certificate?: {
    title: string;
    issuer: string;
    date: string;
    image: string;
  };
  externalLink?: {
    label: string;
    url: string;
  };
}
