import React from 'react';
import { certificatesData } from '@/data/certificates';
import { Section } from '../../layout/Section';
import { SectionTitle } from '../../ui/SectionTitle';
import { CertificateCard } from './CertificateCard';

/**
 * Certificates Section Component
 * Uses containerSize="xl" for consistent horizontal alignment matching Hero.
 */
export const Certificates: React.FC = () => {
  return (
    <Section id="certificates" padding="lg" background="default" containerSize="xl">
      <SectionTitle
        badge="ACHIEVEMENTS & CREDENTIALS"
        title="Verified"
        titleGradient="Certificates"
        subtitle="Industry certifications, professional awards, and verified technical credentials."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {certificatesData.map((item, index) => (
          <CertificateCard key={item.id} certificate={item} index={index} />
        ))}
      </div>
    </Section>
  );
};

Certificates.displayName = 'Certificates';
