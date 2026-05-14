from django.contrib import admin
from unfold.admin import ModelAdmin

from .models import ContactMessage, ServiceRequest, ProductRequest


@admin.register(ContactMessage)
class ContactMessageAdmin(ModelAdmin):
    list_display = ['full_name', 'email', 'phone', 'subject', 'is_read', 'created_at']
    list_editable = ['is_read']
    list_filter = ['is_read', 'created_at']
    search_fields = ['full_name', 'email', 'subject', 'message']
    readonly_fields = ['full_name', 'email', 'phone', 'subject', 'message', 'created_at']

    def has_add_permission(self, request):
        return False


@admin.register(ServiceRequest)
class ServiceRequestAdmin(ModelAdmin):
    list_display = ['full_name', 'company', 'phone', 'service_type', 'is_read', 'created_at']
    list_editable = ['is_read']
    list_filter = ['is_read', 'created_at']
    search_fields = ['full_name', 'email', 'company', 'service_type']
    readonly_fields = ['full_name', 'company', 'email', 'phone', 'service_type', 'description', 'created_at']

    def has_add_permission(self, request):
        return False


@admin.register(ProductRequest)
class ProductRequestAdmin(ModelAdmin):
    list_display = ['full_name', 'company', 'phone', 'product_name', 'quantity', 'is_read', 'created_at']
    list_editable = ['is_read']
    list_filter = ['is_read', 'created_at']
    search_fields = ['full_name', 'email', 'company', 'product_name']
    readonly_fields = ['full_name', 'company', 'email', 'phone', 'product_name', 'quantity', 'description', 'created_at']

    def has_add_permission(self, request):
        return False
