import { Cpu, Zap, BarChart3, ShieldCheck } from "lucide-react";

export default function Feature() {
  const features = [
    {
      icon: <Cpu size={34} />,
      title: "AI Prediction",
      desc: "Machine Learning predicts Apple device resale prices with high accuracy.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <Zap size={34} />,
      title: "Instant Results",
      desc: "Get an estimated market price within seconds after entering your device details.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <BarChart3 size={34} />,
      title: "Market Analysis",
      desc: "Predictions are based on historical pricing trends and real device specifications.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <ShieldCheck size={34} />,
      title: "Reliable",
      desc: "Consistent and trustworthy price estimation powered by Machine Learning.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-white via-green-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold mb-4">
            ✨ Why Choose Us?
          </span>

          <h2 className="text-5xl font-bold text-gray-900">
            Why Choose{" "}
            <span className="text-green-600">
              iPrice AI?
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
            Advanced Machine Learning technology that provides fast,
            accurate and reliable Apple device price predictions.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => (

            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
            >

              {/* Icon */}

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition`}
              >
                {item.icon}
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>

              {/* Description */}

              <p className="text-gray-500 leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}