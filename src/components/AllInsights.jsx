function Stats() {
  const stats = [
    {
      value: "99.4%",
      title: "Prediction Accuracy",
      color: "text-green-600",
    },
    {
      value: "10K+",
      title: "Predictions Made",
      color: "text-blue-600",
    },
    {
      value: "500+",
      title: "Happy Users",
      color: "text-orange-500",
    },
    {
      value: "24/7",
      title: "AI Available",
      color: "text-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-green-500">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition duration-300"
            >
              <h1 className={`text-5xl font-bold ${item.color}`}>
                {item.number}
              </h1>

              <p className="text-gray-600 mt-4 text-lg">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;