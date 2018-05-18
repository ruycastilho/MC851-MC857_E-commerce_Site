from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from django.http import HttpResponse

from . import models
from . import serializer
import requests
import json

class TicketList(generics.ListCreateAPIView):
    queryset = models.Ticket.objects.all()
    serializer_class = serializer.SACSerializer

class DetailTicket(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Ticket.objects.all()
    serializer_class = serializer.SACSerializer

def add_ticket(request):
	# request.body deveria mostrar o payload
	print(request.body)

	# hard coded
	payload={
		'timestamp': '2018-05-18T02:57',
  		'sender': 'sample string 3',
  		'message': 'sample string 4'
	}
	response = requests.post('http://centralatendimento-mc857.azurewebsites.net/tickets/bafecfbf93a5ecf25ca8c6ca19d46ea3bffdee0c/cliente1', json=payload)
	# print(response.text)
	django_response = HttpResponse(
		content      = response.content,
		status       = response.status_code,
		content_type = response.headers['Content-Type']
		)
	return django_response