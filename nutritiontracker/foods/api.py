from foods.models import Food
from rest_framework import viewsets, permissions
from .serializers import FoodSerializer

# Food ViewSet
class FoodViewSet(viewsets.ModelViewSet):
  queryset = Food.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = FoodSerializer