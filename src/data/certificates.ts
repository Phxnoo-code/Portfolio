import { Certificate } from '@/types/certificates';

/**
 * Centralized Certificates Configuration Data
 * Decouples achievement records and verified credential data from presentation components.
 */
export const certificatesData: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Meta Frontend Developer Professional Certificate',
    issuer: 'Meta / Coursera',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive program covering React, JavaScript ES6+, Version Control, UI/UX design principles, and frontend architecture.',
    credentialUrl: 'https://coursera.org',
    skills: ['React', 'JavaScript', 'CSS3', 'Git'],
  },
  {
    id: 'cert-2',
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google / Coursera',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
    description: 'Foundational UX research, wireframing, prototyping, usability testing, and visual design systems for digital products.',
    credentialUrl: 'https://coursera.org',
    skills: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping'],
  },
  {
    id: 'cert-3',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    description: 'Fundamental understanding of AWS Cloud concepts, security, technology, architecture, and deployment models.',
    credentialUrl: 'https://aws.amazon.com',
    skills: ['Cloud Architecture', 'AWS S3', 'Serverless', 'Security'],
  },
];
