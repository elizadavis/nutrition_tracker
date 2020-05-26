from django.db import models
from django.contrib.auth.models import User

class Meal(models.Model):
  name = models.CharField(max_length=100)
  servings = models.DecimalField(max_digits=5, decimal_places=2)
  calories = models.IntegerField()
  fat = models.IntegerField(default=0)
  protein = models.IntegerField(default=0)
  total_carbs = models.IntegerField(default=0)
  fiber = models.IntegerField(default=0)
  total_sugar = models.IntegerField(default=0)
  added_sugar = models.IntegerField(default=0)
  sodium = models.IntegerField(default=0)
  owner = models.ForeignKey(User, related_name='meals', on_delete=models.CASCADE, null=True)