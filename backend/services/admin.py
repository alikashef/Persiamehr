from django import forms
from django.contrib import admin
from django.utils.text import slugify
from unfold.admin import ModelAdmin
from unfold.widgets import UnfoldAdminTextareaWidget

from .models import Service


TEXTAREA_ATTRS = {
    'class': 'persiamehr-admin-textarea',
}


def _join_lines(items):
    if isinstance(items, dict):
        items = items.get('fa') or []
    return '\n'.join(str(item).strip() for item in (items or []) if str(item).strip())


def _split_lines(value):
    lines = str(value or '').replace(',', '\n').splitlines()
    return [line.strip() for line in lines if line.strip()]


def _sections_to_text(items):
    if isinstance(items, dict):
        items = items.get('fa') or []

    lines = []
    for item in items or []:
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
    tags_text = forms.CharField(
        label='برچسب‌ها',
        required=False,
        help_text='هر برچسب را در یک خط بنویسید.',
        widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 3}),
    )
    sections_text = forms.CharField(
        label='بخش‌ها',
        required=False,
        help_text='هر بخش در یک خط: عنوان | متن',
        widget=UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 5}),
    )

    class Meta:
        model = Service
        fields = [
            'title',
            'slug',
            'summary',
            'description',
            'icon_key',
            'icon',
            'image',
            'highlight',
            'is_active',
            'order',
        ]
        widgets = {
            'summary': UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 2}),
            'description': UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 5}),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        instance = self.instance
        if not instance or not instance.pk:
            return

        self.fields['tags_text'].initial = _join_lines(instance.tags)
        self.fields['sections_text'].initial = _sections_to_text(instance.sections)

    def save(self, commit=True):
        obj = super().save(commit=False)
        obj.tags = _split_lines(self.cleaned_data.get('tags_text', ''))
        obj.sections = _text_to_sections(self.cleaned_data.get('sections_text', ''))

        if not obj.slug:
            obj.slug = slugify(obj.title, allow_unicode=True)

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
            'fields': (
                'title',
                'slug',
                'summary',
                'description',
                'tags_text',
                'sections_text',
                'icon_key',
                'icon',
                'image',
                'highlight',
                'is_active',
                'order',
            ),
        }),
    )
