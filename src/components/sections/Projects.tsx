import React from 'react';
import { SelectedWork } from './SelectedWork';

/**
 * Projects Section Component
 * Aliases the redesigned SelectedWork component for backwards compatibility.
 */
export const Projects: React.FC = () => {
  return <SelectedWork />;
};

Projects.displayName = 'Projects';

export { SelectedWork };
