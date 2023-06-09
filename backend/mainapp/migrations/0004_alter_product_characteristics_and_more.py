# Generated by Django 4.2 on 2023-05-15 09:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0003_rename_imag1_product_image1'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='characteristics',
            field=models.TextField(blank=True, null=True, verbose_name='Characteristics'),
        ),
        migrations.AlterField(
            model_name='product',
            name='descripton',
            field=models.TextField(blank=True, null=True, verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='product',
            name='image2',
            field=models.ImageField(blank=True, null=True, upload_to='products', verbose_name='picture-2'),
        ),
        migrations.AlterField(
            model_name='product',
            name='os',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='OS'),
        ),
        migrations.AlterField(
            model_name='product',
            name='os_info',
            field=models.TextField(blank=True, null=True, verbose_name='OS info'),
        ),
    ]
