import { Profile } from '@/types/profile';
import { navigationData } from './navigation';

export const profileData: Profile = {
  name: 'Phanoo Ngamchaliaw',
  greeting: "HELLO, I'M PHANOO.",
  role: 'IT Developer',
  title: 'Phanoo Ngamchaliaw',
  bio: 'I create modern web applications and digital experiences that combine reliable functionality with thoughtful visual design.',
  description:
    'I\'m a fourth-year Information Technology student focused on building modern web applications, system integrations, and practical digital solutions through technology and design.',
  avatar: '/images/hero/profile.webp',
  location: 'Bangkok',
  email: 'phanoo.ngam@bumail.net',
  availability: 'Available for Internship / Co-op',
  stats: [
    { label: 'Focus Area', value: 'Web & AI' },
    { label: 'Projects Built', value: '15+' },
    { label: 'Design System', value: 'Modern' },
    { label: 'Status', value: 'Active' },
  ],
  socialLinks: navigationData.socialLinks,
};
