import { Certificate } from '@/types/certificates';

export const featuredCertificates: Certificate[] = [
  {
    id: 'cert-1',
    title: 'AI Mini Hackathon 2026',
    issuer: 'Bangkok University',
    date: '2026',
    image: '/images/certificates/ai-hackathon.jpg',
    description: 'Collaborative competition focused on solving real-world challenges using generative AI and automation.',
    credentialUrl: 'https://www.bu.ac.th',
    skills: ['AI Technology', 'Hackathon', 'Innovation'],
    category: 'AI & Innovation',
  },
  {
    id: 'cert-2',
    title: 'Cybersecurity Foundation Course',
    issuer: 'NCSA (National Cyber Security Agency)',
    date: '2026',
    image: '/images/certificates/cybersecurity.png',
    description: 'Fundamental training on national security frameworks, threat mitigation, and cyber safety practices.',
    credentialUrl: 'https://www.ncsa.or.th',
    skills: ['Cybersecurity', 'Threat Analysis', 'National Security'],
    category: 'Information Security',
  },
];

export const additionalCertificates: Certificate[] = [
  {
    id: 'add-1',
    title: 'Speexx English Program',
    issuer: 'Speexx',
    date: '2026',
    image: '/images/certificates/speexx.jpg',
    description: 'English Proficiency course validating professional business communication skills.',
    category: 'English Proficiency',
    skills: ['English B1.1', 'CEFR B1.1'],
    imagePosition: 'object-[center_10%]',
  },
];
