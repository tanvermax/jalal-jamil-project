

import { motion } from "framer-motion";

import mdPhoto from "@/assets/images/tanvir-md.jpg";

export default function MDMessage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohammad Jalal",
    jobTitle: "Managing Director",
    worksFor: {
      "@type": "Organization",
      name: "Jalal Jamil Project Company",
      address: {
        "@type": "PostalAddress",
        addressCountry: "Saudi Arabia",
      },
    },
    description:
      "Managing Director of Jalal Jamil Project Company, overseeing operations, project delivery, and strategic growth across Saudi Arabia.",
  };

  return (
    <section className="py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Text First (Authority & Clarity) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-[#BAA26D] uppercase">
              Managing Director
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              Turning Strategy into <br /> Operational Excellence
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-5 max-w-2xl">
              As Managing Director of Jalal Jamil Project Company, my focus is on
              transforming strategic vision into practical, measurable results.
              Every project we deliver is driven by discipline, safety, and
              efficiency.
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
              By strengthening operational systems and empowering skilled teams,
              we ensure consistent quality across construction, logistics, food
              services, and manpower operations throughout Saudi Arabia.
            </p>

            {/* Key Operational Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t pt-6">
              <div>
                <p className="text-2xl font-bold text-gray-900">10+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Active Projects
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Workforce Managed
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">8+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">KSA</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Nationwide Operations
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-lg font-bold text-gray-900">
                S H TANVIR
              </p>
              <p className="text-sm text-gray-500">
                Managing Director
              </p>
            </div>
          </motion.div>

          {/* Image (Clean, Corporate, No Drama) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative  md:w-[20vw] overflow-hidden drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)]">
              <img
                src={mdPhoto}
                alt="Managing Director of Jalal Jamil Project Company"
                className="object-cover"
              />
              
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
