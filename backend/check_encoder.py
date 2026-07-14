import joblib

encoders = joblib.load("encoders.pkl")

print(type(encoders))

if isinstance(encoders, dict):
    print(encoders.keys())
else:
    print(encoders)