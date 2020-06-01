from django.db import models
from django.contrib.auth.models import User
from datetime import datetime

class Meal(models.Model):
  name = models.CharField(max_length=100)
  servings = models.DecimalField(max_digits=5, decimal_places=2)
  calories = models.DecimalField(max_digits=5, decimal_places=2)
  fat = models.DecimalField(default=0, max_digits=5, decimal_places=2)
  protein = models.DecimalField(default=0, max_digits=5, decimal_places=2)
  total_carbs = models.DecimalField(default=0, max_digits=5, decimal_places=2)
  fiber = models.DecimalField(default=0, max_digits=5, decimal_places=2)
  total_sugar = models.DecimalField(default=0, max_digits=5, decimal_places=2)
  added_sugar = models.DecimalField(default=0, max_digits=5, decimal_places=2)
  sodium = models.DecimalField(default=0, max_digits=5, decimal_places=2)
  date_time = models.DateTimeField(default=datetime.now, blank=True)
  owner = models.ForeignKey(User, related_name='meals', on_delete=models.CASCADE, null=True)