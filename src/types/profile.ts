import { SocialLink } from './navigation';

export interface Profile {
  name: string;
  role: string;
  title: string;
  greeting?: string;
  bio: string;
  description: string;
  avatar: string;
  location: string;
  email: string;
  availability: string;
  stats: Array<{ label: string; value: string }>;
  socialLinks: SocialLink[];
}
