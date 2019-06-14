from django.conf.urls import url
from .views import (
    TicketCreateView,
    FiltroTickets,
    ListaTickets)

urlpatterns = [
    url(r'^tickets/crear/', TicketCreateView.as_view()),
    url(r'^tickets/lista/', ListaTickets.as_view()),
    url(r'^tickets/(?P<estado>.+)/$', FiltroTickets.as_view({'get': 'list'})),
]