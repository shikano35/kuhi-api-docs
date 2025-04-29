// components/FadeIn.tsx
'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ComponentPropsWithoutRef } from 'react';

const viewportSettings = { once: true, margin: '0px 0px -100px' };

export function FadeIn(props: ComponentPropsWithoutRef<typeof motion.div>) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
      {...props}
    />
  );
}

export function FadeTransition({
  children,
  className,
  slow = false,
}: {
  children: React.ReactNode;
  className?: string;
  slow?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const duration = slow ? 2.0 : 0.6;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      viewport={viewportSettings}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, ease: 'easeInOut' }}
      variants={variants}
      aria-live="polite"
      className={className}
    >
      {children}
    </motion.div>
  );
}
