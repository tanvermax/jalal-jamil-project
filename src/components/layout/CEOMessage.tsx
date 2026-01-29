

import { motion } from "framer-motion";

import ceoPhoto from "@/assets/images/ceoimage.png";

export default function CEOMessage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jalal Jamil",
    jobTitle: "Chief Executive Officer",
    worksFor: {
      "@type": "Organization",
      name: "Jalal Jamil Project Company",
      address: {
        "@type": "PostalAddress",
        addressCountry: "Saudi Arabia",
      },
    },
    description:
      "CEO of Jalal Jamil Project Company, leading construction, logistics, food services, and manpower solutions across Saudi Arabia.",
  };

  return (
    <section className="py-16 lg:py-28 bg-white overflow-hidden">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#baa26d] rounded-[28px] lg:rounded-[48px] shadow-2xl overflow-hidden lg:overflow-visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Mobile Image */}
            <div className="lg:hidden flex justify-center mt-10">
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border-4 border-white/30 overflow-hidden shadow-xl"
              >
                <img src={ceoPhoto} alt="CEO of Jalal Jamil Project Company" />
                {/* <Image
                  src={ceoPhoto}
                  
                  fill
                  className="object-cover"
                  priority
                /> */}
              </motion.div>
            </div>

            {/* Left Space for Desktop Image */}
            <div className="hidden lg:block lg:col-span-5" />

            {/* Text Content */}
            <div className="lg:col-span-7 p-3 sm:p-12 lg:p-20 text-white text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl lg:text-5xl font-extrabold mb-6 leading-tight"
              >
                Leadership Driving Excellence <br className="hidden lg:block" />
                Across Saudi Arabia
              </motion.h2>

              <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-sm sm:text-base lg:text-lg  text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
              >
                “At <strong>Jalal Jamil Project Company</strong>, we believe in
                delivering value through integrity, professionalism, and
                long-term partnerships. Our goal is to support Saudi Arabia’s
                Vision 2030 by providing reliable solutions in construction,
                logistics, food services, and manpower.”
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col items-center lg:items-start gap-1"
              >
                <span className="text-xl lg:text-2xl font-bold">
                  Jalal Jamil
                </span>
                <span className="text-xs uppercase tracking-widest text-white/80 font-semibold">
                  Founder & CEO
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Desktop Overlapping Image */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="hidden lg:block absolute bottom-0 left-30  max-w-[520px] pointer-events-none"
        >
          {/* <Image
            src={ceoPhoto}
            alt="Jalal Jamil CEO"
            width={600}
            height={800}
            className="drop-shadow-[0_20px_25px_rgba(0,0,0,0.35)]"
            priority
          /> */}
                <img src={ceoPhoto} className="h-[500px] drop-shadow-[0_20px_50px_rgba(255,255,255,0.5)] w-[400px] mx-auto" alt="CEO of Jalal Jamil Project Company" />

        </motion.div>
      </div>
    </section>
  );
}
