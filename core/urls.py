from django.urls import include, path
from . import views

urlpatterns = [
    path("", views.landing_page, name="landing_page"),
    path("rankings", views.ranking_page, name="ranking_page"),
    path("recommendations", views.recommendation_page, name="recommendation_page"),
    path("sentiments", views.sentiment_page, name="sentiment_page")
]