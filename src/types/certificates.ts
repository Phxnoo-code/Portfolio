export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  credentialUrl?: string;
  skills?: string[];
  category?: string;
  imagePosition?: string;
}
