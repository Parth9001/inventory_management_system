# Generated by Django 5.0.2 on 2024-03-11 18:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_user_products_product_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='Designation',
        ),
        migrations.RemoveField(
            model_name='user',
            name='access_level',
        ),
    ]
