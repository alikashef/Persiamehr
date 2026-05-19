from rest_framework import serializers

from .models import Service


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = [
            'id',
            'title',
            'slug',
            'summary',
            'description',
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
