from django.shortcuts import render
from rest_framework import generics, viewsets, permissions, status, views, mixins
from .models import *
from .serializers import *
from rest_framework.response import Response

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



class WarrantyList(generics.ListAPIView):
    # permissions = [permissions.IsAuthenticated]

    queryset = Warranty.objects.all()
    serializer_class = WarrantySerializer


    def post(self, request, *args, **kwargs):
        serializer = WarrantySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)