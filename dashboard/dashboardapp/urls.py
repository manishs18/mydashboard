from django.urls import path
from .views import InsightView

urlpatterns = [
    path('api/insights/', InsightView.as_view(), name='insight_view'),
]
