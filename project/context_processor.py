from .models import Category,News
from django.db.models import F
from django.shortcuts import get_object_or_404

def category_processors(request):
    categories=Category.objects.all()
    context={
        'categories':categories
    }
    return context


def barcha_yangiliklar(request):
    news=News.objects.order_by('-created_at')[:6]
    context={
        'news':news
    }
    return context


