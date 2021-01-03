from django.shortcuts import render


def landing_page(request):
    context = {}
    return render(request, "landing_page.html", context)

def ranking_page(request):
    context = {}
    return render(request, "ranking_page.html", context)

def recommendation_page(request):
    context = {}
    return render(request, "recommendation_page.html", context)

def sentiment_page(request):
    context = {}
    return render(request, "sentiment_page.html", context)