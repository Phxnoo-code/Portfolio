import React from 'react';
import { Home as HomeIcon, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary flex items-center justify-center p-6 text-center font-sans">
      <div className="max-w-md space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 text-primary font-display font-extrabold text-3xl">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-display font-bold text-text-primary tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            The requested page does not exist or has been moved.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button
            variant="primary"
            leftIcon={<HomeIcon size={16} />}
            onClick={() => (window.location.href = '/')}
          >
            Back to Home
          </Button>
          <Button
            variant="outline"
            leftIcon={<ArrowLeft size={16} />}
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
