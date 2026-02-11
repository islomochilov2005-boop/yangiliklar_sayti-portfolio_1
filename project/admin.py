from django.contrib import admin
from .models import Category,News,Boglanish



@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id','name']
    prepopulated_fields = {'slug':('name',)}




@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ['id','title','category','status']
    list_filter = ['id','title','status']
    prepopulated_fields = {'slug':('title',)}
    search_fields = ['title']



@admin.register(Boglanish)
class BoglanishAdmin(admin.ModelAdmin):
    list_display = ['id','name']
