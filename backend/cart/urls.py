from django.urls import path

from . import views

urlpatterns = [
    path('add_product/', views.add_product, name='add_product'),
    path('update_product/', views.update_product, name='update_product'),
    path('remove_product/', views.remove_product, name='remove_product'),
    path('show_cart/', views.show_cart, name='show_cart')
]