import { Button } from "@/components/ui/button";

export default function ServiceCTA() {
  return (
    <section className="py-20 bg-[#B89D64] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Need a Reliable Service Partner in Saudi Arabia?
        </h2>

        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Let Jalal Jamil Project Company support your next project with trusted
          expertise and professional execution.
        </p>

        <Button size="lg" className="bg-white text-emerald-800 hover:bg-gray-100">
          Contact Our Team
        </Button>
      </div>
    </section>
  );
}
