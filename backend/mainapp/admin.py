from django.contrib import admin
from .models import *
# Register your models here.


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'status', 'price', 'created', 'updated')



@admin.register(Partners)
class PartnersAdmin(admin.ModelAdmin):
    list_display = ('name', 'created', 'updated')

