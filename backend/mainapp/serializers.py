from rest_framework import serializers
from .models import *


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            'id', 
            'name', 
            'image', 
            'characteristics', 
            'status', 
            'price'
            )