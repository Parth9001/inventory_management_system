from django.db import models
import uuid
# Create your models here.


def generate_id():
    length = 8
    unique_id = uuid.uuid4()
    return str(unique_id.hex)[:8]


class Products(models.Model):
    name = models.CharField(max_length=255)
    quantity = models.IntegerField()
    description = models.TextField(default='')
    product_id = models.CharField(max_length=255,default=generate_id, editable=False)
    location = models.TextField(default='')
    favourites = models.BooleanField(default=0)
    access_level = models.CharField(max_length=255,default='')
    def __str__(self) -> str:
        return self.name

class User(models.Model):
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    Designation = models.CharField(max_length=255,default='')
    access_level = models.CharField(max_length=255, default="Student")
    products_issued=models.ManyToManyField(Products, default=list)
    def __str__(self) -> str:
        return self.username
