from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from django.http import HttpResponse

# Permitir requisoces do Postman
from django.views.decorators.csrf import csrf_exempt

from . import models
from . import serializer
import requests
import json

# Variavel global do site
site_id = '5b62f6bdbe9c399036412701aa662a7dc572100e'

def format_json(request):
	body_unicode = request.body.decode('utf-8')
	return json.loads(body_unicode)

class TicketList(generics.ListCreateAPIView):
    queryset = models.Ticket.objects.all()
    serializer_class = serializer.SACSerializer

class DetailTicket(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Ticket.objects.all()
    serializer_class = serializer.SACSerializer

# Tag para permitir requisicoes do Postman
@csrf_exempt
def add_ticket(request):
	body = format_json(request)

	# debug
	# print(body['sender'])

	payload={
		'timestamp': body['timestamp'],
  		'sender'   : body['sender'],
  		'message'  : body['message']
	}

	# TODO: mudar o cliente3 para vir do request e nao mais hard-coded.
	response = requests.post('http://centralatendimento-mc857.azurewebsites.net/tickets/%s/%s' %(site_id, body['sender']), json=payload)
	
	# debug
	# print(response.text)
	# print(response.status_code)

	django_response = HttpResponse(
		content      = response.content,
		status       = response.status_code,
		content_type = response.headers['Content-Type']
		)
	
	# Save no BD
	# TODO: incluir userID no ticket
	ticket_id=(json.loads(response.text))['systemMessage']
	models.Ticket.objects.create(ticket_description=body['message'], ticket_id=ticket_id)
	return django_response