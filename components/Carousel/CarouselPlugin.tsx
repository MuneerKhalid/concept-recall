"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  React.useEffect(() => {
    plugin.current?.reset() // Reset autoplay to start when the component is mounted
  }, [])

  return (
    <div className="flex justify-center items-center bg-black min-h-screen overflow-hidden">
      <div className="w-full max-w-full px-4">
        <Carousel
          plugins={[plugin.current]}
          className="relative w-full max-w-xs mx-auto"
        >
          {/* Carousel content */}
          <div className="relative">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold text-black">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation controls at the top-right corner */}
            <div className="absolute top-0 right-0 flex p-2">
              <CarouselPrevious className="bg-white rounded-full p-2 shadow-lg" />
              <CarouselNext className="bg-white rounded-full p-2 shadow-lg" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}
