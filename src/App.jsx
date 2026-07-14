import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import PredictionForm from "./components/PredictionForm";
import PredictionResult from "./components/PredictionResult";
import AllInsights from "./components/AllInsights";
import Footer from "./components/Footer";

function App() {
  const [result, setResult] = useState(null);

  const handlePrediction = (predictionData) => {
    setResult({
      price: Number(predictionData.price).toLocaleString("en-IN"),
      device: predictionData.device,
      confidence: predictionData.confidence,
      trend: predictionData.trend,
      recommendation: predictionData.recommendation,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Hero />

      <Feature />

      <PredictionForm onPredict={handlePrediction} />

      {result && <PredictionResult result={result} />}

      <AllInsights />

      <Footer />
    </div>
  );
}

export default App;