"use client";

import { CarouselPlugin } from "@/components/layout/HomeLayout/Carosel1";

// Images
import image1 from "../../assets/images/afif-ramdhasuma-JGBoIaHTACI-unsplash.jpg";
import image2 from "../../assets/images/pexels-yasirgurbuz-12607978.jpg";
import image3 from "../../assets/images/pexels-hussain-awan-2780712-4321694.jpg";

const slides = [
  {
    title: "Trusted Saudi Group of Companies",
    description:
      "Jalal Jamil Project Company delivers construction, logistics, food services, and manpower solutions across Saudi Arabia.",
    content: image1,
  },
  {
    title: "Reliable Manpower & Project Solutions",
    description:
      "Supporting Saudi businesses with skilled manpower and efficient project execution aligned with Vision 2030.",
    content: image2,
  },
  {
    title: "Building Long-Term Partnerships",
    description:
      "Committed to quality, transparency, and sustainable growth across multiple industries in KSA.",
    content: image3,
  },
];

export default function Hero() {
  return (
    <section aria-label="Hero Section" className="relative">
      {/* ✅ SEO-safe single H1 */}
      <h1 className="sr-only">
        Jalal Jamil Project Company – Saudi Group of Companies
      </h1>

      <CarouselPlugin
        delayyime={1400}
        imgsize="md:h-[65vh] h-[40vh]  w-full"
        data={slides}
      />
    </section>
  );
}
