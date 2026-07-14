import joblib

model = joblib.load("mobile_price_prediction.pkl")

print(type(model))
print(model)