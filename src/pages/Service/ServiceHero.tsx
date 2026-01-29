import { Button } from "@/components/ui/button";

export default function ServiceHero() {
  return (
    <section className="bg-gradient-to-br from-[#BAA26D] to-[#caa148] text-white py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Our Professional Services
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-white/90 mb-10">
          Jalal Jamil Project Company delivers integrated solutions in
          construction, logistics, food services, and manpower across Saudi
          Arabia—ensuring quality, safety, and reliability.
        </p>

        <Button size="lg" className="bg-white text-emerald-800 hover:bg-gray-100">
          Request a Service
        </Button>
      </div>
    </section>
  );
}
