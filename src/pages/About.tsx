import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section
      className="md:py-24 py-10 bg-gray-50"
      aria-labelledby="about-company-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* SEO Header */}
        <header className="max-w-3xl mx-auto text-center mb-14">
          <h2
            id="about-company-heading"
            className="text-xl md:text-4xl font-bold mb-4"
          >
            About Jalal Jamil Project Company
          </h2>
          <p className="text-muted-foreground text-xs md:text-base ">
            A trusted Saudi group of companies delivering integrated solutions
            across construction, logistics, food services, and manpower supply.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Text Content */}
          <Card className="shadow-sm">
            <CardContent className="md:p-8 p-4 text-muted-foreground leading-relaxed space-y-5">
              <p className=" text-xs md:text-base">
                <strong className="text-foreground">
                  Jalal Jamil Project Company
                </strong>{" "}
                is a Saudi-licensed group of companies operating across multiple
                industries in the Kingdom of Saudi Arabia. We support national
                development goals by delivering reliable services aligned with
                <strong className="text-foreground">
                  {" "}Saudi Vision 2030
                </strong>.
              </p>

              <p className=" text-xs md:text-base">
                Our operations span construction projects, logistics and
                transportation, corporate food services, and manpower supply.
                We work closely with partners, contractors, and government
                entities to ensure quality, compliance, and long-term success.
              </p>

              <p className=" text-xs md:text-base">
                With a strong focus on professionalism, transparency, and
                workforce development, we aim to build lasting partnerships
                that contribute to sustainable growth across Saudi Arabia.
              </p>
            </CardContent>
          </Card>

          {/* Values / Highlights */}
          <Card className="bg-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">
                Why Choose Us
              </h3>

              <ul className="space-y-4">
                {[
                  "Saudi-licensed and fully compliant operations",
                  "Multi-industry expertise under one group",
                  "Skilled manpower and efficient project execution",
                  "Commitment to quality, safety, and transparency",
                  "Aligned with Saudi Vision 2030 goals",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
