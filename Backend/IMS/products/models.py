from django.db import models
import uuid
# Create your models here.


def generate_id():
    length = 8
    unique_id = uuid.uuid4()
    return str(unique_id.hex)[:8]

class User(models.Model):
    user_name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    Designation = models.CharField(max_length=255)
    access_level = models.CharField(max_length=255)
    user_id = models.CharField(max_length=255, unique=True)
    def __str__(self) -> str:
        return self.user_name

class Products(models.Model):
    name = models.CharField(max_length=255)
    quantity = models.IntegerField()
    description = models.TextField()
    product_id = models.CharField(max_length=255,default=generate_id, editable=False,unique=True)
    location = models.TextField()
    favourites = models.BooleanField()
    access_level = models.CharField(max_length=255)
    Issued_by = User.objects()
    def __str__(self) -> str:
        return self.name

