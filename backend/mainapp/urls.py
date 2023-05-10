from django.urls import path
from .views import index
from .views import *
from django.conf import settings
from django.conf.urls.static import static

#? 
urlpatterns = [
    path('', index, name='index'),
    path('products/', ProductList.as_view(), name='products'),
    path('partners/', PartnersList.as_view(), name='partners'),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)