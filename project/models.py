from django.db import models


class Category(models.Model):
    name=models.CharField('Nomi',max_length=210)
    slug=models.SlugField(unique=True)

    class Meta:
        verbose_name='Kategoriya'
        verbose_name_plural='Kategoriyalar'


    def __str__(self):
        return self.name



class News(models.Model):
    class Status(models.TextChoices):
        Published='PB', 'Yaroqli'
        Draft="DF", 'Yaroqsiz'
    title=models.CharField('Sarlavha',max_length=210)
    slug=models.SlugField(unique=True)
    category=models.ForeignKey(Category,on_delete=models.CASCADE,related_name='posts')
    body=models.TextField('Tavsif')
    image=models.ImageField(upload_to='images/image',blank=True,null=True)
    created_at=models.DateTimeField('Yaratilgan sanasi',auto_now_add=True)
    updated_at=models.DateTimeField('Taxrirlangan sanasi',auto_now=True)
    author=models.CharField('muallifi',max_length=120,default='islom ochilov')
    status=models.CharField(max_length=2,choices=Status.choices,default=Status.Published)
    views=models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name='Yangilik'
        verbose_name_plural="Yangiliklar"


    def __str__(self):
        return self.title






class Boglanish(models.Model):
    name=models.CharField('Ismi',max_length=120)
    email=models.EmailField('email')
    message=models.TextField('xabar')
    created_at=models.DateTimeField(auto_now_add=True)



    class Meta:
        verbose_name="Bog'lanish"
        verbose_name_plural="Bog'lanish"

    def __str__(self):
        return self.name


