from rest_framework import serializers
from .models import *


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            'id', 
            'name', 
            'image1',
            'image2',
            'character', 
            'descripton',
            'os',
            'os_info',
            'status', 
            'price'
            )
        



class PartnersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partners
        fields = (
            'id', 
            'name', 
            'image', 
            'info'
            )
        


class AdvertsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adverts
        fields = (
            'id', 
            'name', 
            'image', 
            'info'
            )
        


class WarrantySerializer(serializers.ModelSerializer):
    class Meta:
        model = Warranty
        fields = (
            'id', 
            'name', 
            'series', 
            'talon', 
            'phone', 
            'city', 
            'dealer'
            )
        


class WarrantyDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = WarrantyData
        fields = (
            'id', 
            'series'
            )