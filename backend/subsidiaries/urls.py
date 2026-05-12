from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SubsidiaryViewSet

router = DefaultRouter()
router.register('subsidiaries', SubsidiaryViewSet, basename='subsidiary')

urlpatterns = [
    path('', include(router.urls)),
]
