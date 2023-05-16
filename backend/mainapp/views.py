from django.shortcuts import render
from rest_framework import generics, viewsets, permissions, status, views, mixins
from .models import *
from .serializers import *

# Create your views here.
def index(request):
    return render(request, 'index.html')


class ProductList(generics.ListAPIView):
    # permissions_classes = [permissions.IsAuthenticated]

    queryset = Product.objects.filter(is_published=True)
    serializer_class = ProductSerializer




class PartnersList(generics.ListAPIView):
    # permissions = [permissions.IsAuthenticated]

    queryset = Partners.objects.all()
    serializer_class = PartnersSerializer



class AdvertsList(generics.ListAPIView):
    # permissions = [permissions.IsAuthenticated]

    queryset = Adverts.objects.all()
    serializer_class = AdvertsSerializer