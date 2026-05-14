from django.contrib import admin
from django.contrib.auth.admin import GroupAdmin as BaseGroupAdmin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group, User
from django import forms
from unfold.admin import ModelAdmin
from unfold.forms import AdminPasswordChangeForm, UserChangeForm, UserCreationForm
from unfold.widgets import UnfoldAdminTextareaWidget

from .models import SiteSettings


LANGUAGES = (
    ('fa', 'فارسی'),
    ('en', 'انگلیسی'),
    ('ar', 'عربی'),
)

TEXTAREA_ATTRS = {
    'class': 'persiamehr-admin-textarea',
}


def _localized_value(value, locale, fallback=''):
    if isinstance(value, dict):
        return value.get(locale) or value.get('fa') or fallback
    return fallback


class SiteSettingsAdminForm(forms.ModelForm):
    address_fa = forms.CharField(label='آدرس فارسی', required=False, widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 3}))
    address_en = forms.CharField(label='آدرس انگلیسی', required=False, widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 3}))
    address_ar = forms.CharField(label='آدرس عربی', required=False, widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 3}))
    footer_about_fa = forms.CharField(label='متن فوتر فارسی', required=False, widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 4}))
    footer_about_en = forms.CharField(label='متن فوتر انگلیسی', required=False, widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 4}))
    footer_about_ar = forms.CharField(label='متن فوتر عربی', required=False, widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 4}))

    class Meta:
        model = SiteSettings
        fields = ['phone', 'email', 'instagram', 'telegram', 'linkedin', 'twitter', 'youtube', 'whatsapp']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        instance = self.instance
        if not instance or not instance.pk:
            return

        for locale, _label in LANGUAGES:
            self.fields[f'address_{locale}'].initial = _localized_value(instance.address_i18n, locale, instance.address)
            self.fields[f'footer_about_{locale}'].initial = _localized_value(instance.footer_about_i18n, locale, instance.footer_about)

    def save(self, commit=True):
        obj = super().save(commit=False)
        address_fa = self.cleaned_data.get('address_fa', '')
        footer_about_fa = self.cleaned_data.get('footer_about_fa', '')

        obj.address = address_fa
        obj.footer_about = footer_about_fa
        obj.address_i18n = {locale: self.cleaned_data.get(f'address_{locale}', '') for locale, _label in LANGUAGES}
        obj.footer_about_i18n = {locale: self.cleaned_data.get(f'footer_about_{locale}', '') for locale, _label in LANGUAGES}

        if commit:
            obj.save()
            self.save_m2m()
        return obj


@admin.register(SiteSettings)
class SiteSettingsAdmin(ModelAdmin):
    form = SiteSettingsAdminForm
    fieldsets = (
        ('اطلاعات تماس', {
            'fields': ('phone', 'email'),
        }),
        ('فارسی', {
            'fields': ('address_fa', 'footer_about_fa'),
        }),
        ('English', {
            'fields': ('address_en', 'footer_about_en'),
        }),
        ('العربية', {
            'fields': ('address_ar', 'footer_about_ar'),
        }),
        ('شبکه‌های اجتماعی', {
            'fields': ('instagram', 'telegram', 'linkedin', 'twitter', 'youtube', 'whatsapp'),
        }),
    )

    def has_add_permission(self, request):
        return not SiteSettings.objects.exists()

    def has_delete_permission(self, request, obj=None):
        return False


admin.site.unregister(User)
admin.site.unregister(Group)


@admin.register(User)
class UserAdmin(BaseUserAdmin, ModelAdmin):
    form = UserChangeForm
    add_form = UserCreationForm
    change_password_form = AdminPasswordChangeForm


@admin.register(Group)
class GroupAdmin(BaseGroupAdmin, ModelAdmin):
    pass
