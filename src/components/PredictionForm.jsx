import { useState } from "react";

const modelOptions = {
  iPhone: [
    "iPhone 12 64GB",
    "iPhone 12 Pro 128GB",
    "iPhone 13 128GB",
    "iPhone 13 Pro Max 256GB",
    "iPhone 14 128GB",
    "iPhone 14 Pro 128GB",
    "iPhone 15 128GB",
    "iPhone 15 Pro Max 256GB",
    "iPhone 16 128GB",
    "iPhone 16 Pro 256GB",
    "iPhone 17 128GB",
  ],

  iPad: [
    "iPad (9th Gen) 64GB",
    "iPad Air (4th Gen) 64GB",
    "iPad Air (5th Gen) 64GB",
    "iPad Pro 11-inch (M1) 128GB",
    "iPad Pro 11-inch (M4) 256GB",
    "iPad Pro 12.9-inch (M2) 256GB",
  ],

  Mac: [
    "MacBook Air M1 256GB",
    "MacBook Air M2 256GB",
    "MacBook Air M3 256GB",
    "MacBook Pro 14-inch M1 Pro 512GB",
    "MacBook Pro 14-inch M2 Pro 512GB",
    "MacBook Pro 14-inch M3 Pro 512GB",
    "MacBook Pro 14-inch M4 Pro 512GB",
  ],

  Watch: [
    "Apple Watch Series 6 (44mm)",
    "Apple Watch Series 7 (45mm)",
    "Apple Watch Series 8 (45mm)",
    "Apple Watch Series 9 (45mm)",
    "Apple Watch Series X (45mm)",
    "Apple Watch Ultra",
    "Apple Watch Ultra 2",
  ],
};

function PredictionForm({ onPredict }) {
  const [formData, setFormData] = useState({
    product_category: "iPhone",
    model_name: modelOptions["iPhone"][0],
    condition: "New",
    launch_price_inr: "",
    discount_pct: "",
    reviews_per_price: "",
    price_vs_category_avg: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "product_category") {
      setFormData({
        ...formData,
        product_category: value,
        model_name: modelOptions[value][0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model_name: formData.model_name,
          product_category: formData.product_category,
          condition: formData.condition,
          launch_price_inr: Number(formData.launch_price_inr),
          discount_pct: Number(formData.discount_pct),
          reviews_per_price: Number(formData.reviews_per_price),
          price_vs_category_avg: Number(formData.price_vs_category_avg),
        }),
      });

      const data = await response.json();

      if (data.success) {
        onPredict({
          price: data.predicted_price,
          device: formData.model_name,
          confidence: 99.94,
          trend: "📈 Stable Market",
          recommendation: "Good Time To Buy",
        });
      } else {
        alert("Prediction Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Cannot connect to FastAPI Backend");
    }

    setLoading(false);
  };

  return (
    <section id="predict" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold">
            AI Price Prediction
          </h2>

          <p className="text-gray-500 mt-3">
            Predict Apple Device Price using Machine Learning
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-10 grid md:grid-cols-2 gap-6"
        >

          {/* Product Category */}

          <div>
            <label className="font-semibold">
              Product Category
            </label>

            <select
              name="product_category"
              value={formData.product_category}
              onChange={handleChange}
              className="w-full mt-2 p-4 border rounded-xl"
            >
              <option value="iPhone">iPhone</option>
              <option value="iPad">iPad</option>
              <option value="Mac">Mac</option>
              <option value="Watch">Watch</option>
            </select>
          </div>

          {/* Model */}

          <div>
            <label className="font-semibold">
              Model Name
            </label>

            <select
              name="model_name"
              value={formData.model_name}
              onChange={handleChange}
              className="w-full mt-2 p-4 border rounded-xl"
            >
              {modelOptions[formData.product_category].map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          {/* Condition */}

          <div>
            <label className="font-semibold">
              Condition
            </label>

            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className="w-full mt-2 p-4 border rounded-xl"
            >
             <option value="New">New</option>
             <option value="Renewed/Refurbished">
               Renewed/Refurbished
              </option>
            </select>
          </div>

          {/* Launch Price */}

          <div>
            <label className="font-semibold">
              Launch Price (₹)
            </label>

            <input
              type="number"
              name="launch_price_inr"
              value={formData.launch_price_inr}
              onChange={handleChange}
              className="w-full mt-2 p-4 border rounded-xl"
              required
            />
          </div>

          {/* Discount */}

          <div>
            <label className="font-semibold">
              Discount (%)
            </label>

            <input
              type="number"
              name="discount_pct"
              value={formData.discount_pct}
              onChange={handleChange}
              className="w-full mt-2 p-4 border rounded-xl"
              required
            />
          </div>

          {/* Reviews */}

          <div>
            <label className="font-semibold">
              Reviews Per Price
            </label>

            <input
              type="number"
              step="0.01"
              name="reviews_per_price"
              value={formData.reviews_per_price}
              onChange={handleChange}
              className="w-full mt-2 p-4 border rounded-xl"
              required
            />
          </div>

          {/* Price vs Category */}

          <div className="md:col-span-2">
            <label className="font-semibold">
              Price vs Category Average
            </label>

            <input
              type="number"
              step="0.01"
              name="price_vs_category_avg"
              value={formData.price_vs_category_avg}
              onChange={handleChange}
              className="w-full mt-2 p-4 border rounded-xl"
              required
            />
          </div>

          {/* Button */}

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-4 rounded-xl text-lg font-bold hover:bg-gray-800"
            >
              {loading ? "Predicting..." : "🚀 Predict Price"}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}

export default PredictionForm;