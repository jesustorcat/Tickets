from rest_framework import serializers
from Ticket.models import Tickets

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tickets
        fields = '__all__'