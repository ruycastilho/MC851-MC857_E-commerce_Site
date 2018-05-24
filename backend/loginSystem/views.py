from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from django.http import HttpResponse
from django.http import JsonResponse

# Django Login system
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User

# Permitir requisoces do Postman
from django.views.decorators.csrf import csrf_exempt

from . import models
from . import serializer
import requests

# Tag para permitir requisicoes do Postman
@csrf_exempt
def create_user_view(request):

    username = request.POST['username']
    email = request.POST['email']
    password = request.POST['password']
    user = User.objects.create_user('username, 'email, password)
    return JsonResponse({'Status':'Success'})

# Tag para permitir requisicoes do Postman
@csrf_exempt
def login_view(request):

    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({'Status':'Success'})
    else:
        return JsonResponse({'Status':'Invalid Login'})


# Tag para permitir requisicoes do Postman
@csrf_exempt
def logout_view(request):
    logout(request)
    eturn JsonResponse({'Status':'Logged out'})
