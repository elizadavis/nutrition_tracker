from rest_framework import serializers
from foods.models import Food

# Food Serializer
class FoodSerializer(serializers.ModelSerializer):
  class Meta:
    model = Food
    fields = '__all__'