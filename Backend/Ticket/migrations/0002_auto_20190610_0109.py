# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-06-10 01:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Ticket', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tickets',
            name='Estado',
            field=models.CharField(choices=[('AB', 'Abierto'), ('PE', 'Pendiente'), ('EP', 'En Proceso'), ('RE', 'Resuelto'), ('CE', 'Cerrado')], max_length=2),
        ),
    ]
