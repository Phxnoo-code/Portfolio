import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import { Certificate } from '@/types/certificates';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';

export interface CertificateCardProps {
  certificate: Certificate;
  index?: number;
}

/**
 * Reusable CertificateCard Primitive
 * Displays certificate preview image, title, issuing org, date, skills chips, and optional credential link.
 */
export const CertificateCard: React.FC<CertificateCardProps> = ({
  certificate,
  index = 0,
}) => {
  const { title, issuer, date, image, description, credentialUrl, skills } = certificate;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Card variant="interactive" className="h-full flex flex-col p-0 overflow-hidden group">
        {/* Certificate Image Preview Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
          
          {/* Issuer Tag Badge */}
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="solid" color="neutral" size="sm" leftIcon={<Award size={12} className="text-primary" />}>
              {issuer}
            </Badge>
          </div>

          {/* Date Tag */}
          <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 text-xs font-mono text-text-secondary bg-background/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-border/60">
            <Calendar size={12} className="text-primary" />
            <span>{date}</span>
          </div>
        </div>

        {/* Certificate Content */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-display font-extrabold tracking-tight text-text-primary group-hover:text-primary transition-colors leading-snug">
              {title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed font-sans line-clamp-3">
              {description}
            </p>
          </div>

          {/* Skill Badges */}
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {skills.map((skill, idx) => (
                <Badge key={idx} variant="soft" color="neutral" size="sm">
                  {skill}
                </Badge>
              ))}
            </div>
          )}

          {/* Credential Action Link */}
          {credentialUrl && (
            <div className="pt-3 border-t border-border/50">
              <Button
                variant="outline"
                size="sm"
                fullWidth
                rightIcon={<ExternalLink size={14} />}
                onClick={() => window.open(credentialUrl, '_blank', 'noopener,noreferrer')}
              >
                Verify Credential
              </Button>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

CertificateCard.displayName = 'CertificateCard';
