from rest_framework import serializers
from .models import ContactMessage, ServiceRequest, ProductRequest


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'full_name', 'email', 'phone', 'subject', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']


class ContactMessageAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'


class ServiceRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceRequest
        fields = ['id', 'full_name', 'company', 'email', 'phone', 'service_type', 'description', 'created_at']
        read_only_fields = ['id', 'created_at']


class ServiceRequestAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceRequest
        fields = '__all__'


class ProductRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductRequest
        fields = ['id', 'full_name', 'company', 'email', 'phone', 'product_name', 'quantity', 'description', 'created_at']
        read_only_fields = ['id', 'created_at']


class ProductRequestAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductRequest
        fields = '__all__'
