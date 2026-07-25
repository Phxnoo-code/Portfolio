import { NavigationConfig } from '@/types/navigation';

/**
 * Centralized Navigation Configuration
 * Decouples navigation links, social platforms, and brand labeling from presentation components.
 */
export const navigationData: NavigationConfig = {
  brand: {
    name: 'Phanoo Ngamchaliaw',
    role: 'PHANOO',
    logoText: 'PHANOO',
  },
  navItems: [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'certificates', label: 'Certificates', href: '#certificates' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],
  socialLinks: [
    { id: 'github', platform: 'GitHub', url: 'https://github.com', iconName: 'Github' },
    { id: 'linkedin', platform: 'LinkedIn', url: 'https://linkedin.com', iconName: 'Linkedin' },
    { id: 'twitter', platform: 'Twitter / X', url: 'https://twitter.com', iconName: 'Twitter' },
    { id: 'mail', platform: 'Email', url: 'mailto:contact@example.com', iconName: 'Mail' },
  ],
  footerSections: [
    {
      title: 'Navigation',
      links: [
        { id: 'f-about', label: 'About Me', href: '#about' },
        { id: 'f-skills', label: 'Skills & Tech', href: '#skills' },
        { id: 'f-projects', label: 'Featured Work', href: '#projects' },
        { id: 'f-certificates', label: 'Certificates & Awards', href: '#certificates' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { id: 'f-github', label: 'GitHub Profile', href: 'https://github.com' },
        { id: 'f-contact', label: 'Contact Form', href: '#contact' },
      ],
    },
  ],
  ctaButton: {
    label: 'Contact Me',
    href: '#contact',
  },
};
