import { motion } from "framer-motion";

function PredictionResult({ result }) {
  if (!result) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto mt-12"
    >
      <div className="bg-white rounded-3xl shadow-2xl p-8 border">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          🤖 AI Prediction Result
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-green-50 rounded-2xl p-6 text-center">
            <p className="text-gray-500">Estimated Device Price</p>

            <h1 className="text-5xl font-bold text-green-600 mt-3">
              ₹{result.price}
            </h1>

            <p className="text-gray-500 mt-3">
              {result.device}
            </p>
          </div>

          <div className="space-y-5">

            <div>
              <div className="flex justify-between">
                <span>Confidence</span>
                <span className="font-bold">
                  {result.confidence}%
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: `${result.confidence}%` }}
                />
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold">
                📈 Market Trend
              </h3>

              <p className="text-green-600 font-bold">
                {result.trend}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold">
                ⭐ Recommendation
              </h3>

              <p className="text-blue-600 font-bold">
                {result.recommendation}
              </p>
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default PredictionResult;