from django.contrib import admin

from .models import Subsidiary


@admin.register(Subsidiary)
class SubsidiaryAdmin(admin.ModelAdmin):
    list_display = ['name', 'monogram', 'theme', 'is_active', 'order']
    list_editable = ['is_active', 'order']
    search_fields = ['name', 'name_en']
    prepopulated_fields = {'slug': ('name',)}
    list_filter = ['is_active', 'theme']

    fieldsets = [
        ('اطلاعات پایه', {
            'fields': ['slug', 'monogram', 'theme', 'website', 'logo', 'is_active', 'order'],
        }),
        ('محتوا به فارسی', {
            'fields': ['name', 'tagline', 'description'],
        }),
        ('محتوا به انگلیسی', {
            'fields': ['name_en', 'tagline_en', 'description_en'],
            'classes': ['collapse'],
        }),
        ('محتوا به عربی', {
            'fields': ['name_ar', 'tagline_ar', 'description_ar'],
            'classes': ['collapse'],
        }),
    ]
