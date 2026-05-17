from rest_framework import serializers

from .models import Service


class ServiceLocaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = [
            'id',
            'title',
            'slug',
            'summary',
            'description',
            'title_i18n',
            'summary_i18n',
            'description_i18n',
            'tags',
            'sections',
            'icon_key',
            'highlight',
            'is_active',
            'order',
        ]


class ServiceAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
