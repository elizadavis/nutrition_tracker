# Generated by Django 3.0.6 on 2020-05-14 21:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('foods', '0002_auto_20200513_1338'),
    ]

    operations = [
        migrations.AddField(
            model_name='food',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='foods', to=settings.AUTH_USER_MODEL),
        ),
    ]
