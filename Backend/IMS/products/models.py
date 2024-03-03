from django.db import models

# Create your models here.
class Products(models.Model):
    name = models.CharField(max_length=255)
    quantity = models.IntegerField()
    # description = models.TextField()
    # product_id = models.IntegerField()
    # location = models.TextField()
    # favourites = models.BooleanField()
    # access_level = models.CharField(max_length=255)