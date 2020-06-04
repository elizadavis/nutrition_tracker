from django.db import models
from django.contrib.auth.models import User

class Food(models.Model):
  name = models.CharField(max_length=100)
  serving_size = models.DecimalField(max_digits=5, decimal_places=2)
  serving_unit = models.CharField(max_length=100)
  calories = models.IntegerField()
  fat = models.IntegerField(default=0)
  protein = models.IntegerField(default=0)
  total_carbs = models.IntegerField(default=0)
  fiber = models.IntegerField(default=0)
  total_sugar = models.IntegerField(default=0)
  added_sugar = models.IntegerField(default=0)
  sodium = models.IntegerField(default=0)
  owner = models.ForeignKey(User, related_name='foods', on_delete=models.CASCADE, null=True)
  def __str__(self):
    return self.name
