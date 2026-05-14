from django.contrib import admin
from django import forms
from django.utils.text import slugify
from unfold.admin import ModelAdmin
from unfold.widgets import UnfoldAdminTextareaWidget, UnfoldAdminTextInputWidget

from .models import Subsidiary


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


class SubsidiaryAdminForm(forms.ModelForm):
    name_fa = forms.CharField(label='نام فارسی', widget=UnfoldAdminTextInputWidget)
    name_en_value = forms.CharField(label='نام انگلیسی', required=False, widget=UnfoldAdminTextInputWidget)
    name_ar = forms.CharField(label='نام عربی', required=False, widget=UnfoldAdminTextInputWidget)
    tagline_fa = forms.CharField(label='تگ‌لاین فارسی', required=False, widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 2}))
    tagline_en = forms.CharField(label='تگ‌لاین انگلیسی', required=False, widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 2}))
    tagline_ar = forms.CharField(label='تگ‌لاین عربی', required=False, widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 2}))
    description_fa = forms.CharField(label='توضیحات فارسی', widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 5}))
    description_en = forms.CharField(label='توضیحات انگلیسی', required=False, widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 5}))
    description_ar = forms.CharField(label='توضیحات عربی', required=False, widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 5}))

    class Meta:
        model = Subsidiary
        fields = ['slug', 'monogram', 'logo', 'website', 'style', 'is_active', 'order']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        instance = self.instance
        if not instance or not instance.pk:
            return

        self.fields['name_fa'].initial = _localized_value(instance.name_i18n, 'fa', instance.name)
        self.fields['name_en_value'].initial = _localized_value(instance.name_i18n, 'en', instance.name_en)
        self.fields['name_ar'].initial = _localized_value(instance.name_i18n, 'ar', instance.name)
        for locale, _label in LANGUAGES:
            self.fields[f'tagline_{locale}'].initial = _localized_value(instance.tagline, locale)
            self.fields[f'description_{locale}'].initial = _localized_value(instance.description_i18n, locale, instance.description)

    def save(self, commit=True):
        obj = super().save(commit=False)
        name_fa = self.cleaned_data['name_fa']
        name_en = self.cleaned_data.get('name_en_value', '')
        description_fa = self.cleaned_data['description_fa']

        obj.name = name_fa
        obj.name_en = name_en
        obj.name_i18n = {
            'fa': name_fa,
            'en': name_en,
            'ar': self.cleaned_data.get('name_ar', ''),
        }
        obj.description = description_fa
        obj.tagline = {locale: self.cleaned_data.get(f'tagline_{locale}', '') for locale, _label in LANGUAGES}
        obj.description_i18n = {locale: self.cleaned_data.get(f'description_{locale}', '') for locale, _label in LANGUAGES}

        if not obj.slug:
            obj.slug = slugify(name_en or name_fa, allow_unicode=True)

        if commit:
            obj.save()
            self.save_m2m()
        return obj


@admin.register(Subsidiary)
class SubsidiaryAdmin(ModelAdmin):
    form = SubsidiaryAdminForm
    list_display = ['name', 'website', 'is_active', 'order', 'created_at']
    list_editable = ['is_active', 'order']
    search_fields = ['name', 'description']
    list_filter = ['is_active']
    fieldsets = (
        ('اطلاعات اصلی', {
            'fields': ('slug', 'monogram', 'logo', 'website', 'style', 'is_active', 'order'),
        }),
        ('فارسی', {
            'fields': ('name_fa', 'tagline_fa', 'description_fa'),
        }),
        ('English', {
            'fields': ('name_en_value', 'tagline_en', 'description_en'),
        }),
        ('العربية', {
            'fields': ('name_ar', 'tagline_ar', 'description_ar'),
        }),
    )
