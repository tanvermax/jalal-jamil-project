import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Building2, Truck, Utensils, Users } from "lucide-react";

// import images
import constructionImg from "@/assets/images/construction.jpg";
import logisticsImg from "@/assets/images/logistics.jpg";
import foodImg from "@/assets/images/food.jpg";
import manpowerImg from "@/assets/images/manpower.jpg";

const companies = [
  {
    name: "Jalal Jamil Construction",
    desc: "Residential, commercial, and infrastructure development across Saudi Arabia.",
    icon: Building2,
    image: constructionImg,
  },
  {
    name: "Jalal Jamil Logistics",
    desc: "Efficient logistics, transportation, and supply chain solutions within KSA.",
    icon: Truck,
    image: logisticsImg,
  },
  {
    name: "Jalal Jamil Food Services",
    desc: "Corporate catering and food delivery services with strict quality standards.",
    icon: Utensils,
    image: foodImg,
  },
  {
    name: "Jalal Jamil Manpower Solutions",
    desc: "Skilled and unskilled workforce supply aligned with Saudi labor regulations.",
    icon: Users,
    image: manpowerImg,
  },
];

export default function Companies() {
  return (
    <section
      className="py-24 bg-gray-50"
      aria-labelledby="group-companies-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* SEO Header */}
        <header className="max-w-3xl mx-auto text-center mb-16">
          <h2
            id="group-companies-heading"
            className="text-xl md:text-4xl font-bold mb-4"
          >
            Our Group Companies
          </h2>
          <p className="text-xs md:text-base text-muted-foreground">
            Jalal Jamil Project Company operates across multiple industries,
            providing integrated services that support Saudi Vision 2030.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {companies.map((company) => {
            const Icon = company.icon;

            return (
              <Card
                key={company.name}
                className="overflow-hidden p-1 group hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={company.image}
                    alt={`${company.name} services`}
                    className="h-full w-full rounded-md object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <CardHeader className="flex items-center justify-center ">
                  <div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-green-700" />
                  </div>
                </CardHeader>

                <CardContent className="text-center px-6 pb-8">
                  <h3 className="font-semibold text-lg mb-2">
                    {company.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {company.desc}
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
