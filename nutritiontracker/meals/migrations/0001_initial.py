# Generated by Django 3.0.6 on 2020-05-21 15:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Meal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('servings', models.DecimalField(decimal_places=2, max_digits=5)),
                ('calories', models.IntegerField()),
                ('fat', models.IntegerField(default=0)),
                ('protein', models.IntegerField(default=0)),
                ('total_carbs', models.IntegerField(default=0)),
                ('fiber', models.IntegerField(default=0)),
                ('total_sugar', models.IntegerField(default=0)),
                ('added_sugar', models.IntegerField(default=0)),
                ('sodium', models.IntegerField(default=0)),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='meals', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]