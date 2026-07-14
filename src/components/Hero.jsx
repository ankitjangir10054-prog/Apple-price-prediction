function Hero() {
  const goToPrediction = () => {
    const section = document.getElementById("predict");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const goToFeatures = () => {
    const section = document.getElementById("features");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <div>

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            🚀 AI Powered Apple Device Price Prediction
          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-gray-900">
            Predict Apple
            <br />
            Device Prices
            <span className="text-green-600"> with AI</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Estimate the resale value of iPhones, iPads,
            MacBooks and Apple Watches using Machine Learning.
            Get fast, accurate predictions in seconds.
          </p>

          <div className="mt-10 flex gap-5">

            <button
              onClick={goToPrediction}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition"
            >
              Predict Now →
            </button>

            <button
              onClick={goToFeatures}
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl hover:bg-green-600 hover:text-white transition"
            >
              Learn More
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-center">

          <div className="w-[430px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">

            <div className="flex justify-between items-center">

              <h3 className="text-2xl font-bold text-gray-800">
                Live Prediction
              </h3>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                AI LIVE
              </span>

            </div>

            {/* Apple Logo */}

            <div className="flex justify-center mt-8">

              <img
                src="/apple.png"
                alt="Apple Logo"
                className="w-20 h-20 object-contain"
              />

            </div>

            {/* Heading */}

            <div className="text-center mt-5">

              <h2 className="text-4xl font-extrabold text-green-600">
                Smart Price Prediction
              </h2>

              <p className="mt-4 text-gray-500 leading-7">
                Enter your Apple device details and our AI model
                instantly predicts its resale value with high accuracy.
              </p>

            </div>

            {/* Beautiful Stats */}

            <div className="grid grid-cols-3 gap-3 mt-8">

              <div className="bg-green-50 rounded-2xl p-4 text-center">

                <p className="text-3xl">⚡</p>

                <h3 className="font-bold text-green-600 mt-2">
                  Fast
                </h3>

                <p className="text-xs text-gray-500">
                  Instant Results
                </p>

              </div>

              <div className="bg-blue-50 rounded-2xl p-4 text-center">

                <p className="text-3xl">🎯</p>

                <h3 className="font-bold text-blue-600 mt-2">
                  98%
                </h3>

                <p className="text-xs text-gray-500">
                  Accuracy
                </p>

              </div>

              <div className="bg-yellow-50 rounded-2xl p-4 text-center">

                <p className="text-3xl">🤖</p>

                <h3 className="font-bold text-yellow-600 mt-2">
                  AI
                </h3>

                <p className="text-xs text-gray-500">
                  Powered
                </p>

              </div>

            </div>

            {/* Divider */}

            <div className="my-8 border-t"></div>

            {/* Button */}

            <button
              onClick={goToPrediction}
              className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white py-4 rounded-2xl text-lg font-bold shadow-lg hover:scale-105 transition"
            >
              🚀 Start Prediction
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;