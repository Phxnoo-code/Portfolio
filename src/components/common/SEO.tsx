import React, { useEffect } from 'react';
import { profileData } from '@/data/profile';

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

/**
 * Reusable SEO & Metadata Head Handler
 * Updates page title, meta description, Open Graph tags, and theme meta tag dynamically.
 */
export const SEO: React.FC<SEOProps> = ({
  title = `${profileData.name} | ${profileData.role}`,
  description = profileData.description,
  image = profileData.avatar,
  type = 'website',
}) => {
  useEffect(() => {
    // Dynamic document title
    document.title = title;

    // Helper to update meta property/name tags
    const updateMetaTag = (selector: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        const isProperty = selector.includes('property');
        const attrName = isProperty ? 'property' : 'name';
        const attrValue = selector.match(/["'](.*?)["']/)?.[1] || '';
        element.setAttribute(attrName, attrValue);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    updateMetaTag('meta[name="description"]', description);
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:image"]', image);
    updateMetaTag('meta[property="og:type"]', type);
    updateMetaTag('meta[name="twitter:card"]', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', title);
    updateMetaTag('meta[name="twitter:description"]', description);
    updateMetaTag('meta[name="twitter:image"]', image);
  }, [title, description, image, type]);

  return null;
};

SEO.displayName = 'SEO';
