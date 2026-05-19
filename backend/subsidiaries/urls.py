from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DepartmentCategoryViewSet, SubsidiaryViewSet

router = DefaultRouter()
router.register('department-categories', DepartmentCategoryViewSet, basename='department-category')
router.register('subsidiaries', SubsidiaryViewSet, basename='subsidiary')

urlpatterns = [
    path('', include(router.urls)),
]
