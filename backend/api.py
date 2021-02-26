import uvicorn
from fastapi import FastAPI
from typing import Optional
import joblib
from fastapi.middleware.cors import CORSMiddleware


from model import ProductQualities, Product, PricingModel

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://bosch-frontend.azurewebsites.net",
    "https://bosch-frontend.azurewebsites.net"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def index():
    return {"message": "Hello world!"}

@app.post("/predict")
async def predict_price(qualities: ProductQualities):
    data = qualities.dict()
    model = PricingModel(data['product_name'])
    prediction = model.predict_price(**data)
    return {"price": prediction}

@app.post("/coef")
async def model_coefficients(product: Product):
    data = product.dict()
    model = PricingModel(data['product_name'])
    return model.coefficients(**data)

if __name__ == "__main__":
    # uvicorn api:app --reload
    uvicorn.run(app, host="0.0.0.0", port=8000)