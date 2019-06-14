from django.db import models

# Create your models here.

class Tickets(models.Model):
    Titulo = models.CharField(max_length = 30)
    Descripcion = models.CharField(max_length = 300)
    
    TipoEstados = ((
        ('AB','Abierto'),
        ('PE','Pendiente'),
        ('EP','En Proceso'),
        ('RE','Resuelto'),
        ('CE','Cerrado')
    ))
    
    Estado = models.CharField(max_length = 2, choices = TipoEstados)
    FechaCreacion = models.DateField(auto_now_add = True, editable = False)

    def __str__(self):
        return self.Titulo

    class Meta:
        db_table = 'Tickets'
