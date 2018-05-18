from django.db import models

# Create your models here.
class Ticket(models.Model):
	# Adicionar as outras informacoes da tabela
	# i.e. nome, ID ticket, data, etc
    ticket_description = models.CharField(max_length=200)
    ticket_id   = models.IntegerField()

    def __str__(self):
        """A string representation of the model."""
        return str(self.ticket_id)