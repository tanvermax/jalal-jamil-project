import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Construction Projects",
    desc: "Residential, commercial, and infrastructure projects.",
  },
  {
    title: "Logistics & Transportation",
    desc: "Reliable transport and supply chain services.",
  },
  {
    title: "Food Services",
    desc: "Corporate catering and food delivery solutions.",
  },
  {
    title: "Manpower Supply",
    desc: "Skilled and unskilled workforce solutions.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title}>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">
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
