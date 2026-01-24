"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

interface CarouselPluginProps {
    data: { content: string }[],
    delayyime: number,
    imgsize?: string,
    imgsizelg?: string
}

export function CarouselPlugin({ imgsizelg, imgsize, data, delayyime }: CarouselPluginProps) {
    const plugin = React.useRef(
        Autoplay({ delay: delayyime, stopOnInteraction: true })
    )

    // ফাইলটি ভিডিও কিনা তা চেক করার ফাংশন
    const isVideo = (url: string) => {
        return /\.(mp4|webm|ogg)$/i.test(url) || url.includes("video");
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
                        <Card className="border-none shadow-none">
                            <CardContent className="p-1">
                                {isVideo(item.content) ? (
                                    <video
                                        src={item.content}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className={`rounded-md object-cover ${imgsize} md:${imgsizelg}`}
                                    />
                                ) : (
                                    <img
                                        src={item.content}
                                        className={`rounded-md object-cover ${imgsize} md:${imgsizelg}`}
                                        alt={`Banner ${index}`}
                                    />
                                )}
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}