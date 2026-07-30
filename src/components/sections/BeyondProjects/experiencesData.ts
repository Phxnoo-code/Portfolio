import { ExperienceItem } from './types';

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'ai-hackathon-2026',
    index: '01',
    year: '2026',
    category: 'AI & Innovation Competition',
    title: 'BU Empowering Hackathon 2026',
    tagline: 'Developing and presenting a LightGBM machine learning solution for the competition challenge.',
    story: 'Participated in the BU Empowering Hackathon 2026, where our team competed to build an AI model for a real-world challenge within a limited time. We explored different approaches, tested our ideas, and refined the model before submitting our final solution.',
    contribution: 'Worked as part of a two-person team to develop an AI model using LightGBM. My responsibilities included preparing and organizing the dataset, supporting model experimentation, and helping refine the final solution. I also contributed to preparing and delivering the final presentation, where we explained our approach and results to the judges.',
    role: 'Machine Learning Developer • Data Preparation • Presenter',
    team: '2-Person Team • BU Empowering Hackathon 2026',
    skills: ['Python', 'LightGBM', 'Pandas', 'Scikit-learn', 'Data Preparation', 'Model Evaluation', 'Machine Learning', 'Presentation'],
    achievement: {
      badge: '3rd Place Winner',
      title: 'BU Empowering Hackathon 2026',
      description: 'Achieved 3rd Place in the BU Empowering Hackathon 2026 as a two-person team by developing and presenting a LightGBM-based machine learning solution for the competition challenge.',
    },
    heroImage: {
      url: '/images/experiences/ai-hackathon-01.jpg',
      caption: 'Hero Stage View — Live presentation of our working AI prototype to judges and university panel.',
    },
    gallery: [
      {
        id: 'ai-02',
        url: '/images/experiences/ai-hackathon-02.jpg',
        caption: 'Team Collaboration — Data preparation and model experimentation session.',
        tag: 'COLLABORATION',
        aspectRatio: 'aspect-[4/3]',
      },
      {
        id: 'ai-03',
        url: '/images/experiences/ai-hackathon-03.jpg',
        caption: 'Final Presentation — Presenting model architecture, approach, and results to judges.',
        tag: 'PRESENTATION',
        aspectRatio: 'aspect-[16/10]',
      },
      {
        id: 'ai-04',
        url: '/images/experiences/ai-hackathon-04.jpg',
        caption: 'Awards Stage — Celebrating 3rd Place win with team member.',
        tag: 'CELEBRATION',
        aspectRatio: 'aspect-[4/3]',
      },
    ],
    highlights: [
      {
        number: '01',
        title: 'Model Development',
        description: 'Worked with a LightGBM model to explore different approaches, evaluate performance, and improve the final solution for the competition.',
      },
      {
        number: '02',
        title: 'Data Preparation',
        description: 'Prepared and organized the dataset for model training, ensuring the data was clean and ready for experimentation.',
      },
      {
        number: '03',
        title: 'Presentation',
        description: 'Collaborated with my teammate to prepare and deliver the final presentation, explaining our approach, model, and competition results.',
      },
    ],
    certificate: {
      title: 'BU Empowering Hackathon 2026 Certificate of Achievement',
      issuer: 'School of Information Technology and Innovation, Bangkok University',
      date: '2026',
      image: '/images/certificates/ai-hackathon.jpg',
    },
    externalLink: {
      label: 'Bangkok University Official Showcase',
      url: 'https://www.bu.ac.th',
    },
  },
  {
    id: 'tech-showcase-2026',
    index: '02',
    year: '2026',
    category: 'Tech Exhibition & Product Showcase',
    title: 'Technology Showcase Booth',
    tagline: 'Presented our project at the university technology showcase, demonstrating its features and explaining the development process to visitors.',
    story: "Selected to present our project at Bangkok University's technology showcase. The event provided an opportunity to demonstrate the system, explain its development process, and discuss the project with students, lecturers, and visitors.",
    contribution: 'Demonstrated the project through live system walkthroughs, introduced its key features, and explained how it was developed while answering questions from visitors.',
    role: 'Project Developer • Technical Presenter',
    team: 'University Tech Group',
    skills: ['LINE Messaging API', 'Google Gemini API', 'n8n Automation', 'Webhooks', 'Team Collaboration'],
    achievement: {
      badge: 'Featured Project Showcase',
      title: 'Project Showcase',
      description: 'Presented the completed project at the university technology showcase, demonstrating its functionality and explaining the development process to visitors.',
    },
    heroImage: {
      url: '/images/experiences/showcase-01.jpg',
      caption: 'Main Exhibition Booth — Welcoming visitors and showcasing our live digital applications.',
    },
    gallery: [
      {
        id: 'sc-02',
        url: '/images/experiences/showcase-02.jpg',
        caption: 'Live Demo Interaction — Guiding event visitors through application features.',
        tag: 'USER INTERACTION',
        aspectRatio: 'aspect-[4/3]',
      },
      {
        id: 'sc-03',
        url: '/images/experiences/showcase-03.jpg',
        caption: 'Exhibition Hall Atmosphere — Vibrant interactions and technical discussions.',
        tag: 'ATMOSPHERE',
        aspectRatio: 'aspect-[16/10]',
      },
      {
        id: 'sc-04',
        url: '/images/experiences/showcase-04.jpg',
        caption: 'Behind the Scenes — Team setup and device calibration before opening.',
        tag: 'BEHIND THE SCENES',
        aspectRatio: 'aspect-[4/3]',
      },
    ],
    highlights: [
      {
        number: '01',
        title: 'Live Project Demonstration',
        description: 'Demonstrated the project through live system walkthroughs, introducing its key features and overall workflow to visitors.',
      },
      {
        number: '02',
        title: 'Technical Presentation',
        description: "Explained the project's objectives, development process, and implementation while answering questions from students, lecturers, and visitors.",
      },
      {
        number: '03',
        title: 'Team Collaboration',
        description: 'Worked closely with my teammate throughout the exhibition to present the project and ensure a smooth demonstration experience.',
      },
    ],
  },
];
