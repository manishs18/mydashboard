from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Insight
from .serializers import InsightSerializer

class InsightView(APIView):
    def get(self, request):
        filters = {}
        year = request.GET.get('year')
        topics = request.GET.get('topic')
        sector = request.GET.get('sector')
        region = request.GET.get('region')
        source = request.GET.get('source')
        pestle = request.GET.get('pestle')

        if year:
            filters['year'] = year
        if topics:
            filters['topic'] = topics
        if sector:
            filters['sector'] = sector
        if region:
            filters['region'] = region
        if source:
            filters['source'] = source
        if pestle:
            filters['pestle'] = pestle

        insights = Insight.objects.filter(**filters)
        serializer = InsightSerializer(insights, many=True)
        return Response(serializer.data)
