from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticatedOrReadOnly
from drf_spectacular.utils import extend_schema
from .models import SiteSettings
from .serializers import SiteSettingsSerializer


class SiteSettingsView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    @extend_schema(responses=SiteSettingsSerializer, summary='دریافت تنظیمات سایت')
    def get(self, request):
        settings = SiteSettings.load()
        serializer = SiteSettingsSerializer(settings)
        return Response(serializer.data)

    @extend_schema(request=SiteSettingsSerializer, responses=SiteSettingsSerializer, summary='به‌روزرسانی تنظیمات سایت')
    def patch(self, request):
        if not request.user.is_staff:
            return Response({'detail': 'دسترسی غیرمجاز.'}, status=403)
        settings = SiteSettings.load()
        serializer = SiteSettingsSerializer(settings, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
