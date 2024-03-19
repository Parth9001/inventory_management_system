# Generated by Django 5.0.3 on 2024-03-15 13:23

import products.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_remove_user_designation_remove_user_access_level'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='access_level',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='products',
            name='description',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='products',
            name='favourites',
            field=models.BooleanField(default=0),
        ),
        migrations.AddField(
            model_name='products',
            name='location',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='user',
            name='Designation',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='user',
            name='access_level',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='products',
            name='product_id',
            field=models.CharField(default=products.models.generate_id, editable=False, max_length=255),
        ),
    ]