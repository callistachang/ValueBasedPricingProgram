from pydantic import BaseModel
import joblib
import os
import sklearn

class ProductQualities(BaseModel):
    quality: bool 
    delivery: bool 
    product: bool 
    service: bool 
    intuitive: bool 
    others: bool 
    functional: bool 
    dimension: bool 
    car: bool
    brand: bool 
    price: bool

class PricingModel:
    def __init__(self):
        self.model_filename = "model.joblib"
        try:
            self.model = joblib.load(os.path.join(os.path.dirname(__file__), self.model_filename))
        except Exception as e:
            print(e)
            print("Model file could not be found.")

    def coefficients(self):
        quality_list = ProductQualities.__fields__.keys()
        coefficient_list = self.model.coef_
        return dict(zip(quality_list, coefficient_list))

    def predict_price(self, quality, delivery, product, service, intuitive, others, functional, dimension, car, brand, price):
        product_qualities = [[quality, delivery, product, service, intuitive, others, functional, dimension, car, brand, price]]
        price_prediction = self.model.predict(product_qualities)[0]
        return price_prediction

