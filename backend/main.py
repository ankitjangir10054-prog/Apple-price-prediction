from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from predict import predict_price

app = FastAPI(title="Apple Device Price Prediction API")

# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Apple Device Price Prediction API is Running 🚀"
    }


# Input Schema
class PredictionRequest(BaseModel):
    model_name: str
    product_category: str
    condition: str
    launch_price_inr: float
    discount_pct: float
    reviews_per_price: float
    price_vs_category_avg: float


@app.post("/predict")
def predict(request: PredictionRequest):

    data = {
        "Model_Name": request.model_name,
        "Product_Category": request.product_category,
        "Condition": request.condition,
        "Launch_Price_INR": request.launch_price_inr,
        "Discount_Pct": request.discount_pct,
        "Reviews_per_Price": request.reviews_per_price,
        "Price_vs_Category_Avg": request.price_vs_category_avg,
    }
    print(data)
    prediction = predict_price(data)

    return {
        "success": True,
        "predicted_price": prediction,
    } 