from foods.models import Food
from rest_framework import viewsets, permissions
from .serializers import FoodSerializer

# Food ViewSet
class FoodViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.IsAuthenticated
  ]

  serializer_class = FoodSerializer

  def get_queryset(self):
    return self.request.user.foods.all()

  def perform_create(self, serializer):
    serializer.save(owner=self.request.user)
