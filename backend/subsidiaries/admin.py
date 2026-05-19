from django import forms
from django.contrib import admin
from django.utils.text import slugify
from unfold.admin import ModelAdmin
from unfold.widgets import UnfoldAdminTextareaWidget

from .models import DepartmentCategory, Subsidiary


TEXTAREA_ATTRS = {
    'class': 'persiamehr-admin-textarea',
}


@admin.register(DepartmentCategory)
class DepartmentCategoryAdmin(ModelAdmin):
    list_display = ['title', 'slug', 'is_active', 'order', 'created_at']
    list_editable = ['is_active', 'order']
    search_fields = ['title', 'description']
    list_filter = ['is_active']
    prepopulated_fields = {'slug': ('title',)}


class SubsidiaryAdminForm(forms.ModelForm):
    class Meta:
        model = Subsidiary
        fields = [
            'name',
            'department_category',
            'slug',
            'monogram',
            'tagline',
            'description',
            'logo',
            'website',
            'style',
            'is_active',
            'order',
        ]
        widgets = {
            'tagline': UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 2}),
            'description': UnfoldAdminTextareaWidget(attrs={**TEXTAREA_ATTRS, 'rows': 5}),
        }

    def save(self, commit=True):
        obj = super().save(commit=False)

        if not obj.slug:
            obj.slug = slugify(obj.name, allow_unicode=True)

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
            'fields': (
                'name',
                'department_category',
                'slug',
                'monogram',
                'tagline',
                'description',
                'logo',
                'website',
                'style',
                'is_active',
                'order',
            ),
        }),
    )
