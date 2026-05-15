from rest_framework import viewsets, filters
from rest_framework.permissions import IsAdminUser, IsAuthenticatedOrReadOnly
from drf_spectacular.utils import extend_schema_view, extend_schema

from .models import Subsidiary
from .serializers import SubsidiaryLocaleSerializer, SubsidiaryAdminSerializer

WRITE_ACTIONS = ['create', 'update', 'partial_update', 'destroy']


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
    search_fields = ['name', 'name_en', 'description']
    ordering_fields = ['order', 'created_at']
    lookup_field = 'slug'

    def get_serializer_class(self):
        if self.action in WRITE_ACTIONS and self.request.user.is_staff:
            return SubsidiaryAdminSerializer
        return SubsidiaryLocaleSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['lang'] = self.request.query_params.get('lang', 'fa')
        return context

    def get_queryset(self):
        if self.request.user.is_staff:
            return Subsidiary.objects.all()
        return Subsidiary.objects.filter(is_active=True)

    def get_permissions(self):
        if self.action in WRITE_ACTIONS:
            return [IsAdminUser()]
        return [IsAuthenticatedOrReadOnly()]
