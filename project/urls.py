from django.urls import path
from .views import all_news,kategoriya_3,category_detail,barcha_yangiliklar,cantact_view,korishlar_soni,biz_haqimizda



urlpatterns=[
    path('', kategoriya_3, name='bosh_sahifa'),
    path('all_news/',all_news,name='all_news'),
    path('category_detail/<slug:slug>/',category_detail,name='category_detail'),
    path('barcha_yangiliklar/',barcha_yangiliklar,name="all_news"),
    path('contact/',cantact_view,name="boglanish"),
    path('news/<int:pk>/', korishlar_soni, name='news_detail'),
    path('biz_haqimizda/',biz_haqimizda,name='biz_haqimizda')
]



