import uvicorn
from fastapi import FastAPI
from typing import Optional
import joblib

from model import ProductQualities, PricingModel

app = FastAPI()
model = PricingModel()

@app.get("/")
async def index():
    return {"message": "Hello world!"}

@app.post("/predict")
async def predict_price(qualities: ProductQualities):
    data = qualities.dict()
    prediction = model.predict_price(**data)
    return {"prediction": prediction}

@app.get("/coef")
async def model_coefficients():
    return model.coefficients()

if __name__ == "__main__":
    # uvicorn api:app --reload
    uvicorn.run(app, host="0.0.0.0", port=8000)