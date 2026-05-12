from django.contrib import admin
from .models import SiteSettings


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    fieldsets = (
        ('اطلاعات تماس', {
            'fields': ('address', 'phone', 'email'),
        }),
        ('درباره ما', {
            'fields': ('footer_about',),
        }),
        ('شبکه‌های اجتماعی', {
            'fields': ('instagram', 'telegram', 'linkedin', 'twitter', 'youtube', 'whatsapp'),
        }),
    )

    def has_add_permission(self, request):
        return not SiteSettings.objects.exists()

    def has_delete_permission(self, request, obj=None):
        return False
