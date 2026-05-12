from rest_framework import serializers

from .models import Subsidiary


class SubsidiaryLocaleSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    tagline = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()

    class Meta:
        model = Subsidiary
        fields = ['slug', 'monogram', 'theme', 'name', 'tagline', 'description', 'website', 'order']

    def _lang(self):
        return self.context.get('lang', 'fa')

    def get_name(self, obj):
        lang = self._lang()
        if lang == 'en':
            return obj.name_en or obj.name
        if lang == 'ar':
            return obj.name_ar or obj.name
        return obj.name

    def get_tagline(self, obj):
        lang = self._lang()
        if lang == 'en':
            return obj.tagline_en or obj.tagline
        if lang == 'ar':
            return obj.tagline_ar or obj.tagline
        return obj.tagline

    def get_description(self, obj):
        lang = self._lang()
        if lang == 'en':
            return obj.description_en or obj.description
        if lang == 'ar':
            return obj.description_ar or obj.description
        return obj.description


class SubsidiaryAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subsidiary
        fields = '__all__'
