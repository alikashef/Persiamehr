from rest_framework import viewsets, filters
from rest_framework.permissions import IsAdminUser, IsAuthenticatedOrReadOnly
from drf_spectacular.utils import extend_schema_view, extend_schema

from .models import DepartmentCategory, Subsidiary
from .serializers import (
    DepartmentCategorySerializer,
    SubsidiarySerializer,
    SubsidiaryAdminSerializer,
)

WRITE_ACTIONS = ['create', 'update', 'partial_update', 'destroy']


class DepartmentCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = DepartmentCategorySerializer
    lookup_field = 'slug'
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'description']
    ordering_fields = ['order', 'title']

    def get_queryset(self):
        return DepartmentCategory.objects.filter(is_active=True).order_by('order', 'title')


@extend_schema_view(
    list=extend_schema(summary='لیست زیرمجموعه‌ها'),
    retrieve=extend_schema(summary='جزئیات زیرمجموعه'),
    create=extend_schema(summary='ایجاد زیرمجموعه'),
    update=extend_schema(summary='ویرایش زیرمجموعه'),
    partial_update=extend_schema(summary='ویرایش جزئی زیرمجموعه'),
    destroy=extend_schema(summary='حذف زیرمجموعه'),
)
class SubsidiaryViewSet(viewsets.ModelViewSet):
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'description']
    ordering_fields = ['order', 'created_at']
    lookup_field = 'slug'

    def get_serializer_class(self):
        if self.action in WRITE_ACTIONS and self.request.user.is_staff:
            return SubsidiaryAdminSerializer
        return SubsidiarySerializer

    def get_queryset(self):
        queryset = Subsidiary.objects.select_related('department_category')
        if self.request.user.is_staff:
            return queryset.all()
        return queryset.filter(is_active=True)

    def get_permissions(self):
        if self.action in WRITE_ACTIONS:
            return [IsAdminUser()]
        return [IsAuthenticatedOrReadOnly()]
