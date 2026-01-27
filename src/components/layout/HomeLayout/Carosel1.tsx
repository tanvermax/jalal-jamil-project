"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface CarouselItemData {
  content: string; // ✅ required
  title?: string;
  description?: string;
}

interface CarouselPluginProps {
  data: CarouselItemData[];
  delayyime: number;
  imgsize?: string;
  imgsizelg?: string;
}

export function CarouselPlugin({
  imgsizelg,
  imgsize,
  data,
  delayyime,
}: CarouselPluginProps) {
  const plugin = React.useRef(
    Autoplay({ delay: delayyime, stopOnInteraction: true })
  );

 const isVideo = (url?: string) => {
  if (!url) return false;
  return /\.(mp4|webm|ogg)$/i.test(url);
};

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index}>
            <Card className="border-none shadow-none py-0">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Background media */}
                  {isVideo(item.content) ? (
                    <video
                      src={item.content}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={`object-cover ${imgsize} md:${imgsizelg}`}
                    />
                  ) : (
                    <img
                      src={item.content}
                      alt={item.title || `Slide ${index + 1}`}
                      className={`object-cover ${imgsize} md:${imgsizelg}`}
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60" />

                  {/* Text Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-6 max-w-4xl text-white">
                      {item.title && (
                        <h2 className="text-md md:text-5xl font-bold mb-6">
                          {item.title}
                        </h2>
                      )}

                      {item.description && (
                        <p className="text-[10px] md:text-xl opacity-90 mb-8">
                          {item.description}
                        </p>
                      )}

                      <Button
                        size="lg"
                        className="bg-white text-[10px] md:text-base text-green-800 hover:bg-gray-100"
                      >
                        Explore Our Companies
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
