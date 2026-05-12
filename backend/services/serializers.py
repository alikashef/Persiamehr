from rest_framework import serializers

from .models import Service


class ServiceLocaleSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    summary = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()
    tags = serializers.SerializerMethodField()
    sections = serializers.SerializerMethodField()

    class Meta:
        model = Service
        fields = ['slug', 'icon_name', 'title', 'summary', 'description', 'tags', 'sections', 'highlight', 'order']

    def _lang(self):
        return self.context.get('lang', 'fa')

    def get_title(self, obj):
        lang = self._lang()
        if lang == 'en':
            return obj.title_en or obj.title
        if lang == 'ar':
            return obj.title_ar or obj.title
        return obj.title

    def get_summary(self, obj):
        lang = self._lang()
        if lang == 'en':
            return obj.summary_en or obj.summary
        if lang == 'ar':
            return obj.summary_ar or obj.summary
        return obj.summary

    def get_description(self, obj):
        lang = self._lang()
        if lang == 'en':
            return obj.description_en or obj.description
        if lang == 'ar':
            return obj.description_ar or obj.description
        return obj.description

    def get_tags(self, obj):
        lang = self._lang()
        if lang == 'en':
            return obj.tags_en or obj.tags
        if lang == 'ar':
            return obj.tags_ar or obj.tags
        return obj.tags

    def get_sections(self, obj):
        lang = self._lang()
        if lang == 'en':
            return obj.sections_en or obj.sections
        if lang == 'ar':
            return obj.sections_ar or obj.sections
        return obj.sections


class ServiceAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
