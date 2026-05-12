from django.contrib import admin

from .models import Service


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title', 'icon_name', 'is_active', 'highlight', 'order']
    list_editable = ['is_active', 'highlight', 'order']
    search_fields = ['title', 'title_en']
    prepopulated_fields = {'slug': ('title',)}
    list_filter = ['is_active', 'highlight']

    fieldsets = [
        ('اطلاعات پایه', {
            'fields': ['slug', 'icon_name', 'highlight', 'is_active', 'order'],
        }),
        ('محتوا به فارسی', {
            'fields': ['title', 'summary', 'description', 'tags', 'sections'],
        }),
        ('محتوا به انگلیسی', {
            'fields': ['title_en', 'summary_en', 'description_en', 'tags_en', 'sections_en'],
            'classes': ['collapse'],
        }),
        ('محتوا به عربی', {
            'fields': ['title_ar', 'summary_ar', 'description_ar', 'tags_ar', 'sections_ar'],
            'classes': ['collapse'],
        }),
    ]
