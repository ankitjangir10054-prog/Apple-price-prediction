import joblib
import pandas as pd

model = joblib.load("mobile_price_prediction.pkl")
encoders = joblib.load("encoders.pkl")


def predict_price(data):

    # Encode categorical columns
    for col in ["Condition", "Product_Category", "Model_Name"]:
        data[col] = encoders[col].transform([str(data[col])])[0]

    # IMPORTANT: Same order as training
    df = pd.DataFrame([[
        data["Launch_Price_INR"],
        data["Discount_Pct"],
        data["Reviews_per_Price"],
        data["Price_vs_Category_Avg"],
        data["Condition"],
        data["Product_Category"],
        data["Model_Name"]
    ]], columns=[
        "Launch_Price_INR",
        "Discount_Pct",
        "Reviews_per_Price",
        "Price_vs_Category_Avg",
        "Condition",
        "Product_Category",
        "Model_Name"
    ])

    prediction = model.predict(df)[0]

    return round(float(prediction), 2)