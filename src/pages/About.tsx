import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">
          About Jalal Jamil Project Company
        </h2>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 text-gray-600 leading-relaxed">
            Jalal Jamil Project Company is a Saudi-licensed group
            operating across multiple industries, supporting Vision
            2030 through quality services, skilled manpower, and
            long-term partnerships.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
