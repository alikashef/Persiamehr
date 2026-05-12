from django.urls import path
from .views import (
    ContactMessageCreateView, ContactMessageListView, ContactMessageDetailView,
    ServiceRequestCreateView, ServiceRequestListView, ServiceRequestDetailView,
    ProductRequestCreateView, ProductRequestListView, ProductRequestDetailView,
)

urlpatterns = [
    path('contact/', ContactMessageCreateView.as_view(), name='contact-create'),
    path('contact/list/', ContactMessageListView.as_view(), name='contact-list'),
    path('contact/<int:pk>/', ContactMessageDetailView.as_view(), name='contact-detail'),

    path('service-requests/', ServiceRequestCreateView.as_view(), name='service-request-create'),
    path('service-requests/list/', ServiceRequestListView.as_view(), name='service-request-list'),
    path('service-requests/<int:pk>/', ServiceRequestDetailView.as_view(), name='service-request-detail'),

    path('product-requests/', ProductRequestCreateView.as_view(), name='product-request-create'),
    path('product-requests/list/', ProductRequestListView.as_view(), name='product-request-list'),
    path('product-requests/<int:pk>/', ProductRequestDetailView.as_view(), name='product-request-detail'),
]
