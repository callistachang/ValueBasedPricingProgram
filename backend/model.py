from pydantic import BaseModel
import joblib
import os
import sklearn
from typing import Optional
import pandas as pd

class Product(BaseModel):
    product_name: str
    is_bosch: bool

class ProductQualities(BaseModel):
    product_name: str
    is_bosch: bool

    quality: Optional[bool] 
    delivery: Optional[bool] 
    product: Optional[bool] 
    service: Optional[bool] 
    price: Optional[bool]
    installation: Optional[bool]
    functional: Optional[bool]
    durable: Optional[bool]

class PricingModel:
    def __init__(self, product_name):
        self.model_filename = f"competitor_models/{product_name}.joblib"
        try:
            self.model = joblib.load(os.path.join(os.path.dirname(__file__), self.model_filename))
        except Exception as e:
            print(e)
            print("Model file could not be found.")

    def coefficients(self, product_name, is_bosch):
        label = "Bosch" if is_bosch else "Others"
        df = pd.read_csv(f"coeff_lists/{product_name}_{label}.csv")
        quality_list = df['newcat'].dropna().unique()
        print(quality_list)
        coefficient_list = self.model.coef_
        print(coefficient_list)
        # quality_list = [i for i in range(len(coefficient_list))]
        res = dict(zip(quality_list, coefficient_list))
        res = {k: v for k, v in sorted(res.items(), key=lambda item: item[1], reverse=True)}
        return res

    def predict_price(self, quality, delivery, product, service, intuitive, others, functional, dimension, car, brand, price):
        product_qualities = [[quality, delivery, product, service, intuitive, others, functional, dimension, car, brand, price]]
        price_prediction = self.model.predict(product_qualities)[0]
        return price_prediction