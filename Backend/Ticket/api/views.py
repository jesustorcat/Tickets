from rest_framework.generics import (
    CreateAPIView,
    ListAPIView )

from rest_framework import viewsets
from Ticket.models import Tickets
from .serializers import TicketSerializer

# CREAR REGISTRO DE TICKETS
class TicketCreateView(CreateAPIView):
    queryset = Tickets.objects.all()
    serializer_class = TicketSerializer

    
# OBTENER REGISTRO DE TICKETS POR ESTADO
class FiltroTickets(viewsets.ModelViewSet):
    serializer_class = TicketSerializer

    def get_queryset(self):
        queryset = Tickets.objects.all().order_by('FechaCreacion')

        estado = self.kwargs['estado']

        if estado is not None:
            queryset = Tickets.objects.filter(Estado__startswith=estado).order_by('FechaCreacion')
        return queryset

# MOSTRAR TODOS LOS REGISTROS ORDENADOS POR FECHA
class ListaTickets(ListAPIView):
    queryset = Tickets.objects.all().order_by('FechaCreacion')
    serializer_class = TicketSerializer
