# Generated by Django 5.0.3 on 2024-03-21 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_user_products_issued'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='user_name',
            new_name='username',
        ),
        migrations.RemoveField(
            model_name='user',
            name='user_id',
        ),
        migrations.AlterField(
            model_name='user',
            name='products_issued',
            field=models.ManyToManyField(default=list, to='products.products'),
        ),
    ]
