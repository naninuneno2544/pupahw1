# Generated by Django 3.2.9 on 2021-11-28 07:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('snippets', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='book',
            old_name='aurhor',
            new_name='author',
        ),
    ]
