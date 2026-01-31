'use client';

import type React from 'react';
import { ReferenceCarousel } from '@/components/ReferenceCarousel';
import { rdfReferences } from '@/data/rdfReferences';

export const RdfCarousel: React.FC = () => {
  return <ReferenceCarousel references={rdfReferences} />;
};
