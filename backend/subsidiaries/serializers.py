from rest_framework import serializers

from .models import Subsidiary


class SubsidiaryLocaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subsidiary
        fields = [
            'id',
            'name',
            'slug',
            'name_en',
            'name_i18n',
            'monogram',
            'tagline',
            'description',
            'description_i18n',
            'website',
            'style',
            'is_active',
            'order',
        ]


class SubsidiaryAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subsidiary
        fields = '__all__'
