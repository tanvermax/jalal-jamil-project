import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Construction & Infrastructure",
    desc: "Residential, commercial, and industrial construction with strict safety and quality standards.",
  },
  {
    title: "Logistics & Transportation",
    desc: "End-to-end logistics, fleet management, and supply chain solutions across KSA.",
  },
  {
    title: "Food Services & Catering",
    desc: "Corporate catering, workforce meal solutions, and food delivery services.",
  },
  {
    title: "Manpower Supply",
    desc: "Skilled, semi-skilled, and unskilled workforce for projects of any scale.",
  },
];

export default function ServiceList() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          What We Offer
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-emerald-700 transition">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
