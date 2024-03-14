from django.contrib import admin
from products.models import User,Products
# Register your models here.

admin.site.register(Products)
admin.site.register(User)