from rest_framework import generics
from rest_framework.permissions import IsAdminUser, AllowAny
from drf_spectacular.utils import extend_schema
from .models import ContactMessage, ServiceRequest, ProductRequest
from .serializers import (
    ContactMessageSerializer, ContactMessageAdminSerializer,
    ServiceRequestSerializer, ServiceRequestAdminSerializer,
    ProductRequestSerializer, ProductRequestAdminSerializer,
)


@extend_schema(summary='ارسال پیام تماس با ما', tags=['تماس'])
class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [AllowAny]


@extend_schema(summary='لیست پیام‌های تماس (ادمین)', tags=['تماس'])
class ContactMessageListView(generics.ListAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageAdminSerializer
    permission_classes = [IsAdminUser]


@extend_schema(summary='جزئیات/ویرایش/حذف پیام تماس (ادمین)', tags=['تماس'])
class ContactMessageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageAdminSerializer
    permission_classes = [IsAdminUser]


@extend_schema(summary='ارسال درخواست خدمات', tags=['درخواست خدمات'])
class ServiceRequestCreateView(generics.CreateAPIView):
    queryset = ServiceRequest.objects.all()
    serializer_class = ServiceRequestSerializer
    permission_classes = [AllowAny]


@extend_schema(summary='لیست درخواست‌های خدمات (ادمین)', tags=['درخواست خدمات'])
class ServiceRequestListView(generics.ListAPIView):
    queryset = ServiceRequest.objects.all()
    serializer_class = ServiceRequestAdminSerializer
    permission_classes = [IsAdminUser]


@extend_schema(summary='جزئیات/ویرایش/حذف درخواست خدمات (ادمین)', tags=['درخواست خدمات'])
class ServiceRequestDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ServiceRequest.objects.all()
    serializer_class = ServiceRequestAdminSerializer
    permission_classes = [IsAdminUser]


@extend_schema(summary='ارسال درخواست محصول', tags=['درخواست محصول'])
class ProductRequestCreateView(generics.CreateAPIView):
    queryset = ProductRequest.objects.all()
    serializer_class = ProductRequestSerializer
    permission_classes = [AllowAny]


@extend_schema(summary='لیست درخواست‌های محصول (ادمین)', tags=['درخواست محصول'])
class ProductRequestListView(generics.ListAPIView):
    queryset = ProductRequest.objects.all()
    serializer_class = ProductRequestAdminSerializer
    permission_classes = [IsAdminUser]


@extend_schema(summary='جزئیات/ویرایش/حذف درخواست محصول (ادمین)', tags=['درخواست محصول'])
class ProductRequestDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProductRequest.objects.all()
    serializer_class = ProductRequestAdminSerializer
    permission_classes = [IsAdminUser]
