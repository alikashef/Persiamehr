from django.contrib import admin
from .models import Subsidiary


@admin.register(Subsidiary)
class SubsidiaryAdmin(admin.ModelAdmin):
    list_display = ['name', 'website', 'is_active', 'order', 'created_at']
    list_editable = ['is_active', 'order']
    search_fields = ['name', 'description']
    prepopulated_fields = {'slug': ('name',)}
    list_filter = ['is_active']
