from django.db import models

# Create your models here.


class Product(models.Model):

    status_choices = {
        ('new', 'New'),
    }

    name = models.CharField(max_length=255)
    image1 = models.ImageField('picture-1', upload_to='images/products')
    image2 = models.ImageField('picture-2', upload_to='images/products', blank=True, null=True)
    character = models.TextField('Characteristics', blank=True, null=True)
    descripton = models.TextField('Description', blank=True, null=True)
    os = models.CharField('OS', max_length=255, blank=True, null=True)
    os_info = models.TextField('OS info', blank=True, null=True)
    status = models.CharField('Status', max_length=50, choices=status_choices, default='new')
    price = models.CharField('Price', max_length=255)
    is_published = models.BooleanField('Published', default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
        ordering = ['-created']


class Partners(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField('picture', upload_to='images/products')
    info = models.TextField('Description')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    

    class Meta:
        verbose_name = 'Partner'
        verbose_name_plural = 'Partners'
        ordering = ['-created']


class Adverts(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    image = models.ImageField('picture', upload_to='images/products')
    info = models.TextField('Description', blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.id}'
    

    class Meta:
        verbose_name = 'Advert'
        verbose_name_plural = 'Adverts'
        ordering = ['-created']



class Warranty(models.Model):
    series = models.CharField(max_length=255)
    talon = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    dealer = models.CharField(max_length=255)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Warranty'
        verbose_name_plural = 'Warranties'
        ordering = ['-created']


    def __str__(self) -> str:
        return f'{self.name}: {self.series} {self.talon}'