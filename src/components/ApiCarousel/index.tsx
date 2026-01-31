'use client';

import type React from 'react';
import { ReferenceCarousel } from '@/components/ReferenceCarousel';
import { apiReferences } from '@/data/apiReferences';

export const ApiCarousel: React.FC = () => {
  return <ReferenceCarousel references={apiReferences} />;
};
