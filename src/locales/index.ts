import { en, Translations } from './en';
import { th } from './th';

export type Language = 'en' | 'th';

export const locales: Record<Language, Translations> = {
  en,
  th,
};

export * from './en';
export * from './th';
