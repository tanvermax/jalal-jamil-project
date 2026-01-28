import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Truck, Utensils, Users } from "lucide-react";

const services = [
  {
    title: "Construction Projects",
    desc: "Residential, commercial, and infrastructure development projects delivered with quality and compliance.",
    icon: Briefcase,
  },
  {
    title: "Logistics & Transportation",
    desc: "End-to-end logistics, transportation, and supply chain support across Saudi Arabia.",
    icon: Truck,
  },
  {
    title: "Food Services",
    desc: "Corporate catering, camp food services, and large-scale food delivery solutions.",
    icon: Utensils,
  },
  {
    title: "Manpower Supply",
    desc: "Skilled and unskilled manpower solutions aligned with Saudi Vision 2030.",
    icon: Users,
  },
];

export default function Services() {
  return (
    <section
      aria-labelledby="services-heading"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* ✅ SEO-friendly heading structure */}
        <header className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
          >
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Jalal Jamil Project Company provides integrated business solutions
            across construction, logistics, food services, and manpower supply
            in Saudi Arabia.
          </p>
        </header>

        {/* ✅ Service cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group relative overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-600">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
