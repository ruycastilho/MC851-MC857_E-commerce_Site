from django.urls import path

from . import views

urlpatterns = [
    path('', views.TicketList.as_view()),
    path('<int:pk>/', views.DetailTicket.as_view()),
    path('add_ticket/', views.add_ticket, name='add_ticket')
]