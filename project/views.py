from django.shortcuts import render,get_object_or_404,redirect
from .models import Category,News
from django.db.models import Count,Q
from .forms import ContactForm
from django.db.models import F


def asosiy_sahifa(request):
    categories = Category.objects.annotate(
        published_posts_count=Count(
            'posts',
            filter=Q(posts__status=News.Status.Published)
        )
    )
    context = {
        'categories': categories
    }
    return render(request, 'index.html', context)



def all_news(request):
    news=News.objects.order_by('-created_at')[:6]
    contaxt={
        'news':news
    }
    return render(request,'index.html',contaxt)





def kategoriya_3(request):
    dasturlash_last=News.objects.filter(category__slug='dasturlash').order_by('-created_at').first()
    gadjetlar_last=News.objects.filter(category__slug='gadjetlar').order_by('-created_at').first()
    startaplar_last=News.objects.filter(category__slug='startaplar').order_by('-created_at').first()
    songgi=News.objects.all().last()
    categories = Category.objects.annotate(
        published_posts_count=Count(
            'posts',
            filter=Q(posts__status=News.Status.Published)
        )
    )

    context={
        'dasturlash_last':dasturlash_last,
        'gadjetlar_last':gadjetlar_last,
        'startaplar_last':startaplar_last,
        'categories':categories,
        'songgi':songgi
    }
    return render(request,'index.html',context)





def category_detail(request,slug):
    category=get_object_or_404(Category,slug=slug)
    news=News.objects.filter(category=category).order_by('-created_at')
    context={
        'category':category,
        'news':news
    }
    return render(request,'category_news.html',context)



def news_detail(request, pk):
    new = get_object_or_404(News, pk=pk)
    return render(request, "news_detail.html", {"new": new})




def barcha_yangiliklar(request):
    news=News.objects.all()
    return render(request,'barchasi.html',{'news':news})





def cantact_view(request):
    if request.method=="POST":
        form=ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('boglanish')
    else:
        form=ContactForm()
    return render(request,'contact.html',{'form':form})



def korishlar_soni(request,pk):
    News.objects.filter(pk=pk).update(views=F('views')+1)
    new=get_object_or_404(News,pk=pk)
    context={
        'new':new
    }
    return render(request,'news_detail.html',context)




def biz_haqimizda(request):
    return render(request,'biz_haqimizda.html')