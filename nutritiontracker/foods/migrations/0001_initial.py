# Generated by Django 3.0.6 on 2020-05-11 15:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Food',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('serving_size', models.DecimalField(decimal_places=2, max_digits=3)),
                ('serving_unit', models.CharField(max_length=100)),
                ('calories', models.IntegerField()),
                ('fat', models.IntegerField(default=0)),
                ('protein', models.IntegerField(default=0)),
                ('total_carbs', models.IntegerField(default=0)),
                ('fiber', models.IntegerField(default=0)),
                ('total_sugar', models.IntegerField(default=0)),
                ('added_sugar', models.IntegerField(default=0)),
                ('sodium', models.IntegerField(default=0)),
            ],
        ),
    ]
