# Generated by Django 4.2 on 2023-05-20 22:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0010_partners_background_color_alter_adverts_image_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='WarrantyData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('series', models.CharField(max_length=255)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'WarrantyData',
                'verbose_name_plural': 'WarrantyData',
                'ordering': ['-created'],
            },
        ),
    ]