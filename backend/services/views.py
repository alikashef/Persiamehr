from rest_framework import viewsets, filters
from rest_framework.permissions import IsAdminUser, IsAuthenticatedOrReadOnly
from drf_spectacular.utils import extend_schema_view, extend_schema

from .models import Service
from .serializers import ServiceSerializer, ServiceAdminSerializer

WRITE_ACTIONS = ['create', 'update', 'partial_update', 'destroy']


@extend_schema_view(
    list=extend_schema(summary='لیست خدمات'),
    retrieve=extend_schema(summary='جزئیات خدمت'),
    create=extend_schema(summary='ایجاد خدمت'),
    update=extend_schema(summary='ویرایش خدمت'),
    partial_update=extend_schema(summary='ویرایش جزئی خدمت'),
    destroy=extend_schema(summary='حذف خدمت'),
)
class ServiceViewSet(viewsets.ModelViewSet):
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'description']
    ordering_fields = ['order', 'created_at']
    lookup_field = 'slug'

    def get_serializer_class(self):
        if self.action in WRITE_ACTIONS and self.request.user.is_staff:
            return ServiceAdminSerializer
        return ServiceSerializer

    def get_queryset(self):
        if self.request.user.is_staff:
            return Service.objects.all()
        return Service.objects.filter(is_active=True)

    def get_permissions(self):
        if self.action in WRITE_ACTIONS:
            return [IsAdminUser()]
        return [IsAuthenticatedOrReadOnly()]
