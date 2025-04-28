"use client";

import type React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { apiReferences } from "@/data/apiReferences";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export const ApiCarousel: React.FC = () => {
  return (
    <Carousel opts={{ loop: true }}>
      <CarouselContent className="space-x-4">
        {apiReferences.map((ref) => (
          <CarouselItem key={ref.title} className="basis-md flex-shrink-0">
            <Card className="flex flex-col items-center p-8 h-full mx-8">
              <ref.Icon className="h-24 w-24" />
              <h3 className="text-3xl font-semibold text-primary">{ref.label}</h3>
              <p className="text-muted-foreground -mt-4">{ref.title}</p>
              <CardContent className="text-muted-foreground leading-12">
                {ref.routes.map((route) => (
                  <div key={route}>{route}</div>
                ))}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2">
        <ChevronLeftIcon />
      </CarouselPrevious>
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2">
        <ChevronRightIcon />
      </CarouselNext>
    </Carousel>
  );
};
