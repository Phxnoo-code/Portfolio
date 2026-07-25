export interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  iconName: string;
}

export interface FooterLinkSection {
  title: string;
  links: NavItem[];
}

export interface NavigationConfig {
  brand: {
    name: string;
    role: string;
    logoText: string;
  };
  navItems: NavItem[];
  socialLinks: SocialLink[];
  footerSections: FooterLinkSection[];
  ctaButton: {
    label: string;
    href: string;
  };
}
