from django.db import models
import uuid,datetime
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
    def __str__(self) -> str:
        return self.username
    
class ProductLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    issue_datetime = models.DateTimeField(default=datetime.datetime.now)