const steps = [
  { step: "01", title: "Requirement Analysis" },
  { step: "02", title: "Planning & Resource Allocation" },
  { step: "03", title: "Execution & Monitoring" },
  { step: "04", title: "Quality Control & Delivery" },
];

export default function ServiceProcess() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          Our Working Process
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="text-center border rounded-xl p-8 hover:border-emerald-600 transition"
            >
              <span className="text-3xl font-extrabold text-emerald-700">
                {item.step}
              </span>
              <h3 className="mt-4 font-semibold text-gray-900">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
