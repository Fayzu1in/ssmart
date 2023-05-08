from django.db import models

# Create your models here.


class Product(models.Model):

    status_choices = {
        ('new', 'New'),
    }

    name = models.CharField(max_length=255)
    image = models.ImageField('picture', upload_to='products')
    characteristics = models.TextField('Characteristics')
    status = models.CharField('Status', max_length=50, choices=status_choices, default='new')
    price = models.DecimalField('Price', max_digits=12, decimal_places=0)
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
    image = models.ImageField('picture', upload_to='products')
    info = models.TextField('Description')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    

    class Meta:
        verbose_name = 'Partner'
        verbose_name_plural = 'Partners'
        ordering = ['-created']