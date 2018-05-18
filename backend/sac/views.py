from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from django.http import HttpResponse

# Postman error
from django.views.decorators.csrf import csrf_exempt

from . import models
from . import serializer
import requests
import json

def format_json(response):
	body_unicode = response.body.decode('utf-8')
	return json.loads(body_unicode)

class TicketList(generics.ListCreateAPIView):
    queryset = models.Ticket.objects.all()
    serializer_class = serializer.SACSerializer

class DetailTicket(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Ticket.objects.all()
    serializer_class = serializer.SACSerializer

# Tag para o postman
@csrf_exempt
def add_ticket(request):
	# formatar a .json
	body = format_json(request)

	# debug
	# print(body)

	payload={
		'timestamp': body['timestamp'],
  		'sender'   : body['sender'],
  		'message'  : body['message']
	}

	# Trocar teste1 por um id nosso, cliente3 idem
	response = requests.post('http://centralatendimento-mc857.azurewebsites.net/tickets/teste1/cliente3', json=payload)
	
	# debug
	# print(response.text)
	# print(response.status_code)

	django_response = HttpResponse(
		content      = response.content,
		status       = response.status_code,
		content_type = response.headers['Content-Type']
		)

	# TODO: aqui tb teria uma implementacao do save do ticket no BE
	# 		ticket_id deve pegar o systemMessage do response do request
	models.Ticket.objects.create(ticket_description=body['message'], ticket_id=100)
	print(models.Ticket.objects.all())
	return django_response