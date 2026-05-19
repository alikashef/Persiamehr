from rest_framework import serializers

from .models import DepartmentCategory, Subsidiary, SubsidiarySection


class DepartmentCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = DepartmentCategory
        fields = [
            'id',
            'title',
            'slug',
            'description',
            'is_active',
            'order',
        ]


class SubsidiarySectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubsidiarySection
        fields = ['title', 'body', 'order']


class SubsidiarySerializer(serializers.ModelSerializer):
    department_category = DepartmentCategorySerializer(read_only=True)
    sections = SubsidiarySectionSerializer(many=True, read_only=True)

    class Meta:
        model = Subsidiary
        fields = [
            'id',
            'department_category',
            'name',
            'slug',
            'monogram',
            'tagline',
            'description',
            'logo',
            'header_image',
            'website',
            'style',
            'is_active',
            'order',
            'sections',
        ]


class SubsidiaryAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subsidiary
        fields = '__all__'
