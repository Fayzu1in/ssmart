from django.db import models

# Create your models here.


class Product(models.Model):

    status_choices = {
        ('new', 'New'),
    }

    name = models.CharField(max_length=255)
    image1 = models.ImageField('Картинка-1', upload_to='pictures/products')
    image2 = models.ImageField('Картинка-2', upload_to='pictures/products', blank=True, null=True)
    character = models.TextField('Характеристики', blank=True, null=True)
    descripton = models.TextField('Описание', blank=True, null=True)
    os = models.CharField('OS', max_length=255, blank=True, null=True)
    os_info = models.TextField('OS', blank=True, null=True)
    status = models.CharField('Статус', max_length=50, choices=status_choices, default='new')
    price = models.CharField('Цена', max_length=255)
    is_published = models.BooleanField('Опубликован', default=True)
    created = models.DateTimeField('Создан', auto_now_add=True)
    updated = models.DateTimeField('Изменен',auto_now=True)

    def __str__(self):
        return self.name
    

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'
        ordering = ['-created']


class Partners(models.Model):

    background_color_choices = {
        ('#ffffff', 'White'),
        ('#000000', 'Black'),
        ('grey', 'Grey'),
    }

    name = models.CharField('Имя',max_length=255)
    image = models.ImageField('Картинка', upload_to='pictures/products')
    info = models.TextField('Описание')
    background_color = models.CharField('Задний фон', max_length=255, choices=background_color_choices, blank=True, null=True, default='#ffffff')
    created = models.DateTimeField("Создан",auto_now_add=True)
    updated = models.DateTimeField("Изменен",auto_now=True)

    def __str__(self):
        return self.name
    

    class Meta:
        verbose_name = 'Партнер'
        verbose_name_plural = 'Партнеры'
        ordering = ['-created']


class Adverts(models.Model):
    name = models.CharField('Имя',max_length=255, blank=True, null=True)
    image = models.ImageField('Картинка', upload_to='pictures/products')
    info = models.TextField('Описание', blank=True, null=True)
    created = models.DateTimeField("Создан",auto_now_add=True)
    updated = models.DateTimeField("Изменен",auto_now=True)

    def __str__(self):
        return f'{self.id}'
    

    class Meta:
        verbose_name = 'Рекламный баннер'
        verbose_name_plural = 'Рекламный баннер'
        ordering = ['-created']



class Warranty(models.Model):
    series = models.CharField('Серия',max_length=255)
    talon = models.CharField('Талон',max_length=255)
    name = models.CharField("ФИО",max_length=255)
    phone = models.CharField("Номер",max_length=255)
    city = models.CharField("Город",max_length=255)
    dealer = models.CharField("Дилер",max_length=255)
    created = models.DateTimeField("Создан",auto_now_add=True)
    updated = models.DateTimeField("Изменен",auto_now=True)

    class Meta:
        verbose_name = 'Активированная гарантия'
        verbose_name_plural = 'Активированные гарантии'
        ordering = ['-created']


    def __str__(self) -> str:
        return f'{self.name}: {self.series} {self.talon}'
    

class WarrantyData(models.Model):
    series = models.CharField("Серия",max_length=255, unique=True)
    created = models.DateTimeField("Создан",auto_now_add=True)
    updated = models.DateTimeField("Изменен",auto_now=True)

    class Meta:
        verbose_name = 'База Серий'
        verbose_name_plural = 'База Серий'
        ordering = ['-created']


    def __str__(self) -> str:
        return f'{self.series}: {self.created}'
    



class DealerRequest(models.Model):

    sales_choices = (
        ('Розница', 'Розница'),
        ('Оптовые', 'Оптовые'),
    )

    name = models.CharField(("Наименование юридического лица"), max_length=255)
    inn = models.CharField(("ИНН"), max_length=255)
    city = models.CharField(("Город осуществления деятельности*"), max_length=100)
    shops = models.IntegerField(("Кол-во магазинов"))
    sales_type = models.CharField(("Тип продаж"), max_length=100, choices=sales_choices)
    text = models.TextField(("Доп. инфо"))
    created = models.DateTimeField(("Создан"), auto_now=False, auto_now_add=True)


    class Meta:
        verbose_name = ("DealerRequest")
        verbose_name_plural = ("DealerRequests")

    def __str__(self):
        return self.name

    # def get_absolute_url(self):
    #     return reverse("DealerRequest_detail", kwargs={"pk": self.pk})
