from django.contrib import admin
from django import forms
from django.utils.text import slugify
from unfold.admin import ModelAdmin
from unfold.widgets import UnfoldAdminTextareaWidget, UnfoldAdminTextInputWidget

from .models import Service


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


def _localized_list(value, locale):
    if isinstance(value, dict):
        items = value.get(locale) or value.get('fa') or []
    else:
        items = value or []
    return items if isinstance(items, list) else []


def _join_lines(items):
    return '\n'.join(str(item).strip() for item in items if str(item).strip())


def _split_lines(value):
    lines = str(value or '').replace(',', '\n').splitlines()
    return [line.strip() for line in lines if line.strip()]


def _sections_to_text(items):
    lines = []
    for item in items:
        if not isinstance(item, dict):
            continue
        title = str(item.get('title') or '').strip()
        body = str(item.get('body') or '').strip()
        if title or body:
            lines.append(f'{title} | {body}' if title and body else title or body)
    return '\n'.join(lines)


def _text_to_sections(value):
    sections = []
    for line in str(value or '').splitlines():
        line = line.strip()
        if not line:
            continue
        title, separator, body = line.partition('|')
        sections.append({
            'title': title.strip(),
            'body': body.strip() if separator else '',
        })
    return sections


class ServiceAdminForm(forms.ModelForm):
    title_fa = forms.CharField(label='عنوان فارسی', widget=UnfoldAdminTextInputWidget)
    title_en = forms.CharField(label='عنوان انگلیسی', required=False, widget=UnfoldAdminTextInputWidget)
    title_ar = forms.CharField(label='عنوان عربی', required=False, widget=UnfoldAdminTextInputWidget)
    summary_fa = forms.CharField(label='خلاصه فارسی', required=False, widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 2}))
    summary_en = forms.CharField(label='خلاصه انگلیسی', required=False, widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 2}))
    summary_ar = forms.CharField(label='خلاصه عربی', required=False, widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 2}))
    description_fa = forms.CharField(label='توضیحات فارسی', widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 5}))
    description_en = forms.CharField(label='توضیحات انگلیسی', required=False, widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 5}))
    description_ar = forms.CharField(label='توضیحات عربی', required=False, widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 5}))
    tags_fa = forms.CharField(label='برچسب‌های فارسی', required=False, help_text='هر برچسب را در یک خط بنویسید.', widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 3}))
    tags_en = forms.CharField(label='برچسب‌های انگلیسی', required=False, help_text='هر برچسب را در یک خط بنویسید.', widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 3}))
    tags_ar = forms.CharField(label='برچسب‌های عربی', required=False, help_text='هر برچسب را در یک خط بنویسید.', widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 3}))
    sections_fa = forms.CharField(label='بخش‌های فارسی', required=False, help_text='هر بخش در یک خط: عنوان | متن', widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 5}))
    sections_en = forms.CharField(label='بخش‌های انگلیسی', required=False, help_text='Each line: title | body', widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 5}))
    sections_ar = forms.CharField(label='بخش‌های عربی', required=False, help_text='كل سطر: العنوان | النص', widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 5}))

    class Meta:
        model = Service
        fields = ['slug', 'icon_key', 'icon', 'image', 'highlight', 'is_active', 'order']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        instance = self.instance
        if not instance or not instance.pk:
            return

        for locale, _label in LANGUAGES:
            self.fields[f'title_{locale}'].initial = _localized_value(instance.title_i18n, locale, instance.title)
            self.fields[f'summary_{locale}'].initial = _localized_value(instance.summary_i18n, locale, instance.summary)
            self.fields[f'description_{locale}'].initial = _localized_value(instance.description_i18n, locale, instance.description)
            self.fields[f'tags_{locale}'].initial = _join_lines(_localized_list(instance.tags, locale))
            self.fields[f'sections_{locale}'].initial = _sections_to_text(_localized_list(instance.sections, locale))

    def save(self, commit=True):
        obj = super().save(commit=False)
        title_fa = self.cleaned_data['title_fa']
        summary_fa = self.cleaned_data.get('summary_fa', '')
        description_fa = self.cleaned_data['description_fa']

        obj.title = title_fa
        obj.summary = summary_fa
        obj.description = description_fa
        obj.title_i18n = {locale: self.cleaned_data.get(f'title_{locale}', '') for locale, _label in LANGUAGES}
        obj.summary_i18n = {locale: self.cleaned_data.get(f'summary_{locale}', '') for locale, _label in LANGUAGES}
        obj.description_i18n = {locale: self.cleaned_data.get(f'description_{locale}', '') for locale, _label in LANGUAGES}
        obj.tags = {locale: _split_lines(self.cleaned_data.get(f'tags_{locale}', '')) for locale, _label in LANGUAGES}
        obj.sections = {locale: _text_to_sections(self.cleaned_data.get(f'sections_{locale}', '')) for locale, _label in LANGUAGES}

        if not obj.slug:
            obj.slug = slugify(title_fa, allow_unicode=True)

        if commit:
            obj.save()
            self.save_m2m()
        return obj


@admin.register(Service)
class ServiceAdmin(ModelAdmin):
    form = ServiceAdminForm
    list_display = ['title', 'is_active', 'order', 'created_at']
    list_editable = ['is_active', 'order']
    search_fields = ['title', 'description']
    list_filter = ['is_active']
    fieldsets = (
        ('اطلاعات اصلی', {
            'fields': ('slug', 'icon_key', 'icon', 'image', 'highlight', 'is_active', 'order'),
        }),
        ('فارسی', {
            'fields': ('title_fa', 'summary_fa', 'description_fa', 'tags_fa', 'sections_fa'),
        }),
        ('English', {
            'fields': ('title_en', 'summary_en', 'description_en', 'tags_en', 'sections_en'),
        }),
        ('العربية', {
            'fields': ('title_ar', 'summary_ar', 'description_ar', 'tags_ar', 'sections_ar'),
        }),
    )
