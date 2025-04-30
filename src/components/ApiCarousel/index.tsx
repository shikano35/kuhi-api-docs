'use client';

import type React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { apiReferences } from '@/data/apiReferences';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export const ApiCarousel: React.FC = () => {
  return (
    <Carousel opts={{ loop: true }}>
      <CarouselContent className="space-x-4">
        {apiReferences.map((ref) => (
          <CarouselItem
            key={ref.title}
            className="flex-shrink-0 basis-lg xl:basis-xl 2xl:basis-2xl"
          >
            <Card className="mx-8 flex h-full flex-col items-center p-8 select-none">
              <ref.Icon className="h-16 w-16 sm:h-24 sm:w-24 xl:h-32 xl:w-32" />
              <h3 className="text-primary text-2xl font-semibold sm:text-3xl xl:text-4xl">
                {ref.label}
              </h3>
              <p className="text-muted-foreground -mt-4 text-sm sm:text-base xl:text-lg">
                {ref.title}
              </p>
              <CardContent className="text-muted-foreground leading-12">
                {ref.routes.map((route) => (
                  <div key={route} className="mb-8 flex flex-col last:mb-4">
                    <p className="text-primary text-base leading-10 font-semibold sm:text-lg xl:text-xl">
                      {route}
                    </p>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      {ref.routeDescriptions[ref.routes.indexOf(route)]}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2">
        <ChevronLeftIcon />
      </CarouselPrevious>
      <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2">
        <ChevronRightIcon />
      </CarouselNext>
    </Carousel>
  );
};
