from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('', include('foods.urls')),
    path('', include('meals.urls')),
    path('', include('accounts.urls'))
]
