from djongo import models

class Insight(models.Model):
    country = models.CharField(max_length=100)
    year = models.IntegerField()
    intensity = models.FloatField()
    likelihood = models.FloatField()
    relevance = models.FloatField()
    sector = models.CharField(max_length=100)
    topic = models.CharField(max_length=100)
    region = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    source = models.CharField(max_length=100)
    pestle = models.CharField(max_length=100)
    added = models.DateTimeField()
    published = models.DateTimeField()
    insight = models.TextField()
    url = models.URLField()

    class Meta:
        verbose_name_plural = 'Insights'
