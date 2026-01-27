import { Card, CardContent } from "@/components/ui/card";

const companies = [
  "Jalal Jamil Construction",
  "Jalal Jamil Logistics",
  "Jalal Jamil Food Services",
  "Jalal Jamil Manpower Solutions",
];

export default function Companies() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          Our Group Companies
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {companies.map((company) => (
            <Card
              key={company}
              className="hover:shadow-xl transition"
            >
              <CardContent className="p-6 text-center font-medium">
                {company}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
